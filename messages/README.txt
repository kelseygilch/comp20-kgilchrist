README.txt

Identify what aspects of the work have been correctly implemented and what have not:
	Everything has been implemented correctly to the best of my knowledge (when loading 
	data from the data.json file).

Identify anyone with whom you have collaborated or discussed the assignment:
	I followed along during lecture and did a majority of my lab with Ming.

Say approximately how many hours you have spent completing the assignment:
	1.5 hours

Is it possible to request the data from a different origin 
(e.g., http://messagehub.herokuapp.com/) or from your local machine (from file:///) 
from using XMLHttpRequest? Why or why not? 
	No because XMLHttpRequests follow the same-origin policy so the request will only work 
	if it is made to the host that served the web page that made the request.
	It can only request information that comes from the same site that is making the request.
	This is for security reasons so one website can't get the information that is hosted
	on another website. 

	Using XMLHttpRequest requires the page to be hosted on a web server because it needs to be
	able to check if the origin and the server it's requesting the information from is the same.
	That's why opening up index.html in a web page won't work and you can't request data from a 
	different origin or from your local machine.
	data.json and the js file are both hosted on gh-pages of github so the request and the info
	being requested are hosted on the same web page.
 