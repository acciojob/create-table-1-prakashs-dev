function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable");
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
  console.log(table);
  
}
