$(document).ready(function () {
  $('#tbody').bind("click", function(e){
    $(e.target).closest('.tdbox').toggleClass('tdclick')
  })
})
$(document).ready(function () {
  $("td").click(function () {
    var content = $(this).text();
    var coltitle = $('.thead').eq($(this).index()).text();

    if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");

      if ($(this).hasClass("tdhighlight")) {
        $("#displaySelected").css("visibility","visible");
        $("#displaySelected").css("margin-top", "2em");
        $("#result").append("<p>"+content+ "at" + coltitle + "</p>" );
      
    }else{
        $('#result p:contains ('+content+')').remove();

        if($('#result').has('p').length == false){
            $('#displaySelected').css("visibility", "hidden");
            $('#displaySelected').css("margin-top", "0");
        }

      }
    }
  });
});
