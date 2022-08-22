// function myFunction() {
//     let text;
//     if (confirm("Press a button!") == true) {
//         redirect 
//             location.href = "https://www.javascripttutorial.net/";
//     }} else {
//       text = "You canceled!";
//     }
    //document.getElementById("demo").innerHTML = text;

    counter = 1;
    var x = setInterval(my_function, 1000);
    
    document.getElementById("demo1").innerHTML = `Intervāla Id ${x}`;
    
    function my_function() {
    document.getElementById("demo2").innerHTML = counter;
    counter++;
    if (counter > 5){clearInterval(x);}
    }