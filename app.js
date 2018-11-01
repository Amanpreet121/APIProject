document.addEventListener('DOMContentLoaded',function(){

     
    document.getElementById('getMessage').onclick=function(){
        var name= document.getElementById("city").value;
      //console.log(name);
      var api='https://openweathermap.org/data/2.5/find?q=';
      var city= name;
      var units = '&units=metric';
      var apikey ='&appid=b6907d289e10d714a6e88b30761fae22';
        var url= api+city+units+apikey;
       // console.log(url);
        //'https://openweathermap.org/data/2.5/find?q=London&units=metric&appid=b6907d289e10d714a6e88b30761fae22';
        var req=new XMLHttpRequest();
        req.open("GET",url,true);
        req.send();
        req.onload=function(){
        var json=JSON.parse(req.responseText);
        var celsius = Math.floor(json.list[0].main.temp - 273.15);
        var min_temp=Math.floor(json.list[0].main.temp_min- 273.15);
        var max_temp=Math.floor(json.list[0].main.temp_max- 273.15);
        var x=json.list[0].weather[0].main;
        
        document.getElementsByClassName('status')[0].innerHTML=x;
        document.getElementsByClassName('message')[0].innerHTML="The Temp of "+ name +" is: " + celsius+"&degC"
        + "<br>The Min Temp is :  " +min_temp+"&degC"+ "<br>The Max Temp is :  " +max_temp+"&degC<br>"+"The Humidity in Weather is: "+json.list[0].main.humidity;   
      };
    };
  });