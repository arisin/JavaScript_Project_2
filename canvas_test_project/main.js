var onload = function() {
  draw1();
  draw2();
  draw3();
};

//�~��`��
//*
function draw1() {
  var body = document.body;
  var canvas = document.createElement('canvas');
  body.appendChild(canvas);
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(70, 70, 60, 0, Math.PI*2, false);
  ctx.stroke();
}
//*/
//�~�ʂ�`��
//*
function draw2() {
  var body = document.body;
  var canvas = document.createElement('canvas');
  body.appendChild(canvas);  
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(70, 70, 60, 10 * Math.PI / 180, 80 * Math.PI / 180, true);
  ctx.stroke();
}
//*/
//�~�ʂ�h��Ԃ�
function draw3(){
	var body = document.body;
	var canvas = document.createElement('canvas');
	body.appendChild(canvas);
	if ( ! canvas || ! canvas.getContext ) { return false; }
	  var ctx = canvas.getContext('2d');
	  ctx.beginPath();
	  ctx.arc(70, 70, 60, 10 * Math.PI / 180, 80 * Math.PI / 180, true);
	  ctx.fill();
}