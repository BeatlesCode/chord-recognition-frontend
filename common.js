/**
 * Created by chou6 on 2018-06-28.
 */

window.addEventListener('load', function () {
    
})

uploadFile = function () {
    var file = document.getElementById('myFile');
    var filedata = new FormData(); // FormData 인스턴스 생성
    console.log(filedata);
    if (!file.value) return; // 파일이 없는 경우 빠져나오기

    filedata.append('uploadfile', file.files[0]);

    var _xml = new XMLHttpRequest();
    _xml.open('POST', '/', true);
    _xml.onload = function (event) {
        if (_xml.status == 200) {
            console.log('upload');
        }
        else {
            console.log(error);

        }
    };

    _xml.send(filedata);
}