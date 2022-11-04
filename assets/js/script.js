const ratingEl = document.getElementById("rating");
const thankyouEl = document.getElementById("thankyou");
const submitEl = document.getElementById("submit");

const userRateEl = document.getElementById("user-rate");
const ratingChoicesEl = document.querySelectorAll(".rating__choice");

submitEl.addEventListener("click", () => {
  thankyouEl.classList.remove("thankyou__hidden");
  ratingEl.style.display = "none";
});

ratingChoicesEl.forEach((item) => {
  item.addEventListener("click", () => {
    userRateEl.innerHTML = item.innerHTML;
  });
});
