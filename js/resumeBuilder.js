/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* Tests
$("#main").append("Thanh");
var awesomeThoughts = "I am Thanh and I am AWESOME";
console.log(awesomeThoughts);

var s = "audacity";
s = 'U' + s.slice(2);
console.log(s);

var sampleArray = [0,0,7];
var incrementLastArrayElement = function(_array) {
	var newArray = [];

	for(var i = 0; i < _array.length; i++) {
		newArray[i] = _array[i];
		if(i == _array.length - 1) {
			newArray[i] = newArray[i] + 1;
		}
	}

	return newArray;
};
console.log(sampleArray);
console.log(incrementLastArrayElement(sampleArray));
*/


//
// Quizes
//

var bio = {
  "name": "Thanh",
  "role": "Web Developer",
  "welcomeMsg": "Welcome to my page",
  "bioPic": "images/fry.jpg",
  "contact": {
    "phone": "111.111.1111",
    "email": "example@yahoo.com",
//    "github": "TBD",
    "location": "Fremont, CA"
	},
  "skills": [
              "HTML", "CSS", "Javascript", "JSON"
            ]
}
$("#header").append( HTMLheaderName.replace("%data%", "Cool Guy") );
$("#header").append( HTMLheaderRole.replace("%data%", "Web Developer") );
$("#header").append( HTMLmobile.replace("%data%", bio.contact.phone) );
$("#header").append( HTMLemail.replace("%data%", bio.contact.email) );
//$("#header").append( HTMLgithub.replace("%data%", bio.contact.github) );
$("#header").append( HTMLlocation.replace("%data%", bio.contact.location) );
$("#header").append( HTMLbioPic.replace("%data%", bio.bioPic) );
$("#header").append( HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg) );
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(var i = 0; i < bio.skills.length; i++) {
		$("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

var work = {
	"jobs": [
		{
			"employer": "FutureWork",
			"title": "Frontend Software Development Engineer",
			"location": "Sunnyvale, CA",
			"dates": "10/2016 - current ",
			"description": "Developing web applications"
		}
	]
}

function displayWork() {
  if(work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    for(var i = 0; i < work.jobs.length; i++) {
      $(".work-entry").append( HTMLworkEmployer.replace("%data%", work.jobs[i].employer) );
      $(".work-entry").append( HTMLworkTitle.replace("%data%", work.jobs[i].title) );
      $(".work-entry").append( HTMLworkDates.replace("%data%", work.jobs[i].dates) );
      $(".work-entry").append( HTMLworkLocation.replace("%data%", work.jobs[i].location) );
      $(".work-entry").append( HTMLworkDescription.replace("%data%", work.jobs[i].description) );
    }
  }
}
displayWork();

$(document).click( function(loc) { var x = loc.pageX; y = loc.pageY; logClicks(x, y); } )
function locationizer(work_obj) {
   var locs = [];
   for( var i in work.jobs ) {
       locs.push(work.jobs[i].location)
   }
   return locs;
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	console.log( name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase() );
}

var projects = {
	"projects": [
		{ "title": "Portfolio Website",
			"dates": "10/2016",
			"description": "Building a portfolio website",
			"images": []
		}
	]
}
projects.display = function() {
  if(projects.projects.length > 0) {
    $("#projects").append(HTMLprojectStart);
    for(var i = 0; i < projects.projects.length; i++) {
      $(".project-entry:last").append( HTMLprojectTitle.replace("%data%", projects.projects[i].title) );
      $(".project-entry:last").append( HTMLprojectDates.replace("%data%", projects.projects[i].dates) );
      $(".project-entry:last").append( HTMLprojectDescription.replace("%data%", projects.projects[i].description) );
      //$("#projects").append( HTMLprojectImage.replace("%data%", projects.projects[i].images[...]) );
    }
  }
}
projects.display();

var education = {
	"schools": [
		{
			"name": "SJSU",
			"degree": "BS",
			"dates": 1998,
			"location": "San Jose",
			"majors": ["Computer Science"]
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer",
			"school": "Udacity",
			"dates": "10/2016",
			"url": "https://classroom.udacity.com/nanodegrees/"
		}
	]
}
if(education.schools.length > 0) {
	$("#education").append(HTMLschoolStart);
	for(var i = 0; i < education.schools.length; i++) {
		$(".education-entry:last").append( HTMLschoolName.replace("%data%", education.schools[i].name) );
		$(".education-entry:last").append( HTMLschoolDegree.replace("%data%", education.schools[i].degree) );
		$(".education-entry:last").append( HTMLschoolDates.replace("%data%", education.schools[i].dates) );
		$(".education-entry:last").append( HTMLschoolLocation.replace("%data%", education.schools[i].location) );
		for(var j = 0; j < education.schools[i].majors.length; j++) {
			$(".education-entry:last").append( HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]) );
		}
	}
}
if(education.onlineCourses.length > 0) {
	$(".education-entry").append(HTMLonlineClasses);
	for(var i = 0; i < education.onlineCourses.length; i++) {
		$(".education-entry").append( HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) );
		$(".education-entry").append( HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school) );
		$(".education-entry").append( HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates) );
		$(".education-entry").append( HTMLonlineURL.replace("%data%", education.onlineCourses[i].url) );
	}
}

$("#mapDiv").append(googleMap);
