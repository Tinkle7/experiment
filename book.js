let bookmarkData = JSON.parse(localStorage.getItem("bookmarks")) || [];

bookmarkData.map(function (e, index) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = e.name;
  let td2 = document.createElement("td");
  td2.innerText = e.email;
  let td3 = document.createElement("td");
  td3.innerText = e.Role;

  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
});
