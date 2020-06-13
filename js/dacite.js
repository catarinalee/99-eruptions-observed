var ordem = 0;

// colocar aqui todas as imagens, seguindo a ordem numérica
var imagens = new Array();
imagens[0] = {
  image: '<img src="img/santa-maria.png">',
  name: 'Santa María',
  year: 2020,
  latitude: '14.757°N',
  longitude: '91.552°W',
  elevation: '3745 m',
  vei: 3,
  population: '119,462',
  rock: 'Dacite'
};
imagens[1] = {
  image: '<img src="img/rabaul.png">',
  name: 'Rabaul',
  year: 2014,
  latitude: '4.271°S',
  longitude: '152.203°E',
  elevation: '688 m',
  vei: 3,
  population: '43,531',
  rock: 'Dacite'
};
imagens[2] = {
  image: '<img src="img/witori.png">',
  name: 'Witori',
  year: 2012,
  latitude: '5.576°S',
  longitude: '150.516°E',
  elevation: '724 m',
  vei: 2,
  population: '24,509',
  rock: 'Dacite'
};
imagens[3] = {
  image: '<img src="img/st-helens.png">',
  name: 'St. Helens',
  year: 2008,
  latitude: '46.2°N',
  longitude: '122.18°W',
  elevation: '2549 m',
  vei: 2,
  population: '427',
  rock: 'Dacite'
};
imagens[4] = {
  image: '<img src="img/pinatubo.png">',
  name: 'Pinatubo',
  year: 1993,
  latitude: '15.13°N',
  longitude: '120.35°E',
  elevation: '1486 m',
  vei: 1,
  population: '3,808',
  rock: 'Dacite'
};
imagens[4] = {
  image: '<img src="img/banda-api.png">',
  name: 'Banda Api',
  year: 1988,
  latitude: '4.523°S',
  longitude: '129.881°E',
  elevation: '596 m',
  vei: 3,
  population: '5,682',
  rock: 'Dacite'
};
imagens[5] = {
  image: '<img src="img/lautaro.png">',
  name: 'Lautaro',
  year: 1979,
  latitude: '49.019°S',
  longitude: '73.504°W',
  elevation: '3542 m',
  vei: 2,
  population: '0',
  rock: 'Dacite'
};
imagens[6] = {
  image: '<img src="img/myojinsho.png">',
  name: 'Myojinsho',
  year: 1970,
  latitude: '49.019°S',
  longitude: '139.918°E',
  elevation: '11 m',
  vei: '—',
  population: '0',
  rock: 'Dacite'
};

function rodarImagens() {
  document.getElementById('image').innerHTML = imagens[ordem]['image'];
  document.getElementById('name').innerHTML = "<h2>name</h2>" + imagens[ordem]['name'];
  document.getElementById('latitude').innerHTML = "<h2>latitude</h2>" + imagens[ordem]['latitude'];
  document.getElementById('longitude').innerHTML = "<h2>longitude</h2>" + imagens[ordem]['longitude'];
  document.getElementById('year').innerHTML = "<h2>last known eruption</h2>" + imagens[ordem]['year'];
  document.getElementById('rock').innerHTML = "<h2>major rock type</h2>" + imagens[ordem]['rock'];
  document.getElementById('elevation').innerHTML = "<h2>summit elevation</h2>" + imagens[ordem]['elevation'];
  document.getElementById('population').innerHTML = "<h2>population (within 10km)</h2>" + imagens[ordem]['population'];
  document.getElementById('vei').innerHTML = "<h2>vei</h2>" + imagens[ordem]['vei'];

  console.log(imagens[ordem]['nome']);

  ordem++;

  if (ordem >= imagens.length)
    ordem = 0;

}

onload = function() {
  rodarImagens();
}
var inter = setInterval(function() {
  rodarImagens();
}, 3000);
