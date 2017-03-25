function goBack() {

    window.history.back();

}



$(document).ready(function()

		{

	

	 $("#btn1").click(function(){

	        $(".button").animate({height: "100px"});

	    });

	

			$(".button").click( function()

			        {

			          alert('button clicked');

			        }

			 );

			

		});



$(document).ready(function(){

	$(".imagesContainer").click(function(){

		alert("Image Clicked");

	});	

});



$(document).ready(function(){

    $("#resume").click(function(){

        $("#marq").toggleClass("main");

    });

});





$('div').each(function (index, value) { 

	  console.log($(this).attr('id')); 

	});



$(document).ready(function(){

	$("#resume").hover(function(){

		$("#resume").html("Click here to download Resume");		

	})



});



$('button#resume').click(function() {



	document.getElementById(draggable).style.visibility = "visible";

	document.getElementById(droppable).style.visibility = "visible";



});



$( init );

function init() {

	$('#draggable').draggable();

	$('#droppable').droppable( {

		drop: handleDropEvent

	} );

}



function handleDropEvent( event, ui ) {

	var draggable = ui.draggable;



	location.href = './resume.pdf';

	// alert( 'Dropped' );

}



/*$("#resume" ).droppable({

	  drop: function( event, ui ) {}

	});*/

//$("#resume" ).on( "drop", function( event, ui ) {} );



function displayWeather() {

    var city = document.getElementById("city").value;

    var state = document.getElementById("state").value;



    if (city == "" && state == " ") {



        document.getElementById("result").innerHTML = "Please Enter state and city";

    }

    var xmlhttp = new XMLHttpRequest();

    var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=" + "'" + city + "," + state + "'" + ")&format=json&env=store://datatables.org/alltableswithkeys";

    xmlhttp.open("get", url, true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {



        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {



            var w = JSON.parse(xmlhttp.responseText);

            document.getElementById("result").innerHTML = "Current Temperature is " + w.query.results.channel.item.condition.temp + " " +

                "<br/>" + "Looks: " + w.query.results.channel.item.condition.text + "" + "<br/>" + "Sunrise:" + w.query.results.channel.astronomy.sunrise + "" +

                "<br/>" + "Sunset: " + w.query.results.channel.astronomy.sunset;



        }

    };

}