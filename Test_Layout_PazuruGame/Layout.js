/*//////////////////
* ���C�A�E�g�̃e�X�g
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
	
	//Image�I�u�W�F�N�g�𐶐�
	var img = new Image();
	img.src = "img/main-1.svg?"+ new Date().getTime();
//	body.appendChild(img);
	//�摜��`�� ��삪�ǂݍ��܂��̂�҂�
	img.onload = function() {
		ctx.drawImage(img, 0, 0, w, h);
	};
	console.log("��"+w,"�c"+h);
}