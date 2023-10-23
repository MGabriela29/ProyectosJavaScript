const lienzo =document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.fillStyle='gray';
ctx.beginPath();
ctx.arc(340,70,50,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='white';
ctx.stroke();

ctx.beginPath();
ctx.fillStyle='rgb(93, 95, 97)';
ctx.arc(320,80,10,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgb(93, 95, 97)';
ctx.arc(329,70,10,0,Math.PI*2);
ctx.arc(329,80,10,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgb(93, 95, 97)';
ctx.arc(360,40,10,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgb(93, 95, 97)';
ctx.arc(360,105,10,0,Math.PI*2);
ctx.fill();

ctx.fillStyle='rgb(105, 15, 15)';
ctx.fillRect(0,360,800,400);


ctx.beginPath();
ctx.moveTo(8, 250);
ctx.quadraticCurveTo(50, 90, 120, 250);
ctx.fillStyle = 'rgb(83, 78, 78)';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(8, 250);
ctx.quadraticCurveTo(53, 105, 61, 250);
ctx.fillStyle = 'gray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(119, 250);
ctx.quadraticCurveTo(60, 123, 88, 250);
ctx.fillStyle = 'gray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(8, 250);
ctx.quadraticCurveTo(50, 200, 60, 250);
ctx.fillStyle = 'rgb(10, 10, 197)';//a
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90, 250);
ctx.quadraticCurveTo(70, 200, 120, 250);
ctx.fillStyle = 'rgb(10, 10, 197)';//a
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(60, 250);
ctx.quadraticCurveTo(70, 200, 90, 250);
ctx.fillStyle = 'rgb(10, 10, 197)';//a
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.arc(142,199,40,0,Math.PI*2);
ctx.fillStyle = 'gray';
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.moveTo(165,250);
ctx.quadraticCurveTo(230, 100, 275, 240);
ctx.fillStyle = 'rgb(83, 78, 78)';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(165,250);
ctx.quadraticCurveTo(228, 120, 200, 250);
ctx.fillStyle = 'gray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(275,240);
ctx.quadraticCurveTo(230, 120, 239, 250);
ctx.fillStyle = 'gray';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 250);
ctx.quadraticCurveTo(240, 200, 275, 240);
ctx.fillStyle = 'rgb(10, 10, 197)';//a
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 250);
ctx.quadraticCurveTo(220, 200, 200, 250);
ctx.fillStyle = 'rgb(10, 10, 197)';//a
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.moveTo(200, 250);
ctx.quadraticCurveTo(200, 200, 165, 250);
ctx.fillStyle = 'rgb(10, 10, 197)';//a
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle='rgb(83, 78, 78)';
ctx.ellipse(142,230,38,27,80,0, Math.PI*2);
ctx.fill();
ctx.stroke();

//ctx.beginPath();
//ctx.fillStyle='blue';
//ctx.ellipse(140,110,50,51,80,4, Math.PI*2);
//ctx.fill();
//ctx.stroke();

//ctx.beginPath();
//ctx.fillStyle='blue';
//ctx.ellipse(180,80,70,71,80,5, Math.PI*2);
//ctx.fill();

ctx.beginPath();
ctx.arc(142,199,39,0,Math.PI*2);
ctx.fillStyle = 'gray';
ctx.fill();


ctx.beginPath();
ctx.moveTo(112,148);
ctx.stroke();
ctx.lineTo(109,177);
ctx.stroke();
ctx.lineTo(142,159);
ctx.fillStyle = 'gray';
ctx.fill();

ctx.beginPath();
ctx.moveTo(115,155);
ctx.lineTo(113,177);
ctx.lineTo(135,162);
ctx.fillStyle = 'pink';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(180,149);
ctx.stroke();
ctx.lineTo(178,181);
ctx.stroke();
ctx.lineTo(150,160);
ctx.fillStyle = 'gray';
ctx.fill();

ctx.beginPath();
ctx.moveTo(176,155);
ctx.stroke();
ctx.lineTo(175,176);
ctx.lineTo(159,160);
ctx.fillStyle = 'pink';
ctx.fill();
ctx.stroke();

ctx.beginPath();
//ctx.fillStyle='rgb(83, 78, 78)';
ctx.fillStyle='gray';
ctx.ellipse(130,268,12,4,96,0, Math.PI*2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
//ctx.fillStyle='rgb(83, 78, 78)';
ctx.fillStyle='gray';
ctx.ellipse(157,268,12,4,58,0, Math.PI*2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(128,196,13,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='black';
ctx.arc(128,196,10,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(133,190,5,0,Math.PI*2);
ctx.fill();ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(126,198,3,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(158,196,13,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='black';
ctx.arc(158,196,10,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(163,190,5,0,Math.PI*2);
ctx.fill();ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(158,198,3,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.moveTo(128, 213);
ctx.quadraticCurveTo(142, 239, 157, 213);
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(138,222);
ctx.stroke();
ctx.lineTo(139,213);
ctx.lineTo(133,213);
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(147,222);
ctx.stroke();
ctx.lineTo(152,213);
ctx.lineTo(146,213);
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();