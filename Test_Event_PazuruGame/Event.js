/*//////////////////
* �N���b�N�C�x���g�̃e�X�g
//////////////////*/

onload = function(){
	main();
};

function main(){
	//��ʂ̃T�C�Y���擾
	var w = window.innerWidth;
	var h = window.innerHeight;		
	
	//canvas�^�O�𐶐�
	var body = document.body;
	var canvas = document.createElement('canvas');
	
	//canvas�ɃX�^�C����K�p
	canvas.style.width = w + "px";
	canvas.setAttribute("width",w);
	canvas.style.height = h +"px";
	canvas.setAttribute("height", h);
	
	body.appendChild(canvas);

	if ( ! canvas || ! canvas.getContext ) { return false; }
	var ctx = canvas.getContext('2d');
	
	window.addEventListener(function(){
		
	});
	
	console.log("��"+w,"�c"+h);
}