import '../sass/style.scss';

function requireAll(r) {
    r.keys().forEach(r); 
}
requireAll(require.context('../img', true, /\.(jpe?g|png|gif|svg)$/i));

import data from '../data/data';
import test from '../data/test';

let myTemplate = require('../hbs/index.hbs');

document.addEventListener("scroll", logoSkew);
createHTML();

function logoSkew(e) {
    const width = document.documentElement.clientWidth;

    const skewOuter = document.getElementById('wrapper').offsetTop;

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

    if (process.env.NODE_ENV === 'production') {
        console.log('Welcome to production');
        main.innerHTML = myTemplate(data);
    } else {
        console.log('Welcome to development');
        main.innerHTML = myTemplate(data);
    }
    if (process.env.DEBUG) {
        console.log('Debugging output');
    }
}

(function() {
    var buttons = document.getElementsByClassName('project-button');
    for(let button of buttons) {
        button.addEventListener('click', openModal);
    }
})();

function openModal(e) {
    let modal = e.target.dataset.modal;
    console.log(modal);
    document.getElementById(modal).className += " open";
}

function closeModal(e) {
    let modal = e.target.dataset.modal;
    document.getElementById(modal).className.replace(" " + open, "");
}

(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
    var o = document.getElementsByTagName('script')[0];
    o.parentNode.insertBefore(s, o);
})();