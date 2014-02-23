$(document).ready(function(){

	chrome.tabs.getSelected(null, function (tab) {
   	$("#URL-input").val(tab.url);
  	});

	$('#open-PIP-btn').click(function() {
		var URL = $('#URL-input').val();
		if (URL != ''){
			generateWindow(URL);
			$('#URL-input').val('');
			window.close();
		}
  	});

  	$('#URL-input').keydown(function(e){
    	if (13 == e.which){
      	$('#open-PIP-btn').click();
    	}
  	});
});