function changeBorderColor() {
  // Get all input cells
  const inputs = document.querySelectorAll('.input-container input');
  inputs.forEach(input => {
    input.addEventListener('click', function () {
      this.style.borderColor = '#854DFF';
    });
  });
}
changeBorderColor()

//select the output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");
// INPUT ELEMENTS
let isValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
// ERROR ELEMENTS
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
submit_btn.addEventListener("click", CalculateDate);
input_day.addEventListener("input", (e) => {
  const day = +input_day.value;
  const month = +input_month.value;
  const year = +input_year.value;
  // Check if date is greater than 31 or date is 0
  if (day > 31 || day === 0) {
    error_day.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    error_day.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else if (month === 2) {
    // February test only 29 days
    if (day > 29) {
      error_day.textContent = "February has at most 29 days";
      isValid = false;
      return;
    }
    // Check leap year, if the year is not divisible by 4 then February has only 28 days
    const year = +input_year.value;
    const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

    if (isLeapYear && day > 29) {
      error_day.textContent = "February has at most 29 days in a leap year";
      isValid = false;
      return;
    } else if (!isLeapYear && day > 28) {
      error_day.textContent = "February has at most 28 days in a non-leap year";
      isValid = false;
      return;
    }
  } else {
    error_day.textContent = "";
  }
  isValid = true;
});

//Listen for events when the user enters data for the month
input_month.addEventListener("input", (e) => {
  var month = +input_month.value;

  // Check if month is greater than 12 or equal to 0
  if (month > 12 || month === 0) {
    error_month.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    // If there is no error, remove the error message and mark it as valid
    error_month.textContent = "";
  }
  isValid = true;
});
// Listen for events when the user enters data for the year
input_year.addEventListener("input", (e) => {
  var year = +input_year.value;

  // Check the year does not exceed the current year
  if (year > 2023 || year === 0) {
    error_year.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }
  isValid = true;
});
function CalculateDate() {
  if (isValid) {
    const currentDateTime = new Date();
    const inputDay = +input_day.value;
    const inputMonth = +input_month.value;
    const inputYear = +input_year.value;
    const birthdayObj = new Date(inputYear, inputMonth - 1, inputDay);
    // Check if the entered date is valid or not
    if (birthdayObj.getTime() > currentDateTime.getTime()) {
      alert("The date of birth cannot be in the future.");
      return;
    }
    // Calculate the difference between current date and entered date
    const ageDiffMill = currentDateTime.getTime() - birthdayObj.getTime();
    // Calculate age from number of milliseconds
    const ageYears = Math.floor(ageDiffMill / (365.25 * 24 * 60 * 60 * 1000));
    const ageMonths = Math.floor((ageDiffMill % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const ageDays = Math.floor((ageDiffMill % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    // Showing results
    output_day.textContent = ageDays;
    output_month.textContent = ageMonths;
    output_year.textContent = ageYears;
  } else {
    alert("Please correct the errors and try again.");
  }
}