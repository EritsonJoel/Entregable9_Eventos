



const formulario = document.getElementById('formulario');

const inputn1 = document.getElementById('input1');
const inputn2 = document.getElementById('input2');
const opcion = document.getElementById('opcion');



formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e)

 const n1 = inputn1.value;
 const n2 = inputn2.value;
 const  opciones = opcion.value;

 const nm1 = parseInt(n1);
 const nm2 = parseInt(n2);

switch (opciones){  //solo  permite la variable por la cual vamos a comparar los casos.

    case  'cuadrado':  //validando que sea numero y que el caso
        
       if( !isNaN(nm1) && !isNaN(nm2)){
        const RC = nm1 * nm2;
        alert(`el lado del triangulo es ` + RC + ' m2');
       }else{
        alert('Por Favor! solo debe ingresar numeros')
       }

  //

         break
        case 'rectangulo':

        if(!isNaN(nm1) && !isNaN(nm2)){
            const RR = nm1 * nm2;
            alert('el area del rectangulo es :' + RR + ' m2')
        }else{
            alert('por favor! solo debe ingresar Numeros')
        }


         break
         case 'triangulo':
                
            if(!isNaN(nm1) && !isNaN(nm2)){
                const RT = (nm1 * nm2)/2;
                alert('el area del triangulo es: ' + RT + ' m2')
            }else{
                alert('por favor! solo debe ingresar Numeros')
            }
              
                break
                default:
                     console.log("NO ingreso nada que podamos saber con antelación")
}


});

///VALIDANDO 

