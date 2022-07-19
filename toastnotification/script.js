let notification=document.querySelector('.notification');

let btn=document.querySelector('.btnsub');

let noti=document.querySelector('.notif');



let count=1;

btn.addEventListener('click',()=>{

    noti.innerHTML+=`
<div class="alert alert-dark  alert-dismissible fade show">
    <button class="btn-close bg-warning" data-bs-dismiss="alert" title="it will delete the notification"> </button>
  <div class="me-3" > hi! this is nofication ${ count++ }</div>    
</div>
</div>
`  
})