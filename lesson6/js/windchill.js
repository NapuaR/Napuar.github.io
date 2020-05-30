function windChill(form) {
wind=eval(form.wind.value);
temp=eval(form.temp.value);
chill=(35.74+(0.6215*(Math.pow temp)-35.75*(Math.pow 0.16)))+
0.4275*temp*speed)*(temp-91.4)+91.4);
form.windchill.value = chill;
