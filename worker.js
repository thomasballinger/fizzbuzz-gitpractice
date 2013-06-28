importScripts('fizzbuzz.js')
onmessage = function(oEvent){
	postMessage("just received event with data " + oEvent.data);
	postMessage(oEvent.data);
	postMessage(fizzbuzz(oEvent.data[0], oEvent.data[1]));
			}
