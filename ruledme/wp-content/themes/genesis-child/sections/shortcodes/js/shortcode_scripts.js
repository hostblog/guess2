jQuery(document).ready(function($) {
    /**
    * Footnote
    */
    $(document).on('click', function(e){
        var container = $(e.target).next();
        var content = $(e.target).next().find(".footnote-content-data");
        var readmore = $(e.target).next().find(".footnote-readmore");

        if(e.target.className == 'footnote-button'){
            container.fadeToggle(function(){
                // Check if container scrollbar has reached the bottom
                $(content).on('scroll', function(){
                  if(content[0].scrollHeight - content.scrollTop() - content[0].clientHeight < 1){
                    readmore.fadeOut();
                  } else {
                    readmore.fadeIn();
                  }
                });
            });
        } else if(e.target.className !== 'footnote-content-data' && e.target.className !== 'footnote-content' && e.target.className !== 'footnote-spacer' && $('.footnote-container').is(':visible')) {
            $('.footnote-container').fadeOut();
        }
    });

});
