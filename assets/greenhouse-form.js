(function() {
  const greenhouseSpontForm = document.querySelector("form#spontaneous_greenhouse");
  const btnSubmit = document.querySelector("form#spontaneous_greenhouse input[type=submit]");
  const feedbackErr = document.querySelector("form#spontaneous_greenhouse .feedback-container .feedback-error");
  const feedbackSuccess = document.querySelector("form#spontaneous_greenhouse .feedback-container .feedback-success");

  function handleFormSubmit() {
    if(!greenhouseSpontForm) return false;

    
    greenhouseSpontForm.addEventListener("submit", async function(e) {
      e.preventDefault();
      btnSubmit.disabled = true;


      const body = JSON.stringify({
        "first_name": e.target[0].value,
        "last_name": e.target[1].value,
        "email": e.target[2].value,
        "question_5555": e.target[3].value,
        "data_compliance[gdpr_consent_given]": e.target[4].value === "on"
      });

      const headers = new Headers;
      headers.set('Authorization', 'Basic ' + btoa("8af68175223790f2fd2b9f7c04082d8b-101" + ":" + ""));
      headers.set("Content-Type", "application/json")
      headers.set("Accept", "application/json")

      try {
         await fetch("https://boards-api.greenhouse.io/v1/boards/loopearplugs/jobs/4092617101", {
            mode: "no-cors",
            method: "post",
            headers,
            body
          })
          feedbackSuccess.style.display = "inline-block";
          greenhouseSpontForm.reset();
        } catch(error) {
          feedbackErr.style.display = "inline-block";
        }
        
        btnSubmit.disabled = false;
    })
  }

  handleFormSubmit();
})()
