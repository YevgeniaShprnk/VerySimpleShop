let productsCountEl = document.querySelector(".product-count");
console.log(productsCountEl);

let addToCard = document.querySelectorAll(".btn-add-to-card");
console.log(addToCard);

addToCard.forEach((item) =>
    item.addEventListener("click", function(){
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
);

let likes = document.querySelectorAll(".like");
likes.forEach((item) => 
    (item).addEventListener("click", (event) => {
      event.target.classList.toggle("likes");
    })
);
