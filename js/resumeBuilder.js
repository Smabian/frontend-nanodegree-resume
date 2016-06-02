/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Martin Wenzel",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+4917666804004",
    "email" : "martin.wenzel@outlook.com",
    "github" : "smabian",
    "location" : "Stuttgart"
  },
  "welcomeMessage" : "Project & Account Manager with strong IT know-how",
  "skills" : [
    "HTML", "CSS", "JavaScript", "Project Management", "PMP", "Sales", "ITIL", "SCRUM", "Account Management"
  ],
  "biopic" : "images/me.jpg",
  display: function (){
    $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

    $("#header").append(HTMLskillsStart);
    for (i=0; i<this.skills.length; i++){
      $("#skills:last").append(HTMLskills.replace("%data%", this.skills[i]));
    }
  }
}

var work = {
  "jobs" : [
  {
    "employer" : "Hewlett Packard Enterprise",
    "title" : "PMO lead & Account Manager",
    "location" : "Boeblingen, Germany",
    "dates" : "September 2014 - Today",
    "description" : "Enterpise Service, Advisory and Consulting; working as PMO lead in a global 100M$+ Transformation Program; (Global) Account Manager with main focus on Managed print services"
  },
  {
    "employer" : "Hewlett Packard Enterprise",
    "title" : "Cooperative Student",
    "location" : "Boeblingen, Germany",
    "dates" : "September 2011 - September 2014",
    "description" : "Cooperative Student at Hewlett Packard Enterprise, doing several internships in various businees units"
  },
  {
    "employer" : "Hewlett Packard Enterprise",
    "title" : "International Internship",
    "location" : "Palo Alto, California",
    "dates" : "May 2013 - August 2013",
    "description" : "Internship in Houston, TX and Palo Alto, CA at Hewlett Packard Enterprise"
  },
  {
    "employer" : "KBF",
    "title" : "Civilan Service (Zivildienst)",
    "location" : "Moessingen, Germany",
    "dates" : "July 2010 - July 2011",
    "description" : "KBF is a charitable organization with 74 facilities in 23 locations. The main focus is to provide help for handicapped and elderly persons. This help mostly consists of driving, education and support with food and accommodation."
  }],
  display: function (){
    for (job in this.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%",this.jobs[job].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%",this.jobs[job].location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%",this.jobs[job].description));
    }
  }
}

var projects = {
  "projects" : [
  {
    "title" : "Sample Project",
    "dates" : "2016",
    "description" : "Placeholder for project description",
    "images" : [
      "images/197x148.gif", "images/197x148.gif"
    ]
  }],
  display : function(){
    for(project in this.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);

      for(i=0; i < this.projects[project].images.length; i++ ) {
        var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[i]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

var education = {
  "schools" : [
  {
    "name" : "Baden-Wuerttemberg Cooperative State University ",
    "degree" : "Bachelor of Science",
    "dates" :"September 2011 - September 2014",
    "location" : "Stuttgart, Germany",
    "majors" : ["Business Management", "Information Technology"],
    "url" : "http://www.dhbw-stuttgart.de/zielgruppen/international-visitors/"
  },{
    "name" : "Technical academic high school",
    "degree" : "A-Level",
    "dates" : "July 2007 - July 2010",
    "location" : "Tuebingen, Germany",
    "majors" : ["Information Technology"],
    "url" : "https://www.gs-tuebingen.de/index.php"
  },{
    "name" : "Gorham Fayette High School",
    "degree" : "High School Degree",
    "dates" : "July 2006 - June 2007",
    "location" : "Fayette, OH, USA",
    "majors" : ["General studies"],
    "url" : "http://www.fayettesch.org/"
  }],
  "onlineCourses" : [
  {
    "title" : "Front-End Web Developer Nanodegree",
    "school" : "Udacity",
    "date" : "May 2016 - Today",
    "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }],
  display : function (){
     for (school in this.schools){
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%",this.schools[school].name);
      var formattedSchoolNameURL = formattedSchoolName.replace("#",this.schools[school].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",this.schools[school].degree);
      var formattedSchoolNameDegree = formattedSchoolNameURL + formattedSchoolDegree;
      $(".education-entry:last").append(formattedSchoolNameDegree);
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%",this.schools[school].dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",this.schools[school].location));

      for (i=0; i<this.schools[school].majors.length; i++){
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", this.schools[school].majors[i]));
      }

     }

    //
    // $(".education-entry").append(HTMLschoolMajor.replace("%data%",education.schoolMajor));
  }
}

function displayMap(){
  $("#mapDiv").append(googleMap);
}

bio.display();
work.display();
projects.display();
education.display();
displayMap();


