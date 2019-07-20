(function() {

    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setSeconds(){
        const now = new Date();
        const seconds = now.getSeconds();
        const secondDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        console.log(seconds);
    }

    function setMinutes() {
        const now = new Date();
        const minutes = now.getMinutes();
        const minDegrees = ((minutes / 60) * 360) +90;
        minHand.style.transform = `rotate(${minDegrees}deg)`;
        console.log(minutes);
    }

    function setHour() {
        const now = new Date();
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        console.log(hour);
    }
    setInterval(setSeconds , 1000);
    setInterval(setMinutes, 10000);
    setInterval(setHour, 100000);


})();