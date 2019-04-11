$(document).ready (function() {

  let $zipCode = $("#location-input");

    $zipCode.focus();

  $zipCode.on("input", function(){
   if($(this).val().length == 5 ) {
     $(".cards").text('');

//Pass zipcode input to API
  let url = `http://api.apixu.com/v1/forecast.json?key=bc52608ccdc040eeaf870728190504&q=${$zipCode.val()}&days=7`;


  $.ajax(
   {
     url: url,
     success: function(result){
       let forecast = result.forecast.forecastday;
       let city = result.location.name;
        $("#city-name").text(city);


       console.log(forecast);
       console.log(city);
       let $cityName = $("<span/>", { text: location.name});

       $.each (forecast, function(index, dayOfWeek) {
         let $highLowH3 = $("<h3/>", { text: Math.round(dayOfWeek.day.maxtemp_f) + "°F" + "/" + Math.round(dayOfWeek.day.mintemp_f) +"°F" });
         let $weatherImg = $("<img/>", { src: "https:" + dayOfWeek.day.condition.icon });
         let $dateH3 = $("<h3/>", { text: dayOfWeek.date } );
         let $conditionH3 = $("<h3/>", { text: dayOfWeek.day.condition.text });
         let $article = $("<article/>", { class: "col-1" } );



         $article.append($dateH3);
         $article.append($weatherImg);
         $article.append($conditionH3);
         $article.append($highLowH3);

         $(".cards").append($article);
       });

     }
   });
 };

  });


});
