// lisenting element
document.getElementById('resume form')?.addEventListener('submit', function(event){
    event.preventDefault();


    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skills') as HTMLInputElement;


if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){
     
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value; 
    const education = educationElement.value; 
    const experience = experienceElement.value;
    const skills = skillElement.value

}

     // create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> <span id="edit-name" class="editable${name} </span> </p>
    <p><strong>Email:</strong> <span id="edit-edit" class="editable${emailElement} </span> </p>
    <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable${phoneElement} </span> </p>


    <h3>Education</h3>
    <p id="edit-education" class="editable>${educationElement}</p>

    <h3>Work Experience</h3>
    <p id="edit-experience" class="editable>${experienceElement}</p>

    <h3>skills</h3>
    <p id="edit-skill" class="editable>${skillElement}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{}
        console.error('the resume output element is missing')
      {
        console.error('once or more output elements are missing')
    }
})