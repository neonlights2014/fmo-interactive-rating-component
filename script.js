function init() {
  let ratingSelected = 0;
  document
    .querySelector(".rating-nums")
    .addEventListener("click", function RatingNumClick(event) {
      ratingSelected = Number(event.target.innerText);
      const nums = document.querySelectorAll(".nums");
      nums.forEach((element) => {
        element.classList.remove("num-active");
      });
      nums[ratingSelected - 1].classList.add("num-active");
    });

  document
    .querySelector(".btn-submit")
    .addEventListener("click", function SubmitRating() {
      if (ratingSelected > 0) {
        let result = `You selected ${ratingSelected} out of 5`;
        document.querySelector(".result").innerHTML = result;
        document.querySelector(".end").classList.remove("hidden");
        document.querySelector(".start").classList.add("hidden");
      }
    });
}

init();
