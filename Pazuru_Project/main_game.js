//javascript
//メイン
function main_game(){
}

//アイテム 種
function item_seed(){
}

//アイテム 家
function item_home(){
	this.seed_Lv = 0;
}
item_home.prototype = new item_seed();

//アイテム 円柱
function item_cyilnder(){}
item_cyilnder.prototype = new item_seed();

//アイテム フラスコ
function item_flask(){}
item_flask.prototype = new item_seed();

//アイテム 皿
function item_dish(){}
item_dish.prototype = new item_seeed();

//アイテム 耳
function item_rabbitear(){}
item_rabbitear.prototype = new item_seed();

//アイテム ロケット
function item_rocet(){}
item_rocet.prototype = new item_seed();

//アイテム 円錐
function item_cone(){}
item_cone.prototype = new item_seed(); 

//全体の進行の％表示
function item_progress(){
}