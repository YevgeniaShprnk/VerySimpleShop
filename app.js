//for products count
let productsCountEl = document.querySelector(".product-count");
console.log(productsCountEl);

let addToCard = document.querySelectorAll(".btn-add-to-card");
console.log(addToCard);

addToCard.forEach((item) =>
    item.addEventListener("click", function(){
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
);
//for likes
let likes = document.querySelectorAll(".like");
likes.forEach((item) => 
    (item).addEventListener("click", (event) => {
      event.target.classList.toggle("likes");
    })
);
//for modal and form
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
btnClose.addEventListener("click", closeModal);


function openModal() {
modal.classList.add("show") ;
modal.classList.remove("hide");
};

function closeModal() {
modal.classList.add("hide");
modal.classList.remove("show");
};

modal.addEventListener("click", function (e) {
if (e.target === modal) {
closeModal();
}
});
//for modal on scroll

 function showModalonScroll() {
    let midHeight = document.documentElement.offsetHeight / 2;
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > midHeight){
        openModal();
        window.removeEventListener("scroll",showModalonScroll);
    }else{
        closeModal();
    };
  };
  window.addEventListener("scroll",showModalonScroll);

  
