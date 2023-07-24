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

function calculateAge() {
  const dayInput = parseInt(document.getElementById("day").value);
  const monthInput = parseInt(document.getElementById("month").value);
  const yearInput = parseInt(document.getElementById("year").value);

  if (isNaN(dayInput) || isNaN(monthInput) || isNaN(yearInput) || dayInput <= 0 || monthInput <= 0 || yearInput < 0 || yearInput.toString().length !== 4) {
    alert("Please enter a valid date, month and year of birth.");
    return;
  }

  if (dayInput > 31) {
    alert("Please check the date again");
    return;
  }
  if(monthInput > 12){
    alert("Please check the month again");
    return;
  }
  const today = new Date();
  const birthDate = new Date(yearInput, monthInput - 1, dayInput);

  if (birthDate > today || birthDate.getDate() !== dayInput || birthDate.getMonth() !== monthInput - 1) {
    alert("Date of birth is invalid or in the future.");
    return;
  }

  const ageInMilliseconds = today - birthDate;
  const ageDate = new Date(ageInMilliseconds);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  document.getElementById("output-year").innerText = years;
  document.getElementById("output-month").innerText = months;
  document.getElementById("output-day").innerText = days;
}

