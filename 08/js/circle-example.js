// 원의 넓이 구하기
function area(r) {
  return Math.PI * r * r;
}

// 원의 둘레 구하기
function circum(r) {
  return 2 * Math.PI * r;
}

const result = document.querySelector("#result"); 
const radius = prompt("반지름의 크기는?");

// 반올림 하지 않았을 때
// result.innerText = `
//     반지름 : ${radius},
//     원의 넓이 : ${area(radius)},
//     원의 둘레 : ${circum(radius)}
//     `;

// 소수점 이하 셋째 자리까지 표시.
result.innerText = `
    반지름 : ${radius},
    원의 넓이 : ${area(radius).toFixed(3)},
    원의 둘레 : ${circum(radius).toFixed(3)}
    `;