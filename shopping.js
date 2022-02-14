// Delete a product


let deleteBtn = document.querySelectorAll(".delete-btn");
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function () {
    deleteBtn[i].parentElement.parentElement.remove();

    calculTotal();
  });
}

// Add Quantity


let plusBtn = document.getElementsByClassName("plus-btn");
console.log(plusBtn);
for (let plus of plusBtn) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerText++;

    calculTotal() ;
  });
}

// Dimune Quantity


let minusBtn = document.getElementsByClassName("minus-btn");
for (let minus of minusBtn) {
  minus.addEventListener("click", function () {
    if (minus.previousElementSibling.innerText > 0) {
      minus.previousElementSibling.innerText--;
    }

    calculTotal() ;

  });
}



// calcul des totaux des prix 

function calculTotal() {
  let prices = document.getElementsByClassName("total-price");

  let quantites = document.getElementsByClassName("quant");

  let amount = 0;


  for (let i = 0; i < prices.length; i++) {

    amount = amount + Number(prices[i].innerHTML) * Number(quantites[i].innerHTML);
  }

  document.getElementById("prix-total").innerHTML = amount;
}




//changer la couleur du coeur

let hearts = document.getElementsByClassName("fa-heart");
console.log(hearts);

for (let heart of hearts) {
  console.log("test1");

  heart.addEventListener("click", function () {
    console.log("test");
    if (heart.style.color === "grey") {
      heart.style.color = "red";
      console.log("test red");
    } else {
      heart.style.color = "grey";
      console.log("testgray");
    }
  });
}
