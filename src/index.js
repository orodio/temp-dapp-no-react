import * as fcl from "@onflow/fcl";
import * as sdk from "@onflow/sdk";
import * as t from "@onflow/types";

// Set an initial value for the count
fcl.config().put("count", 5);

// Set the dom element to show the count any time it changes
fcl.config().subscribe(function(config) {
  document.getElementById("count").innerText = config.count;
});

// increment the count when the +1 button is pressed
document.getElementById("inc").addEventListener("click", function() {
  fcl.config().update("count", count => count + 1);
});

// decrement the count when the -1 button is pressed
document.getElementById("dec").addEventListener("click", function() {
  fcl.config().update("count", count => count - 1);
});
