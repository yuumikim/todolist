const nameInput = document.getElementById("name-input");
const nameInputP = document.getElementById("name-input-p");
const nameForm = document.getElementById("name-form");
const greeting = document.getElementById("greeting");
function formName(e) {
  e.preventDefault();
  const userName = nameInput.value;
  localStorage.setItem("name", userName);
  // console.log(localStorage.setItem("name"));
  showgreeting(userName);
  nameForm.classList.add("hidden");
}

function showgreeting(userName) {
  greeting.innerText = userName + "님,안녕하세요!";
  greeting.classList.remove("hidden");
}
const savedUserName = localStorage.getItem("name");

if (savedUserName === null) {
  nameForm.classList.remove("hidden");
} else {
  showgreeting(savedUserName);
}
nameForm.addEventListener("submit", formName);

// 날짜,시간구역
const dateArea = document.getElementById("date-area");

function justnow() {
  const now = new Date();
  const year = String(now.getFullYear()).padStart(2, "0");
  const month = String(now.getMonth()).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  dateArea.innerText = `${year} . ${month} . ${date}   _   ${hours} : ${minutes} : ${seconds}`;
}

setInterval(justnow, 1000);
justnow();
