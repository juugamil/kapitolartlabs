jQuery(document).ready(function($){
	
	// Call the /posts endpoint via the WordPress API
	$.getJSON("http://kapitolartlabsdesign.wordpress.com/wp-json/", function (posts) {
  		
  		// Loop through all the posts returned and console.log() each of
  		// their HTML content
    		$.each(posts, function(index, post) {
    			console.log(post.content['rendered']);
    		});
	});
});