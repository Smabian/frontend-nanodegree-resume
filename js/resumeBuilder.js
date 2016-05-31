/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  $("#main").append("Martin Wenzel");

//  var AwesomeThoughts;
//  AwesomeThoughts = "I am Martin and I am awesome";
//  console.log(AwesomeThoughts);

// var FunThoughts = AwesomeThoughts.replace("awesome","fun");
// $("#main").append(FunThoughts);


var bio = {
  "name" : "Martin Wenzel",
  "role" : "Web Developer",
  "welcomeMsg" : "Nerd with business know-how",
  "pictureURL" : "images/me.jpg",
  "contacts" : {
    "mobile" : "+4917666804004",
    "email" : "martin.wenzel@outlook.com",
    "github" : "smabian",
    "location" : "Stuttgart"
  },
  "skills" : [
    "HTML", "CSS", "JavaScript", "Project Management", "Sales"
  ]
}

var work = {
  "job" : [
  {
    "employer" : "Hewlett Packard Enterprise",
    "title" : "PMO lead & Account Manager",
    "location" : "Boeblingen, Germany",
    "dates" : "September 2014 - Today",
    "description" : "Enterpise Service, Advisory and Consulting ... working as PMO lead in a global 100M$+ Transformation Program ... (Global) Account Manager with main focus on Managed print services"
  },
  {
    "employer" : "Hewlett Packard Enterprise",
    "title" : "Cooperative Student",
    "location" : "Boeblingen, Germany & Palo Alto, California",
    "dates" : "September 2011 - September 2014",
    "description" : "Completed 6 internship at Hewlett Packard in various busines units and locations worldwide"
  },
  {
    "employer" : "KBF",
    "title" : "Civilan Service (Zivildienst)",
    "location" : "Moessingen, Germany",
    "dates" : "July 2010 - July 2011",
    "description" : "KBF is a charitable organization with 74 facilities in 23 locations. The main focus is to provide help for handicapped and elderly persons. This help mostly consists of driving, education and support with food and accommodation."
  }]
}

var projects = {
  "onlineProjects" : [
  {
    "title" : "Sample Project",
    "dates" : "2016",
    "description" : "Placeholder for project description",
    "images" : "images/197x148.gif"
  }]
}

var education = {
  "schools" : [
  {
    "name" : "Baden-Wuerttemberg Cooperative State University ",
    "degree" : "Bachelor of Science",
    "dates" :"September 2011 - September 2014",
    "location" : "Stuttgart, Germany",
    "major" : ["Business Information Systems"],
    "url" : "http://www.dhbw-stuttgart.de/zielgruppen/international-visitors/"
  },{
    "name" : "Technical academic high school",
    "degree" : "A-Level",
    "dates" : "July 2007 - July 2010",
    "location" : "Tuebingen, Germany",
    "major" : ["Information Technology"],
    "url" : "https://www.gs-tuebingen.de/index.php"
  },{
    "name" : "Gorham Fayette High School",
    "degree" : "",
    "dates" : "July 2006 - June 2007",
    "location" : "Fayett, OH, USA",
    "major" : [""],
    "url" : "http://www.fayettesch.org/"
  }],
  "onlineCourses" : [
  {
    "title" : "Front-End Web Developer Nanodegree",
    "school" : "Udacity",
    "dates" : "May 2016 - Today",
    "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }]
}


// $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
// $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

// $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
// $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
// $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
// $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

// $("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));
// $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
// $("#header").append(HTMLskillsStart);
// $("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
// $("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
// $("#header").append(HTMLskills.replace("%data%", bio.skills[2]));

// $("#workExperience").append(HTMLworkStart);
// $(".work-entry").append(HTMLworkEmployer.replace("%data%",work.workEmployer)+HTMLworkTitle.replace("%data%",work.workTitle));
// $(".work-entry").append(HTMLworkDates.replace("%data%",work.workDates));
// $(".work-entry").append(HTMLworkLocation.replace("%data%",work.workLocation));
// $(".work-entry").append(HTMLworkDescription.replace("%data%",work.workDescription));

// $("#education").append(HTMLschoolStart);
// $(".education-entry").append(HTMLschoolName.replace("%data%",education.schoolName)+HTMLschoolDegree.replace("%data%",education.schoolDegree));
// $(".education-entry").append(HTMLschoolDates.replace("%data%",education.schoolDates));
// $(".education-entry").append(HTMLschoolLocation.replace("%data%",education.schoolLocation));
// $(".education-entry").append(HTMLschoolMajor.replace("%data%",education.schoolMajor));


