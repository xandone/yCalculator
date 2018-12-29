$(function() {
    var jokeList = $('#joke-list');

    getjokeList();

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
})