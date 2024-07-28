#Projects related to DOM
#Project01
## color changer

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id==='grey'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id==='white'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id==='blue'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id==='yellow'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id==='green'){
            body.style.backgroundColor = event.target.id
        }
    })
})
