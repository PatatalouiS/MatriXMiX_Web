
#include <nan.h>
#include <sstream>
#include <Matrix.h>
#include <iostream>

using namespace std;
using namespace v8;

// ------------ v8 --> CPP and CPP --> v8 conversion methods ------------- //

Local<Value> complexToJs(const complex<double>& n) {
    Local<Context> context = Nan::New<Context>();
    if(n.imag() == 0.0) {
        Local<Value> val = Nan::New(n.real());
        return val;
    }
    else {
        Local<Object> obj = Nan::New<Object>();
   
        (void) obj->Set(context,
                    Nan::New("re").ToLocalChecked(),
                    Nan::New(n.real()));

        (void) obj->Set(context, 
                    Nan::New("im").ToLocalChecked(),
                    Nan::New(n.imag()));

        return obj;
    }
}

Local<Array> matrixToJs(const Matrix& m) {
    Local<Context> context = Nan::New<Context>();
    Local<Array> arr = Nan::New<Array>();
    unsigned int nbCols = m.getNbCols();
    unsigned int nbRows = m.getNbRows();

    for(unsigned int i = 0; i < nbRows; ++i) {
        Local<Array> line = Nan::New<Array>();

        for(unsigned int j = 0; j < nbCols; ++j) {
            
            line->Set(context, 
                j, 
                Local<Value>(complexToJs(m[i][j])));
        }

        (void) arr->Set(context,
                    i,
                    line);
    }
    return arr;
}

complex<double> complexToCpp(Local<Value>& comp) {
    Local<Context> context = Nan::New<Context>();

    if(comp->IsArray()) {
        cerr << "Matrix Error : expected : Number or Object !" << endl;
        exit(EXIT_FAILURE);
    }
    else if(comp->IsNumber()) {
        return complex<double>(comp->NumberValue(context).FromJust());
    }
    else if(comp->IsObject()) {
        Local<Object> compJs = comp->ToObject(context).ToLocalChecked();
        Local<Value> keyRe = Nan::New("re").ToLocalChecked();
        Local<Value> keyIm = Nan::New("im").ToLocalChecked();
 
        double re = compJs->Get(context, keyRe).ToLocalChecked()->NumberValue(context).FromJust();
        double im = compJs->Get(context, keyIm).ToLocalChecked()->NumberValue(context).FromJust();

        return complex<double>(re, im);
    }
    else {
        cerr << "Matrix Error : expected : Number or Object !" << endl;
        exit(EXIT_FAILURE);
    }
}

Matrix matrixToCpp(Local<Array>& arr) {
    Local<Context> context = Nan::New<Context>();
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

// ---------------------- Test methods -------------------- //

NAN_METHOD(isDiagonalisable) {
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        bool resC = a.isDiagonalisableC();
        bool resR = a.isDiagonalisableR();
        info.GetReturnValue().Set(resC && resR);
    }
}

NAN_METHOD(isDiagonalisableR) {
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        bool resR = a.isDiagonalisableR();
        info.GetReturnValue().Set(resR);
    }
}

NAN_METHOD(isDiagonalisableC) {
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        bool resC = a.isDiagonalisableC();
        info.GetReturnValue().Set(resC);
    }
}

NAN_METHOD(isLU) {
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        bool res = a.isSQMatrix() && a.isPositiveDefinite();
        info.GetReturnValue().Set(res);
    }
}

NAN_METHOD(isCholesky) {
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        bool res = a.isSQMatrix() && a.isPositiveDefinite() && a.isSymetric();
        info.GetReturnValue().Set(res);
    }
}

// ------------------ Compute Methods ------------------------ //

NAN_METHOD(diagonalise) {
    v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        Matrix t1, diag, t2;
        a.allMatrix(t1, diag, t2);

        Local<Object> obj = Nan::New<Object>();

        obj->Set(context, 
            Nan::New("P").ToLocalChecked(),
            matrixToJs(t1));

        obj->Set(context, 
            Nan::New("D").ToLocalChecked(),
            matrixToJs(diag));
        
        obj->Set(context, 
            Nan::New("P^{-1}").ToLocalChecked(),
            matrixToJs(t2));

        info.GetReturnValue().Set(obj);
    }
}

NAN_METHOD(LU) {
    v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        auto [ L, U ] = a.LUDecomposition();

        Local<Object> obj = Nan::New<Object>();

        obj->Set(context, 
            Nan::New("L").ToLocalChecked(),
            matrixToJs(L));

        obj->Set(context, 
            Nan::New("U").ToLocalChecked(),
            matrixToJs(U));

        info.GetReturnValue().Set(obj);
    }
}

NAN_METHOD(QR) {
    v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        auto [ Q, R ] = a.QR_Householder();

        Local<Object> obj = Nan::New<Object>();

        obj->Set(context, 
            Nan::New("Q").ToLocalChecked(),
            matrixToJs(Q));

        obj->Set(context, 
            Nan::New("R").ToLocalChecked(),
            matrixToJs(R));

        info.GetReturnValue().Set(obj);
    } 
}

NAN_METHOD(cholesky) {
    v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        auto [ L, Lt ] = a.cholesky();

        Local<Object> obj = Nan::New<Object>();

        obj->Set(context, 
            Nan::New("L").ToLocalChecked(),
            matrixToJs(L));

        obj->Set(context, 
            Nan::New("L^T").ToLocalChecked(),
            matrixToJs(Lt));

        info.GetReturnValue().Set(obj);
    } 
}

NAN_METHOD(RRF) {
    v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        Matrix result = a.gaussReduction();

        info.GetReturnValue().Set(matrixToJs(result));
    } 
}

NAN_METHOD(dims) {
    v8::Local<v8::Context> context = info.GetIsolate()->GetCurrentContext();
    if(info[0]->IsArray()) {
        Local<Array> array = Local<Array>::Cast(info[0]);
        Matrix a = matrixToCpp(array);
        auto result = a.dimensionsStudy();

        Local<Object> obj = Nan::New<Object>();

        obj->Set(context, 
            Nan::New("dimIm").ToLocalChecked(),
            Nan::New(result.first));

        obj->Set(context, 
            Nan::New("dimKer").ToLocalChecked(),
            Nan::New(result.second));

        info.GetReturnValue().Set(obj);
    } 
}

NAN_MODULE_INIT(Initialize) {
    NAN_EXPORT(target, isDiagonalisable);
    NAN_EXPORT(target, isDiagonalisableR);
    NAN_EXPORT(target, isDiagonalisableC);
    NAN_EXPORT(target, isLU);
    NAN_EXPORT(target, isCholesky);

    NAN_EXPORT(target, diagonalise);
    NAN_EXPORT(target, LU);
    NAN_EXPORT(target, QR);
    NAN_EXPORT(target, cholesky);
    NAN_EXPORT(target, RRF);
    NAN_EXPORT(target, dims);
}

NODE_MODULE(MatriXMiX, Initialize);
