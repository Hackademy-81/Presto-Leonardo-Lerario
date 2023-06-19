fetch('./annunci.json').then( (response)=> response.json()).then( (data)=> {

    // wrapper
    let categoriesWrapper = document.querySelector('#categoriesWrapper')
    let cardsWrapper = document.querySelector('#cardsWrapper')
    

function setCategoryFilter() {
    let categories = data.map( (announcement)=> announcement.category);
    // let uniqueCategories = [];

    // categories.forEach(category => {
    //     if(  !uniqueCategories.includes(category) ){
    //         uniqueCategories.push(category);
    //     }
    // });

     let uniqueCategories = new Set(categories);
    //  set: classe che crea un oggetto array like che può contenere solo elementi che non si ripetono 
    // posso convertire un array like in array con array.from
    // let uniqueCategories =array.from(new Set(categories)) ;

    uniqueCategories.forEach((category) => {
        let div = document.createElement('div');
        div.classList.add('form-check');
        div.innerHTML = `
        <input class="form-check-input" type="radio" name="category" id="${category}">
        <label class="form-check-label" for="${category}">
          ${category}
        </label>
        
        `;

        categoriesWrapper.appendChild(div)
    });


}

    setCategoryFilter();


    function showCards(array){

        array.sort((a,b) => b.price - a.price);

        cardsWrapper.innerHTML = ``;

        array.forEach((annuncio) => {
            let div = document.createElement('div');
            div.classList.add('announcement-card');
            div.innerHTML = `
            
            <p class="h2">${annuncio.name}</p>
            <p class="h3">${annuncio.category}</p>
            <p class="lead">${annuncio.price}€</p>
            
            `;

            cardsWrapper.appendChild(div)
        });


    };

    showCards(data);

    // input
    let radios = document.querySelectorAll('.form-check-input')
    let priceInput = document.querySelector('#priceInput')
    let wordInput = document.querySelector('#wordInput')
    // paragrafo
    let priceParagrafo=document.querySelector('#priceParagrafo')

    
    function filterByCategory() {
        let checked = Array.from(radios).find( (button) => button.checked );
        
        let categoria = checked.id;

        if (categoria != 'All') {
            let filtered = data.filter ((annuncio)=> annuncio.category == categoria);
            showCards(filtered);
        }else{
            showCards(data)
        }

    } 

        radios.forEach((button)=>{
            button.addEventListener('click', ()=>{
                filterByCategory();
            });
        });


    function setPriceInput() {
        let maxPrice = Math.ceil(data[0].price);
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceParagrafo.innerHTML = maxPrice;

    };
        
    setPriceInput();

    function filterByPrice() {
        let filtered = data.filter( (annuncio)=> +annuncio.price <= +priceInput.value);
        showCards(filtered)
    }


    priceInput.addEventListener('input', ()=>{
        priceParagrafo.innerHTML = priceInput.value;
        filterByPrice()
    });


    function filterByWord(){
        let filtered = data.filter((annuncio)=> annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()) )
        showCards(filtered)
    }

    wordInput.addEventListener('input', ()=>{
        filterByWord()
    })
});
