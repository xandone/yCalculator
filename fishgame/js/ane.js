var aneObj = function() {
    this.x = [];
    this.len = [];
}

aneObj.prototype.num = 50;

aneObj.prototype.init = function() {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = 16 * i + Math.random() * 20;
        this.len[i] = 200 + Math.random() * 50;
    }

}

aneObj.prototype.drawAne = function() {
    ctx1.save();
    for (var i = 0; i < this.num; i++) {
        ctx1.beginPath();
        ctx1.moveTo(this.x[i], bgHeight);
        ctx1.lineTo(this.x[i], bgHeight - this.len[i]);
        ctx1.lineWidth = 20;
        ctx1.globalAlpha=0.6;
        ctx1.lineCap = 'round';
        ctx1.strokeStyle = "#3b154e"
        ctx1.stroke();
    }

    ctx1.restore();
}