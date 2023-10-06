const btnElement = document.getElementById("btn");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayElement.value;
  if (birthdayValue === "") {
    alert("please enter your date of birth");
  } else {
    const age = getAge(birthdayValue);
    resultElement.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  //   console.log(birthdayDate.getFullYear());
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  //   console.log(age);
  return age;
}

btnElement.addEventListener("click", calculateAge);
