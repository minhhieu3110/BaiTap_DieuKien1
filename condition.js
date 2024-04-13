function kiemtra(){
    let soa= document.getElementById('a').value;
    let sob= document.getElementById('b').value;
    if(soa % sob == 0){
        document.getElementById('kt').innerHTML="a chia hết cho b";
    }
    else  {
        document.getElementById('kt').innerHTML="a không chia hết cho b";
    }
}
function kt_tuoi(){
    let tuoi = document.getElementById('age').value;
    if(tuoi >= 15){
        document.getElementById('tuoivao10').innerHTML = "Đủ điều kiện vào học lớp 10"
    }else {
        document.getElementById('tuoivao10').innerHTML = "Không đủ điều kiện vào học lớp 10"
    }
}
function ktra(){
    let songuyen = document.getElementById('so_ng').value;
      if(songuyen > 0){
            document.getElementById('so_nguyen').innerHTML="Số nguyên lớn hơn 0"
        }else{
            document.getElementById('so_nguyen').innerHTML = "Số nguyên nhỏ hơn 0"
        }
}
function findMax(){
    let ng_1 = parseInt(document.getElementById('so_1').value);
    let ng_2 = parseInt(document.getElementById('so_2').value);
    let ng_3 = parseInt(document.getElementById('so_3').value);
    let maxvalue;
    if(ng_1 >= ng_2 && ng_1 >= ng_3){
        maxvalue = ng_1
        //document.getElementById('max').innerHTML = "Số lớn nhất là số: "+ng_1;
    }else if(ng_2 >= ng_1 && ng_2 >= ng_3){
        maxvalue = ng_2
        //document.getElementById('max').innerHTML = "Số lớn nhất là số: "+ng_2;
    }else {
        maxvalue = ng_3
        //document.getElementById('max').innerHTML = "Số lớn nhất là số: "+ng_3;
    }

    document.getElementById('max').innerHTML = "Số lớn nhất là số: "+maxvalue
}
function xephang(){
    let GK = parseFloat(document.getElementById('giua').value);
    let CK = parseFloat(document.getElementById('cuoi').value);
    let DTB = parseFloat((GK + CK * 2) / 3);
    let xh;
    if(DTB < 5){
        xh ="Yếu"
    }else if(DTB >= 5 && DTB < 8){
        xh ="Khá"
    }else if(DTB >= 8 && DTB <= 10){
        xh ="Giỏi"
    }else {
        xh="Số điểm không hợp lệ không thể xếp hạng"
    }
    document.getElementById('hocluc').innerHTML = "Điểm trung bình: "+DTB+" _ Xếp Hạng: "+xh;
}