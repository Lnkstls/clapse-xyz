console.log(
	document
		.querySelector("#sidebar ul")
		.appendChild(
			Element.innerHTML(
				"<button type='submit' class='btn btn-block btn-hero-primary'><span>登入</span></button>"
			)
		)
);

document.documentElement.addEventListener("click", function () {
	console.log("true");

	let tgsi = setInterval(function () {
        if(document.querySelectorAll("#sidebar ul li").length==12){
		if (document.getElementById("tgbt") == null) {
			let hr = "https://t.me/clapsev";
			let rtul = document.querySelector("#sidebar ul");

			let lis = document.createElement("li");
			lis.classList.add("nav-main-heading");
			lis.innerText = "更多";
			let but = document.createElement("button");
			but.id = "tgbt";
			let sp = document.createElement("span");
			but.classList.add("btn", "btn-block", "btn-hero-primary");
			but.style.textTransform = "none";
			sp.innerText = "加入Telegram";
			but.appendChild(sp);

			rtul.appendChild(lis);
			rtul.appendChild(but);

			but.addEventListener("click", function () {
				window.open(hr);
			});
		}else{
            // clearInterval(tgsi);
        }
    }
	}, 1000);
});
