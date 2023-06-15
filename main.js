// navbar
let navbar = document.querySelector('#navbar')
let links = document.querySelectorAll('.nav-link')
let body = document.querySelector('body')
window.addEventListener('scroll', ()=> {
    let scrolled = window.scrollY;
    
    if (window.innerWidth > 600) {
        if (scrolled > 0) {
            navbar.style.backgroundColor = 'var(--blue)'
            navbar.style.width = '70%'
            
            links.forEach(link => {
                link.addEventListener('mouseenter', ()=>{
                    link.style.color = 'var(--white)'
                    
                    
                });
                
            });

            links.forEach(link => {
                link.addEventListener('mouseout', ()=>{
                    link.style.color = 'var(--black)'
                });
            });
            
        }else{
            navbar.style.backgroundColor = 'var(--white)'
            navbar.style.width = '100%'
            
            links.forEach(link => {
                link.addEventListener('mouseenter', ()=>{
                    link.style.color = 'var(--blue)'
                });
            });

            links.forEach(link => {
                link.addEventListener('mouseout', ()=>{
                    link.style.color = 'var(--black)'
                });
            });
            
        };
    };
    
    
});
// navbar end

// increment number
let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let number3 = document.querySelector('#number3')

function creatInterval(number,element,timing) {
    

let counter = 0;
let interval = setInterval(() => {
    
        if (counter < number) {
        counter++;
        element.innerHTML = counter;
        }else{
        clearInterval(interval);
        }
    

    }, timing);
}
// increment number end

let confirm = true;

let observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting && confirm) {
            creatInterval(1000, number1,1);
            creatInterval(1500, number2,1);
            creatInterval(50, number3,10);  
            confirm = false;
            setTimeout(()=>{
            confirm = true; 
            }, 6000); 
        }else{
            

        }
    });
});

observer.observe(number1)