let form = document.querySelector("form").addEventListener("submit", getData);

let detailArr = JSON.parse(localStorage.getItem("list")) || [];

console.log(detailArr);

function getData(event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let result = false;

  detailArr.forEach((ele) => {
    if (ele.email1 === email && ele.password1 === password) {
      result = true;
    }
  });

  if (result) {
    alert("Successfully Login");
    window.location.href = "home.html";
  } else {
    alert("Incorrect Details");
  }
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
}
