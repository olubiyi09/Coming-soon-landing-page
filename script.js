const dayEl = document.querySelector(".days");
const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");
const h1 = document.querySelector("h1");

const countTo = "1 Dec 2022";

const set = setInterval(() => {
    const currentDate = new Date();
    const endDate = new Date(countTo);

    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = `${days}`;
    hourEl.innerHTML = `${format(hours)}`;
    minuteEl.innerHTML = `${format(minutes)}`;
    secondEl.innerHTML = `${format(seconds)}`;


    if(totalSeconds < 0) {
        clearInterval();
        h1.textContent = "Product has been lunched";
    }
})

function format(count) {
    return count < 10 ? `0${count}` : count;
}