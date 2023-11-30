1. 数据格式两种：aoa(ArrayOfArray:二维数组)、aoo(ArrayOfObject:对象数组)

```
var ws = XLSX.utils.aoa_to_sheet(aoa, opts); //二维数组转ws
XLSX.utils.sheet_add_aoa(ws, aoa, opts); //ws编辑二维数组

var ws = XLSX.utils.json_to_sheet(aoo, opts);//数组对象转ws
XLSX.utils.sheet_add_json(ws, aoo, opts); //ws编辑对象数组
```

2. [cellObj](https://docs.sheetjs.com/docs/csf/cell)->[sheetObj](https://docs.sheetjs.com/docs/csf/sheet)->[workBookObj](https://docs.sheetjs.com/docs/csf/book)

常用属性
```
cellObj:{
    t:Type类型,'n':number,'s':string
    v:Value值
    s:Style样式
}

sheetObj:{
    !ref:[start:end]其中start为开始cell位置，位置用col:row表示(col为大写英文字母A-Z，row为数字1-9),
    !merge:[{ s: { r: 0, c: 2 }, e: { r: 1, c: 2 } },...]其中，s代表开始位置，e代表结束位置
}
```

3.