window.onload = function() {
    var download;
    var downImg;
    var headAccount;
    var myAccount;
    var timer;
    download = document.getElementById('download');
    downImg = document.getElementById('header-right').getElementsByTagName('img')[0];
    headAccount = document.getElementById('head-account');
    myAccount = document.getElementById('my-account');

    download.addEventListener('mouseover', function() {
        downImg.style.display = 'block';
    }, false);
    download.addEventListener('mouseout', function() {
        downImg.style.display = 'none';
    }, false);

    headAccount.onmouseover = function() {
        myAccount.style.display = 'block';
    }
    headAccount.onmouseout = function() {
        timer = setTimeout(function() {
            myAccount.style.display = 'none';
        }, 500);
    }


    myAccount.onmouseover = function() {
        clearTimeout(timer);
        myAccount.style.display = 'block';

    };
    myAccount.onmouseout = function() {
        myAccount.style.display = 'none';
    };


}