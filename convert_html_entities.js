/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/

function convertHTML(str) {
  str = str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;");
  return str;
}

convertHTML('Stuff in "quotation marks"');

//Completed Apr 16, 2018.
