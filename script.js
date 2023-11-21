function insert_Row() {
    //Write your code here
  const rowCreate = document.createElement("tr");
  for (let i = 1; i <= 2; i++) {
    const cellCreate = document.createElement("td");
    cellCreate.innerText = "New Cell"+i;
    rowCreate.appendChild(cellCreate);
  }
  const parent = document.getElementById("sampleTable");
  const nxtSibling = document.querySelector("#sampleTable > tbody");
  parent.insertBefore(rowCreate, nxtSibling);
  
}
