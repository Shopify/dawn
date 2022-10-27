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
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        email: e.target[2].value,
        question_5555: e.target[3].value
      });

      try {
        await fetch("https://greenhouseapiproxy.netlify.app/.netlify/functions/proxy", {
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
        } catch(error) {
          feedbackErr.style.display = "inline-block";
          feedbackSuccess.style.display = "none";
        }
        
        btnSubmit.disabled = false;
    })
  }

  handleFormSubmit();
})()
