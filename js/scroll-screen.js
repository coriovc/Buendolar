var hovered_over = false;

$(document).bind("DOMMouseScroll", function (e) {
    if (hovered_over == true) {
        var control = $("#cntDiv");
        var direction = e.originalEvent.detail;
        var target = e.originalEvent.originalTarget;
        if (direction > 0) {
            if (target.scrollTopMax == target.scrollTop) {
                return false;
            }
        } else if (direction < 0) {
            if (target.scrollTop == 0) {
                return false;
            }
        }
        console.log(control);
        console.log(direction);
    }

});


$("#cntDiv").on("mouseenter", function (crtl) {
    hovered_over = true;
});

$("#cntDiv").on("mouseleave", function (crtl) {
    hovered_over = false;
});