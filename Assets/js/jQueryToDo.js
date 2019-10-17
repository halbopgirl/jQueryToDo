//Cross off to dos
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete to do
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropogation();
});

//Add new item to list
$("input[type = 'text']").keypress(function(event) {
    if(event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
    }
});

$(".fa-plus").click(function(event) {
   $("input[type='text']").fadeToggle(); 
})