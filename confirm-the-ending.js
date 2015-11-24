/*

Bonfire: Confirm the Ending

Check if a string (first argument) ends with the given target string (second argument).

*/
function end(str, target) {
  if (str.substr(str.length - target.length, target.length) === target) { // Substring returns a string based on start and end location provided.
      return true; // Return true if the if statement passes.
      } else {
        return false; // Otherwise return false.
      }
}

// Test Cases

end("Bastian", "n");