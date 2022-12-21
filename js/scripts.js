const kminput = document.getElementById("km-input");
    console.log("La distanza da percorrere è: ", kminput.value);

const ageinput = document.getElementById("age-input");
    console.log("La distanza da percorrere è: ", ageinput.value);

const buttonsubmit = document.getElementById("button-submit")

buttonsubmit.addEventListener('click' ,

    function() {

        console.log('kminput.value' , kminput.value)
        console.log('ageinput' , ageinput.value)
        

    }
)
