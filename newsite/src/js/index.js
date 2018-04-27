import $ from 'jquery';
import 'font-awesome/scss/font-awesome.scss';

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
    $('.modal-change.prev').click(function(ev) { 
        prevModal(ev);
    });
    $('.modal-change.next').click(function(ev) {
        nextModal(ev);
    });
    $(document).scroll(function () { 
        logoSkew();
    });
    $('#banner').click(function(ev) {
        scrollHome();
    });
    $(window).resize(function() {
        setScrollVars();
    });
});
$(window).on('load', function () {
    setScrollVars();
});

function scrollHome() {
    $('html, body').animate({
        scrollTop: $('#wrapper').offset().top
    }, 1000);
}

//Math constants
const textPadding = 20;
const radians = 0.314159; //18deg
const tangentVal = Math.tan(radians);

let bluePos;
let redPos;
let logoTangentHeight;

function setScrollVars() {
    //Initial distances from top, uses offsetTop
    let skewBlue = document.getElementById('skew-blue').offsetTop;
    let skewRed = document.getElementById('skew-red').offsetTop;
    let skewOuter = document.getElementById('wrapper').offsetTop;

    //Initial heights of blue section, uses clientHeight
    let blueHeight = document.getElementById('skew-blue').clientHeight;

    //Width of window
    let width = document.documentElement.clientWidth;

    //Tangent heights, the height of the skew part of the triangle -> tan(18deg) = x/(width/2)
    let tangentHeight = tangentVal * width/2;

    //Logo dimensions, offset is also calculated w/ same tangent method
    let logoWidth = $('#logo-top').width();
    let logoHeight = $('#logo-top').height();
    logoTangentHeight = tangentVal * logoWidth;

    //Actual position of bottom of skew lines
    bluePos = skewBlue + skewOuter + blueHeight - tangentHeight;
    redPos = skewRed + skewOuter + tangentHeight - logoHeight - textPadding;

    logoSkew();
}

function logoSkew() {
    
    //The scrolled distance past the logo
    let scroll = getScrollTop();
    
    //The scrolled distance past the skewed sections
    let blueOffset = bluePos - scroll;
    let redOffset = redPos - scroll;
    // $('#debug2').css('top', skewRed + skewOuter);
    // $('#debug3').css('top', redPos);
    let clipPath = "";
    let display = "";
    if(blueOffset >= 200) {
        $('#logo-bottom').removeClass('red');
        display = "none";
    } else if(blueOffset > -200 && blueOffset < 200) {

        let xP1 = logoTangentHeight + blueOffset;
        let xP2 = blueOffset;
        clipPath = 'polygon(0 ' + xP2 + 'px, 100% ' + xP1 + 'px, 100% 100%, 0 100%)';
        $('#logo-bottom').removeClass('red');
    } else if(redOffset > -200 && redOffset < 200) {

        let xP1 = logoTangentHeight + redOffset;
        let xP2 = redOffset;
        clipPath = 'polygon(0 0, 100% 0, 100% ' + xP2 + 'px, 0 ' + xP1 + 'px)';
        $('#logo-bottom').addClass('red');
    } else if(redOffset <= -200) {
        display = "none";
        $('#logo-bottom').addClass('red');
    }
    $('#logo-top').css('display', display);
    $('#logo-top').css('clip-path', clipPath);
    $('#logo-top').css('-webkit-clip-path', clipPath);
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
    enableModalChange(modal);
}

function enableModalChange(modal) {
    $('.modal-change').removeClass('enabled');
    let totalModals = $('.project-modal').length;
    if(modal === "proj-0") {
        $('.modal-change.next').addClass('enabled');
    } else if(modal === "proj-" + (totalModals - 1)) {
        $('.modal-change.prev').addClass('enabled');
    } else {
        $('.modal-change.prev').addClass('enabled');
        $('.modal-change.next').addClass('enabled');
    }
}

function closeModal(e) {
    $('.project-modal').removeClass('open');
    $('#modals').removeClass('open');
    $('body').unbind('mousewheel touchmove', lockScroll);
}

function prevModal(e) {
    e.preventDefault();
    e.stopPropagation();
    let modal = $('.project-modal.open').prop('id').slice(-1);
    if(modal > 0) {
        let newModal = modal - 1;
        $('.project-modal').removeClass('open');
        $('#proj-' + newModal).addClass('open');
    
        enableModalChange("proj-" + newModal);
    }
}

function nextModal(e) {
    e.preventDefault();
    e.stopPropagation();
    let modal = $('.project-modal.open').prop('id').slice(-1);
    let totalModals = $('.project-modal').length;

    if(modal < totalModals - 1) {
        let newModal = parseInt(modal) + 1;
        $('.project-modal').removeClass('open');
        $('#proj-' + newModal).addClass('open');
    
        enableModalChange("proj-" + newModal);
    }
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