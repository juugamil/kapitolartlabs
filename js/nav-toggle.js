$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $("#nav-slide").toggle("slide");
    $(".navigation").toggleClass("bg-orange");
  });
  $("#back-button").click(function () {
    $("#nav-slide").hide(1000);
  });

  $(function () {
    $(document).scroll(function () {
      if (window.location.href === "http://127.0.0.1:5500/index.html") {
        var $nav = $(".navigation");
        $nav.toggleClass("scrolled", $(this).scrollTop() > 800);
      } else {
        var $nav = $(".navigation");
        $nav.toggleClass("scrolled", $(this).scrollTop() > 400);
      }
    });
  });

  $("a[href*='" + location.pathname + "']").addClass("current");
});
