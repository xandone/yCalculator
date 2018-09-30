window.onload = function() {
    var btn1, btn2;
    var rec1, rec2;
    var timer;
    var pics;
    var cur = 0;
    var len = 0;
    btn1 = document.getElementById('btn1');
    btn2 = document.getElementById('btn2');
    rec1 = document.getElementById('rec-1');
    rec2 = document.getElementById('rec-2');

    btn1.onclick = function() {
        this.style.background = '#80cfbb';
        btn2.style.background = '#23ab88';

        rec1.className = 'music-show';
        rec2.className = 'music-hide';
    }

    btn2.onclick = function() {
        this.style.background = '#80cfbb';
        btn1.style.background = '#23ab88';

        rec1.className = 'music-hide';
        rec2.className = 'music-show';
    }

    pics = document.getElementById('music-left-slide').getElementsByTagName('img');
    len = pics.length;
    timer = setInterval(autoplay, 2000);

    function autoplay() {
        console.log(cur);
        cur++;
        if (cur > len - 1) {
            cur = 0;
        }
        for (var i = 0; i < len; i++) {
            pics[i].className = 'pichide';
        }

        pics[cur].className = 'picshow';

    }
}