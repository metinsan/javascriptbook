/**
 * Created by PC on 5.11.2015.
 */

var modal = (function(){

var $window = $(window);
var $modal = $('<div class="modal"/>');
var $content = $('<div class="modal-content">');
var $close = $('<button role="button" class="modal-close">close</button>');
    $modal.append($content, $close);

    $close.on('click', function(e){
            e.preventDefault();
            modal.close();
        });


    return{

        center: function() {                          // Define center() method
            // Calculate distance from top and left of window to center the modal
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
            $modal.css({                                // Set CSS for the modal
                top:top + $window.scrollTop(),            // Center vertically
                left:left + $window.scrollLeft()          // Center horizontally
            });
        },
        open: function(settings) {                     // Define open() method
            $content.empty().append(settings.content);   // Set new content of modal

            $modal.css({                                 // Set modal dimensions
                width: settings.width || 'auto',           // Set width
                height: settings.height || 'auto'          // Set height
            }).appendTo('body');                         // Add it to the page

            modal.center();                              // Call center() method
            $(window).on('resize', modal.center);        // Call it if window resized
        },
        close: function() {                            // Define close() method
            $content.empty();                            // Remove content from modal
            $modal.detach();                             // Remove modal from page
            $(window).off('resize', modal.center);       // Remove event handler
        }

    };

}());