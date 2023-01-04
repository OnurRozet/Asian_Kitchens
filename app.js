const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// const container=document.querySelector(".btn-container")
// const section=document.querySelector(".section-center")

// window.addEventListener("DOMContentLoaded",function(){
//   displayMenuItems(menu)
//   displayMenuButtons()
// })

// function displayMenuItems(menuItems){
//   let displaymenu=menuItems.map(function(item){
//     return `<article class="menu-items col-lg-6 col-sm-12">
//     <img src="${item.img}" alt="${item.title}" class="photo">
//     <div class="menu-info">
//       <header class="menu-title">
//         <h4>${item.title}</h4>
//         <h4>${item.price}</h4>
        
//       </header>
//       <p class="menu-text">${item.desc}</p>
//     </div>
//   </article>`
//   })
//   displaymenu=displaymenu.join("")
//   section.innerHTML=displaymenu
// }

// function displayMenuButtons() {
//   const categories=menu.reduce(function (values,item){
//     if(!values.includes(item.category)){
//       values.push(item.category)
//     }
//     return values

//   },
//   ["all"]
//   )
//   const categoryBtn=categories.map(function(category){
//     return ` <button class="btn btn-outline-secondary btn-item" type="button" data-id=${category}>
//     ${category}
//     </button>`
//   })
//   .join("")
//     container.innerHTML=categoryBtn
//     const filterBtn=container.querySelector(".btn")
//     filterBtn.forEach(function (btn) {
//       btn.addEventListener("click",function (e){
//         const category=e.currentTarget.dataset.id
//         const menuCategory=menu.filter(function(menuItem){
//           if(menuItem.category===category){
//             return menuItem
//           }
//         })
//         if(category==="all"){
//           displayMenuItems(menu)
//         }else{
//           displayMenuItems(menuCategory)
//         }
//       })
      
//     });
//}



let buttonAll = document.querySelector('.btn-container');
let menuItems = document.querySelector('.section-center');

let btnAll = document.createElement("button");
let btnKorea = document.createElement("button");
let btnJapan = document.createElement("button");
let btnChina = document.createElement("button");

btnAll.classList.add("btn", "btn-outline-dark", "btn-item");
btnKorea.classList.add("btn", "btn-outline-dark", "btn-item");
btnJapan.classList.add("btn", "btn-outline-dark", "btn-item");
btnChina.classList.add("btn", "btn-outline-dark", "btn-item");

btnAll.innerHTML = "All";
btnKorea.innerHTML = "Korea";
btnJapan.innerHTML = "Japan";
btnChina.innerHTML = "China";

buttonAll.appendChild(btnAll);
buttonAll.appendChild(btnKorea);
buttonAll.appendChild(btnJapan);
buttonAll.appendChild(btnChina);

btnAll.addEventListener("click", showAll);
btnKorea.addEventListener("click", showAll);
btnJapan.addEventListener("click", showAll);
btnChina.addEventListener("click", showAll);

function showAll() { // menüye her tıklandığında ürünler tüm kaldırılır
    while (menuItems.firstChild) {
        menuItems.removeChild(menuItems.firstChild)
    }

    // tüm menüyü map metoduyla çağırdık.
    const data = menu.map(menuItem => {

            // tüm menü ürünleri sayfaya yazdırıldı
            let productDiv = document.createElement("div");
            productDiv.classList.add("menu-items", "col-lg-6", "col-sm-12");

            // this, globaldeki gerçekleşen event in dom unu belirtir.
            this.innerHTML == menuItem.category ? menuItems.appendChild(productDiv) : 
            this.innerHTML == "All" ? menuItems.appendChild(productDiv): null;
            
            // img dosyaları çağrıldı.
            let image = document.createElement("img");
            image.classList.add("photo");
            image.src = menuItem.img;
            image.alt = menuItem.title;
            productDiv.appendChild(image);

            // menu-items altındaki menu-info div i eklendi
            let menuInfo = document.createElement("div");
            menuInfo.classList.add("menu-info");
            productDiv.appendChild(menuInfo);

            // menu-info altındaki menu-title çağrıldı
            let menuTitle = document.createElement("div");
            menuTitle.classList.add("menu-title");
            menuInfo.appendChild(menuTitle);

            // menu-title altındaki h4 ler eklendi ve bilgi-fiyat çağrıldı.
            let urunAdi = document.createElement("h4");
            let urunFiyat = document.createElement("h4");
            urunFiyat.classList.add("price");
            urunAdi.innerHTML = menuItem.title;
            urunFiyat.innerHTML = menuItem.price;
            menuTitle.appendChild(urunAdi);
            menuTitle.appendChild(urunFiyat);

            // menu-info altındaki menu-text eklendi, desc çağrıldı.
            let menuText = document.createElement("div");
            menuText.classList.add("menu-text");
            menuText.innerHTML = menuItem.desc;
            menuInfo.appendChild(menuText);
    })
};

