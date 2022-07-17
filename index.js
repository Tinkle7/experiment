let form = document.querySelector("form").addEventListener("submit", getData);

let detailArr = JSON.parse(localStorage.getItem("list")) || [];

function getData(event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;
  let password = document.querySelector("#password").value;
  let detailObj = {
    email1: email,
    number1: number,
    password1: password,
  };
  detailArr.push(detailObj);
  localStorage.setItem("list", JSON.stringify(detailArr));
  console.log(detailArr);

  document.querySelector("#email").value = "";
  document.querySelector("#number").value = "";
  document.querySelector("#password").value = "";
}
