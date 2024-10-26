function checkDayNight() {
    const now = new Date();
    const hours = now.getHours();
    const statusElement = document.getElementById('status');
    const bodyElement = document.body;

    if (hours >= 6 && hours < 18) {
        statusElement.textContent = "It's Daytime!";
        bodyElement.classList.add('day');
        bodyElement.classList.remove('night');
    } else {
        statusElement.textContent = "It's Nighttime!";
        bodyElement.classList.add('night');
        bodyElement.classList.remove('day');
    }
}

checkDayNight();
