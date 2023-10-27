document.addEventListener("DOMContentLoaded", () => {
  var linkElements = document.body.getElementsByTagName("a");
  for (i = 0; i < linkElements.length; i++) {
    let element = linkElements[i];
    element.href = "javascript:void(0);";
    element.setAttribute("onclick", "handleLinkClick();");
  }
});
