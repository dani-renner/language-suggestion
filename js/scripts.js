$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let coderName = $("input#coder").val();
    let coderOS = $("input:radio[name=OS]:checked").val();
    let coderBeverage = $("#beverage").val();
    $(".userName").text(coderName);
    function clear(){
      $(".cSharp").hide();
      $(".rubyOnRails").hide();
      $(".javascript").hide();
      $("python").hide();
    }  
    if (coderOS==="Linux"||coderBeverage==="wine"){
      clear();
      $(".cSharp").show();
    } else if (coderOS==="macOS"&&coderBeverage==="Mountain Dew"||coderOS==="macOS"&&coderBeverage==="beer"){
      clear();
      $(".rubyOnRails").show();
    } else if (coderBeverage==="almond milk"||coderBeverage==="water"){
      clear();
      $(".javascript").show();
    } else {
      clear();
      $(".python").show();
    }
  });
});
