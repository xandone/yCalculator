$(function() {
    var jokeList = $('#joke-list');

    getjokeList();

    function getjokeList(page, count) {
        $.ajax(function() {
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
        console.log(result);
        var jokeItemParent = jokeList.html('ul');
        var jokeItem = jokeItemParent.html('li');
        jokeItem.append(result.rows[0].content);
    }

})