# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

    <!-- Code a prompt that asks user for how many characters -->
    <!-- Must be at least 8 to 128 characters -->
    <!-- Store repsonse in a variable -->

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

    <!-- Confirm for lower case -->
    <!-- Confirm for upper case -->
    <!-- Confirm for numbers -->
    <!-- Confirm for special characters -->

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

    <!-- Create an array for lowercase letters... -->
    <!-- Create an empty array that will hold all chaaracters allowed -->
            Ex: If user chooses LOWER CASE: add all lower case char into the new array 
    <!-- We end up with one big array with all holds all possible characters -->
    <!-- Create an empty string for the final password:  -->
            Loop from 1 to the number of characters in the password -->
            Determine random index num between 0 and the length - 1 of the one big array
            Whatever that random index is, grab the value, and add it to pw string

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
