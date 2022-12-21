const kminput = document.getElementById("km-input");
    console.log("La distanza da percorrere è: ", kminput.value);

const ageinput = document.getElementById("age-input");
    console.log("L'età del passeggero è: ", ageinput.value);

const buttonsubmit = document.getElementById("button-submit")

buttonsubmit.addEventListener('click' ,

    function() {

        const km = kminput.value;
        const age = ageinput.value;

        if (age>=19 && age<=64) {
            let x = km;
            let y = 0.21;
            let z = x * y;
            console.log( z.toFixed( 2 ) );        
        }
        
        else if (age>=65) {
            let x = km;
            let y = 0.21;
            let z = x * y * 0.6;
            console.log( z.toFixed( 2 ) );
        }
        
        else {
            let x = km;
            let y = 0.21;
            let z = x * y * 0.8;
            console.log( z.toFixed( 2 ) );        
        }

    }
)
