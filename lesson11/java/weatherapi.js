const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c0c2c2b0fb7711c72882c8065c22ef36;"

    fetch(apiURL);{
        (then((response) => response.json())
        .then((data) => {
        console.log(data);
         }));
         document.getElementById('temp').textContent = "Current temperature: " + data.main.temp + "\xB0";
        document.getElementById('humid').textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById('speed').textContent = "Wind Speed: " + data.wind.speed + "mph";
        document.getElementById('current').textContent = "Currently: " + data.weather[0].main;

        const tNumber = data.main.temp;
        const sNumber = data.wind.speed;
        let chilly = 0;

        if (tempNumber <= 50 && speedNumber > 3) {
            chilly = Math.round(35.74 + (.6215 * tNumber)-(35.75*Math.pow(sNumber,.16))+(.4275*tNumber*Math.pow(sNumber,.16)));
            document.getElementById("chill").textContent = chilly;
            } 
            else{
                document.getElementById("chill").textContent = "N/A";
            }
            document.getElementById('chill').textContent = "Wind Chill: " + chilly + "\xB0";

   });




const d = new Date();
const DayNumber = d.getDay();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const apiURL2 = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c0c2c2b0fb7711c72882c8065c22ef36;"

 fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        
    let mylist = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(mylist);

        let forecastDayNumber = DayNumber;
        for (i=0; i<mylist.length; i++) {
        forecastDayNumber += 1;
         if (forecastDayNumber === 7){forecastDayNumber=0;}

         let NameofDay = document.createElement("h5");
         NameofDay.textContent = weekday[forecastDayNumber];

        let Temp = document.createElement("p");
         Temp.textContent = jsObject.list[i].main.temp + "\xB0";

         let iconcode = jsObject.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
         theIcon.src=iconPath;

        let theDay = document.createElement("fiveday");
        theDay.appendChild(NameofDay);
        theDay.appendChild(Temp);
        theDay.appendChild(theIcon);

         document.getElementById('fiveday').appendChild(theDay);
            
        }
    });

        