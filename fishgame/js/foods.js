var foodObj = function() {
    this.x = [];
    this.y = [];
    this.isLive = [];
    this.foodPic = new Image();
    this.speed = [];
    this.len = [];
    this.max_len = 14;
}

foodObj.prototype.num = 30;

foodObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.isLive[i] = false;
        this.speed[i] = Math.random() * 0.007 + 0.003;
        this.len[i] = 0;
    }

    this.foodPic.src = './imgs/fruit.png';
}

foodObj.prototype.born = function(i) {
    var id = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[id];
    this.y[i] = bgHeight - ane.len[id];
    this.len[i] = 0;
    this.isLive[i] = true;
}

foodObj.prototype.drawFoods = function() {
    for (var i = 0; i < this.num; i++) {
        if (this.isLive[i]) {
            if (this.len[i] <= this.max_len) {
                this.len[i] += this.speed[i] * deltaTime;
            } else {
                this.y[i] -= this.speed[i] * deltaTime;
            }
            ctx1.drawImage(this.foodPic, this.x[i] - this.len[i] / 2, this.y[i] - this.len[i] / 2,
                this.len[i], this.len[i]);
            if (this.y[i] < this.max_len) {
                this.isLive[i] = false;
            }
        }
    }
}

foodObj.prototype.monitor = function() {

    var count = 0;
    for (var i = 0; i < this.num; i++) {
        if (this.isLive[i]) {
            count++;
        }
    }

    console.log("creatte..." + count);

    if (count < 15) {
        this.createFoods();
    }
}

foodObj.prototype.createFoods = function() {
    for (var i = 0; i < this.num; i++) {
        if (!this.isLive[i]) {
            this.born(i);
            return;
        }
    }

}