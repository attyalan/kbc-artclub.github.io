
$(document).ready(function(){
    $("#ev").hover(function(){
        $("#ev svg").css("fill", "#009FE3");
        $("#ev p").css("color", "white");
        $("#ev svg").css("width", "#110%");
        }, function(){
        $("#ev svg").css("fill", "white");
        $("#ev p").css("color", "#009FE3");
        $("#ev svg").css("width", "#100%");
    });
});

$(document).ready(function(){
    $("#fot").hover(function(){
        $("#fot svg").css("fill", "#F7A600");
        $("#fot p").css("color", "white");
        $("#fot svg").css("width", "#110%");
        }, function(){
        $("#fot svg").css("fill", "white");
        $("#fot p").css("color", "#F7A600");
        $("#fot svg").css("width", "#100%");
    });
});

$(document).ready(function(){
    $("#ov").hover(function(){
        $("#ov svg").css("fill", "#D3D800");
        $("#ov p").css("color", "white");
        $("#ov svg").css("width", "#110%");
        }, function(){
        $("#ov svg").css("fill", "white");
        $("#ov p").css("color", "#D3D800");
        $("#ov svg").css("width", "#100%");
    });
});




// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}




var modal = document.getElementById('myModal');
var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg4');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg5');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg6');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg7');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg8');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg9');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById('myModal');
var img = document.getElementById('myImg10');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}










window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 15);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}









$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });









  $(function() {

  $('.dropdown > .caption').on('click', function() {
    $(this).parent().toggleClass('open');
  });

  $('.dropdown > .list > .item').on('click', function() {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
  });

  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown').removeClass('open');
    }
  });

  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown > .caption").length === 0 ) {
      $('.dropdown').removeClass('open');
    }
  });

});
