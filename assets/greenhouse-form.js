(function () {
  const greenhouseSpontForm = document.querySelector("form#spontaneous_greenhouse--form");
  const btnSubmit = document.querySelector("form#spontaneous_greenhouse--form input[type=submit]");
  const feedbackErr = document.querySelector("form#spontaneous_greenhouse--form .feedback-container .feedback-error");
  const feedbackSuccess = document.querySelector("form#spontaneous_greenhouse--form .feedback-container .feedback-success");

  function handleFormSubmit() {
    if (!greenhouseSpontForm) return false;


    greenhouseSpontForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      btnSubmit.disabled = true;

      const bodyObject = {
        job_id: e.target[0].value,
        first_name: e.target[2].value,
        last_name: e.target[3].value,
        email: e.target[4].value
      }

      bodyObject[e.target[1].value] = e.target[5].value;

      const body = JSON.stringify(bodyObject);

      try {
        await fetch("https://greenhouseapiproxy.loopearplugs.workers.dev/", {
          method: "post",
          headers: {
            'Content-Type': 'application/json'
          },
          mode: "no-cors",
          body
        })
        feedbackErr.style.display = "none";
        feedbackSuccess.style.display = "inline-block";
        greenhouseSpontForm.reset();
      } catch (error) {
        feedbackErr.style.display = "inline-block";
        feedbackSuccess.style.display = "none";
      }

      btnSubmit.disabled = false;
    })
  }

  handleFormSubmit();
})()
