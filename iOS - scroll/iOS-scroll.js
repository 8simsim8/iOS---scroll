// scrollBlock - block-modal window, what scroll
// stopScroll - block, what disable scroll
function iOSscroll(scrollBlock, stopScroll) {

	var elemEnableScroll = searchElement(scrollBlock);

// disable scroll if it out scroll element
if(elemEnableScroll !== null) {
	elemEnableScroll.addEventListener('touchmove', function(e){
		var elemToch = e.target; // touch element
		var isEnableScroll = false;
		while(elemToch !== null) {
			if(elemEnableScroll != elemToch) {
				isEnableScroll = true; // if touch element - children of scroll block
				break;
			}
			elemToch = elemToch.parentNode;
		}
		if(!isEnableScroll) {
			e.preventDefault();
		}
		e.stopPropagation();
	}, false);

// remove effect Rubber in no-scroll window on iOS
	removeIOSRubberEffect( elemEnableScroll );
}

// if modal window is open - disable scroll page
	window.addEventListener('touchmove', function(e) {
		if(searchElement(stopScroll)) {
			e.preventDefault();
		}
	}, false);

	function searchElement(identifierName) {
		return elementSearch = identifierName ? document.querySelector(identifierName) : null;
	}

	function removeIOSRubberEffect( elemEnableScroll ) {
		elemEnableScroll.addEventListener( "touchstart", function () {
			var top = elemEnableScroll.scrollTop,
				totalScroll = elemEnableScroll.scrollHeight,
				currentScroll = top + elemEnableScroll.offsetHeight;
			if ( top === 0 ) {
				elemEnableScroll.scrollTop = 1;
			} else if ( currentScroll === totalScroll ) {
				elemEnableScroll.scrollTop = top - 1;
			}
		} );
	}

};