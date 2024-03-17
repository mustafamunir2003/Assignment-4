$(document).ready(function() {
    
    $("#signInForm").submit(function(e) {
        e.preventDefault();
        var username = $("#signInUsername").val();
        var password = $("#signInPassword").val();

        if (username.trim() === '') {
            alert("Username field cannot be empty.");
            return false;
        }

        if (password.trim() === '') {
            alert("Password field cannot be empty.");
            return false;
        }

    
        alert("Sign In successful!");
    
    });

    
    $("#signUpForm").submit(function(e) {
        e.preventDefault();
        var username = $("#signUpUsername").val();
        var email = $("#signUpEmail").val();
        var password = $("#signUpPassword").val();
        var confirmPassword = $("#signUpConfirmPassword").val();
        var phoneNumber = $("#signUpPhone").val();
        var age = $("#signUpAge").val();
        var bloodGroup = $("#bloodGroup").val();
        var address = $("#address").val();

        if (username.trim() === '') {
            alert("Username field cannot be empty.");
            return false;
        }

        if (!validateEmail(email)) {
            alert("Invalid email format.");
            return false;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            alert("Invalid phone number format.");
            return false;
        }

        if (password.trim() === '') {
            alert("Password field cannot be empty.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        if (isNaN(age) || age < 18 || age > 100) {
            alert("Age must be a valid number between 18 and 100.");
            return false;
        }

        if (!validateBloodGroup(bloodGroup)) {
            alert("Invalid blood group format.");
            return false;
        }

      
        if (!validatePassword(password)) {
            alert("Password must contain special and numeric characters.");
            return false;
        }

        
        alert("Sign Up successful!");
        
    });

    
    function validateEmail(email) {
        
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       
        return emailRegex.test(email);
    }

    
    function validatePhoneNumber(phoneNumber) {
    
        var phoneRegex = /^[0-9]{11}$/;
    
        return phoneRegex.test(phoneNumber);
    }

    
    function validateBloodGroup(bloodGroup) {
    
        var bloodGroupRegex = /^(A|B|AB|O)[+-]$/;
    
        return bloodGroupRegex.test(bloodGroup);
    }

    
    function validatePassword(password) {
        
        var passwordRegex = /^(?=.*[!./@#$%^&*])(?=.*[0-9])/;
        return passwordRegex.test(password);
    }
});
