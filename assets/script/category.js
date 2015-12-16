(function() {
  var changeCategory, init;

  $(function() {
    init();
    return changeCategory();
  });
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
  init = function() {
    var category;
    category = "#"+getParameterByName("cat");
    console.log(category);
    if (category !== '') {
      return $(category).removeClass("hide");
    } else {
      return $('#all').removeClass("hide");
    }
  };

  changeCategory = function() {
    return $('.catelink').on('click', function(e) {
      e.preventDefault();
      var category;
      $('section.category').addClass('hide');
      category = $(this).data('target-cate');
      return $(category).removeClass("hide");
    });
  };

}).call(this);
