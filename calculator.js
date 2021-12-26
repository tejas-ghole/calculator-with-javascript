
const calc = () =>{

        const num1 = document.getElementById('num1').value;
        const num2 = document.getElementById("num2").value;
        const op =  document.getElementById('operation');
        const getN =  operation.options[op.selectedIndex].value;
        let result;


        if(getN=="sum"){
            result = Number(num1)+ Number(num2)
            document.getElementById('res').innerHTML = `${result}`
        }if(getN=="subs"){
            result = Number(num1)-Number(num2)
            document.getElementById('res').innerHTML = `${result}`
        }
        if(getN=="mult"){
            result =Number(num1)*Number(num2)
            document.getElementById('res').innerHTML = `${result}`
        }
        if(getN=="div"){
            result = Number(num1)/Number(num2)
            document.getElementById('res').innerHTML = `${result}`
        }
}


