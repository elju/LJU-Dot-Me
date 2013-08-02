// Generated by CoffeeScript 1.6.2
$(function() {
  var $blogContainer, Blog, blog;

  $blogContainer = $('#blog-container');
  Blog = (function() {
    function Blog(container, currentPage) {
      this.currentPage = currentPage != null ? currentPage : 'http://lju.me/blog/_site/';
      this.$container = $(container).on('pageChange', $.proxy(this.loadNewPage, this));
      this.fixLinks();
    }

    Blog.prototype.updatePage = function(page) {
      this.currentPage = page;
      return this.$container.trigger('pageChange', this);
    };

    Blog.prototype.fixLinks = function() {
      return $('#blog-container a[href*="blog/_site"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        blog.updatePage(this.href);
        return null;
      });
    };

    Blog.prototype.loadNewPage = function(e, blog) {
      return $.ajax(blog.currentPage, {
        complete: function(data) {
          this.$container.html(data.responseText);
          return blog.fixLinks();
        }
      });
    };

    return Blog;

  })();
  blog = new Blog(document.getElementById('blog-container'));
  /*
  # Make an ajax call and get the new page content
  # After getting it, clear out the current page,
  # and replace with the new html.
  bootstrapBlog = () ->
      loadNewPage = (e) ->
          swapData = (data) ->
              $blogContainer.html(data.responseText)
              do fixLinks
  
          page = this.currentPage
          options = {complete: swapData}
          $.ajax(page, options)
  
      $blogContainer.on('pageChange', loadNewPage)
  
  fixLinks = () ->
      $('#blog-container a[href*="blog/_site"]').on('click', (e) ->
          e.preventDefault()
          e.stopPropagation()
          blog.updatePage(this.href)
          return null
      )
  */

  return blog.fixLinks();
});
