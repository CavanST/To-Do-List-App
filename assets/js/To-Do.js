// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// lick on X to delete to-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(750, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // taking new to-do text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").prepend("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    };
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});