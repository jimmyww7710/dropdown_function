
$(".dropdown").on("touchstart click", function (event) {
    $(".dropdown").removeClass("expand");
    $(this).toggleClass("expand");
    SetDropdownInsideScreen($(this),".dropdown-content");
});

var SetDropdownInsideScreen = function (target, dropdownCotent) {
    var dropdowncontentPosition = target.find(dropdownCotent).offset();
    if (dropdowncontentPosition.left < 0) {
        target.find(dropCotent).css({ "left": - target.offset().left, "right": "initial" })
    }
}