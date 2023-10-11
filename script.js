function ageCalc() {
  const birthdate = new Date(document.getElementById("calc").value);
  const currentDate = new Date();

  const timeDiff = currentDate - birthdate;
  const years = timeDiff / (1000 * 60 * 60 * 24 * 365.25);
  const age = years.toFixed(11);

  document.getElementById("age").innerHTML = age;

  setTimeout(ageCalc, 50);
}

window.onload = ageCalc;
