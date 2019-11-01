

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

function addCheckBox() {
	var checklist = document.getElementsByClassName("checklist")[0];
}
/*
function displayNode(n) {
	var question = document.getElementById("question");
	var button = document.getElementById("button");
	var options = document.getElementById("options");
	
	var node = nodes[n];
	
	question.innerHTML = node.question;
	if(node.button) {
		button.innerHTML = `<button onclick="toggleImage();">` + node.button.text +`</button>`;
		button.innerHTML += `<img class="image" src="` + node.button.content.image + `">`
	}
	if(node.options) {
		options.innerHTML = ``;
		for(let i=0; i<node.options.length; i++) {
			options.innerHTML += `<button onclick="displayNode(` + node.options[i].next + `)">` + node.options[i].text + `</button>`;
		}
	}
}

function toggleImage() {
	var image = document.getElementsByClassName("image")[0];
	if(image.style.display !== "none")
		image.style.display = "none";
	else
		image.style.display = "block";
}

var emergency = JSON.parse(`{"nodes":[{"question":"unresponsive?","options":[{"text":"yes","next":2},{"text":"no","next":1}]},{"question":"Call 911 for serious injuries. What is the injury?","options":[{"text":"Suspected spinal injury"},{"text":"Heart attack"},{"text":"Stroke"},{"text":"Allergic reaction"},{"text":"Fainting"},{"text":"Seizures"},{"text":"Diabetic emergencies"},{"text":"Poisoning"},{"text":"Alcohol and other drug emergencies"},{"text":"Bites and stings"},{"text":"Heat emergencies"},{"text":"Cold emergencies"}]},{"question":"Activate Emergency Action Plan?","options":[{"text":"yes","next":3},{"text":"no"}]},{"question":"Retrieve equipment, put on gloves, ready backgoard at extrication point and call 911. Extricate six feet away from the water. Conduct a pulse and breathing assessment for 10 seconds.","options":[{"text":"Yes pulse, no breathing","next":4},{"text":"No pulse, no breathing","next":5}]},{"question":"Conduct CPR with AED and supplemental oxygen.","button":{"text":"Show chart","content":{"image":"lifesupport.png"}},"options":[{"text":"Yes pulse, yes breathing","next":6}]},{"question":"Rescue breathing and supplemental oxygen","button":{"text":"Show chart","content":{"image":"lifesupport.png"}},"options":[{"text":"Yes pulse, yes breathing","next":6}]},{"question":"Recovery position, monitor for normal blood oxygen levels."},{"question":"Ensure complete restriction of head movement and wait for 911"},{"question":"Summon EMS. Rest, comfortable position. Assist use of prescribed heart medicine. Use asprin if available and person has no allergic reactions."},{"question":"Characterized by weakness or numbness on one side of body, problems speaking, dizziness, confusion, headache. Summon EMS and rest person in a comfortable position. If vomiting, roll into recovery position."},{"question":"For mild reactions, use an antihistamine such as Benadryl. For serious reactions, call 911 and position guest comfortably and open loose or restrictive clothing."}]}`);
var nodes = emergency.nodes;