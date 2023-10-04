const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=> {
        nav.style.display="flex";
        const myTimeout = setTimeout(()=>nav.classList.add('active'), 50);
        
    })
}

if(close)
{
    close.addEventListener('click',()=> {
        
        nav.classList.remove('active');
        // const myTimeout = setTimeout(()=>nav.style.display="none", 50);
        
    })
}
