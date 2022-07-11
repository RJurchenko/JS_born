function aprekins() {
    let naudasApmersEur = parseFloat(document.getElementById("summa").value);
    let USD = naudasApmersEur * 1.0066961;

    document.getElementById("rezultats").innerHTML = "Konvertējot iegūst " + USD.toString() + " USD";

}