let appliedjobs = JSON.parse(localStorage.getItem("jobList")) || [];
let bookmarkArr = JSON.parse(localStorage.getItem("bookmarks")) || [];
displayTable(appliedjobs);

document.querySelector("#sortName").addEventListener("change", handleNameSort);

function handleNameSort() {
  let selected = document.querySelector("#sortName").value;

  if (selected == "ascending") {
    appliedjobs.sort(function (a, b) {
      let x = a.name.toUpperCase();
      let y = b.name.toUpperCase();
      if (x > y) return 1;
      if (x < y) return -1;
      return 0;
    });
    // console.log(appliedjobs);
    displayTable(appliedjobs);
  }
  if (selected == "decending") {
    appliedjobs.sort(function (a, b) {
      let x = a.name.toUpperCase();
      let y = b.name.toUpperCase();
      if (x > y) return -1;
      if (x < y) return 1;
      return 0;
    });
    // console.log(appliedjobs);
    displayTable(appliedjobs);
  }
}

document
  .querySelector("#sortSalary")
  .addEventListener("change", handleSalarySort);

function handleSalarySort() {
  let selected = document.querySelector("#sortSalary").value;

  if (selected == "high") {
    appliedjobs.sort(function (a, b) {
      let x = Number(a.salary);
      let y = Number(b.salary);
      return x - y;
    });
    // console.log(appliedjobs);
    displayTable(appliedjobs);
  }
  if (selected == "low") {
    appliedjobs.sort(function (a, b) {
      return b.salary - a.salary;
    });
    // console.log(appliedjobs);
    displayTable(appliedjobs);
  }
}

document.querySelector("#filter").addEventListener("change", handleFilter);

function handleFilter() {
  let selected = document.querySelector("#filter").value;

  let filterLsit = appliedjobs.filter(function (elem) {
    return elem.Role == selected;
  });
  // console.log(filterLsit);
  displayTable(filterLsit);
}
let boolmarkfunction = (e, i) => {
  // console.log(e);
  bookmarkArr.push(e);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkArr));
};

function displayTable(appliedjobs) {
  document.querySelector("tbody").innerHTML = "";
  appliedjobs.map(function (e, index) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = e.name;
    let td2 = document.createElement("td");
    td2.innerText = e.email;
    let td3 = document.createElement("td");
    td3.innerText = e.Role;
    let td4 = document.createElement("td");
    td4.innerText = e.salary;
    let td5 = document.createElement("td");
    td5.innerText = "Bookmark";
    td5.style.backgroundColor = "teal";

    td5.addEventListener("click", function () {
      boolmarkfunction(e, index);
    });

    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}
