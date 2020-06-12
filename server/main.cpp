
#include <nan.h>
#include <sstream>
#include <Matrix.h>
#include <iostream>

using namespace std;
using namespace v8;

Matrix a(3, 3, Matrix::R);
Matrix b(3, 3, Matrix::R);

Local<Context> context = Nan::New<Context>();

Local<Object> complexToJs (const complex<double>& n) {
    Local<Object> obj = Nan::New<Object>();
   
    (void) obj->Set(context,
                Nan::New("real").ToLocalChecked(),
                Nan::New(n.real()));

    (void) obj->Set(context, 
                Nan::New("imag").ToLocalChecked(),
                Nan::New(n.imag()));
    return obj;
}

Local<Object> matrixToJs (const Matrix& m) {
    Local<Object> obj = Nan::New<Object>();

    (void) obj->Set(context, 
                Nan::New("rows").ToLocalChecked(),
                Nan::New(m.getNbRows()));

    (void) obj->Set(context,
                Nan::New("cols").ToLocalChecked(),
                Nan::New(m.getNbCols()));

    Local<Array> arr = Nan::New<Array>();

    for(int i = 0; i < 3; ++i) {
        Local<Array> line = Nan::New<Array>();

        for(int j = 0; j < 3; ++j) {
            (void) line->Set(context, 
                    j, 
                    complexToJs(m[i][j]));
        }

        (void) arr->Set(context,
                    i,
                    line);
    }

    (void) obj->Set(context, 
                Nan::New("values").ToLocalChecked(), 
                arr);

    return obj;
}

complex<double> complexToCpp(Local<Value>& comp) {
    if(comp->IsNumber()) {
        return complex<double>(comp->NumberValue(context).FromJust());
    }
    else if(comp->IsObject()) {
        Local<Object> compJs = comp->ToObject(context).ToLocalChecked();
        double re = compJs->Get(context, 're').ToLocalChecked()->NumberValue(context).FromJust();
        double im = compJs->Get(context, 'im').ToLocalChecked()->NumberValue(context).FromJust();
        return complex<double>(re, im);
    }
}

Matrix matrixToCpp(Local<Array>& arr) {
    vector<complex<double>> values;

    int nbL = arr->Length();
    int nbC = Local<Array>::Cast(arr->Get(context, 0).ToLocalChecked())->Length();

    for(unsigned int i = 0; i < nbL; ++i) {
        Local<Array> line = Local<Array>::Cast(arr->Get(context, i).ToLocalChecked());
        for(unsigned int j = 0; j < nbC; ++j) {
            Local<Value> valJs = line->Get(context, j).ToLocalChecked();
            values.push_back(complexToCpp(valJs));
        }
    } 

    return Matrix(nbL, nbC, values);
}



NAN_METHOD(Hello) {
    auto message = Nan::New("Hello from C++!").ToLocalChecked();
    info.GetReturnValue().Set(message);
}

NAN_METHOD(Test) {
    v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();

    //Nan::HandleScope scope;
    int result = 0;

    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);

        Local<Object> result = matrixToJs(matrixToCpp(array));
        
        info.GetReturnValue().Set(result);
    }

    
}


NAN_METHOD(Other) {
    info.GetReturnValue().Set(matrixToJs(a));
}

NAN_MODULE_INIT(Initialize) {
    NAN_EXPORT(target, Hello);
    NAN_EXPORT(target, Other);
    NAN_EXPORT(target, Test);
}

NODE_MODULE(addon, Initialize);
