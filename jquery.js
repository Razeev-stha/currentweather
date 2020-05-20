$(document).ready(function () {
   $('.short').hide();
   if (navigator.geolocation) {
      var currentPosition = '';
         navigator.geolocation.getCurrentPosition(function (position) {
         currentPosition = position;
         var latitude = currentPosition.coords.latitude
         var longitude = currentPosition.coords.longitude
         // console.log(longitude,latitude);
            var url = 'http://api.weatherstack.com/current?access_key=0efd2529d5f3ddd7cc6ad88e9b392bbe&query=';
            $.getJSON(url + latitude + ',' + longitude, function (data) {
               // console.log(data)
               var data = JSON.stringify(data);
               var json = JSON.parse(data);
               var country = json.location.country;
               var city = json.location.name;
               var temp = json.current.temperature;
               var temp_f = 1.8 * temp + 32;
               var observed_time = json.current.observation_time;
               var wind = json.current.wind_speed;
               var humidity = json.current.humidity;
               // var time = json.location.localtime.split("")[0];
               var winddegree = json.current.wind_degree;
               var cloud = json.current.weather_descriptions;
               $('#weather').html(city + ',' + country);
               $('#info1').html('wind Degree:'+winddegree+'&#176');
               $('#info2').html('wind speed:' + wind + 'kph');
               $('#info3').html(temp + '&#8451');
               $('.short').show();
               var yes = true;
               $('#switch').on('click', function () {
                  if (yes) {
                     $('#info3').html(temp_f + '&#8457');
                     $('#switch').html('show in celcius');
                     yes = false;
                  } else {
                     $('#info3').html(temp + '&#8451');
                     $('#switch').html('show in fahrenheit');
                     yes = true;
                  }
               });
               $('#info5').html(cloud);
               $('#info6').html('Humidity:' + humidity + '&#37');
               
            });
         });
   }
});