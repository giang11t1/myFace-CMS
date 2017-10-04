// $(document).ready(function() {
//     //Crop product-img
//     function cropProductImg() {
//         $("#openCropmodal").click(function(e) {
//             event.preventDefault();
//             $('#cropImgModal').modal('show');
//         });
//         window.addEventListener('DOMContentLoaded', function() {
//             var image = document.getElementById('image-mode');
//             var imageview = document.getElementById('view-img-box');
//             var cropBoxData;
//             var canvasData;
//             var urlImg;
//             var cropper;

//             $('#cropImgModal').on('shown.bs.modal', function() {
//                 cropper = new Cropper(image, {
//                     viewMode: 3,
//                     dragMode: 'move',
//                     aspectRatio: 1 / 1,
//                     minCropBoxWidth: 500,
//                     minCropBoxHeight: 500,
//                     ready: function() {
//                         // Strict mode: set crop box data first
//                         cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
//                     }
//                 });
//                 urlImg = cropper.getCroppedCanvas();
//                 console.log(cropper);
//                 console.log(urlImg);
//             }).on('hidden.bs.modal', function() {
//                 cropBoxData = cropper.getCropBoxData();
//                 canvasData = cropper.getCanvasData();
//                 cropper.destroy();
//             });
//             $("#get-img-btn").click(function(e) {
//                 event.preventDefault();
//                 cropBoxData = cropper.getCropBoxData();
//                 canvasData = cropper.getCanvasData();
//                 urlImg = cropper.getCroppedCanvas();
//                 console.log(canvasData);
//                 console.log(cropper);
//                 console.log(urlImg);
//                 // urlImg = cropper.getCroppedCanvas().toDataURL('image/jpeg');
//                 // console.log(urlImg);
//                 // imageview.setAttribute('src', urlImg);
//             });
//         });
//     };
// cropProductImg();
// });
var _URL = window.URL || window.webkitURL;
var image = document.getElementById('image-mode');
var cropper;
$(document).on('change', '.upload-img-btn', function() {
    console.log($(this).val());
    var count_image = $('.image_cropped').length;
    if (count_image >= 6) {
        $('.message').text('Chỉ chọn tối đa 6 hình ảnh.');
        $('#alert-modal').modal('show');
        $('.btn_upload').hide();
        return false;
    }
    var fileExtension = ['jpeg', 'jpg', 'png', 'gif'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
        $('.message').text('Bạn vui lòng chọn hình ảnh dạng ' + fileExtension.join(', '));
        $('#alert-modal').modal('show');
        return false;
    }
    var file, img;
    if ((file = this.files[0])) {
        if (file.size > 512000) {
            $('.message').html('Vui lòng chọn file nhỏ hơn 500KB.');
            $('#alert-modal').modal('show');
            return false;
        }
        img = new Image();
        img.onload = function() {
            var wid = this.width;
            var ht = this.height;

            if (wid >= 500 && ht >= 500) {
                var cropBoxData;
                var canvasData;
                var urlImg;
                $('#image-mode')[0].src = window.URL.createObjectURL(file);
                cropper = new Cropper(image, {
                    viewMode: 1,
                    aspectRatio: 1 / 1,
                    minCropBoxWidth: 450,
                    autoCropArea: 1,
                    zoomable: false,
                    ready: function() {
                        // Strict mode: set crop box data first
                        cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
                    }
                });
                if (count_image > 0) {
                    $('.product_right').show();
                    $('.product_left').hide();
                }
                $('#cropImgModal').modal('show');
            } else {
                $('.message').text('Vui lòng chọn hình với kích thước tối thiểu 500 x 500 pixel.');
                $('#alert-modal').modal('show');
                return false;
            }
        };
        img.src = _URL.createObjectURL(file);
    }
});
$(document).ready(function() {
    $('.close_crop').on('click', function() {
        cropBoxData = cropper.getCropBoxData();
        canvasData = cropper.getCanvasData();
        cropper.destroy();
        $('.upload-img-btn').val() == '';
    })
    $("#get-img-btn").click(function(e) {
        event.preventDefault();
        urlImg = cropper.getCroppedCanvas().toDataURL('image/jpeg');
        a = cropper.getCroppedCanvas();
        // demo
        console.log(a);

        var html = '<input type="text" id="src_img_crop" name="src_img_crop[]" value="' + urlImg + '" >';

        if ($('#check_ava').val() == '') {
            $('#check_ava').val('1');
            $('#img_ava').attr('src', urlImg);

        } else {
            $('<div class="col-xs-6 img-box "><div class="img-box-item list_img img-create"><button class="close remove-action img-remove-btn" type="button"><span aria-hidden="true">×</span></button><img src="' + urlImg + '" class="img_list" alt="myface"/></div></div>').insertAfter(".product-img-right");
        }
        $('#cropimg').append(html);
        $('#image-mode')[0].src = '';
        $('.upload-img-btn').val('');
        cropBoxData = cropper.getCropBoxData();
        canvasData = cropper.getCanvasData();
        cropper.destroy();
        console.log($(this).val());
    });
});
