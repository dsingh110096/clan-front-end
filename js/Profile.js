$(document).ready(function(){
    $("#edit-pic").hide();

    $(".image-container").hover(function(){
        $("#edit-pic").show();
    });
    $(".image-container").mouseleave(function(){
        $("#edit-pic").hide();
    });
});

// $(document).ready(function(){

//     $(".image-container").hover(function(){
//         $("#edit-pic").show();
//     });
//     $(".image-container").mouseleave(function(){
//         $("#edit-pic").hide();
//     });
// });