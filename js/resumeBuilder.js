
var bio = {
  //Providing info that should be used in this object
  'name' :'Martin Wenzel',
  'role' : 'Project & Account Manager',
  'contacts' : {
    'mobile' : '+4917666804004',
    'email' : 'martin.wenzel@outlook.com',
    'github' : 'smabian',
    'location' : 'Stuttgart'
  },
  'welcomeMessage' : '25 year old with a passion for IT and the urge to travel the world. Now looking for a new challenge after gaining experience in business and project management during different positions in Germany and USA at Hewlett Packard Enterprise.',
  'skills' : [
    'HTML',
    'CSS',
    'JavaScript',
    'Project Management',
    'PMP',
    'Sales',
    'ITIL',
    'SCRUM',
    'Account Management'
  ],
  'biopic' : 'images/me.jpg',

  //Display function to add the objects information into the helper.js structure
  display: function (){
    $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
    $('#header').append(HTMLbioPic.replace('%data%', this.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));

    var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);

    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedLocation);

    $('#header').append(HTMLskillsStart);
    for (var i=0; i<this.skills.length; i++){
      $('#skills:last').append(HTMLskills.replace('%data%', this.skills[i]));
    }
  }
};

var work = {
  //Providing info that should be used in this object
  'jobs' : [
  {
    'employer' : 'Hewlett Packard Enterprise',
    'title' : 'PMO lead & Account Manager',
    'location' : 'Boeblingen, Germany',
    'dates' : 'September 2014 - Today',
    'description' : 'Enterpise Service, Advisory and Consulting; working as PMO lead in a global 100M$+ Transformation Program; (Global) Account Manager with main focus on Managed print services'
  },
  {
    'employer' : 'Hewlett Packard Enterprise',
    'title' : 'International Internship',
    'location' : 'Palo Alto, California',
    'dates' : 'May 2013 - August 2013',
    'description' : 'Internship in Houston, TX and Palo Alto, CA at Hewlett Packard Enterprise'
  },
  {
    'employer' : 'Hewlett Packard Enterprise',
    'title' : 'Cooperative Student',
    'location' : 'Boeblingen, Germany',
    'dates' : 'September 2011 - September 2014',
    'description' : 'Cooperative Student at Hewlett Packard Enterprise, doing several internships in various businees units'
  },
  {
    'employer' : 'KBF',
    'title' : 'Civilan Service (Zivildienst)',
    'location' : 'Moessingen, Germany',
    'dates' : 'July 2010 - July 2011',
    'description' : 'KBF is a charitable organization with 74 facilities in 23 locations. The main focus is to provide help for handicapped and elderly persons. This help mostly consists of driving, education and support with food and accommodation.'
  }],
  //Display function to add the objects information into the helper.js structure
  display: function (){
    for (var job in this.jobs) {
      if(this.jobs.hasOwnProperty(job)){
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', this.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(HTMLworkDates.replace('%data%',this.jobs[job].dates));
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%',this.jobs[job].location));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%',this.jobs[job].description));
      }
    }
  }
};

var projects = {
  //Providing info that should be used in this object
  'projects' : [
  {
    'title' : 'Responsive portfolio page',
    'dates' : '2016',
    'description' : 'Responsive website that displays images, descriptions and links to each of the portfolio projects completed throughout the course of the Front-End Web Developer Nanodegree.',
    'images' : ['images/portfolio1.png', 'images/portfolio2.png']
  }],
  //Display function to add the objects information into the helper.js structure
  display : function(){
    for(var project in this.projects) {
      if(this.projects.hasOwnProperty(project)){
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects[project].title);
        var formattedDates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[project].description);

        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for(var i=0; i < this.projects[project].images.length; i++ ) {
          var formattedImage = HTMLprojectImage.replace('%data%', this.projects[project].images[i]);
          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

var education = {
  //Providing info that should be used in this object
  'schools' : [
  {
    'name' : 'Baden-Wuerttemberg Cooperative State University ',
    'degree' : 'Bachelor of Science',
    'dates' :'September 2011 - September 2014',
    'location' : 'Stuttgart, Germany',
    'majors' : ['Business Management', 'Information Technology'],
    'url' : 'http://www.dhbw-stuttgart.de/zielgruppen/international-visitors/'
  },{
    'name' : 'Technical academic high school',
    'degree' : 'A-Level',
    'dates' : 'July 2007 - July 2010',
    'location' : 'Tuebingen, Germany',
    'majors' : ['Information Technology'],
    'url' : 'https://www.gs-tuebingen.de/index.php'
  },{
    'name' : 'Gorham Fayette High School',
    'degree' : 'High School Degree',
    'dates' : 'July 2006 - June 2007',
    'location' : 'Fayette, Ohio',
    'majors' : ['General studies'],
    'url' : 'http://www.fayettesch.org/'
  }],
  'onlineCourses' : [
  {
    'title' : 'Front-End Web Developer Nanodegree',
    'school' : 'Udacity',
    'date' : 'May 2016 - Today',
    'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }],
  //Display function to add the objects information into the helper.js structure
  display : function (){
    for (var school in this.schools){
      if(this.schools.hasOwnProperty(school)){
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace('%data%',this.schools[school].name);
        var formattedSchoolNameURL = formattedSchoolName.replace('#',this.schools[school].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',this.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolNameURL + formattedSchoolDegree;
        $('.education-entry:last').append(formattedSchoolNameDegree);
        $('.education-entry:last').append(HTMLschoolDates.replace('%data%',this.schools[school].dates));
        $('.education-entry:last').append(HTMLschoolLocation.replace('%data%',this.schools[school].location));

        for (var i=0; i<this.schools[school].majors.length; i++){
          $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', this.schools[school].majors[i]));
        }
      }
    }

    $('#education').append(HTMLonlineClasses);
    for (var course in this.onlineCourses) {
      if(this.onlineCourses.hasOwnProperty(course)){
        $('#education').append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[course].school);
        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(HTMLonlineDates.replace('%data%', this.onlineCourses[course].date));
        $('.education-entry:last').append(HTMLonlineURL.replace('%data%', this.onlineCourses[course].url));
      }
    }
  }
};

//Additional object travel
var travel = {
  //Providing info that should be used in this object
  'trips' : [
  {
    'title': 'Backpacking through Brazil',
    'dates': '2013',
    'location': 'Brazil',
    'description': 'Three week backpacking trip through Brazil (Rio, Sao Paolo, Florianopolis, Ilha Grande, Foz de Iguazu)'
  },
  {
    'title': 'Roadtrip on the US west coast',
    'dates' : '2014',
    'location' : 'Los Angeles, USA',
    'description' : 'Three week roadtrip on the US Westcoast (Los Angeles, San Diego, Las Vegas, Sillicon Valley / San Francisco)'
  },
  {
    'title': 'Backpacking through Thailand',
    'dates' : '2015',
    'location': 'Thailand',
    'description' : 'Three week backpacking trop through Thailand (Bangkok, Koh Samui, Koh Tao, Koh Phi Phi, Phuket)'
  },
  {
    'title' : 'Backpacking through the Dominican Repuplic',
    'dates' : '2016',
    'location' : 'Dominican Republic',
    'description' : 'Two week backpacking trip through the dominican repuplic (Punta Cana, Santo Domingo, Puerto Platta, Cabarette)'
  }],
  //Display function to add the objects information into the helper.js structure
  display : function() {
    for (var trip in this.trips){
      if(this.trips.hasOwnProperty(trip)){
        $('#travel').append(HTMLtravelStart);
        $('.travel-entry:last').append(HTMLtravelTitle.replace('%data%',this.trips[trip].title));
        $('.travel-entry:last').append(HTMLtravelDates.replace('%data%',this.trips[trip].dates));
        $('.travel-entry:last').append(HTMLtravelLocation.replace('%data%',this.trips[trip].location));
        $('.travel-entry:last').append(HTMLtravelDescription.replace('%data%',this.trips[trip].description));
      }
    }
  }
};

//Providing info that should be used in this object
function displayMap(){
  $('#mapDiv').append(googleMap);
}

//Call functions that are defined within the objects
bio.display();
work.display();
education.display();
projects.display();
travel.display();
displayMap();


