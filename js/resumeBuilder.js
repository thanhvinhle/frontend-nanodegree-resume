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
			"employer": "TBD!",
			"title": "Frontend Software Development Engineer",
			"location": "Sunnyvale, CA",
			"dates": "10/2016 - current ",
			"description": "Developing web applications"
		}
	]
}
if(work.jobs.length > 0) {
	$("#workExperience").append(HTMLworkStart);
	for(var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append( HTMLworkEmployer.replace("%data%", work.jobs[i].employer) );
		$("#workExperience").append( HTMLworkTitle.replace("%data%", work.jobs[i].title) );
		$("#workExperience").append( HTMLworkDates.replace("%data%", work.jobs[i].dates) );
		$("#workExperience").append( HTMLworkLocation.replace("%data%", work.jobs[i].location) );
		$("#workExperience").append( HTMLworkDescription.replace("%data%", work.jobs[i].description) );
	}
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
if(projects.projects.length > 0) {
var HTMLprojectStart = '<div class="project-entry"></div>';
	$("#projects").append(HTMLprojectStart);
	for(var i = 0; i < projects.projects.length; i++) {
		$("#projects").append( HTMLprojectTitle.replace("%data%", projects.projects[i].title) );
		$("#projects").append( HTMLprojectDates.replace("%data%", projects.projects[i].dates) );
		$("#projects").append( HTMLprojectDescription.replace("%data%", projects.projects[i].description) );
		//$("#projects").append( HTMLprojectImage.replace("%data%", projects.projects[i].images[...]) );
	}
}

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
		$("#education").append( HTMLschoolName.replace("%data%", education.schools[i].name) );
		$("#education").append( HTMLschoolDegree.replace("%data%", education.schools[i].degree) );
		$("#education").append( HTMLschoolDates.replace("%data%", education.schools[i].dates) );
		$("#education").append( HTMLschoolLocation.replace("%data%", education.schools[i].location) );
		for(var j = 0; j < education.schools[i].majors.length; j++) {
			$("#education").append( HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]) );
		}
	}
}
if(education.onlineCourses.length > 0) {
	$("#education").append(HTMLonlineClasses);
	for(var i = 0; i < education.onlineCourses.length; i++) {
		$("#education").append( HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) );
		$("#education").append( HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school) );
		$("#education").append( HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates) );
		$("#education").append( HTMLonlineURL.replace("%data%", education.onlineCourses[i].url) );
	}
}

