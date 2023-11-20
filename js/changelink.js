$('body').hide().fadeIn(4000,function(){alert("done");});
console.log("I am here");

$('h1').click(function(){
    $(this).text("HIde the image");
    $('img').hide();
    $('body').children('p').slideToggle();
});

$('img').each(function(){
    var path = $(this).attr('src');
    var newpath = "img/" +path;
    $(this).attr("src", newpath);
    console.log(path);
});

$('a').each(function(){
    $(this).css("text-decorations", "line through");
});