//$(document).ready(
$(function() {

    $("#para").click(function() {
        $(this).fadeOut('slow', 'linear');
    });
    $("h3")
        .css("text-decoration","underline")
        .css("font-weight", "normal")
        .css("font-style", "italic"); //only semi-colon last attribute.
    
    $("ul li:first-child")
        .css("color", "red");
});

