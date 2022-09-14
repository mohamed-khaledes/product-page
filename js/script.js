// active element in header
let elementsHeader = document.querySelectorAll("li");
function eleHeader(){
    elementsHeader.forEach((ele)=>{
        ele.addEventListener("click",function(e){
            elementsHeader.forEach((el)=>{
                el.classList.remove("active-ele")
            })
            e.target.classList.add("active-ele");
        })
    })
}
eleHeader();
// End active element in header
// testemonials products
let imgs = document.querySelectorAll(".img");
let productImg = document.querySelector('.product-img')
let productImgOverlay = document.querySelector('.product-img-overlay')
function switchImgs(){
    imgs.forEach((ele)=>{
        ele.addEventListener("click",function(e){
            imgs.forEach((ele)=>{
                ele.classList.remove("active")
            })
            let active =e.target.parentElement.classList.add("active");
            let ReplaceImg=document.querySelector('.active');
            productImg.innerHTML = ReplaceImg.innerHTML;
            productImgOverlay.innerHTML = ReplaceImg.innerHTML;
        })
    })
};
switchImgs();
// end testemonials
// start display overlay product
let closeBtn= document.querySelector('.close');
let overlay= document.querySelector('.overlay');
function overLay(){
    productImg.addEventListener('click',function(){
        overlay.style.display = "block";
        // overlay.style.opacity = 1;
    })
    closeBtn.addEventListener("click",(e)=>{
        overlay.style.display ="none";
        // overlay.style.opacity =0;
    })
}
overLay();
// end display overlay product
// start counter cart 
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let number = document.querySelector(".number");
function count(){
    let counter =0;
    plus.addEventListener("click",function(){
        counter +=1;
        number.innerHTML = counter;
    });
    minus.addEventListener("click",function(){
        counter -=1;
        if(counter < 0){
            counter = 0;
        }
        number.innerHTML = counter;
        });
};
count();
// end counter cart 
// add the number of product to your cart
let numOfProduct = document.querySelector('.number');
let addBtn = document.querySelector(".add-btn");
let parentOfCart = document.querySelector('.parent');
let numofYCart = document.querySelector('.numofYCart');
let totalProducts =document.querySelector(".total");
let countofpro = document.querySelector(".countOfPro");
let deleteProduct = document.querySelector(".delete");
function AddToCart(){
    addBtn.addEventListener("click",function(){
        // when i click of add to cart the count i choose display above my page in cart
        numofYCart.textContent = numOfProduct.textContent;
        // to sum the price of my products
        countofpro.textContent =numofYCart.textContent
        totalProducts.textContent = `$${numofYCart.textContent * 125}`;
    });
    deleteProduct.addEventListener("click",function(){
        parentOfCart.style.display = 'none';
        numofYCart.textContent =0;
        if(numofYCart.textContent == 0){
            parentOfCart.style.display ="none";
            let tosayempty =document.createElement('p');
            tosayempty.classList.add('empty')
            let text =document.createTextNode('your cart is empty');
            tosayempty.appendChild(text);
            cart.appendChild(tosayempty)
        }else{
            parentOfCart.style.display ="block";
            document.querySelector(".empty").remove();
        }
    })
}
AddToCart();
// add the number of product to your cart
//Start display your cart
let profile = document.querySelector('.profile');
let cart = document.querySelector(".cart");
function displayCart(){
    profile.addEventListener("click",function(){
        cart.classList.toggle("display");
        if(numofYCart.textContent == 0){
            parentOfCart.style.display ="none";
            let tosayempty =document.createElement('p');
            tosayempty.classList.add('empty')
            let text =document.createTextNode('your cart is empty');
            tosayempty.appendChild(text);
            cart.appendChild(tosayempty);
            setInterval(() => {
            document.querySelectorAll('.empty').forEach((el)=>{
                el.style.display = "none";
            })
            }, 5000);
        }else{
            parentOfCart.style.display ="block";
            document.querySelector(".empty").remove();
        }
        
    })
}
displayCart()
//end display your cart
// menu list for mobile
let menu = document.querySelector('.menu');
let nav =document.querySelector('nav');
function dispalyMenu(){
    menu.addEventListener("click",function(){
        nav.classList.toggle('displayNav')
    })
}
dispalyMenu()
// menu list for mobile