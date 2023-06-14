let navbar = document.querySelector('#navbar')
let links = document.querySelectorAll('.nav-link')
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
