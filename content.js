var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
		var text = node.nodeValue;
		var replacedText = text;
		replacedText = replacedText.replace(/face masks/gi, 'pants');
		replacedText = replacedText.replace(/Face masks/gi, 'Pants');
		replacedText = replacedText.replace(/facemasks/gi, 'pants');
		replacedText = replacedText.replace(/Facemasks/gi, 'Pants');
		replacedText = replacedText.replace(/face mask/gi, 'pants');
		replacedText = replacedText.replace(/Face mask/gi, 'Pants');
		replacedText = replacedText.replace(/facemask/gi, 'pants');
		replacedText = replacedText.replace(/Facemask/gi, 'Pants');
		replacedText = replacedText.replace(/masks/gi, 'pants');
		replacedText = replacedText.replace(/Masks/gi, 'Pants');
		replacedText = replacedText.replace(/mask/gi, 'pants');
		replacedText = replacedText.replace(/Mask/gi, 'Pants');
		if (replacedText !== text) {
                	element.replaceChild(document.createTextNode(replacedText), node);
		}
	}
    }
}
