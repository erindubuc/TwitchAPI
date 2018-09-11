
/*global $*/

$(document).ready(function(){
// window.onload = function () {
  
 
var channel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
let displayName, logo;


// loop through array of channels to get info/data and see if they are streaming or not
channel.forEach((name) => {
    const channelAPI = `https://wind-bow.glitch.me/twitch-api/channels/${name}?callback=?`;
    const streamAPI = `https://wind-bow.glitch.me/twitch-api/streams/${name}?callback=?`;

    $.getJSON(channelAPI, function (channel) {
        $.getJSON(streamAPI, function (stream) {

 // Call the Twitch API and access the data to determine if Free Code Camp is online or offline
    // $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp").done(function(data) {
        
    //     // If FCC is offline, display as such to the screen
    //     if (data.stream === null) {
    //         $("#fccStatus").html(" is currently offline!");
    //     }
    //     // If FCC is online, display such to the screen
    //     else {
    //         $("#fccStatus").html(" is curently online!");
    //     }
    // });


  /*call channels API to see if it is streaming or not and if yes, then what it is streaming */
  // for (var i = 0; i < channel.length; i++) {
  //   // ajax request to get info
  //   $.ajax({
  //         type: "GET",
  //           //iterate through the array of channels 
  //         url: "https://wind-bow.glitch.me/twitch-api/channels/" + channel[i],
            
  //         // If successful, check the online status of each user
  //         success: function(dataIndex) {
                
                // Call the API again, this time accessing data about the user
                // $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + dataIndex.name).done(function(data2) {
          let displayName = channel.display_name;
            // displayNameRegex = displayName.replace(/[^A-Z0-9_]/ig, "");
          let logo = `<img src="${channel.logo}" class="logo">`;

            if (stream.stream != null) {
                $("#names").prepend(`
                    <div class="name on" id="${displayName}">
                        <a href="//twitch.tv/${name}" target="_blank">${logo}
                            <h2 class="displayName">${displayName}</h2>
                            <div class="game">${stream.stream.viewers} viewers are currrently streaming ${stream.stream.channel.game}.</div>
                            <div class="stream"><em>${stream.stream.channel.status}</em></div>
                        </a>
                    </div>
                `);
            } else {
                $("#names").append(`
                    <div class="name off" id="${displayName}">
                        <a href="//twitch.tv/${name}" target="_blank">${logo}
                        <h2 class="displayName">${displayName}</h2>
                        </a>
                    </div>
                `);
            }
    
        });                    
                //     $(".res").append(data2);
                //     var name = data2._links.self.slice(37);
                //     // var name=data2.display_name;
              		// 	var logo=data2.logo;
              			
                //   	var channel_link=data2._links.url;
                //   	var game=data2.game;
                //   	var status=data2.status;
                  	
                  		
                  		// var resultOff = /* prepare a row for the result in html */
                  		// 	"\
                  		// 	<div class='row' id='"+status+"'>\
                  		// 		<div class='col-md-3 col-xs-4'>\
                  		// 			<span class='logo'><img class='img img-circle' src='"+logo+"'></span>\
                  		// 			<a href='"+channel_link+"'>\
                  		// 				<span class='name text-center'>"+ name +"</span>\
                  		// 			</a>
                  		// 		</div>\
                  		// 		<div class='col-md-9 col-xs-8 text-center' id='statusdescription'>\
                  		// 			<span class='game'>"+game+"</span>\
                  		// 		</div>\
                  		// 	</div>";
                  	
                  // var result =    /* prepare a row for the result in html */
                  // 			"\
                  // 			<div class='row' id='"+status+"'>\
                  // 				<div class='col-md-3 col-xs-4'>\
                  // 					<span class='logo'><img class='img img-circle' src=''>"+logo+"</span>\
                  // 					<a href='"+channel_link+"'>\
                  // 						<span class='name text-center'>"+name+"</span>\
                  // 					</a>\
                  // 				</div>\
                  // 				<div class='col-md-9 col-xs-8 text-center' id='statusdescription'>\
                  // 					<span class='game'>"+game+"</span>\
                  // 				</div>\
                  // 			</div>";
                  // 	if(data2.stream===null || 'offline'){ 
                  // 	  /* if channel does not have a logo then show the following logo */
                  //   $(".res").append(result);
                    // $("#userLogo").append('<p class="offline">');
                    // $("#userName").append('<p class="offline"><a class ="offline" </p>');
                    
                    // $("#currentGame").append("<p class='offline'>N/A</p>");
                       
    // }
                    
              	 //   else
                //   	$('.res').append(result);
              		// });
                    // get the user's name 
                    // use the slice method on the user's website URL
                    // var name = data2._links.self.slice(37);
                    
                    // // DIsplay to the DOM nodes the data gathered from the API
                    // if (data2.stream === null) {
                    //     $("#userName").append('<a target = "_blank" href = "https://www.twitch.tv/' + name + '">'+ name +'</a><br>');
                    //     $("#userStatus").append("OFFline!<br>");
                    //     $("#currentGame").append("N/A<br>");
                    //     $("#userLogo").attr("src", dataIndex[i].logo);
                    // }
                    // else {
                      
      $("#all").click(function () {
            $("#all").addClass("active");
            $("#online").removeClass("active");
            $("#offline").removeClass("active");

            $(".name").show();
        });

        $("#online").click(function () {
            $("#all").removeClass("active");
            $("#online").addClass("active");
            $("#offline").removeClass("active");

            $(".on").show();
            $(".off").hide();
        });

        $("#offline").click(function () {
            $("#all").removeClass("active");
            $("#online").removeClass("active");
            $("#offline").addClass("active");

            $(".off").show();
            $(".on").hide();
        });
    });
});
});
















  // button events
//show ALL channels when clicked on All button
//   $('#all').click(function(){
//   	var all=$('.res .row');
//   	all.each(function(index){
//   		$(this).css({'display':'block'});
//   	});
//   });

// // show ONLY online streaming channels and hide the offline ones.
//   $('#online').click(function(){
//   	var online=$('.res .row');
//   	online.each(function(index){
//   		var toggle=$(this).attr('id');
//   		if(toggle=='online'){
//   			$(this).css({'display':'block'});
//   		}
//   		else if(toggle=='offline'){
//   			$(this).css({'display':'none'});
//   		}
//   	});
//   });

// // show ONLY offline channels
//   $('#offline').click(function(){
//   	var offline=$('.res .row');
//   	offline.each(function(index){
//   		var toggle=$(this).attr('id');
//   		if(toggle=='online'){
//   			$(this).css({'display':'none'});
//   		}
//   		else if(toggle=='offline'){
//   			$(this).css({'display':'block'});
//   		}
//   	});
//   });
// }
// });
// }
// });
                      
                      
                      
                      
                      
//             //           $("#userName").append('<a target = "_blank" href = "https://www.twitch.tv/' + name + '">'+ name +'</a><br>');
//             //           $("#userStatus").append("ONline!<br>");
//             //           $("#currentGame").append(data2.stream.game + "<br>");
//             //         }
//             //     });
//             // },    
    
    
    
    
    
// // <span class='status'>"+data.statusdesc+"</span>\    
    
    
    
    
// //   $.get( "https://wind-bow.glitch.me/twitch-api/channels/"+ channel[i], function(data){
// //     if(data.status=='404'){ /* if user not found */
// //       name=data.display_name;
// //       game=data.message;
// //       status="offline";
// //       statusdesc="";
// //     }
// //     else if(data.status=='422'){ /* if user unavailable or closed their account */
// //       name=data.display_name;
// //       game=data.message;
// //       status="offline";
// //       statusdesc="";
// //     }
// //     else{
// //       data=data.stream;
// //       if(data===null){ /* means user is offline */
// //         name=data.display_name;
// //         game="offline";
// //         status="offline";
// //         statusdesc="";
// //         logo="";
// //       }
// //       else{
// //         name=data.display_name;
// //         game=data.channel.game;
// //         status="online";
// //         statusdesc=":"+data.channel.status;
// //       }
// //     }

// // //  call channels api to get channel info: channel display name, logo, link url etc.
// //     $.get( "https://wind-bow.glitch.me/twitch-api/channels/"+ channel[i], function(data){
// // 			