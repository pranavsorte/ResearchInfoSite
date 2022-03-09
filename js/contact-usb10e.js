$(document).ready(function() {
    // Load common used functions
    var helperFunctions = document.createElement("script");
    helperFunctions.src = "/js/helper.js";
    document.head.appendChild(helperFunctions);

    $("input[id$='-other']").change(function() {
        var otherTextField = $("#" + $(this).attr("id") + "-text");
        if ($(this).prop("checked")) {      // Enable text field
            otherTextField.prop("disabled", false);
        } // End of if statement
        else {
            otherTextField.prop("disabled", true);
        } // End of else statement
        otherTextField.val("");     // Clear contents
    });

    $("#form-reset-btn").on("click", function() {
        var formID = "contact-us";
        var form = $("form#" + formID);
        var status = $("#form-status");

        // Remove all text-danger classes from labels
        form.find("label").each(function() {
            if ($(this).hasClass("text-danger")) {
                $(this).removeClass("text-danger");
            } // End of if statement
        });

        form[0].reset();        // Reset form
        status.html("");        // clear
        grecaptcha.reset();
        enableFormFields(formID);
        disableSubmitBtn();

        // Force 'other' fields to be disabled
        $("input[id$='-other-text']").each(function() {
            $(this).prop("disabled", true);
        });
    });

    $("#form-submit-btn").on("click", function() {
        if (!$(this).hasClass("disabled")) {
            var formID = "contact-us";
            var form = $("form#" + formID);
            var status = $("#form-status");
            var requiredTextFields = ["first-name", "last-name", "email", "affiliation", "question"];
            var inquiryTypeFields = ["inquiry-general", "inquiry-stakeholder-organization", "inquiry-other"];

            // Remove all text-danger classes from labels
            form.find("label").each(function() {
                if ($(this).hasClass("text-danger")) {
                    $(this).removeClass("text-danger");
                } // End of if statement
            });

            var hasErrors = false;
            var data = new FormData();

            // Check if required text fields are not empty
            var id, value;
            for (var i=0; i < requiredTextFields.length; i++) {
                id = requiredTextFields[i];
                value = $("#" + id).val().trim();       // Get value
                if (isEmpty(value)) {
                    $("#" + id + "-label").addClass("text-danger");
                    hasErrors = true;
                } // End of if statement
                else {
                    data.append(id, value);        // Save for later
                } // end of else statement
            } // End of foreach statement

            // Validate email
            id = "email";
            value = $("#" + id).val().trim();

            // Checking inquiry type fields
            var inquiryTypes = [];      // Empty array for now
            for (var i=0; i < inquiryTypeFields.length; i++) {
                id = inquiryTypeFields[i];

                if ($("#" + id).prop("checked")) {
                    if (!id.match(/-other$/i)) {
                        value = $("#" + id).val().trim();       // Get value
                        inquiryTypes.push(value);     // Save for later
                    } // End of if statement
                    else {
                        // Format other field of expertise
                        value = $("#" + id  + "-text").val().trim();
                        if (value.length != 0) {
                            inquiryTypes.push("Other (" + value + ")");
                        } // End of if statement
                    } // End of else statement
                } // end of if statement
            } // End of for loop

            if ($("#inquiry-other").prop("checked")) {
                var otherTextField = $("#inquiry-other-text").val().trim();
                if (otherTextField.length == 0) {
                    hasErrors = true;
                    $("#inquiry-type-label").addClass("text-danger");
                } // End of if statement
            } // End of if statement

            if (inquiryTypes.length == 0) {
                hasErrors = true;
                $("#inquiry-type-label").addClass("text-danger");
            } // End of if statement
            else {
                data.append("inquiry-type", inquiryTypes.join(", "));
            } // End of else statement

            if (hasErrors) {
                status.hide().html(
                    "<div class=\"text-center text-danger\"><small>" +
                    "<span class=\"fas fa-exclamation-triangle fa-fw\"></span> " +
                    "We're unable to complete your request. Please enter/select the values marked with " +
                    "red before clicking the submit button" +
                    "</small><div>"
                ).fadeIn("slow");
            } // End of if statement
            else {
                // Validate email
                if (!isValidateEmail($("#email").val().trim())) {
                    $("#email-label").addClass("text-danger");
                    status.hide().html(
                        "<div class=\"text-center text-danger\"><small>" +
                        "<span class=\"fas fa-exclamation-triangle fa-fw\"></span> " +
                        "We're unable to complete your request. The email entered does not seems to be a valid one. " +
                        "Please make sure a valid email address is specified before clicking the submit button" +
                        "</small><div>"
                    ).fadeIn("slow");
                } // end of if statement
                else {
                    disableSubmitBtn();
                    disableFormFields(formID);        // Temporary disable form fields

                    status.hide().html(
                        "<div class=\"text-center text-primary\"><small>" +
                        "<span class=\"fas fa-circle-notch fa-spin fa-fw\"></span> " +
                        "Please wait while we process your request..." +
                        "</small><div>"
                    ).fadeIn("slow");

                    // Add reCAPTCHA response (Important)
                    data.append("g-recaptcha-response", $("#g-recaptcha-response").val());

                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (xhttp.readyState == 4) {
                            var response = xhttp.responseText;
                            var json = JSON.parse(response);

                            if (json["status"].match(/^success$/i)) {
                                $("#form-reset-btn").trigger("click"); // Reset form
                            } // End of if statement

                            status.hide().html(json["messageHTML"]).fadeIn("slow");
                            enableFormFields(formID);

                            // Force 'other' fields to be disabled
                            $("input[id$='-other-text']").each(function() {
                                $(this).prop("disabled", true);
                            });
                        } // end of i statement
                    };

                    xhttp.open("POST", "submit-contact-us.cgi", true);
                    xhttp.send(data);
                } // end of end of else statemnet
            } // End of else statement
        } // end of if statement
    });
});