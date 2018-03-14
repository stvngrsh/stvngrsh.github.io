import '../sass/style.scss';
import data from '../data/data';
let myTemplate = require('../hbs/index.hbs');

document.addEventListener("scroll", logoSkew);
createHTML();

function logoSkew(e) {
    const width = document.documentElement.clientWidth;

    const skewOuter = document.getElementById('main-container').offsetTop;

    const skewBlue = document.getElementById('skew-blue').offsetTop;
    const blueHeight = document.getElementById('skew-blue').clientHeight;
    const blueTangentHeight = 0.3249 * width/2 - 4; //tan(18deg) = 0.3249

    const skewRed = document.getElementById('skew-red').offsetTop;
    const redHeight = document.getElementById('skew-red').clientHeight;


	let logoOffset = skewOuter - getScrollTop();

    let blueOffset = logoOffset - skewBlue + blueHeight - blueTangentHeight;
    let redOffset = logoOffset - skewRed + redHeight;

	let xP1 = 50 + blueOffset;
	let xP2 = blueOffset;

	let style = '-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% ' + xP1 + 'px, 0% ' + xP2 + 'px)';
 
	document.getElementById('logo-top').style = '-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% ' + xP1 + 'px, 0% ' + xP2 + 'px)';
	
}

function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}

function createHTML() {
    var main = document.getElementById('main');
    main.innerHTML = myTemplate(data);
}