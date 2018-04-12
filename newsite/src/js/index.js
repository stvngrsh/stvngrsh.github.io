import $ from 'jquery';
import '../sass/style.scss';

function requireAll(r) {
    console.log('require all');
    r.keys().forEach(r); 
}
requireAll(require.context('../img', true, /\.(jpe?g|png|gif|svg)$/i));

import data from '../data/data';
import test from '../data/test';

let myTemplate = require('../hbs/index.hbs');

createHTML();

function createHTML() {
    console.log('creating HTML');
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

$(document).ready(function () {
    $('.project-button').click(function(ev){
        openModal(ev);
    });
    $('.modal-close').click(function(ev) {
        closeModal(ev);
    });
    $('.project-modal').click(function(ev) {
        ev.stopPropagation();
    });
    $('#modals').click(function(ev) {
        closeModal(ev);
    });
    $(document).scroll(function () { 
        logoSkew();
    });
});

function logoSkew(e) {
    console.log('logo skew');
    const width = document.documentElement.clientWidth;

    const skewOuter = document.getElementById('wrapper').offsetTop;

    const skewBlue = document.getElementById('skew-blue').offsetTop;
    const blueHeight = document.getElementById('skew-blue').clientHeight;
    const blueTangentHeight = 0.3249 * width/2 - 125; //tan(18deg) = 0.3249

    const skewRed = document.getElementById('skew-red').offsetTop;
    const redHeight = document.getElementById('skew-red').clientHeight;


	let logoOffset = skewOuter - getScrollTop();

    let blueOffset = logoOffset - skewBlue + blueHeight - blueTangentHeight;
    let redOffset = logoOffset - skewRed + redHeight;

	let xP1 = 121 + blueOffset;
	let xP2 = blueOffset;

	let style = 'polygon(0% ' + xP2 + 'px, 100% ' + xP1 + 'px, 100% 100%, 0% 100%)';
 
    $('#logo-top').css('-webkit-clip-path', style);
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

function openModal(e) {
    e.preventDefault();
    let modal = e.currentTarget.dataset.modal;
    console.log(e.currentTarget);
    $('.project-modal').removeClass('open');
    $('#' + modal).addClass('open');
    $('#modals').addClass('open');
    $('body').bind('mousewheel touchmove', lockScroll);
}

function closeModal(e) {
    $('.project-modal').removeClass('open');
    $('#modals').removeClass('open');
    $('body').unbind('mousewheel touchmove', lockScroll);
}

function lockScroll(e) {
    e.preventDefault();
}

(function() {
    console.log('embed');
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
    var o = document.getElementsByTagName('script')[0];
    o.parentNode.insertBefore(s, o);
})();