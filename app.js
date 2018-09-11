
/*global $*/

$(document).ready(function(){
// window.onload = function () {
  
 
var channel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

// loop through array of channels to get info/data and see if they are streaming or not
channel.forEach((name) => {
    const channelAPI = `https://wind-bow.glitch.me/twitch-api/channels/${name}?callback=?`;
    const streamAPI = `https://wind-bow.glitch.me/twitch-api/streams/${name}?callback=?`;

    $.getJSON(channelAPI, function (channel) {
        $.getJSON(streamAPI, function (stream) {

          let displayName = channel.display_name;
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

// To show whether the channels are online or offline...can use ALL for seeing all channels
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