(function () {
    let today = new Date(Date.now());
    if (today.getDay() === 5) {
       document.getElementById('banner-announcement').style.display = "block";
    }
 })();