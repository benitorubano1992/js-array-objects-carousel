const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
console.log(images);



let imageItem="";
let thumbItem="";
const boxItem=document.getElementById("item-box");
const thumbBox=document.getElementById("thumb-box");


images.forEach((item)=>{
    imageItem+=
    ` <div class="item hidden">
    <div class="item-image">
        <img src="images/${item.image}" alt="foto of ${item.text}">
    </div>
    <div class="item-text">
        <h2>${item.title}</h2>
        <p>${item.text}</p>
    </div>

    </div>`
    thumbItem+=
    ` <div class="col">
    <img src="images/${item.image}" alt="foto of ${item.text}">
    </div>`

})

boxItem.innerHTML=imageItem;
thumbBox.innerHTML=thumbItem;

const itemList=document.getElementsByClassName("item");
let slider=0;

itemList[slider].classList.add("visible");
const upBtn=document.getElementById("up-arrow");
const downBtn=document.getElementById("down-arrow");
upBtn.addEventListener("click",upImageShow)

downBtn.addEventListener("click",downImageShow)





/**
 * funzione che se invocata fa avanzare lo slider di 1 
 * 
 * 
 */
function upImageShow(){
    itemList[slider].classList.remove("visible"); 
    if(slider<itemList.length-1){
     slider++;
     }
     else{
     slider=0;
         
     }
     itemList[slider].classList.add("visible");
}


function downImageShow(){
    itemList[slider].classList.remove("visible");  
    if(slider>0){
        slider--;
        }
        else{
        slider=itemList.length-1;
            
        }
        itemList[slider].classList.add("visible");

}

