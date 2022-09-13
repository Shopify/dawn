  $(document).ready(function () {

    function checkEmail() {

      if (
        ($("#quiz-kit-subscribe-UJBRs3twgJ-submit-form input").val() != "" &&
          $(".submit-form-terms").prop("checked") == true)
      ) {
        $(`[data-aos-delay="450"]`).removeClass("quiz_active");
        $(`[data-aos-delay="600"]`).css("display", "none");
      }
      else if (
        ($("#quiz-kit-subscribe-UJBRs3twgJ-submit-form input").val() != "" ||
          $(".submit-form-terms").prop("checked") == true)
      ) {
        $(`[data-aos-delay="450"]`).addClass("quiz_active");
        $(`[data-aos-delay="600"]`).css("display", "none");

      }
      else {
        $(`[data-aos-delay="600"]`).css("display", "inline-block");
        $(`[data-aos-delay="450"]`).removeClass("quiz_active");
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

$(document).ready(function () {

    function checkEmailDE() {

      if (
        ($("#quiz-kit-subscribe-0Xd3Tp3VCR-submit-form input").val() != "" &&
          $(".submit-form-terms").prop("checked") == true)
      ) {
        $(`[data-aos-delay="450"]`).removeClass("quiz_active");
        $(`[data-aos-delay="600"]`).css("display", "none");
      }
      else if (
        ($("#quiz-kit-subscribe-0Xd3Tp3VCR-submit-form input").val() != "" ||
          $(".submit-form-terms").prop("checked") == true)
      ) {
        $(`[data-aos-delay="450"]`).addClass("quiz_active");
        $(`[data-aos-delay="600"]`).css("display", "none");

      }
      else {
        $(`[data-aos-delay="600"]`).css("display", "inline-block");
        $(`[data-aos-delay="450"]`).removeClass("quiz_active");
      }
    }
    checkEmailDE();
    $("body").on("click", ".submit-form-terms", function () {
      checkEmailDE();
    });

    $("body").on(
      "keyup",
      "#quiz-kit-subscribe-0Xd3Tp3VCR-submit-form input",
      function () {
        checkEmailDE();
      }
    );
  });