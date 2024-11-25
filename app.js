const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
// const img=document.getElementById('trouser1.jpg');
// img.width=200;
// img.height=150;
const products = [
  {
    id: 1,
    title: "LUXE TSHIRT",
    price: 699,
    colors: [
      {
        code: "black",
        img: "tshirt1.jpg",
      },
      {
        code: "grey",
        img: "tshirt2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "LUXE SHIRTS",
    price: 699,
    colors: [
      {
        code: "white",
        img: "shirt2.jpg",
      },
      {
        code: "#f2bfe9",
        img: "shirt1.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Luxe Formal Wear",
    price: 799,
    colors: [
      {
        code: "black",
        img: "formal1.jpg",
      },
      {
        code: "white",
        img: "formal2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: " LUXE Trousers",
    
    price: 899,
    colors: [
      {
        code: "#4a3d3d",
        img: "trouser1.jpg",
      },
      {
        code: "#d1c1a9",
        img: "trouser2.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Luxe Tones",
    price: 999,
    colors: [
      {
        code: "#6495ED",
        img: "tone1.jpg",
      },
      {
        code: "DarkBlue",
        img: "tone2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});