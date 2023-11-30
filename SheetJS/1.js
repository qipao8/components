export function test() {
    var objArr = [
        { a1: 1, a2: 2, a3: 3, a4: 4, b: 5 }
    ];
    
    var wsObj = XLSX.utils.json_to_sheet(objArr, { header: ["a1", "a2", "a3", "a4", "b"] });
    var wbObj = XLSX.utils.book_new();
    
    console.log(wsObj)

    // 将工作表添加到工作簿
    XLSX.utils.book_append_sheet(wbObj, wsObj, "Sheet1");
    // XLSX.writeFile(wbObj, "Obj.xlsx", { compression: true, bookType: "xlsx" });

    let arr=new Array(50).fill(0).map((v,i)=>'a'+i)
    var arrArr = [
        arr
    ];

    /* write data with using data headers */
    var wsArr = XLSX.utils.aoa_to_sheet(arrArr);

    console.log(wsArr);
    
    var wbArr = XLSX.utils.book_new();
    
    // 将工作表添加到工作簿
    XLSX.utils.book_append_sheet(wbArr, wsArr, "Sheet1");
    // XLSX.writeFile(wbArr, "Arr.xlsx", { compression: true, bookType: "xlsx" });
}