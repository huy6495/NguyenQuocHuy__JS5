/**
 * Muc dich: Bai tap JS buoi 5
 * Nguoi tao: Nguyen Quoc Huy
 * Ngay tao: 4/1/2021
 * Version: 1.0
 */

function getEle(ele){
    return document.getElementById(ele);
}


/**
 * Bai tap 1: Quan ly tuyen sinh
 */

// Kiem tra nhap/Vadiation:
var mangThongBao = ["Vui lòng nhập điểm môn 1", "Vui lòng nhập điểm môn 2", "Vui lòng nhập điểm môn 3",
                    "Vui lòng chọn khu vực","Vui lòng chọn đối tượng","Vui lòng nhập điểm chuẩn hội đồng",
                    "Điểm không nhỏ hơn 0, lớn hơn 10","Điểm chuẩn không nhỏ hơn 0, lớn hơn 30"];

function kiemTraNhap(idFill,idThongBao,indexThongBao){
    value = getEle(idFill).value;
    thongBao = getEle(idThongBao);
    if(value==""){
        thongBao.innerHTML = mangThongBao[indexThongBao];
    }else{
        thongBao.innerHTML = "";
    }
    if((idThongBao!=="thongBaoDiemHoiDong"&&value>10)||(value<0&&idThongBao!=="thongBaoDiemHoiDong")){
        thongBao.innerHTML = mangThongBao[6];
    }
    if((idThongBao=="thongBaoDiemHoiDong"&&value>30)||(idThongBao=="thongBaoDiemHoiDong"&&value<0)){
        thongBao.innerHTML = mangThongBao[7];
    }
}

// Bat buoc thoa tat ca dieu kien:
function tokenKiemTra(){
    ketQua=false;
    thongBao=[getEle("thongBaoDiem1"),getEle("thongBaoDiem2"),
            getEle("thongBaoDiem3"),getEle("thongBaoKhuVuc"),
            getEle("thongBaoDoiTuong"),getEle("thongBaoDiemHoiDong")];
    if((thongBao[0].innerHTML=="")&&(thongBao[1].innerHTML=="")
    &&(thongBao[2].innerHTML=="")&&(thongBao[3].innerHTML=="")
    &&(thongBao[4].innerHTML=="")&&(thongBao[5].innerHTML=="")){
    ketQua=true
    }
    return ketQua;
}

// Kiem tra dau rot:
getEle("kiemTra").addEventListener("click", function(){
    kiemTraNhap("diemMon1","thongBaoDiem1",0);
    kiemTraNhap("diemMon2","thongBaoDiem2",1);
    kiemTraNhap("diemMon3","thongBaoDiem3",2);
    kiemTraNhap("khuVuc","thongBaoKhuVuc",3);
    kiemTraNhap("doiTuong","thongBaoDoiTuong",4);
    kiemTraNhap("diemHoiDong","thongBaoDiemHoiDong",5);
    getEle("kQ").innerHTML="";
    if(tokenKiemTra()){
        var diem1=parseInt(getEle("diemMon1").value);
        var diem2=parseInt(getEle("diemMon2").value);
        var diem3=parseInt(getEle("diemMon3").value);
        var diemUuTien = parseInt(getEle("khuVuc").value)+parseInt(getEle("doiTuong").value);
        var diemHoiDong = parseInt(getEle("diemHoiDong").value);
        getEle("kQ").innerHTML = "Rớt rồi, chúc may mắn lần sau! :))"
        if(((diem1+diem2+diem3+diemUuTien)>=(diemHoiDong))&&diem1!==0&&diem2!==0&&diem3!==0){
            getEle("kQ").innerHTML = "Đậu rồi nhé!"
        }       
    }
})


/**
 * Bai 2: Tính tiền điện
 */
var mangThongBao2 = ["Vui lòng nhập tên khách hàng", "Vui lòng nhập số kWh sử dụng","Tên phải là kí tự",""];

function kiemTraNhap2(idFill,idThongBao,indexThongBao){
    value = getEle(idFill).value;
    thongBao = getEle(idThongBao);
    kQ = false;
    var mangKiTu = /^[A-Za-z]+$/;
    if(value==""){
        thongBao.innerHTML = mangThongBao2[indexThongBao];
    }else if(!value.match(mangKiTu)){
        thongBao.innerHTML = mangThongBao2[indexThongBao+2];
    }else{
        thongBao.innerHTML = "";
    }
}

function tokenKiemTra2(){
    ketQua=false;
    thongBao=[getEle("thongBaoTen"),getEle("thongBaokWh")]
    if((thongBao[0].innerHTML=="")&&(thongBao[1].innerHTML=="")){
        ketQua=true;
    }
    return ketQua;
}

getEle("kiemTra2").addEventListener("click", function(){
    kiemTraNhap2("ten","thongBaoTen",0);
    kiemTraNhap2("kWh","thongBaokWh",1);
    getEle("kQ2").innerHTML="";
    if(tokenKiemTra2()){
        var soKWhSuDung = parseInt(getEle("kWh").value);
        var tienDien=0;
        if(soKWhSuDung<=50&&soKWhSuDung>0){
            tienDien = soKWhSuDung*500;
        }else if(soKWhSuDung>50&&soKWhSuDung<=100){
            tienDien= 50*500 + (soKWhSuDung-50)*650;
        }else if(soKWhSuDung>100&&soKWhSuDung<=200){
            tienDien= 50*500 + 50*650 + (soKWhSuDung-100)*850;
        }else if(soKWhSuDung>200&&soKWhSuDung<=350){
            tienDien=50*500 + 50*650 + 100*850 + (soKWhSuDung-200)*1100;
        }else{
            tienDien=50*500 + 50*650 + 100*850 + 150*1100 + (soKWhSuDung-350)*1300;
        }
        getEle("kQ2").innerHTML = "Tiền điện là: " + tienDien + " vnđ";
    }
})


/**
 * Bai 3: Tính tiền cáp
 */
var mangThongBao3 = ["Vui lòng nhập mã khách hàng", "Vui lòng nhập số tài khoản","Vui lòng nhập số kênh cao cấp","Vui lòng nhập đầu nối thêm","Mã khách hàng có 6 số và phải bắt đầu bằng 1 hoặc 2","","",""];

function kiemTraNhap3(idFill,idThongBao,indexThongBao){
    value = getEle(idFill).value;
    thongBao = getEle(idThongBao);
    kQ = false;
    if(value==""){
        thongBao.innerHTML = mangThongBao3[indexThongBao];
    }else if(value>299999||value<100000){
        thongBao.innerHTML = mangThongBao3[indexThongBao+4];
    }else{
        thongBao.innerHTML = "";
    }
}

function tokenKiemTra3(){
    ketQua=false;
    thongBao=[getEle("thongBaoMa"),getEle("thongBaoTaiKhoan"),getEle("thongBaoKenh"),getEle("thongBaoDauNoi")]
    if((thongBao[0].innerHTML=="")&&(thongBao[1].innerHTML=="")
        &&(thongBao[2].innerHTML=="")&&(thongBao[3].innerHTML=="")){
        ketQua=true;
    }
    return ketQua;
}

getEle("kiemTra3").addEventListener("click", function(){
    kiemTraNhap3("maKH","thongBaoMa",0);
    kiemTraNhap3("taiKhoan","thongBaoTaiKhoan",1);
    kiemTraNhap3("soKenh","thongBaoKenh",2);
    kiemTraNhap3("dauNoiThem","thongBaoDauNoi",3);
    getEle("kQ3").innerHTML="";
    if(tokenKiemTra3()){
        var maKhachHang=parseInt(getEle("maKH").value);
        var tienCap=0;
        if(maKhachHang<=199999&&maKhachHang>=100000){
            tienCap= 4.5+20.5+parseInt(getEle("soKenh").value)*7.5;
        }else{
            tienCap=15+75+parseInt(getEle("dauNoiThem").value)*5+parseInt(getEle("soKenh").value)*50;
        }
        getEle("kQ3").innerHTML = "Tiền cáp là: " + tienCap + " $";
    }
})

/**
 * Ket thuc...
 */