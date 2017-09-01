$(document).ready(function(){

 $("#search").click(function(e){
    e.preventDefault();
    var searchText = $("#searchText").val();
    if(searchText === ""){
      $("#error").html("<p class='error'>Type something in text box !.</p>").show();
    }else{
      $.ajax({
        url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchText+'&callback=?',
        type:'GET',
        dataType: 'jsonp',
        success: function(data){
          //get 10 results
          for(var i = 0; i <= 10; i++){
            $(".wrapper").append('<div class="well"><p><a href='+data[3][i]+' target="blank">'+data[1][i]+'</a></p><p>'+data[2][i]+'</p></div>');
          }
          $("#searchText").val("");
        }
      });
            $("#error").html("<p class='error'>Type something in text box !.</p>").hide();
    }
 });
});
