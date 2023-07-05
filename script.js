var tabLinks=document.getElementsByClassName('tab-links');
var tabContents=document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(link of tabLinks){
        link.classList.remove("active-link");
    }
    for(content of tabContents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



document.querySelector("#studentForm").addEventListener("submit",composeEmail);

function composeEmail(event){

    event.preventDefault();
    const email = document.querySelector("#email").value;

    if(email){
        window.location.href=`mailto:${email}`;
    }
}

function openResume(event) {
    event.preventDefault(); // Prevent the default link behavior

    var resumeUrl = event.target.href;
    window.open(resumeUrl, '_blank'); // Open the resume in a new tab or window
  }