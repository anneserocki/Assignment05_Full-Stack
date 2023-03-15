// VARIABLES
let employeeForm =  document.getElementById("empForm");
let btn          =  document.getElementById("submitButton");

// FUNCTIONS
// GET VALUES FROM EACH ELEMENTS
saveValues = () => {    
    var employeeID   =  document.getElementById("formGroupExampleInput").value;
    var fullName     =  document.getElementById("formGroupExampleInput2").value;
    var extension    =  document.getElementById("formGroupExampleInput3").value;
    var email        =  document.getElementById("exampleInputEmail1").value;
    var department   =  document.getElementById("exampleFormControlSelect1").value;
    // SHOW RESULTS THROUGH CONSOLE
    console.log(`ID: ${employeeID}`);
    console.log(`Name: ${fullName}`);
    console.log(`Extension: ${extension}`);
    console.log(`Email: ${email}`);
    console.log(`Department: ${department}`);
}

// EVENT LISTENER
// LOAD FORM AND PREVENT THE BROWSER'S DEFAULT BEHAVIOR 
employeeForm.addEventListener('load', helper = () => document.preventDefault(), false);
// FOR SAVING ALL VALUES IN THE FORM
btn.addEventListener("click", saveValues, false)