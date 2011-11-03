// place your application-wide javascripts here

;function Application() {
  this.init();
};

Application.prototype.init = function(self){
  // initialize
}

Application.renderUserDetails = function(data){

  var keys = Object.keys(data);
  var description = "";
  $.each(keys, function(i, e){
    description += "<span><strong>" + e + ": </strong>";
    description += "" + data[e] + "</span><br />";
  });

  $("#description-text").html(description);
};

$(document).ready(function(){
  var app = new Application();
});
