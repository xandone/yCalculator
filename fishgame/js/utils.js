// aim: 目的地
// cur:当前位置
// ratio：比例
function lerp(aim, cur, ratio) {
    var delta = cur - aim;
    return aim + delta * ratio;
}