let text='👋  Hello , My name is Paruchuri Siva prasad . ';

let txtElement=document.querySelector('.txt');

let count=0;
function autowrite(){

    txtElement.innerText=text.slice(0,count)

    count++;

    if(count>text.length){

        count=0;
        
    }

    
}

setInterval(autowrite,140)