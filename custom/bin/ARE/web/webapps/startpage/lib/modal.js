// Get the modal
var modal = document.getElementById('modalwrapper');
var init = true;

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.svgmodal');
var modalImg = $("#modalimage")
var captionText = document.getElementById("caption");

$('.svgmodal').click(function() {
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
    init = true;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// If the user clicks on anything except the modal itself,
// close the modal
$(document).click(function(event) {
    // FIXME: Currently modal is closed, whereevery the user
    // may click. Add if clause that catches and excludes
    // clicks on the image.
    if (init) {
        init = false;
    } else {
        modal.style.display = "none";
    }
});