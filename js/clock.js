//real time clock
const clock = document.querySelector("h1");

const setRealTimeClock = () => {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hour}:${minute}:${second}`;
};
setRealTimeClock();
setInterval(setRealTimeClock, 1000);
