var timer;
var weather_title = document.getElementsByClassName('weather_title')[0];
var weather_details = document.getElementById('weather_details');
var channel_item = document.getElementsByClassName('channel_item');
var news_no_span = document.getElementById('news_no_span');
var news_no_icon = document.getElementById('news_no_icon');

weather_title.onmouseover = function() {
    weather_details.style.display = 'block';
}
weather_title.onmouseout = function() {
    timer = setTimeout(function() {
        weather_details.style.display = 'none';
    }, 500);
}

weather_details.onmouseover = function() {
    clearTimeout(timer);
    weather_details.style.display = 'block';
}
weather_details.onmouseout = function() {
    weather_details.style.display = 'none';
}

for (var i = 0; i < channel_item.length; i++) {
    channel_item[i].j = i;
    channel_item[i].onclick = function() {
        setChannelSelect(this.j);
    }
}

setChannelSelect(0);

function setChannelSelect(index) {
    for (var i = 0; i < channel_item.length; i++) {
        if (index == i) {
            channel_item[i].className = 'left_title_item_select';
        } else {
            channel_item[i].className = 'channel_item';
        }
    }
}

news_no_icon.onmouseover = function() {
    news_no_span.className = 'news_no_intes_show';
}

news_no_icon.onmouseout = function() {
    news_no_span.className = 'news_no_intes_hide';
}