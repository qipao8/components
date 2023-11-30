import {test} from './1.js'

export function getCsvObjData() {
    /* original array of objects */
    var data = [
        { a1: 1, a2: 2, a3: 3, a4: 4, b: 5 }
    ];

    const tableH = [{ a1: "R²", a2: "", a3: "", a4: "", b: "" }, { a1: "A12", a2: "", a3: "A34", a4: "", b: "" }, { a1: "a1", a2: "a2", a3: "a3", a4: "a4", b: 'b' }]
    data = [...tableH.slice(1), ...data]

    var data_headers = ["a1", "a2", "a3", "a4", "b"];

    /* write data with using data headers */
    var ws = XLSX.utils.json_to_sheet(data, { header: data_headers });
    var wb = XLSX.utils.book_new();
    /* replace first row */

    XLSX.utils.sheet_add_json(ws, [
        tableH[0]
    ], { header: data_headers, skipHeader: true });

    // 合并单元格，例如合并A1到C1的单元格
    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }
    ];

    // 将工作表添加到工作簿
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // 将工作簿转换为 CSV 数据
    // return XLSX.utils.sheet_to_csv(ws);
    XLSX.writeFile(wb, "x.csv", { compression: true, bookType: "xlsx" });
}

export function getCsvArrayData() {
    /* original array of objects */
    var data = [
        ["A²", , "b"],
        ["a1", "a2", "b"],
        [1, 2, 3]
    ];

    /* write data with using data headers */
    var ws = XLSX.utils.aoa_to_sheet(data);
    var wb = XLSX.utils.book_new();
    /* replace first row */

    // 合并单元格，例如合并A1到C1的单元格
    // ws['!merges'] = [
    //     { s: { r: 0, c: 2 }, e: { r: 1, c: 2 } }, { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }
    // ];

    // 将工作表添加到工作簿
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // 将工作簿转换为 CSV 数据
    // return XLSX.utils.sheet_to_csv(ws);
    return XLSX.write(wb, { bookType: 'csv', type: 'array' });
}

export function use() {
    // var csvData = test()
    test()
    // 创建一个 Blob 对象以便下载
    var blob = new Blob([csvData], { type: "application/octet-stream" });

    // 创建一个链接以下载 CSV 文件
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "multilevel_data.xlsx";
    a.style.display = "none";
    document.body.appendChild(a);

    // 触发下载
    a.click();

    // 移除链接元素
    document.body.removeChild(a);
}