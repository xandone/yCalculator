var timer;
var weather_title = document.getElementsByClassName('weather_title')[0];
var weather_details = document.getElementById('weather_details');

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