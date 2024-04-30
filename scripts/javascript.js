
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
	for(tablink of tablinks){
		tablink.classlist.remove("active-link");
     }
	for(tablink of tabcontents){
		tabcontents.classlist.remove("active-tab");
    }
}

