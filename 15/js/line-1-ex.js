//10.캔버스로 그래픽 요소 다루기
//15-1.다양한 그래픽 스타일 지정하기
//15-1-6.텍스트 선과 관련된 스타일 속성 살펴보기
//15-1-6-2-1.선의 굵기와 끝 모양 지정하기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineCap = ['butt', 'round', 'square'];

ctx.strokeStyle = '#222';
for(let i = 0; i < lineCap.length; i++) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[i];
  ctx.beginPath();
  ctx.moveTo(50, 50 + i * 30); // 시작 위치
  ctx.lineTo(350, 50 + i * 30); // 끝 위치
  ctx.stroke();
}