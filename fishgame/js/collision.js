function coll() {
    for (var i = 0; i < food.num; i++) {
        if (food.isLive[i]) {
            var dis = calDistance(food.x[i], food.y[i], mom.x, mom.y);
            console.log(dis);
            if (dis < 900) {
                food.dead(i);
            }
        }

    }
}