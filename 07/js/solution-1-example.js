//my code
const userName = document.querySelector("#username");
const userMajor = document.querySelector("#major");
const button = document.querySelector("form > button");

button.addEventListener("click", e => {
  e.preventDefault();
  const newTr = document.createElement("tr");
  const nameTd = document.createElement("td");
  const majorTd = document.createElement("td");
  nameTd.innerText = userName.value;
  majorTd.innerText = userMajor.value;
  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);
  const tbody = document.querySelector("#attendant > tbody");
  tbody.appendChild(newTr);
  userName.value = "";
  userMajor.value = "";
});

/* solution
const username = document.querySelector("#username");
const major = document.querySelector("#major");
const bttn = document.querySelector("form > button");

bttn.addEventListener("click", (e) => {
  e.preventDefault();
  let tbody = document.querySelector("#attendant > tbody");
  let newTr = document.createElement("tr");  

  // 첫번째 셀에 입력한 이름 넣기
  let nameTd = document.createElement("td");
  nameTd.innerText = username.value;
  username.value = "";
  
  // 두번째 셀에 입력한 전공 넣기
  let majorTd = document.createElement("td");  
  majorTd.innerText = major.value;  
  major.value = "";

  // 두 셀을 새 줄에 추가하기
  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);

  // 새 줄을 tbody에 추가하기
  tbody.appendChild(newTr);
});
*/