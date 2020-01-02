
/*--------------------------------------------------------------------------------------------------------*/
// Global Variables & Init Function
/*--------------------------------------------------------------------------------------------------------*/

var toc = [];
var tocIx = 0;



// Initializes DP application -> Called by onload event 
function initNds() {

    initTOC();
}


// Initializes TOC
function initTOC() {

    var i;
    var j;
    var elems = document.getElementById('toc-list').getElementsByTagName('a');

    j = elems.length;
    for(i = 0; i < j; i++) {
        toc.push({'id': elems[i].href.substring(elems[i].href.lastIndexOf('#') + 1), 'active': false});
        elems[i].id = 'toc-a-' + toc[i].id;
        elems[i].setAttribute('data-Ix', i);
        elems[i].onclick = function() {toggleVisibility(this);};
    }
    toc[0].active = true;
}

// Toggle sections visibility
function toggleVisibility(elem) {
    if(elem.getAttribute('data-toc') != 'ignore') {
        document.getElementById(toc[tocIx].id).classList.add('d-none');
        document.getElementById('toc-a-' + toc[tocIx].id).classList.remove('active');
        tocIx = parseInt(elem.getAttribute('data-Ix'));
        document.getElementById(toc[tocIx].id).classList.remove('d-none');
        document.getElementById('toc-a-' + toc[tocIx].id).classList.add('active');
    }
}