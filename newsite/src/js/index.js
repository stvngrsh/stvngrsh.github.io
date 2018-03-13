import '../sass/style.scss';

document.addEventListener("scroll", logoSkew);

function logoSkew(e) {
    const width = document.documentElement.clientWidth;

    const skewOuter = document.getElementById('main-container').offsetTop;

    const skewBlue = document.getElementById('skew-blue').offsetTop;
    const blueHeight = document.getElementById('skew-blue').clientHeight;
    const blueTangentHeight = 0.3249 * width/2; //tan(18deg) = 0.3249

    const skewRed = document.getElementById('skew-red').offsetTop;
    const redHeight = document.getElementById('skew-red').clientHeight;


	let logoOffset = skewOuter - getScrollTop();

    let blueOffset = logoOffset - skewBlue + blueHeight - blueTangentHeight;
    let redOffset = logoOffset - skewRed + redHeight;

    console.log(blueTangentHeight, blueOffset);

	let xP1 = 40 + blueOffset;
	let xP2 = 2 + blueOffset;

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
