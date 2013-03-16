(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['myMoviesTemplate.html'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-role=\"header\">\r\n    <h1>My Movies2</h1>\r\n</div>\r\n\r\n<div data-role=\"content\">\r\n    <h2>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n</div>\r\n\r\n<div data-role=\"footer\" data-position=\"fixed\" >\r\n    <div data-role=\"navbar\" >\r\n        <ul>\r\n            <li><a href=\"#mymovies\" class=\"ui-btn-active ui-state-persist\">My Movies22</a></li>\r\n            <li><a href=\"#mywishlist\">My Wishlist22</a></li>\r\n        </ul>\r\n    </div>\r\n</div>";
  return buffer;
  });
})();