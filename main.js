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


// increment number end

// sezione carousel





let rewivers = [
    {name: 'Leonardo', recensione: 'Un sito davvero fatto bene', rank : 5},
    {name: 'Lynne', recensione: 'Si potrebbe fare di meglio', rank : 3},
    {name: 'Stefano', recensione: 'Non mi piace tantissimo la grafica di questo sito', rank : 3},
    {name: 'Bobby', recensione: 'Non mi dispiace, davvero fatto con tanta passione e cura', rank : 4},
];


let swiperWrapper = document.querySelector('.swiper-wrapper');

function genereteRewiews() {

    swiperWrapper.innerHTML= ''

    rewivers.forEach(rewiver => {
        let divSlide = document.createElement('div')
        divSlide.classList.add('swiper-slide')
        divSlide.innerHTML= `
        
                         <div class="d-flex flex-column justify-content-center  align-content-center text-center h-100 card-custom">
                          <h3>${rewiver.name}</h3>
                          <p>${rewiver.recensione}</p>
                          <div class="star">
                          </div>
                        </div>
        `
        swiperWrapper.appendChild(divSlide)
    });
    
    
    let stars = document.querySelectorAll('.star');
    
    stars.forEach((div , j) => {
        for (let i = 1; i <= rewivers[j].rank; i++) {
            let icon = document.createElement('i');
        icon.classList.add('fa-solid' , 'fa-star');
        div.appendChild(icon);
       }
    
       if (rewivers[j].rank < 5) {
            let difference = 5 - rewivers[j].rank;
            for (let i = 1; i <= difference; i++) {
                let icon = document.createElement('i');
            icon.classList.add('fa-regular' , 'fa-star');
            div.appendChild(icon);
           }
       }
        
    });
    
}

genereteRewiews()


let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



// fine sezione carousel

// Add rewiew
let userName = document.querySelector('#userName');
let userRewiew = document.querySelector('#userRewiew');
let userRank = document.querySelector('#userRank');
let btnRewiew = document.querySelector('#buttonRewiew');

btnRewiew.addEventListener('click', ()=>{
    rewivers.push({name:userName.value, recensione: userRewiew.value, rank : userRank.value})

genereteRewiews();

swiper.update();

userName.value = "";
userRewiew.value = "";
userRank.value = "";



});
// Add rewiew


