// increse and decrese num of product
let decrese = document.querySelector(".decrese");
let increse = document.querySelector(".increse");
let productNum = document.querySelector(".product-num");

increse.onclick = () => {
  productNum.innerHTML = parseInt(productNum.innerHTML) + 1;
};
decrese.onclick = () => {
  if (productNum.innerHTML >= 2)
    productNum.innerHTML = parseInt(productNum.innerHTML) - 1;
};

// visable and hide aside
let visibleAside = document.querySelector(".visible-aside");
let hideAside = document.querySelector(".delete-aside");

function visbleAsidefu() {
  let aside = document.querySelector(".aside-cart");

  aside.classList.toggle("visble-aside");
}
visibleAside.addEventListener("click", visbleAsidefu);
hideAside.addEventListener("click", visbleAsidefu);

//delete product
let delteIcon = document.querySelector(".delete-prodect");
delteIcon.onclick = () => {
  let product = document.querySelector(".product");
  let productsDiv = document.querySelector(".cart-product");
  product.innerHTML = "";
  if(productsDiv.innerHTML.length==0){
    console.log(4);
  }else{
    productsDiv.innerHTML=`
    <div class="d-flex flex-column mt-4 justify-content-center text-center btns empty-cart">
    
    <i class="fa-solid  fa-cart-shopping" style="font-size: 100px"></i>
    <p>No products in the cart.</p>
    <button class="btn w-50 mx-auto p-1">RETURN TO SHOP</button>
    </div>
    
    
    ` }
  // if (productsDiv.innerHTML == "") productsDiv.innerHTML="amr"
}
