window.addEventListener('keydown', function(e) {
    console.log(e.key + '的keyCode为：' + e.keyCode);
    // 常量，必须初始化，不可修改
    const audio = document.querySelector(`.audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const keys = document.querySelectorAll('.key');
    key.classList.add('play');
    keys.forEach(key => {
        return key.addEventListener('transitionend', removeTransition);
    });

    function removeTransition(e) {
        if (e.propertyName !== 'transform') {
            return false;
        }
        this.classList.remove('play');
    }
});