$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let coderName = $("input#coder").val();
    let coderOS = $("input:radio[name=OS]:checked").val();
    let coderBeverage = $("#beverage").val();
    let dob = $("#born").val();
    let color = $("#color").val();
    $(".userName").text(coderName);
    $(".userOS").text(coderOS);
    $(".userBeverage").text(coderBeverage);
    $(".userDob").text(dob);
    $(".userColor").text(color);
    function clear(){
      $(".output1").hide();
      $(".output2").hide();
      $(".output3").hide();
      $(".output4").hide();
    }
  
    if (coderOS==="Linux"||coderBeverage==="wine"){
      clear();
      $(".output1").show();
    } else if (coderOS==="macOS"&&coderBeverage==="Mountain Dew"||coderOS==="macOS"&&coderBeverage==="beer"){
      clear();
      $(".output2").show();
    } else if (coderOS==="windows"||coderBeverage==="almond milk"){
      clear();
      $(".output3").show();
    } else {
      clear();
      $(".output4").show();
    }
    console.log(dob);
  });
});