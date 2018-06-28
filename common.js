/**
 * Created by chou6 on 2018-06-28.
 */

window.addEventListener('load', function () {
    // Not showing vendor prefixes.
    navigator.getUserMedia({audio: true}, function(localMediaStream) {
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(localMediaStream);
        // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
        // See crbug.com/110938.
        video.onloadedmetadata = function(e) {
            // Ready to go. Do some stuff.
            console.log("abc");
        };
    }, errorCallback);
});
var errorCallback = function(e) {
    console.log('Reeeejected!', e);
};


uploadFile = function () {
    var file = document.getElementById('myFile');
    var filedata = new FormData(); // FormData 인스턴스 생성
    if (!file.value) return; // 파일이 없는 경우 빠져나오기

    filedata.append('uploadfile', file.files[0]);

    $.ajax({
        url: "/",
        type: 'POST',
        data: filedata,
        cache: false,
        processData: false, // essential
        contentType: false, // essential, application/pdf doesn't work.
        enctype: 'multipart/form-data',

        // If sucess, download file
        success: function(data, status, xhr) {
            console.log("success");
        }
    });

};