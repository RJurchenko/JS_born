//homepage 
    
    function pirmapoga() {        
        let aktivi = "";
        let pasivi = "";
        let viens = "";
        let divata = "";
        let gimeni = "";
        let draugi = "";
        if (document.getElementById("aktivi").checked) { 
            aktivi = "aktīvi";
        } else if (document.getElementById("pasivi").checked) {
             pasivi = "pasīvi";
        };
        if (document.getElementById("viens").checked) { 
            viens = " vienatnē";
        } else if (document.getElementById("divata").checked) {
             divata = " divatā";
        } else if (document.getElementById("gimeni").checked) {
            gimeni = " ar ģimeni";
        } else if (document.getElementById("draugi").checked) {
             draugi = " ar draugiem";
        };        
        document.getElementById("teikums").innerHTML = "Mums prieks, ka Tev patīk " + aktivi + pasivi + " atpūsties";
        document.getElementById("teikums").innerHTML += viens + divata + gimeni+ draugi + "!";
        document.getElementById("teikums").innerHTML += " Mēs Tev piedāvājam apmeklēt skaistas pilsētas pie Daugavas un uzspēlēt foto orientēšanās spēli!";        

       
        document.getElementById("kaAtpusties").innerHTML =  viens + divata + gimeni+ draugi;


    }
    $(document).ready(function(){
        $(".home-bg").hide(); 
        $(".home-bg.printPage").show(); 
        setTimeout(function(){ 
            $(".notPrint").show(); 
        },3000); //.fadeIn(2000)

        $("#pirmapoga").click(function(){
            $("#izveletiesPilsetas").show();
            $("#izveletiesAtputas").hide();
        });
        $("#atpakalPirmoLogu").click(function(){
            $("#izveletiesAtputas").show();
            $("#izveletiesPilsetas").hide();

        });
        $("#aizietPirmoLogu").click(function(){
            $(".home-bg").hide();
        });
        
        $(".close").click(function(){
            $(".home-bg").hide();
        });
        $(".nomainit").click(function(){
            $(".home-bg").show();

        });

    });  
  // homepage slider 
if (document.getElementById('homepageSlider') !== null){
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var apmeklet = document.getElementsByClassName("apmeklet");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        apmeklet[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    apmeklet[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }  

}
    ///
  function aizietPirmoLogu() { 

      let riga = "";
      let pieriga = "";
      
      if (document.getElementById("riga").checked) { 
          riga = " RĪgā";
      } else if (document.getElementById("pieriga").checked) {
           pieriga = " Pierīgā";
      };     
      
      document.getElementById("kurAtpusties").innerHTML = " " + riga + pieriga + ogre + daugavpils;
      
      if (document.getElementById("riga").checked) {             
          showSlides(slideIndex = 1);
      } else if (document.getElementById("pieriga").checked) {
          showSlides(slideIndex = 2);
      } else if (document.getElementById(" ").checked) {
          showSlides(slideIndex = 3);
      } else if (document.getElementById(" ").checked) {
          showSlides(slideIndex = 4);
      };  
  }
 
if (document.getElementById('homepageSlider') !== null){                  
    class Objekts {
        constructor(attels, nosaukums, piedavajums, laiks, link, adrese, telefons, cena){
            this.attels = attels;
            this.nosaukums = nosaukums;
            this.piedavajums = piedavajums;
            this.laiks = laiks;
            this.link = link;
            this.adrese = adrese;
            this.telefons = telefons;
            this.cena = cena;
        }
    }
                
    let objektsRiga1 = new Objekts(
        "image/riga/Riga-vecriga.jpeg",
        "Vecrīga",
        "Sajust Rīgas pērli",
        "Visu diennakti",
        "https://goo.gl/maps/65D9FpDze9Qntiso9",
        "Rātslauklums 6, Centra rajons, Rīga, LV-1050",
        "+371 67 037 900",
        "Bezmaksas"
    );
    let objektsRiga2 = new Objekts(
        "image/riga/Riga-kengarags.jpg",
        "Ķengarags", 
        "Apmeklēt labāko rajonu pasaulē!", 
        "Visu diennakti", 
        "https://goo.gl/maps/UMf3aorAYE3hHiQ7A",  
        "Ķengarags", 
        "+371 67 037 900", 
        "Var būt dārgi"
    );
    let objektsRiga3 = new Objekts(
        "image/riga/Riga-muzejs.jpg",
        "Latvijas Nacionālais mākslas muzejs", 
        "Lielākā profesionālās mākslas krātuve valstī", 
        "PIRMDIENA: Slēgts<br>OTRDIENA-CETURTDIENA: <time>09:00 - 18:00</time><br>PIEKTDIENA: <time>10:00 - 20:00</time><br>SESTDIENA-SVĒTDIENA: <time>10:00 - 17:00</time>", 
        "https://goo.gl/maps/zofniHDLJLtb3JMP8",  
        "Jaņa Rozentāla laukums 1, Centra rajons, Rīga, LV-1010", 
        "+371 67 037 900", 
        "0.50 - 7.00 EUR"
    );
    
    let objektspieriga1 = new Objekts(
    );
    let objektspieriga2 = new Objekts(
    );
    let objektspieriga3 = new Objekts(
    );

    // let bookArray = new Array(objektsRiga1, objektsRiga2, objektsRiga3);
    let bookArray = new Array(objektsRiga1, objektsRiga2, objektsRiga3, objektspieriga1, objektspieriga2, objektspieriga3);

    for(let i=0; i<3; i++) {
        objektaNumurs = i;
        let rezultats = apstrade(objektaNumurs); 
        document.getElementById("objektiRiga").innerHTML += rezultats;       
    }

    for(let i=6; i<9; i++) {
        objektaNumurs = i;
        let rezultats = apstrade(objektaNumurs); 
        document.getElementById("objektiPieriga").innerHTML += rezultats;       
    }

    function apstrade(objektaNumurs) {
        let izdruka = '<div class="objekts">'
                    + '<div class="bloks-attels">' 
                        + '<img src ="' + bookArray[objektaNumurs].attels +'" width="300" height="300">'
                    + '</div>'
                    + '<div class="bloks-jautājumi">'
                        + '<table class="koApmekletTabula">'
                            + '<tr>'
                                + '<td>Nosaukums</td>'
                                + '<td><b>' + bookArray[objektaNumurs].nosaukums +'</b></td>'
                            + '</tr>'
                            + '<tr>'
                                + '<td>Ko piedāvā</td>'
                                + '<td>' + bookArray[objektaNumurs].piedavajums +'</td>'
                            + '</tr>'
                            + '<tr>'
                                + '<td>Darba laiks</td>'
                                + '<td>' + bookArray[objektaNumurs].laiks +'</td>'
                            + '</tr>'
                            + '<tr>'
                                + '<td>Kontakti</td>'
                                + '<td><a href="' + bookArray[objektaNumurs].link +'" target="_blank">' + bookArray[objektaNumurs].adrese +'</a></br>'
                                + '    <a href="tel:' + bookArray[objektaNumurs].telefons +'" target="_blank">' + bookArray[objektaNumurs].telefons +'</a></td>'
                            + ' </tr>'
                            + '<tr>'
                                + '<td>Cena</td>'
                                + '<td>' + bookArray[objektaNumurs].cena +'</td>'
                            + '</tr>'
                        + '</table>'           
                    + '</div>'
                + '</div>';
        return izdruka;
    } 
}     