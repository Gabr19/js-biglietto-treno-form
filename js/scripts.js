const kminput = document.getElementById("km-input");
    console.log("La distanza da percorrere è: ", kminput.value);

const ageinput = document.getElementById("age-input");
    console.log("La distanza da percorrere è: ", ageinput.value);

const buttonsubmit = document.getElementById("button-submit")

buttonsubmit.addEventListener('click' ,

    function() {

        // console.log('kminput.value' , kminput.value)
        // console.log('ageinput' , ageinput.value)

        if (ageinput.value>=19 && ageinput<=64) {
            let x = kminput;
            let y = 0.21;
            let z = x * y;
            console.log( z.toFixed( 2 ) );
            // document.getElementById("number").innerHTML=( z.toFixed( 2 ) ) ;
        
        
        }
        
        else if (ageinput>=65) {
            let x = kminput;
            let y = 0.21;
            let z = x * y * 0.6;
            console.log( z.toFixed( 2 ) );
            // document.getElementById("number").innerHTML=( z.toFixed( 2 ) ) ;
        }
        
        else {
            let x = kminput;
            let y = 0.21;
            let z = x * y * 0.8;
            console.log( z.toFixed( 2 ) );
            // document.getElementById("number").innerHTML=( z.toFixed( 2 ) ) ;
        
        }

    }
)
