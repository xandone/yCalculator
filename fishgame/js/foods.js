var foodObj = function() {
    this.x = [];
    this.y = [];
    this.isLive = [];
    this.foodPic = new Image();
    this.len = [];
}

foodObj.prototype.num = 30;

foodObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.isLive[i] = false;
        this.len[i] = 0;
    }

    this.foodPic.src = './imgs/fruit.png';
}

foodObj.prototype.born = function() {
    for (var i = 0; i < this.num; i++) {
        var id = Math.floor(Math.random() * ane.num);
        this.x[i] = ane.x[id];
        this.y[i] = bgHeight - ane.len[id];
    }
}

foodObj.prototype.drawFoods = function() {
    for (var i = 0; i < this.num; i++) {
        ctx1.drawImage(this.foodPic, this.x[i] - 6, this.y[i] - 6, 12, 12);
    }
}

foodObj.prototype.monitor = function() {

}