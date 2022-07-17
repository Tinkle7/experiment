// function jobapply(){}
// let jobarr = JSON.parse(localStorage.getItem("jobList"));
let joblist = localStorage.getItem("jobList");
let jobarr = joblist === null ? [] : JSON.parse(joblist);
// let jobarr = JSON.parse(joblist) || [];

let jobapply = () => {
  event.preventDefault();
  let jobobj = {
    name: form.name.value,
    email: form.email.value,
    Role: form.role.value,
    salary: form.salary.value,
  };
  jobarr.push(jobobj);
  // console.log(jobarr);
  localStorage.setItem("jobList", JSON.stringify(jobarr));
};

document.querySelector("form").addEventListener("submit", jobapply);
