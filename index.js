window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    document.getElementById("fixed_main_link").style.top = "0";
  } else {
    document.getElementById("fixed_main_link").style.top = "-80px";
  }
}