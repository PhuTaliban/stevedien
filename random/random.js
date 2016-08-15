function quay(){
    return Math.floor(Math.random() * 100);
}
//Giang da sua file nay
btn.onclick = function(){
    var de = parseInt(sode.value);
    if(isNaN(de)){
        ketqua.innerHTML = "Bạn chưa nhập gì cả";
    } else {
        if(de == quay()){
            ketqua.innerHTML = "Xin chúc mừng! Bạn đã trúng đề :)";
        } else {
            ketqua.innerHTML = "Chúc bạn may mắn lần sau! :(";
        }
        setTimeout(function () {
            btn.innerHTML = "Quay lại";
            ketqua.innerHTML = "Click để quay lại";
        }, 2000);
    }

};

