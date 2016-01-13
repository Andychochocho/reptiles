$ (document).ready(function() {
    var animal = prompt("Turtles, Snakes or Insects?");
    if (animal === "turtles") {
      $("#turtle").show();
    }
    if (animal === "snakes") {
      $("#snake").show();
    }
    if (animal === "insects") {
      $("#insect").show();
    }
});
