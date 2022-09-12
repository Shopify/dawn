  $(document).ready(function () {

    function checkEmail() {

      if (
        ($("#quiz-kit-subscribe-UJBRs3twgJ-submit-form input").val() != "" &&
          $(".submit-form-terms").prop("checked") == true)
      ) {
        $(`[data-aos-delay="450"]`).removeClass("active");
        $(`[data-aos-delay="600"]`).css("display", "none");
      }
      else if (
        ($("#quiz-kit-subscribe-UJBRs3twgJ-submit-form input").val() != "" ||
          $(".submit-form-terms").prop("checked") == true)
      ) {
        $(`[data-aos-delay="450"]`).addClass("active");
        $(`[data-aos-delay="600"]`).css("display", "none");

      }
      else {
        $(`[data-aos-delay="600"]`).css("display", "inline-block");
        $(`[data-aos-delay="450"]`).removeClass("active");
      }
    }
    checkEmail();
    $("body").on("click", ".submit-form-terms", function () {
      checkEmail();
    });

    $("body").on(
      "keyup",
      "#quiz-kit-subscribe-UJBRs3twgJ-submit-form input",
      function () {
        checkEmail();
      }
    );
  });