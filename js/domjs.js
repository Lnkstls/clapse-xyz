// 价格参数
for (let i = 0; i < con_json.jlist.length; i++) {
    let name = con_json.jlist[i].jianame;
    let mon = con_json.jlist[i].mon;
    let wik = con_json.jlist[i].wik;
    $("#jianame"+i).append(name);
    $("#mon"+i).append(mon);
    $("#wik"+i).append(wik);
}

// 联系我们参数
$("#lxwm").append(con_json.phone);

