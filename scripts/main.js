var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/javascript.png') {
      		myImage.setAttribute ('src','images/python.png');
	} else {
		myImage.setAttribute ('src','images/javascript.png');
	}
}

