function generateWindow(source_url) {
	console.log("Message was sent: "+source_url);

	chrome.runtime.sendMessage({create_pip: true, source: source_url}, function(response){
	});
}

function onMessage(message, sender, callback) {
	if (message.create_pip == true){
		console.log("Window will be generated: "+message.source);
	}
}

chrome.runtime.onMessage.addListener(onMessage);
