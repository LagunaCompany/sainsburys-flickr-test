/* global Handlebars */ 

'use strict';

(function(){

  // A tag to search Flickr API with, and a script element for triggering API call
  var tags = 'london',
    script = document.createElement('script'),

    // Will store results of call to Flickr API
    flickrData = null,

    /* Define where the Handlebars template is,
      and pass it to Handlebars */
    source = $('#thumbnail-template').html(), 
    template = Handlebars.compile(source),

    // Define handlers
    thumbnailClickHandler = function(){

      // Get the index of this thumbnail in relation to the other thumbnails
      var index = $(this).parent('.thumbnail').data('index');

      // Toggle classes on image and favourite icon as necessary
      $(this).toggleClass('selected')
        .next('.toggle-favourite')
          .toggleClass('glyphicon-star-empty glyphicon-star selected');

      // If this photo is selected, update its corresponding entry in flickrData
      flickrData.items[index].favourite = $(this).hasClass('selected') ? true : false;

      // Write the updated Flickr data to browser local storage
      localStorage.setItem('favouritePhotos', JSON.stringify(flickrData.items));

    };


    Handlebars.registerHelper('getGlyphClass', function(favourite) {

      // If this photo is a favourite, return classes to style as appropriate
      if(favourite){
        return 'glyphicon-star selected';
      } else {
        return 'glyphicon-star-empty';
      }

    });

  /* Use window object to put callback 'cb' in the 
    same scope as the returned JSON,
    otherwise the callback won't work! */
  window.cb = window.cb || function(data){

    // Copy data to flickrData for processing
    flickrData = data;

    // If browser local storage already contains favouritePhotos
    if(localStorage.hasOwnProperty('favouritePhotos')){

      // Merge with the new Flickr data
      $.merge(flickrData.items, JSON.parse(localStorage.favouritePhotos));

      // Remove duplicate items in Flickr data
      $.unique(flickrData.items);

    }

    // Merge the template and data, and append to gallery
    $('.flickr-gallery .row').append(template(data));	

    // Attach handlers
    $('.thumbnail img').on('click', thumbnailClickHandler);

  };  

  // Concatenate Flickr API call with tags
  script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=' + tags;

  // Add script element to head to trigger call to Flickr API
  document.head.appendChild(script);

})();