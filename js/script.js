// VARIABLES
let employeeForm =  document.getElementById("empForm");
let btn          =  document.getElementById("submitButton");

// FUNCTIONS
// GET VALUES FROM EACH ELEMENTS
getValues = (e) => {
    e.preventDefault(); // This is a must!!  Note: must have the parameter "e", If no, console will show nothing.    
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
// PREVENT THE BROWSER'S DEFAULT BEHAVIOR ----This is used while the browser loaded
window.addEventListener('load', helper = (e) => e.preventDefault(), false);  
// GET VALUES AND SHOW THEM
employeeForm.addEventListener("submit", getValues, false)
// btn.addEventListener("click", getValues, false)  // 在提交表单时还是用submit form的形式提交，不要用button click，否则对字段有效性的验证无效