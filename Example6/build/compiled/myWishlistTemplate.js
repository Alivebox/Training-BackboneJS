(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['myWishlistTemplate.html'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"myWishlist\" >\r\n\r\n    <div data-role=\"header\">\r\n        <h1>My Wishlist33</h1>\r\n    </div>\r\n\r\n    <div data-role=\"content\">\r\n        <h2>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n    </div>\r\n\r\n    <div data-role=\"footer\" data-position=\"fixed\" >\r\n        <div data-role=\"navbar\" >\r\n            <ul>\r\n                <li><a href=\"#mymovies\">My Movies33</a></li>\r\n                <li><a href=\"#mywishlist\" class=\"ui-btn-active ui-state-persist\" >My Wishlist33</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
  return buffer;
  });
})();