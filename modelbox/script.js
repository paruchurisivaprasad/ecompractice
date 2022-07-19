const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

let popdata=document.querySelector('#popdata');

let inp=document.querySelector('#inp');


popdata.addEventListener('click',()=>{


   let datatrue= confirm(` your name is ${inp.value}`);

   if(datatrue){

        container.classList.remove('active')

   }
   else{
    console.log(" enter your currect name ");
   }
    

})

open.addEventListener("click", () => {
    container.classList.add("active");
});

close.addEventListener('click',()=>{
    container.classList.remove('active')
})
