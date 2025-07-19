document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    var name = document.getElementById("Name").value;
    var dateofbirth = document.getElementById("Dateofbirth").value;
    var fathername = document.getElementById("FatherName").value;
    var mothername = document.getElementById("Mothername").value;

    if (name === "" || dateofbirth === "" || fathername === "" || mothername === "") {
        alert("Please fill all the fields");
    } else {
        alert("Registration successful");
        document.getElementById("registrationForm").reset();
    }
});
