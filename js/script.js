function convertTemperature() {
    var inputAngka_Awal = parseFloat(document.getElementById("InputAngka").value);
    // Validation
    if (isNaN(inputAngka_Awal)) {
        alert("Masukkan angka di kolom Celcius.");
        return;
    }
    
    // Rumus Hitung Celcius > Fahrenheit
    var hasilFahrenheit = (inputAngka_Awal * 9/5) + 32;
    // console.log(fahrenheit);
    document.getElementById("hasil").value = hasilFahrenheit;
    document.getElementById("Kalkulasi").value = "" + inputAngka_Awal + "℃ * 9/5 + 32 = " + hasilFahrenheit + "℉";

    document.querySelector('label[for="input-field"]').textContent = "Celcius (℃)";
    document.querySelector('label[for="input-field-result"]').textContent = "Fahrenheit (℉)";
    document.querySelector('label[for="input-field-kalkulasi"]').textContent = "Cara Kalkulasi ➡ Celcius(℃) ke Fahrenheit (℉)";
  }
  
  function reverseSuhu() {
    var fahrenheitInput = parseFloat(document.getElementById("InputAngka").value);
    if (isNaN(fahrenheitInput)) {
      alert("Masukkan angka di kolom Celcius terlebih dahulu baru reverse.");
      return;
    }
    
    // Rumus Hitung Fahrenheit > Celcius
    var celsius = (fahrenheitInput - 32) * 5/9;
    // console.log(celsius)
    document.getElementById("hasil").value = celsius;
    document.getElementById("Kalkulasi").value = "" + fahrenheitInput + "℉ - 32 * 5/9 = " + celsius + "℃";
    
    document.querySelector('label[for="input-field"]').textContent = "Fahrenheit (℉)";
    document.querySelector('label[for="input-field-result"]').textContent = "Celcius (℃)";
    document.querySelector('label[for="input-field-kalkulasi"]').textContent = "Cara Kalkulasi ➡ Fahrenheit (℉) ke Celcius(℃)";
}


  function reset() {
    document.getElementById("InputAngka").value = "";
    document.getElementById("hasil").value = "";
    document.getElementById("Kalkulasi").value = "";
    window.location.reload();
  }
  

  
  
  
  