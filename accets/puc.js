console.log(document.querySelector("#sidebar ul").appendChild(Element.innerHTML("<button type='submit' class='btn btn-block btn-hero-primary'><span>登入</span></button>")))



window.onload = function(){
    let hr = "baidu.com";
let rtul = document.querySelector("#sidebar ul");

let lis = document.createElement("li");
lis.classList.add("nav-main-heading");
lis.innerText = "更多";
let but = document.createElement("button");
let sp = document.createElement("span");
but.classList.add("btn","btn-block","btn-hero-primary");
but.style.textTransform = "none";
sp.innerText = "加入Telegram";
but.appendChild(sp);

rtul.appendChild(lis);
rtul.appendChild(but);

but.addEventListener("click",function () {
    window.open(hr);
});
}