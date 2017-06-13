//json 

var user= {
    users:
    {
        user_id:"1",
        first_name:"shir",
        last_name="balas",
        degree="FULLSTACK DEVELOPER",
        about_me=" a student at ort singalovski college,learning Software Engineering",
        phone="+972-555555555",
        atea="sela yahakov 15, Tel Aviv",
        email="shir29291@gmail.com"                  
    }
    user_experience:
    {
        experience_id="2",
        user_id="1",
        work_place_name="lorem",
        work_space_location="TA",
        start_date="dec-2015"
        
    }
}









$(function(){

    var userName = window.location.hash.substr(1); //Get the section after hash tag from URL, e.g. index.html#Arik return 'Arik'
    if(userName === '') {
        alert('No user selected');
    } else {
        alert('user selected');
      //$.get('/user/' + userName, function(data) { //This code makes an HTTP request to /arik and puts the data in the 'data' variable

          console.log('Got data', user); //We just print whatever we got from the server

          //Basic info
          $('#intro header h1').text(user.basicInfo.firstName); //Let's use the data from server and pub it on page!
          $('#intro header h2').text(user.basicInfo.lastName);
          //$('#intro header').append('<h3>'+user.basicInfo.title+'</h3>') //i have <h3> already


         /* //Social networks
          $ul = $('<ul>', {
              'id': 'social-networks'
          });

          for(i in data.socialNetworks) { //We also got the social networks from the server, which is acceable from data.socialNetworks.
              var $templi = $('<li>');

              $templi.append('<i class="fa fa-'+data.socialNetworks[i].iconName+'"></i>');
              $templi.append('<a href="'+data.socialNetworks[i].link+'">'+data.socialNetworks[i].name+'</a>');

              $templi.click(function(){
                  alert($(this).children('a').text() + ' clicked!');
              });

              //Add the new li element to the ul
              $ul.append($templi);
          }

          $ul.insertAfter('#intro');


      });*/

    }

});