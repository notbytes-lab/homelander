const container = document.getElementById('spreadsheet');
const hot = new Handsontable(container, {
    data: [],
    rowHeaders: true,
    colHeaders: true,
    startRows: 5,
    startCols: 5,
});

function formatData() {
    const inputData = document.getElementById('inputData').value;
    
    // Pisahkan data menjadi beberapa baris
    const rows = inputData.split('\n');
    
    // Proses setiap baris dan pisahkan elemen berdasarkan koma dan titik
    const formattedData = rows.map(row => row.split(/[.]+/));

    // Masukkan data yang sudah diformat ke dalam spreadsheet
    hot.loadData(formattedData);
}
