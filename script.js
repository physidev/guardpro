function init() {
	var button = document.getElementsByClassName("button");
	
	for(let i=0; i < button.length; i++) {
		button[i].addEventListener("click", function() {
			this.classList.toggle("active");
			
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
			  panel.style.maxHeight = null;
			} else {
			  panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}
}

function search() {
	var searchBar, searchText, sections;
	searchBar = document.getElementById("search");
	searchText = searchBar.value.toUpperCase();
	sections = document.getElementById("accordion").getElementsByClassName("section");
	
	for(let i=0; i < sections.length; i++) {
		let section = sections[i].getElementsByClassName("button")[0];
		if(section.innerHTML.toUpperCase().indexOf(searchText) > -1) {
			sections[i].style.display = "block";
		} else {
			sections[i].style.display = "none";
		}
	}
}