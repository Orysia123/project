//adding a spinner when page loading

function onReady(callback) {
  let intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector('#loading').style.display = visible ? 'block' : 'none';
}

onReady(function() {
    setVisible('.main', true);
    setVisible('#loading', false);
});

//change color of navigation when scrolling

let nav = document.getElementById('navigation');

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 7000) {
        nav.style.backgroundColor = '#000';
        nav.style.width = '1124px';
        
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});


//digital clock

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let formatHours = convertFormat(hours);
    hours = checkTime(hours);
    
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    
    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}

function convertFormat(time) {
    let format = 'AM';
    if(time >= 12) {
        format = 'PM';
    }
    return format;
}

function checkTime(time) {
    if(time>12) {
        time = time-12;
    }
    if (time === 0) {
        time = 12;
    }
    return time;
}

function addZero(time) {
    if(time < 10) {
        time = "0" + time;
    }
    return time;
}

showTime();
setInterval(showTime, 1000);

