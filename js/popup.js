// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function(){
  function get_location() {
    return location;
  }

  $('#open-PIP-btn').click(function() {
    // var URL = $('#URL-input').val();
    if (URL != ''){
      // alert('Worked');
      $('#URL-input').val('');
    }
    // alert("didn't work");
    
    // window.close();
  });

  $('#URL-input').keydown(function(e){
    if (13 == e.which){
      $('#open-PIP-btn').click();
    }
  });

});



// var popupGenerator = {
// 	loadPopup: function() {
// 		// var form_ = document.createElement('form');
// 		// form_.id = "the_form";
// 		// var input_ = document.createElement('input');
// 		// input_.id = "input_url";
// 		// var button_ = document.createElement('button');
// 		// button_.setAttribute('type', "submit");
// 		// document.body.appendChild(form_);
// 		// $('#form_').append(input_);
// 		// $('#form_').append(button_);
// 	}
// };

// // Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.getSelected(null, function (tab) {
    $("#URL-input").val(tab.url);
  });
});



  // /**
  //  * Flickr URL that will give us lots and lots of whatever we're looking for.
  //  *
  //  * See http://www.flickr.com/services/api/flickr.photos.search.html for
  //  * details about the construction of this URL.
  //  *
  //  * @type {string}
  //  * @private
  //  */
  // searchOnFlickr_: 'https://secure.flickr.com/services/rest/?' +
  //     'method=flickr.photos.search&' +
  //     'api_key=90485e931f687a9b9c2a66bf58a3861a&' +
  //     'text=' + encodeURIComponent(QUERY) + '&' +
  //     'safe_search=1&' +
  //     'content_type=1&' +
  //     'sort=interestingness-desc&' +
  //     'per_page=20',

  // /**
  //  * Sends an XHR GET request to grab photos of lots and lots of kittens. The
  //  * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
  //  *
  //  * @public
  //  */
  // requestKittens: function() {
  //   var req = new XMLHttpRequest();
  //   req.open("GET", this.searchOnFlickr_, true);
  //   req.onload = this.showPhotos_.bind(this);
  //   req.send(null);
  // },

  // *
  //  * Handle the 'onload' event of our kitten XHR request, generated in
  //  * 'requestKittens', by generating 'img' elements, and stuffing them into
  //  * the document for display.
  //  *
  //  * @param {ProgressEvent} e The XHR ProgressEvent.
  //  * @private
   
  // showPhotos_: function (e) {
  //   var kittens = e.target.responseXML.querySelectorAll('photo');
  //   for (var i = 0; i < kittens.length; i++) {
  //     var img = document.createElement('img');
  //     img.src = this.constructKittenURL_(kittens[i]);
  //     img.setAttribute('alt', kittens[i].getAttribute('title'));
  //     document.body.appendChild(img);
  //   }
  // },

  // /**
  //  * Given a photo, construct a URL using the method outlined at
  //  * http://www.flickr.com/services/api/misc.urlKittenl
  //  *
  //  * @param {DOMElement} A kitten.
  //  * @return {string} The kitten's URL.
  //  * @private
  //  */
  // constructKittenURL_: function (photo) {
  //   return "http://farm" + photo.getAttribute("farm") +
  //       ".static.flickr.com/" + photo.getAttribute("server") +
  //       "/" + photo.getAttribute("id") +
  //       "_" + photo.getAttribute("secret") +
  //       "_s.jpg";
  // }