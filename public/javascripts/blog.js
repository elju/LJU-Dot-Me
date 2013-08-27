// Generated by CoffeeScript 1.6.2
$(function() {
  var $blogContainer, Blog, blog;

  $blogContainer = $('#blog-container');
  Blog = (function() {
    function Blog(container, currentPage) {
      if (currentPage == null) {
        currentPage = 'http://lju.me/blog/_site/';
      }
      this.$container = $(container).on('click', function(e) {
        if (e.target.tagName === "A" || "a") {
          e.preventDefault();
          e.stopPropagation();
        }
        return true;
      }).on('mousedown', function(e) {
        return true;
      });
      this.currentPage = currentPage;
    }

    Blog.prototype.updatePage = function(page) {
      var _this = this;

      this.currentPage = page;
      return $.ajax(this.currentPage, {
        complete: function(data) {
          _this.$container.html('');
          $(data.responseText).appendTo(_this.$container);
          return _this.fixLinks();
        }
      });
    };

    Blog.prototype.fixLinks = function() {
      return $('#blog-container a[href*="blog/_site"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        blog.updatePage(this.href);
        return false;
      }).mousedown(function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    };

    return Blog;

  })();
  blog = new Blog(document.getElementById('blog-container'));
  return blog.fixLinks();
  /*
  # Make an ajax call and get the new page content
  # After getting it, clear out the current page,
  # and replace with the new html.
  bootstrap = () ->
      loadNewPage = (e) ->
          swapData = (data) ->
              $blogContainer.html(data.responseText)
              do fixLinks
  
          page = this.currentPage
          options = {complete: swapData}
          $.ajax(page, options)
  
      $blogContainer.on('pageChange', loadNewPage)
  
  fixLinks = () ->
      $('#blog-container a[href*="blog/_site"]').on('mousedown', (e) ->
          e.preventDefault()
          e.stopPropagation()
          blog.updatePage(this.href)
          return null
      )
  */

});
