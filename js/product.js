const getProducts = async () =>{
  const res = await fetch("products.json");
  const data = await res.json();
  const products = data.products;
  return products;
}

// display products

const displayProducts = (products, center) =>{
  let display = products.map( ({title, image, price}) =>`<div class="product">
  <div class="product-header">
    <img src=${image} class="small" alt="product">
  </div>
  <div class="product-footer">
    <h3>${title}</h3>
    <div class="rating">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <div class="product-price">
      <h4>$${price}</h4>
    </div>
  </div>

  <ul>
    <li>
      <a href="#"><i class="fas fa-eye"></i></a>
    </li>
    <li>
      <a href="#"><i class="fas fa-heart"></i></a>
    </li>
    <li>
      <a href="#"><i class="fas fa-sync"></i></a>
    </li>
  </ul>
</div>`);

  display = display.join("");
  center.innerHTML = display;

};
 

//Filtering

const catContainer = document.querySelector(".sort-category");
const filterBtns = [...document.querySelectorAll(".filter-btn")];

const productCenter = document.querySelector(".product-center");

if(catContainer){
  catContainer.addEventListener("click", async e=>{
    const target = e.target.closest(".section-title");
    if(!target) return;
    const id = target.dataset.id;
    const products = await getProducts();

    if(id){
      filterBtns.forEach( btn=>{
        btn.classList.remove("active");
      });
      target.classList.add("active");
      const menuCat = products.filter( product =>
        product.category === id);
      productCenter.classList.add("animate__animated", "animate__backInUp");
      setTimeout( () =>{
        productCenter.classList.remove("animate__animated", "animate__backInUp");
      }, 1000);
      displayProducts(menuCat, productCenter);
    }  
  });
}

const filterArray = async type =>{
  try{

    const products = await getProducts();
    return products.filter( product => product.category === type);

  }catch(error){
    console.log(`Type error : ${error}`)
  }
}

const allproduct = document.querySelector(".shop-center");


window.addEventListener("DOMContentLoaded", async () =>{
    const products = await getProducts();
    const defaultProducts = await filterArray("trend");
    displayProducts(defaultProducts, productCenter);
    displayProducts(products, allproduct);

})
