// error handling 

console.log("calculator")

let string="";
let buttons = document.getElementsByClassName("button");

Array.from(buttons).forEach(button => {
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML === '='){
            string = eval(string);
           document.getElementsByClassName('text')[0].value=string; 
        }

        else if(e.target.innerHTML === 'CE'){
          string=  string.slice(0, string.length - 1);
            document.getElementsByClassName('text')[0].value=string; 
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
            document.getElementsByClassName('text')[0].value=string; 
        }
        else{
            string = string + e.target.innerHTML;
            document.getElementsByClassName('text')[0].value=string;
        }
    })
});