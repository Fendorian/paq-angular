const URL = "localhost/Rudarstvo";
const API_GET_PRODUCT_FOR_CATEGORY = "http://localhost/Rudarstvo/api/Products/GetItemsByCategory/";
const GET_ALL_BIRACI = "http://localhost/Rudarstvo/uzmiSveRude";

function getJson(url, callback) {
    fetch(url).then((response) => response.json())
    .then(data => callback(data.Table)) 
    .catch(error => console.log(error))
}
function getMenu(){
    fetch("menu.html").then(response => 
        response.text()
    ).then(data => {
        document.querySelector('.meni').innerHTML = data;
    })
}
function getPageImage(){
    fetch("pageImage.html").then(response => 
        response.text()
    ).then(data => {
        document.querySelector('.pageImage').innerHTML = data;
    })
    
}
function getOnama() {
    fetch("izmena.html").then(response => 
        response.text()
    ).then(data => {
        document.querySelector('.izmena').innerHTML = data;
    })
}
function getUbacaj() {
    fetch("ubacaj.html").then(response => 
        response.text()
    ).then(data => {
        document.querySelector('.ubacaj').innerHTML = data;
    })
}
function getMainContent(){
    fetch("mainContent.html").then(response => 
        response.text()
    ).then(data => {
        document.querySelector('.mainContent').innerHTML = data;
    })
}



// Funkcije filtriranja
function ispisiSveRude() {
    getJson(GET_ALL_BIRACI,(data) => {
        let rudeData ="";
        data.map((values)=> {
            rudeData+=`
            <div class="back-arrow" onclick="ispisiSveRude();">Povratak</div>
             <div class="card-wrapper" onclick="singleItem(this)">
             <div class="show-id">${values.ID}</div>
             <div class="brisanje-rude" onclick=brisanje(${values.ID})>Brisanje</div>
             <div class="izmena-rude" onclick="showOnama();">Izmena</div>
             <div class="image-wrapper">
              <img src=/images/products/${values.Slika}>
             </div>
             <h1>${values.ImeRude}</h1>
             <div class="description">${values.Opis}</div>
             </div>
             `;
        });
        document.querySelector('.main-cards').innerHTML = rudeData;
    })
    let mainCards = document.querySelector('.main-wrapper');
}
// Prikaz jednog rude
function singleItem(selekt) {
    let elements = document.querySelectorAll('.card-wrapper');
    // console.log(selekt);
    let item = document.querySelector('.card-wrapper');
    let nonSelectedItems = Array.from(elements).filter(item => {
        return item !== selekt;
    }).forEach(item => {
        item.style.display = 'none';
    })
    selekt.classList.add('selectedItem');
    selekt.parentNode.querySelector('.back-arrow').style.display = 'block';
    selekt.querySelector('.brisanje-rude').style.display = 'block';
    selekt.querySelector('.description').style.display = 'block';
}
function uzmiRuduOdRegiona(regionID){
    
    getJson('http://localhost/Rudarstvo/UzmiRuduOdRegiona/' + regionID,(data) => {
        let productData="";
          
       data.map((values)=> {
             productData+=`
             <div class="back-arrow" onclick="ispisiSveRude();">Povratak</div>
             <div class="card-wrapper" onclick="singleItem(this)">
             <div class="image-wrapper">
              <img src=/images/products/${values.ImageUrl}>
             </div>
             <h1>${values.ImeRude}</h1>
             <div class="description">${values.Struka}</div>
             </div>
             `;
         });
         document.querySelector('.main-cards').innerHTML =  "<div class='category-title'>" + "</div>"  + productData;
         
    })
    let mainCards = document.querySelector('.main-wrapper');
}
function uzmiSveRegione(){
    
    getJson('http://localhost/Rudarstvo/uzmiSveRegione/',(data) => {
        let regionData="";
          
       data.map((values)=> {
             regionData+=`  
             <div class="side-nav-item" data-value="Napredna_stranka" onclick="uzmiRuduOdRegiona(${values.RegionID});">
             <div class="side-nav-text">
                 <div class="side-nav-item2"> ${values.NazivRegiona} </div>
             </div>
             <div class="arrow-right"><img src="/images/arrow-right.svg"></div>
             </div>
             `;
         });
         console.log(regionData);
         document.querySelector('.side-nav').innerHTML += regionData;
         
    })
    let mainCards = document.querySelector('.main-wrapper');
}
// Search funckija
function pretraziRudu(){
    let birac = document.querySelector('#search').value;
    getJson('http://localhost/Rudarstvo/PretraziRudu/' + birac,(data) => {
        let biracPodaci='';

        data.map((values)=> {
            biracPodaci+=`
            <div class="back-arrow" onclick="ispisiSveRude();">Povratak</div>
            <div class="card-wrapper" onclick="singleItem(this)">
            <div class="image-wrapper">
             <img src=/images/products/${values.ImageUrl}>
            </div>
            <h1>${values.ImeRude}</h1>
            <div class="description">${values.Desc}</div>
            `;
             //  <div>${values.Abstract}</div>`;
             if(values.Abstract != null) {
                productData+=`<div>${values.Abstract}</div>`;
            }
            productData+=`</div>`;
        });
        let mainCards = document.querySelector('.main-wrapper');
    })
}
// Brisanje jednog biraca
async function brisanje(id){
    const response = await fetch(`http://localhost/Rudarstvo/DeleteRudu/${id}`,{
    method: 'DELETE'
});
    if (response.ok){
        alert('Бирач избрисан');
        ispisiSveRude();
    }else {
        console.log('Nesto ne radi');
    }
    }

getMenu();
getPageImage();
getOnama();
getUbacaj();
getMainContent();
uzmiSveRegione();
ispisiSveRude();


function showPocetna() {
    let onamaPage = document.querySelector(".izmena");
    onamaPage.style.display = 'none';

    let mainContent = document.querySelector(".mainContent");
    mainContent.style.display = 'block';

    let ubacaj = document.querySelector(".ubacaj");
    ubacaj.style.display = 'none';
}

function showOnama(){
    let onamaPage = document.querySelector(".izmena");
    onamaPage.style.display = 'block';

    let mainContent = document.querySelector(".mainContent");
    mainContent.style.display = 'none';

    let ubacaj = document.querySelector(".ubacaj");
    ubacaj.style.display = 'none';
}
function prikaziUbacaj(){
    let ubacaj = document.querySelector(".ubacaj");
    ubacaj.style.display = 'block';

    let mainContent = document.querySelector(".mainContent");
    mainContent.style.display = 'none';

    let onamaPage = document.querySelector(".izmena");
    onamaPage.style.display = 'none';
}
