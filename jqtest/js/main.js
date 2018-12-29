$(function() {
    var jokeList = $('#joke-list');
    var demo = $('.banner a');
    var boxPoints = $('.banner-box li');
    var currentIndex = 0;

    var banner = $('#banner');
    var bannerImgs = $('#banner a');

    getjokeList();
    getBannerImgList();

    function getjokeList(page, count) {
        $.ajax({
            url: '/ycat/joke/list',
            type: 'GET',
            dataType: 'json',
            data: {
                page: 0,
                rows: 10
            },
            success: function(result) {
                createJokeList(result.rows);
            }
        });
    }

    function getBannerImgList(page, count) {
        $.ajax({
            url: '/ycat/headAticleList',
            type: 'GET',
            dataType: 'json',
            data: {
                page: 0,
                rows: 10
            },
            success: function(result) {
                createBanner(result.rows);
            }
        });
    }

    function createJokeList(result) {
        var jokeItemParent = $('<ul></ul>');
        jokeList.html(jokeItemParent);

        for (var i = 0; i < result.length; i++) {
            var jokeItem = $('<li></li>');
            var temp = '<div class="joke-item">' +
                '<a class="joke-title" href="javascript:;">' + result[i].title + '</a>' +
                '<div class="joke-author">' +
                '<img class="joke-author-icon"src="' + result[i].joke_user_icon + '" alt="">' +
                '<span>' + result[i].joke_user_nick + '</span>' +
                '</div>' +
                '<div class="joke-content">' +
                '<span>' + result[i].content + '</span>' +
                '</div>' +
                '<span class="helpful"><img src="../imgs/zan.png" alt="">' + result[i].article_like_count + '</span>' +
                '<span class="helpful"><img src="../imgs/comment_icon.png" alt="">' + result[i].article_comment_count + '</span>' +
                '<span class="joke-date">' + result[i].post_time + '</span>' +
                ' </div>';

            jokeItem.html(temp);
            jokeItemParent.append(jokeItem);
        }
    }

    function createBanner(result) {
        for (var i = 0; i < result.length; i++) {
            var imgTemp = '<a href="javascript:;" >' +
                '<img class="joke-author-icon"src="' + result[i].articleUrl + '" alt="">' +
                '</a>';
            banner.append(imgTemp);
        }

    }


    function startLoop() {
        var timer = setInterval(function() {
            currentIndex++;
            if (currentIndex > 2) {
                currentIndex = 0;
            }

            for (var i = 0; i < bannerImgs.length; i++) {
                $(bannerImgs[i]).removeClass();
                $(bannerImgs[i]).addClass('hidden');

                $(boxPoints[i]).removeClass('banner-box-select');
                $(boxPoints[i]).addClass('banner-box-bg');
            }

            $(bannerImgs[currentIndex]).addClass('block');
            $(boxPoints[currentIndex]).addClass('banner-box-select');

        }, 2000);
    }


})