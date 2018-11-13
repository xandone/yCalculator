var momObj = function() {
    this.x;
    this.y;
    this.bigeye;
    this.bigbody;
    this.bigtail;
}

momObj.prototype.init = function() {
    this.x = 0 + bgWidth / 2;
    this.y = 0 + bgHeight / 2;
    this.bigeye = new Image();
    this.bigbody = new Image();
    this.bigtail = new Image();

    this.bigeye.src = './imgs/bigEye0.png';
    this.bigbody.src = './imgs/big.png';
    this.bigtail.src = './imgs/bigTail0.png';

}

momObj.prototype.drawMom = function() {

    this.x = lerp(mouseX, this.x, 0.9);
    this.y = lerp(mouseY, this.y, 0.9);

    ctx2.save();
    ctx2.translate(this.x, this.y);
    ctx2.drawImage(this.bigeye, -this.bigeye.width * 0.5, -this.bigeye.height * 0.5);
    ctx2.drawImage(this.bigbody, -this.bigbody.width * 0.5, -this.bigbody.height * 0.5);
    ctx2.drawImage(this.bigtail, -this.bigtail.width * 0.5 + 28, -this.bigtail.height * 0.5);
    ctx2.restore();
}