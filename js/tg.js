// 删除头像
let list = document.querySelectorAll(".tgme_page_photo_image img");
function frlist(dom) {
	for (let i = 0; i < dom.length; i++) {
		dom[i].style.display = "none";
	}
}
frlist(list);
let userlist = document.querySelectorAll(".tgme_widget_message_user_photo img");
frlist(userlist);

let cslist = [
	".tgme_widget_message_service_photo" // 删除频道更新提示头像
];
for (let i = 0; i < cslist.length; i++) {
    document.querySelector(cslist[i])==null?null:document.querySelector(cslist[i]).style.display = "none";
    console.log(cslist);
}

// 更改down
document.querySelector(".tgme_channel_download_telegram").href =
	"https://telegram.org";
document.querySelector(".tgme_channel_download_telegram").target = "_black";

// 服务器支持标识
let colum = document.querySelectorAll(".tgme_footer_column");
for (let i = 1; i < colum.length; i++) {
	colum[i].style.display = "none";
	
}
colum[0].innerHTML = "<h5>服务器由TG<a href='javascript:void(0);'>@as_wang</a>提供</h5>"