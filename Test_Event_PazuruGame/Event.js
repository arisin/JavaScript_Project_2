/*//////////////////
* クリックイベントのテスト
//////////////////*/

onload = function(){
	main();
};

function main(){
	//画面のサイズを取得
	var w = window.innerWidth;
	var h = window.innerHeight;		
	
	//canvasタグを生成
	var body = document.body;
	var canvas = document.createElement('canvas');
	
	//canvasにスタイルを適用
	canvas.style.width = w + "px";
	canvas.setAttribute("width",w);
	canvas.style.height = h +"px";
	canvas.setAttribute("height", h);
	
	body.appendChild(canvas);

	if ( ! canvas || ! canvas.getContext ) { return false; }
	var ctx = canvas.getContext('2d');
	
	window.addEventListener(function(){
		
	});
	
	console.log("横"+w,"縦"+h);
}