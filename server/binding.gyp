{
  "targets": [
    {
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
        "MatrixLib/src"
      ],
      "target_name": "addon",
      "sources": [ "main.cpp" ],
      "libraries": [ "<(module_root_dir)/MatrixLib/bin/libmatrix.a" ]
    }
  ]
}