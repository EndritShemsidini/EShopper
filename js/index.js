$(document).ready(function() {

    const products = [
      {
        image:"images/product-1.jpg",
        text:"Colorful Stylish Shirt",
        pricetext:" 123.00$",
        spantext:"133.00$",
        icon1: "fa-solid fa-eye",
        icon1text:"View Detail",
        icon2:"fa-solid fa-cart-shopping",
        icon2text:"Add To Cart"
      },
      {
        image:"images/product-2.jpg",
        text:"Colorful Stylish Shirt",
        pricetext:" 123.00$",
        spantext:"133.00$",
        icon1: "fa-solid fa-eye",
        icon1text:"View Detail",
        icon2:"fa-solid fa-cart-shopping",
        icon2text:"Add To Cart"
      },
      {
        image:"images/product-3.jpg",
        text:"Colorful Stylish Shirt",
        pricetext:" 123.00$",
        spantext:"133.00$",
        icon1: "fa-solid fa-eye",
        icon1text:"View Detail",
        icon2:"fa-solid fa-cart-shopping",
        icon2text:"Add To Cart"
      },
      {
        image:"images/product-4.jpg",
        text:"Colorful Stylish Shirt",
        pricetext:" 123.00$",
        spantext:"133.00$",
        icon1: "fa-solid fa-eye",
        icon1text:"View Detail",
        icon2:"fa-solid fa-cart-shopping",
        icon2text:"Add To Cart"
      },
      {
        image:"images/product-5.jpg",
        text:"Colorful Stylish Shirt",
        pricetext:" 123.00$",
        spantext:"133.00$",
        icon1: "fa-solid fa-eye",
        icon1text:"View Detail",
        icon2:"fa-solid fa-cart-shopping",
        icon2text:"Add To Cart"
      },
      {
        image:"images/product-6.jpg",
        text:"Colorful Stylish Shirt",
        pricetext:" 123.00$",
        spantext:"133.00$",
        icon1: "fa-solid fa-eye",
        icon1text:"View Detail",
        icon2:"fa-solid fa-cart-shopping",
        icon2text:"Add To Cart"
      },
      {
        image:"images/product-7.jpg",
        text:"Colorful Stylish Shirt",
        pricetext:" 123.00$",
        spantext:"133.00$",
        icon1: "fa-solid fa-eye",
        icon1text:"View Detail",
        icon2:"fa-solid fa-cart-shopping",
        icon2text:"Add To Cart"
      },
      {
        image:"images/product-8.jpg",
        text:"Colorful Stylish Shirt",
        pricetext:" 123.00$",
        spantext:"133.00$",
        icon1: "fa-solid fa-eye",
        icon1text:"View Detail",
        icon2:"fa-solid fa-cart-shopping",
        icon2text:"Add To Cart"
      },
    ];
     // Your product data array
     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    for (var i = 0; i < products.length; i++) {
      const productCard = `
      <div class="col-xs-12 col-md-6 col-lg-3  mt-5 ">
      <div class="  border align-items-center ms-2">
      <img src="${products[i].image}" class="product-1 " alt="">
      <hr>
      <div>
        <h6 class="text-center mt-3">
          ${products[i].text}
        </h6>
        <h6 class="text-center">
         ${products[i].pricetext} <span class="span-text">${products[i].spantext}</span>
        </h6>
        </div>
        <hr class="mt-3">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-baseline mt-2 ms-3 ">
        
            <i class="${products[i].icon1}"></i>
         
          <p >${products[i].icon1text}</p>
          </div>
          <div class="d-flex align-items-baseline ms-auto mt-2 me-3">
          <button class="cart-button" data-id="${i}">
            <i class="${products[i].icon2}"></i>
            </button>
            <p>${products[i].icon2text}</p>
          </div>
        </div>
    </div>
    </div>
      `;
      
      $('.products').append(productCard);
    }  
// Add event listener to the shopping cart buttons
$(".cart-button").click(function() {
  const productId = $(this).data("id");
  const product = products[productId];
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log("Product added to cart:", product);
  alert("Product added to cart!");

  // Update cart count
  // const cartCount = cartItems.length;
  // $('.shopcart').text(cartCount);
  const cartCount = $('.shopcart');
const currentCount = parseInt(cartCount.text());
const newCount = currentCount + 1;
cartCount.text(newCount);

  
});

  
  });

  // const sixcards = [
  //   {
  //   text:"15 Products",
  //   image:"images/men-1.jpg",
  //   text2:"Men's dresses"
  //   },
  //   {
  //     text:"15 Products",
  //     image:"images/woman-1.jpg",
  //     text2:"Women's dresses"
  //     },
  //     {
  //       text:"15 Products",
  //       image:"images/baby-1.jpg",
  //       text2:"Baby's dresses"
  //       },
  //       {
  //         text:"15 Products",
  //         image:"images/camera-1.jpg",
  //         text2:"Accessories"
  //         },
  //         {
  //           text:"15 Products",
  //           image:"images/bags-1.jpg",
  //           text2:"Bags"
  //           },
  //           {
  //             text:"15 Products",
  //             image:"images/shoes-1.jpg",
  //             text2:"Shoes"
  //             }
    
  // ];

  // for (let i = 0; i < sixcards.length; i++) {
  //   const card = `
  //   <div class="col-xs-12 col-md-6 col-lg-4 my-3">
  //   <div class="border mx-3" >
  //   <p class="text-black-50 d-flex justify-content-end me-5">${sixcards[i].text}</p>
  //   <img src="${sixcards[i].image}" alt="" class="man1jpg ">
  //   <h5 class="my-3">${sixcards[i].text2}</h5>
  //   </div>
  // </div>
  //   `;

  //   $('.sixcards').append(card);
    
  // }

