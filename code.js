

let operandbtns= document.querySelectorAll('.opd');
let operatorbtn= document.querySelectorAll('.opr');
let output=document.getElementById('output');
let type=document.getElementById('type')

let opr=null;
let oprFreq=0;

let number1=0;
let number2=0;
let result=null;
// output.innerHTML=Math.floor(Math.sin(60))

        // for operands or numeric values //

operandbtns.forEach((Element)=>{
    Element.addEventListener('click',()=>{

        if(opr==null){
            number1+=Element.innerHTML;
        }
        else
            number2+=Element.innerHTML;

        if(type.innerHTML==0)
            type.innerHTML=""
        type.innerHTML+=Element.innerHTML;
        // console.log(number1,number2);
    });
});

operatorbtn.forEach((Element)=>{
    Element.addEventListener('click',()=>{
        oprFreq++;
        if(oprFreq>1){
            calculate();
        }
        opr=Element.innerHTML;
        type.innerHTML+=Element.innerHTML; 
    }); 
});
        
document.getElementById('clear').addEventListener('click',clearScreen)
document.getElementById('CE').addEventListener('click',clearScreen)

document.getElementById('result').addEventListener('click',calculate)

function calculate(){

    switch (opr) {
        case '+':
            result=parseFloat(number1)+parseFloat(number2);
            break;
        case '-':
            result=parseFloat(number1)-parseFloat(number2);
            break;
        case '*':
            result=parseFloat(number1)*parseFloat(number2);
            break;
        case '/':
            result=parseFloat(number1)/parseFloat(number2);
            break;
        default:
            output.innerHTML="Syntax Error"
            break;
    }

    number1=result;
    number2=0;
    output.innerHTML=result;
    // type.innerHTML=result
    // clearValues();
}

// function to reset variables //
function clearValues(){
    opr=null;
    number1=0;
    number2=0;
    oprFreq=0;
    type.innerHTML=0
}
function clearScreen(){
    type.innerHTML=""
    output.innerHTML="";
    clearValues();
}

function checkOpd(){
    if(opr!==null)
        number2=number2.slice(0,number2.length-1)
    else
        number1=number1.slice(0,number1.length-1)
}

document.getElementById('backspace').addEventListener('click',()=>{

    var screenEle=type.innerHTML;
    var screenlen=screenEle.length;

    var screenLastEle=screenEle[screenlen-1]
    console.log(screenLastEle)
    switch (screenLastEle) {
        case '+':
            opr='';oprFreq--;
            break;
        case '-':
            opr='';oprFreq--;
            break;
        case '*':
            opr='';oprFreq--;
            break;
        case '/':
            opr='';oprFreq--;
            break;

            // for operands /./
        case '0':
            checkOpd()
            break;
        case '1':
            checkOpd()
            break;
        case '2':
            checkOpd()
            break;
        case '3':
            checkOpd()
            break;
        case '4':
            checkOpd()
            break;
        case '5':
            checkOpd()
            break;
        case '6':
            checkOpd()
            break;
        case '7':
            checkOpd()
            break;
        case '8':
            checkOpd()
            break;
        case '9':
            checkOpd()
            break;
        case '.':
            checkOpd()
            break;
    
        default:
            output.innerHTML='Syntax Error'
            break;
    }
    console.log(number1,number2)
    type.innerHTML=screenEle.slice(0,screenlen-1)


}
)




