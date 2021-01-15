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
    $(".userName").text(dob);
    $(".userName").text(color);
  
  if (coderOS==="Linux") {
    $(".output").show();
  }
});
});