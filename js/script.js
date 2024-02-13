function convertTemperature() {
    var celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    if (isNaN(celsiusInput)) {
        document.getElementById("hasil").value = "Masukkan angka di kolom Celcius.";
        document.getElementById("Kalkulasi").value = "";
        return;
    }
    
    var fahrenheit = (celsiusInput * 9/5) + 32;
    // console.log(fahrenheit);
    document.getElementById("hasil").value = fahrenheit;
    document.getElementById("Kalkulasi").value = "" + celsiusInput + "℃ * 9/5 + 32 = " + fahrenheit + "℉";

    document.querySelector('label[for="input-field-kalkulasi"]').textContent = "Cara Kalkulasi ➡ Celcius(℃) ke Fahrenheit (℉)";
  }
  
  function reset() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("hasil").value = "";
    document.getElementById("Kalkulasi").value = "";
  }
  
  function reverseSuhu() {
    var fahrenheitInput = parseFloat(document.getElementById("hasil").value);
    if (isNaN(fahrenheitInput)) {
        document.getElementById("celsiusInput").value = "";
        document.getElementById("Kalkulasi").value = "";
        return;
    }
    
    var celsius = (fahrenheitInput - 32) * 5/9;
    // console.log(celsius)
    document.getElementById("celsiusInput").value = celsius;
    document.getElementById("Kalkulasi").value = "" + fahrenheitInput + "℉ - 32 * 5/9 = " + celsius + "℃";
    
    document.querySelector('label[for="input-field-kalkulasi"]').textContent = "Cara Kalkulasi ➡ Fahrenheit (℉) ke Celcius(℃)";
}

  
  
  
  