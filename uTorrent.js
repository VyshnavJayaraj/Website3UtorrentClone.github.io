const mobile_nav=document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
   // alert("Vyshnav Jayaraj");
    nav_header.classList.toggle('active');
  
}


mobile_nav.addEventListener('click',() => toggleNavbar() );


const btnone=document.querySelector('#btn1')

btnone.addEventListener('mouseenter', ()=>{
    btnone.style.backgroundColor='green';
})
btnone.addEventListener('mouseleave',()=>{
    btnone.style.backgroundColor='#76b83f';
})
btnone.addEventListener('click',()=>{
    btnone.style.backgroundColor='#007bff';
    btnone.style.borderColor='#fff';
})

const btntwo=document.querySelector('#btn2')

btntwo.addEventListener('mouseenter', ()=>{
    btntwo.style.backgroundColor='green';
})
btntwo.addEventListener('mouseleave',()=>{
    btntwo.style.backgroundColor='#76b83f';
})
btntwo.addEventListener('click',()=>{
    btntwo.style.backgroundColor='#007bff';
    btntwo.style.borderColor='#fff';
})

const btnthree=document.querySelector('#btn3')

btnthree.addEventListener('mouseenter', ()=>{
    
    btnthree.style.color='red';
})
btnthree.addEventListener('mouseleave',()=>{
    btnthree.style.backgroundColor='#fff';
    btnthree.style.color='#76b83f';
})
btnthree.addEventListener('click',()=>{
    btnthree.style.backgroundColor='#007bff';
    btnthree.style.borderColor='#fff';
})

const btnfour=document.querySelector('#btn4')

btnfour.addEventListener('mouseenter', ()=>{
    btnfour.style.backgroundColor='#fff';
    btnfour.style.color='#76b83f';
    btnfour.style.borderColor="#76b83f";
})
btnfour.addEventListener('mouseleave',()=>{
    btnfour.style.backgroundColor='#76b83f';
    btnfour.style.color='#fff';
})
btnfour.addEventListener('click',()=>{
    btnfour.style.backgroundColor='#007bff';
    btnfour.style.borderColor='#fff';
})

const btnfive=document.querySelector('#btn5')

btnfive.addEventListener('mouseenter', ()=>{
    
    btnfive.style.color='red';
})
btnfive.addEventListener('mouseleave',()=>{
    btnfive.style.backgroundColor='#fff';
    btnfive.style.color='#76b83f';
})
btnfive.addEventListener('click',()=>{
    btnfive.style.backgroundColor='#007bff';
    btnfive.style.borderColor='#fff';
})

const btnsix=document.querySelector('#btn6')

btnsix.addEventListener('mouseenter', ()=>{
    btnsix.style.backgroundColor='#fff';
    btnsix.style.color='#76b83f';
    btnsix.style.borderColor="#76b83f";
})
btnsix.addEventListener('mouseleave',()=>{
    btnsix.style.backgroundColor='#76b83f';
    btnsix.style.color='#fff';
})
btnsix.addEventListener('click',()=>{
    btnsix.style.backgroundColor='#007bff';
    btnsix.style.borderColor='#fff';
})


const linkone=document.querySelector('#link1')

linkone.addEventListener('mouseenter',()=>{
    linkone.style.color='#76b83f';
})
linkone.addEventListener('mouseleave',()=>{
    linkone.style.color='#000';
})





