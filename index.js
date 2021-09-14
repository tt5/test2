
//import { myfunc } from './js/myd3.js'
//myfunc();
//import { sevenMinuteTabs } from './js/sevenMinuteTabs.js'
//sevenMinuteTabs();
import { myline } from './js/myline.js'
myline();
import HyperPug from 'hyperpug'
const hp = new HyperPug()

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const setContent = (elementId, content) => {
document.getElementById(elementId).innerHTML = hp.parse(content)
}

setContent("title-content", "h2 Hello1")

const myfetch = () => (fetch('/markdown/html/page2.html').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	//var parser = new DOMParser();
	//var doc = parser.parseFromString(html, 'text/html');
  document.getElementById("center").innerHTML = html;

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
}))

document.getElementById("page2").addEventListener("click", myfetch)