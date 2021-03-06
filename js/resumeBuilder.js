
var bio = {
    "name": "Derek Borkowski",
    "role": "Student Pharmacist, Wanna-Be Web Developer",
    "contacts": {
        "mobile": "507-429-3707",
        "email": "borko028@d.umn.edu",
        "github": "borko028",
        "twitter": "@derekdouglasb",
        "location": "Minneapolis, MN",
    },
    "welcomeMessage": "Welcome to my Resume Project!",
    "skills": [
        "pharmacy", " frontenddev", " tropico 5"
    ],
    "bioPic": "images/ddb.jpg"
};

function displayBio () {
//role
    var myRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(myRole);
    //name
    var myName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(myName);
    //contacts
    var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(myMobile);
    var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(myEmail);
    var myTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(myTwitter);
    var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(myGithub);
    var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(myLocation);
    //pic
    var myBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(myBioPic);
    var myWelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(myWelMsg);
    //skills
    $("#header").append(HTMLskillsStart);
    var mySkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#header").append(mySkills);
    var mySkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#header").append(mySkills);
    var mySkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#header").append(mySkills);
//no Welcome Message yet
};

displayBio();

var work = {
    "jobs": [
        {
            "employer": "MyMeds",
            "title": "Clinical Innovation Associate",
            "dates": "August 2016 - Present",
            "location": "Minneapolis, MN",
            "description": "Manage drug database.",
        },
        {
            "employer": "Mylan",
            "title": "Medical Affairs Intern",
            "dates": "May 2016 - August 2016",
            "location": "Cannonsburg, PA",
            "description": "Assist MA functions."
        },
        {
            "employer": "Target/CVS Pharmacy",
            "title": "Executive Pharmacy Intern",
            "dates": "September 2014 - August 2016",
            "location": "Winona, MN",
            "description": "Do pharmacy stuffs."
        }
    ]
};

//work.jobs.forEach(function(job){

function displayWork() {
    for (var i = 0; i < work.jobs.length; i++) {

      $("#workExperience").append(HTMLworkStart);

      var myJob = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var myTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var myDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var myLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var myDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      $(".work-entry:last").append((myJob + myTitle), myDates, myLocation, myDescription);

    }

};

displayWork();

var projects = {
    "projectz": [
        {
            "title": "Winona Drug and Pharmaceutical Care Services",
            "description": "Collaborated with team members to design of pharmacy business plan",
            "dates": "Spring 2015",
            "images": "images/pres.png"
        }
    ]
};

function displayProjects() {
    for (var i = 0; i < projects.projectz.length; i++) {

      $("#projects").append(HTMLprojectStart);

      var myPName = HTMLprojectTitle.replace("%data%", projects.projectz[i].title);
      var myPDates = HTMLprojectDates.replace("%data%", projects.projectz[i].dates);
      var myPDescription = HTMLprojectDescription.replace("%data%", projects.projectz[i].description);
      var myPImage = HTMLprojectImage.replace("%data%", projects.projectz[i].images);
      $(".project-entry:last").append(myPName, myPDates, myPDescription, myPImage);

    }

};

displayProjects();


var education = {
    "schools": [
        {
            "name": "University of Minnesota, College of Pharmacy",
            "degree": "Doctor of Pharmacy, PharmD",
            "majors": "Pharmacy",
            "dates": "Auguest 2014 - May 2018",
            "location": "Minneapolis, MN"

        },
        {
            "name": "Winona State University",
            "degree": "None, Pre-Pharmacy Studies",
            "majors": "Pre-Pharmacy Studies",
            "dates": "August 2012 - June 2014",
            "location": "Winona, MN"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "February 2017 - In progress",
            "url": "https://www.udacity.com"
        }
    ]
};

function displayEducation() {
    for (var i = 0; i < education.schools.length; i++) {

      $("#education").append(HTMLschoolStart);

      var mySchool = HTMLschoolName.replace("%data%", education.schools[i].name);
      var mySLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var mySDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var myDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var myMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      var space = "<br>";

      $(".education-entry:last").append((mySchool + myDegree), mySDates, mySLocation, myMajors, space);

    };

      $("#education").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {

      $("#education").append(HTMLschoolStart);

      var myOTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var myOSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var myODates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var myOURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

      $(".education-entry:last").append((myOTitle + myOSchool), myODates, myOURL);

    };

};

displayEducation();


$(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationz = [];
    for (var i = 0; i < work.jobs.length; i++) {
        var newLocation = work_obj.jobs[i].location;
        locationz.push(newLocation);
    }
    return locationz;
}

console.log(locationizer(work));

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
