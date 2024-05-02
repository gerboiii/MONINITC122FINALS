let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close')
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const product = [
    {
        id: 1,
        title:"Sunset Boulevard",
        collection:"Dream Collection",
        price: 500,
        image: "i1.png"
    },
    {
        id: 2,
        title:"Peaches N' Cream",
        collection:"Dream Collection",
        price: 500,
        image: "i2.png"
    },
    {
        id: 3,
        title:"Lavender Fields",
        collection:"Dream Collection",
        price: 500,
        image: "i3.png"
    },
    {
        id: 4,
        title:"Midnight",
        collection:"Dream Collection",
        price: 500,
        image: "i4.png"
    },
    {
        id: 5,
        title:"Supernova",
        collection:"Dream Collection",
        price: 500,
        image: "i5.png"
    },
    {
        id: 6,
        title:"Periwinkle",
        collection:"Dream Collection",
        price: 500,
        image: "i6.png"
    },
    {
        id: 7,
        title:"Fossil Gray",
        collection:"Earth Collection",
        price: 500,
        image: "i7.png"
    },
    {
        id: 8,
        title:"Dusty Rose",
        collection:"Earth Collection",
        price: 500,
        image: "i8.png"
    },
    {
        id: 9,
        title:"Celadon Green",
        collection:"Earth Collection",
        price: 500,
        image: "i9.png"
    },
    {
        id: 10,
        title:"Buckwheat",
        collection:"Earth Collection",
        price: 500,
        image: "i10.png"
    },
    {
        id: 11,
        title:"Wild Mushroom",
        collection:"Earth Collection",
        price: 500,
        image: "i11.png"
    },
    {
        id: 12,
        title:"Sunshine",
        collection:"Kids Collection",
        price: 500,
        image: "i12.png"
    },
    {
        id: 13,
        title:"Bubblegum",
        collection:"Kids Collection",
        price: 500,
        image: "i13.png"
    },
    {
        id: 14,
        title:"Dino",
        collection:"Kids Collection",
        price: 500,
        image: "i14.png"
    },
    {
        id: 15,
        title:"Lollipop",
        collection:"Kids Collection",
        price: 500,
        image: "i15.png"
    },
    {
        id: 16,
        title:"Rocket",
        collection:"Kids Collection",
        price: 500,
        image: "i6.png"
    },
    {
        id: 17,
        title:"Superhero",
        collection:"Kids Collection",
        price: 500,
        image: "i17.png"
    },
    {
        id: 18,
        title:"Unicorn",
        collection:"Kids Collection",
        price: 500,
        image: "i18.png"
    }
];

const categories = [...new Set(product.map((item) => {
    return item}))]

let i = 0;
let k=0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var {image, title, collection, price} = item;
    return (
        `<div class='itemProduct'>
            <div class='images'>
                <img src=${image}></img>
            </div>
                <div class="content">
                <h2>${title}</h2>
                <div class="price">$ ${price}.00</div>
                </div>` 
                + 
                "<button class='popup-btn'>Quick View</button>"
                + 
                `</div>` +
            `<div class='popup-view'>
                <div class='popup-card'>
                    <a><i class='bx bxs-x-circle'></i></a>
                    <div class='product-img'>
                        <img src=${image}>
                    </div>
                    <div class='info'>
                        <h2>${title}</h2>
                        <span>${collection}</span>
                        
                        <p>Wide mouth w/ flip cap Vacuum Insulated Stainless Steel Drinking Water Bottle.</p>
                        <span class='popup-price'>$ ${price}.00</span><br>` 
                        +
                        "<button class='addcart' onclick='addtocart("+(i++)+")'>Add To Cart</button>" +
                        "<a onclick='showNotification()'><button class='buynow' onclick='showToast(refreshMsg)'>Buy Now</button></a>" +
               `</div>
            </div>` +
        `</div>`
        
    )
}) .join('')

var cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a,1);
    displaycart();
}

function displaycart(a) {
    let j = 0; total=0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
        // match id with checkout
    } 
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "TOTAL = $ "+total+".00";
    return (
        `<div class='itemProduct'>
                <img src=${image}></img>
                <h2 style="color:#eee">${title}</h2>
                <div class="price" style="color:#eee;font-size:10px">$ ${price}.00</div>` + 
                "<span><i class='bx bxs-trash' onclick='delElement("+ (j++) +")'></i></span>" +
        `</div>`
    )
           
        }) .join('');
    }
}                       
