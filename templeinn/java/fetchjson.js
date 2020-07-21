const requestURL ="temple.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
  
  const temples = jsonObject['temples'];
  for (let i = 0; i < temples.length; i++ ) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p2');
    let p3 = document.createElement('p3');
    let p4 = document.createElement('p4');
    let p5 = document.createElement('p5');
    let p6 = document.createElement('p6');
    let p7 = document.createElement('p7');
    let p8 = document.createElement('p8');
    let p9 = document.createElement('p9');
    let image = document.createElement('img');
    
    h2.textContent = temples[i].name + ' ' + temples[i].name;
    p.textContent = "Adress: " + temples[i].location;
    p2.textContent = "Telephone: " + temples[i].phonenumber;
    p3.textContent = "Services: " + temples[i].avaiable;
    p4.textContent = "Ordinances Schedule: " + temples[i].schedule;
    p5.textContent = "Session Schedule: " + temples[i].appointment;
    p6.textContent = "Annouced: " + temples[i].date;
    p7.textContent = "Groundbreaking: " + temples[i].date;
    p8.textContent = "Dedicated: " + temples[i].date;
    p9.textContent = "Rededicated: " + temples[i].date;
    image.setAttribute('src', temples[i].imageurl);
    image.setAttribute('alt', temples[i].name + " " + temples[i].lastname + temples.indexOf(temples[i].name + " " + temples[i].address));
    
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(p8);
    card.appendChild(p9);
    card.appendChild(image);
    
    document.querySelector('div.temple').appendChild(temple);
               
  }});