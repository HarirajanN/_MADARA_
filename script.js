
//-------------------------random--------------------------------------//
const characters ='0123456789';
const charactersLength = characters.length;
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
        result = characters.charAt(Math.floor(Math.random() * charactersLength)) + result;
    }

    return result;
}
console.log( generateString(6))
let ans = generateString(6)
document.getElementById('enter').innerHTML = ans
 




 

function change(){
    let inVal = document.getElementById('cap').value
    let capVal = document.getElementById('enter').innerText
   
    if(inVal === capVal){
       
        document.getElementById('check').style.display = 'block'
    }
  
    else
        document.getElementById('ll').innerHTML = "--Enter Capcha--"
    
}



function cap(){
    document.getElementById('ll').style.display = 'none'
    document.getElementById('check').style.display = 'none'
}

function answer(){
        document.getElementById('ans1').style.backgroundColor = 'rgba(243, 71, 71, 0.644)';
        document.getElementById('ans2').style.backgroundColor = 'lightgreen';
    document.getElementById('ans3').style.backgroundColor = 'rgba(243, 71, 71, 0.644)';
    

}
function reset(){
    document.getElementById('ans1').style.backgroundColor = 'whitesmoke';
        document.getElementById('ans2').style.backgroundColor = 'whitesmoke';
    document.getElementById('ans3').style.backgroundColor = 'whitesmoke';

}