// 价格列表
if (con_json.jlist.length > 0) {
	if (con_json.jlist.length > 0) {
		for (let i = 1; i < con_json.jlist.length; i++) {
			$("#jlistdom").append($("#jdom").clone(true));
		}
	}
	for (let i = 0; i < con_json.jlist.length; i++) {
		let name = con_json.jlist[i].jianame;
		let mon = con_json.jlist[i].mon;
		let wik = con_json.jlist[i].wik;
		let back = con_json.jlist[i].back;
		document.querySelectorAll("#jdom>div>div")[
			i
		].style.backgroundColor = back;
		document.querySelectorAll("#jianame")[i].append(name);
		document.querySelectorAll("#mon")[i].append(mon);
		document.querySelectorAll("#wik")[i].innerHTML = wik;
		console.log(i);
	}
} else {
	$("#but_dyue").remove();
}

// 联系我们
$("#lxwm").append(con_json.phone);