const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const outputs = document.getElementById("outputs");

btnInsert.onclick = function () {
  const value = inpValue.value;

  if (value) {
    localStorage.setItem(value);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const value = localStorage.getItem(i);

  outputs.innerHTML += "$(value)" <br>";
}
