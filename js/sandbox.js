function changeImage(imgId, newSrc) {
    var img = document.getElementById(imgId);
    img.src = newSrc;
  }

  
      $(document).ready(function(){
        $("p").hover(function(){
          $(this).css("background-color", "lightblue");
          }, function(){
          $(this).css("background-color", "pink");
        });
      });
    