var contactUsBucket = 'vitalityextracts-contactus';
var contactUsUrl = 'https://'+contactUsBucket+'.s3.amazonaws.com/'
var contactUsStart = new Date();
var contactUsSubmitted = false;
var contactUsValidExtensions = 'jpg,jpeg,png,gif,pdf,doc,docx,ppt,pptx,pps,ppsx,odt,xls,xlsx,txt'.split(',');

var contactUsDataString;
var contactUsKeys;
var contactUsLastKey;
var contactUsFileUploadFiles;
var contactUsFileUploadStep;

initContactUs();

function initContactUs() {
  if (window.location.href.indexOf('?test') !== -1) {
    showThankyouPopup();
    return;
  }

  var question=document.getElementById('question');
  question.value = parseInt(Math.random()*5+10)+' + '+parseInt(Math.random()*5+10);
  document.getElementById("contactFormSubmit").addEventListener('click', function(e){
    if (contactUsSubmitted) {
      return;
    }

    if (!validateAttachments()) {
      return;
    }

    e.preventDefault();

    var errors = document.querySelectorAll('.error-contact');
    for(var i=0; i<errors.length; i++) {
      errors[i].remove();
    }
    var cffirstname = document.getElementById('contactFormFirstName').value;
    var cflastname = document.getElementById('contactFormLastName').value;
    var cfemailaddress = document.getElementById('contactFormEmailAddress').value;
    var cfphonenumber = document.getElementById('contactFormPhoneNumber').value;
    var cfreason = document.getElementById('contactFormReason').value;
    var cfordernumber = document.getElementById('contactFormOrderNumber').value;
    var cfsubject = document.getElementById('contactFormSubject').value;
    var cfmessage = document.getElementById('contactFormMessage').value;

    var counterror=0;
    if (cffirstname=='') {
      counterror++;
      document.getElementById('contactFormFirstName').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please enter your first name.</p>');
    }
    if (cflastname=='') {
      counterror++;
      document.getElementById('contactFormLastName').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please enter your last name.</p>');
    }
    if (cfemailaddress=='') {
      counterror++;
      document.getElementById('contactFormEmailAddress').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please enter your email address.</p>');
    } else {
      var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
      if (!filter.test(cfemailaddress)) {
        counterror++;
        document.getElementById('contactFormEmailAddress').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please enter a valid email address.</p>');
      }
    }
    if (cfphonenumber=='') {
      counterror++;
      document.getElementById('contactFormPhoneNumber').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please enter your phone number.</p>');
    }
    if (!cfreason) {
      counterror++;
      document.getElementById('contactFormReason').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please select a reason.</p>');
    }
    if (cfsubject=='') {
      counterror++;
      document.getElementById('contactFormSubject').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please enter a subject.</p>');
    }
    if (cfmessage=='') {
      counterror++;
      document.getElementById('contactFormMessage').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please enter a brief message.</p>');
    }
    if (eval(document.getElementById("question").value) != document.getElementById("answer").value) {
      //console.log(eval(document.getElementById("question").value, document.getElementById("answer").value));
      counterror++;
      document.getElementById('answer').parentElement.insertAdjacentHTML('afterend', '<p class="error-contact error-pedding-contact">Please enter a valid answer.</p>');
    }
    if (counterror > 0) { return false; }

    var contactUsEnd = new Date();
    //if (contactUsStart - contactUsEnd < 30000) { alert('Please wait a little, then try again.'); }

    contactUsDataString = 'entry.1682841173='+cffirstname+'&entry.1828720400='+cflastname+'&entry.323193233='+cfemailaddress+'&entry.112493411='+cfphonenumber+'&entry.291674412='+cfreason+'&entry.101078150='+cfordernumber+'&entry.1559397152='+cfsubject+'&entry.812806656='+cfmessage;

    this.disabled = true;
    /*$('input').prop('disabled', true);
    $('.close-pop').prop('disabled', false);*/

    contactUsFileUploadStep = 0;
    contactUsKeys = [];
    document.getElementById('uploadProgressIndicatorWrapper').style.display = 'block';
    uploadNextFile();
  });

  setTimeout(function() { initSupportFiles(); }, 3000);
}

function submitContactUs() {
  if (!contactUsDataString || contactUsSubmitted) {
    return;
  }

  contactUsSubmitted = true;

  /*$.ajax({
    type:'POST',
    data:contactUsDataString,
    url:'https://docs.google.com/forms/d/e/1FAIpQLSddPtKYnnEJ3szpo0hvPA7AIKqkfKvL58noojKPeW3bcM77eA/formResponse',
    success:function(data) {
      //console.log('SUCCESS', data); // this doesn't get triggered
    },
    error: function (xhr, ajaxOptions, thrownError) {
      //console.log('ERROR', xhr, ajaxOptions, thrownError);
      if(xhr.status===0){
        showThankyouPopup();
      }
      return false;
    }
  });*/

  fetch(`https://docs.google.com/forms/d/e/1FAIpQLSddPtKYnnEJ3szpo0hvPA7AIKqkfKvL58noojKPeW3bcM77eA/formResponse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: contactUsDataString
  })
    .then((response) => response.json())
    .then((response) => {
      showThankyouPopup();
    }).catch(function(error) {
      showThankyouPopup();
    });
}

function showThankyouPopup() {
  alert('Thank you!  Our customer service team will strive to respond to you in 1-3 business days.');
  /*$('#popup1').show();
  $('.thank-you_popup').animate({ opacity: 1 }, 50);

  $(".close-pop").click(function(){
      window.location = '/';
  });*/
  window.location = '/';
}

function uploadNextFile() {
  validateAttachments();

  var file = contactUsFileUploadFiles[contactUsFileUploadStep];
  if (!file) {
    $('#uploadProgressIndicatorDisplay').html('COMPLETE');

    if (contactUsKeys.length > 0) {
      contactUsDataString += '|STORAGE_NAME|' + contactUsBucket + '|STORAGE_KEYS|' + contactUsKeys.join('|STORAGE_KEY|');
    }
    submitContactUs();
    return;
  }

  $('#uploadProgressIndicatorDisplay').html((contactUsFileUploadStep+1) + ' / ' + contactUsFileUploadFiles.length);

  contactUsLastKey = 'contactus/'+cleanFileName(file.name)+'_'+Date.now()+'.'+getFileExtension(file.name);
  contactUsKeys.push(contactUsLastKey);

  var fd = new FormData();

  fd.append('key', contactUsLastKey);
  fd.append('acl', 'aws-exec-read');
  fd.append('AWSAccessKeyId', 'AKIARG4TKDZTHIJLKYFL');
  fd.append('policy', 'eyJleHBpcmF0aW9uIjoiMjA5OS0xMi0wMVQxMjowMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W3siYnVja2V0Ijoidml0YWxpdHlleHRyYWN0cy1jb250YWN0dXMifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsIiJdLHsiYWNsIjoiYXdzLWV4ZWMtcmVhZCJ9LFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjBdXX0=');
  fd.append('signature','nHJMVdm8HbdyBobjS+TUsa0V71M=');
  fd.append("file", file);

  var xhr = new XMLHttpRequest({mozSystem: true});

  xhr.upload.addEventListener("progress", uploadProgress, false);
  xhr.addEventListener("load", uploadComplete, false);
  xhr.addEventListener("error", uploadFailed, false);
  xhr.addEventListener("abort", uploadCanceled, false);

  xhr.open('POST', contactUsUrl, true); //MUST BE LAST LINE BEFORE YOU SEND
  xhr.send(fd);
}

function uploadProgress(evt) {
    if (evt.lengthComputable) {
        document.getElementById('uploadProgressIndicator').value = evt.loaded / evt.total;
    }
    else {
         document.getElementById('uploadProgressIndicator').value = 0;
    }
}

function uploadComplete(evt) {
    /* This event is raised when the server send back a response */
    try {
      if (evt.target.status >= 200 && evt.target.status < 300) {
        contactUsFileUploadStep++;
        uploadNextFile();
      }
    } catch (ob) {
      console.log('error', ob);
      alert('An error occurred while uploading your files.  Please try again another time.');
      //window.location.reload();
    }
}

function uploadFailed(evt) {
    alert("There was an error attempting to upload the file." + evt);
    window.location.reload();
}

function uploadCanceled(evt) {
    alert("The upload has been canceled by the user or the browser dropped the connection.");
    window.location.reload();
}

function cleanFileName(fileName)
{
    if (!fileName) return '';

    var spl = fileName.split('.');
    var rebuiltFileName = '';
    for(var i=0; i<spl.length-1; i++) //omit the extension which is the last element in spl, hence spl.length-1 (instead of spl.length)
    {
        //console.log('used to be: '+spl[i]);
        spl[i] = spl[i].replace(/\s/g, '_').replace(/_/g, '-').replace(/[^a-zA-Z0-9_\-]/g, '');
        //console.log('now is: '+spl[i]);
        if (rebuiltFileName != '')
            rebuiltFileName += '.';
        rebuiltFileName += spl[i];
        //console.log('rebuiltFileName is currently: '+rebuiltFileName);
    }
    rebuiltFileName = rebuiltFileName.substring(0, 100) + '.' + spl[spl.length-1];
    return rebuiltFileName.toLowerCase();
}

function getFileExtension(fileName)
{
    var spl = fileName.split('.');
    return spl[spl.length-1];
}

function validateAttachments() {
  var errorMessagesBlock = [];
  contactUsFileUploadFiles = document.getElementById('contactFormFiles').files;
  var maxFiles = 5;
  if (contactUsFileUploadFiles.length > maxFiles) {
    errorMessagesBlock.push('Please select no more than '+maxFiles+' file'+(maxFiles === 1 ? '' : 's')+'.');
  } else {
    //console.log(contactUsFileUploadFiles.length);
    if (contactUsFileUploadFiles.length > 0) {
      var errorMessages = [];
      for(var i=0; i<contactUsFileUploadFiles.length; i++) {
        var file = contactUsFileUploadFiles[i];
        //console.log(file);
        if (file.size > 10485760) {
          errorMessages.push(file.name+' ('+(Math.round(file.size / 1048576))+' MB)');
        }
      }
      if (errorMessages.length > 0) {
        errorMessagesBlock.push('The following files exceed the max file size of 10 MB:\n\n'+errorMessages.join('\n'));
      }

      errorMessages = [];
      for(i=0; i<contactUsFileUploadFiles.length; i++) {
        var file = contactUsFileUploadFiles[i];
        var ext = file.name.split('.')[file.name.split('.').length-1];
        if ($.inArray(ext, contactUsValidExtensions) === -1) {
          errorMessages.push(file.name+' ('+ext+')');
        }
      }
      if (errorMessages.length > 0) {
        errorMessagesBlock.push('The following files are not permitted:\n\n'+errorMessages.join('\n'));
      }
    }
  }
  if (errorMessagesBlock.length > 0) {
    alert(errorMessagesBlock.join('\n\n'));
    return false;
  }
  return true;
}

function initSupportFiles() {
  try {
    $('#div_supportfiles').html('<label class="ve-custom-file-upload" for="contactFormFiles"><i class="la la-upload"></i> upload file(s)</label> <input type="file" id="contactFormFiles" name="supportfiles" multiple><div class="file-name-output"></div>');
      $('#contactFormFiles').on('change', function(){
        var fileInputEl= document.querySelector('#contactFormFiles');
        var files = fileInputEl.files;

        if(files){
         if(files.length > 1){
           $('.file-name-output').text(files.length+" files chosen");
         }
         else{
           $('.file-name-output').text(files[0].name);
         }
         $('.ve-custom-file-upload').addClass('active');
        }
     });
  } catch(ob) {
    setTimeout(function() {
      initSupportFiles();
    }, 100);
  }
}
