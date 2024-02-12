let input = document.getElementById('inputbox');
let button = document.querySelectorAll('button');
let string ="";
let arr = Array.from(buttons)
arr.forEach(button
=>{
    button.EventListener('click',(e)=>{
        if(e.terget.innerHTML == '='){
            string=eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            String = "";
            inputvalue = string;
        }
        else if(e.terget.innerHTML == 'DEL'){
            string = string.substring(0,string. 
                length-1)
                input.value = string;
        }
        else{
        string+= e.terget.innerHTML
        inputvalue = string ;}
    })
}    )