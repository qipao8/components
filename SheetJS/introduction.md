1. 数据格式两种：aoa(ArrayOfArray:二维数组)、aoo(ArrayOfObject:对象数组)

```
var ws = XLSX.utils.aoa_to_sheet(aoa, opts); //二维数组转ws
XLSX.utils.sheet_add_aoa(ws, aoa, opts); //ws编辑二维数组

var ws = XLSX.utils.json_to_sheet(aoo, opts);//数组对象转ws
XLSX.utils.sheet_add_json(ws, aoo, opts); //ws编辑对象数组
```
