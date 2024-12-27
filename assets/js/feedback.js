document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.querySelector(".feedback-form");

  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("feedback-subtitle").innerText =
      "Cảm ơn phản hồi của bạn";

    setTimeout(() => {
      document.getElementById("feedback-subtitle").innerText =
        "Chúng tôi cảm ơn ý kiến đóng góp của bạn để cải thiện nội dung và trải nghiệm người dùng của chúng tôi!";
    }, 3000);

    this.reset();
  });
});
