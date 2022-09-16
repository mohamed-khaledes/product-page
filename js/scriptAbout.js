// active element in header
let elementsHeader = document.querySelectorAll("li a");
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

//Start display your cart
let profile = document.querySelector('.profile');
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
function displayCart(){
    cartIcon.addEventListener("click",function(){
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
            },5000);
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