// Initialize and add the map
function initMap() {

  var bk332 = {lat: 32.0765915, lng: -81.0948175};
  var bk521 = {lat: 32.0028237, lng: -81.1232184};
  var bk1226 = {lat: 32.0295283, lng: -81.1139274};
  var bk1404 = {lat: 31.9822369, lng: -81.154823};
  var bk1551 = {lat: 32.1035482, lng: -81.1524466};
  var bk15760 = {lat: 32.0490374, lng: -81.166784};
  var bk14614 = {lat: 32.432248, lng: -81.7822333};
  var bk9423 = {lat: 32.2781745, lng: -81.2333058};
  var bk10893 = {lat: 31.830114, lng: -81.6188988};
  var bk16269 = {lat: 32.3507152, lng: -81.2986413};
  var bk23049 = {lat: 32.164794, lng: -81.2338865};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 9, center: bk1551});

  var bk332address = '<p class="map-caption"><b>Burger King 332</b><br>601 Martin Luther King Blvd.<br>Savannah, GA 31401<br>912-234-9906</p>';
  var bk521address = '<p class="map-caption"><b>Burger King 521</b><br>7923 White Bluff Road<br>Savannah, GA 31406<br>912-927-2244</p>';
  var bk1226address = '<p class="map-caption"><b>Burger King 1226</b><br>4 W. DeRenne Avenue<br>Savannah, GA 31405<br>912-352-2514</p>';
  var bk1404address = '<p class="map-caption"><b>Burger King 1404</b><br>11711 Abercorn Street<br>Savannah, GA 31419<br>912-925-1570</p>';
  var bk1551address = '<p class="map-caption"><b>Burger King 1551</b><br>14241 Augusta Road<br>Savannah, GA 31408<br>912-964-5929</p>';
  var bk15760address = '<p class="map-caption"><b>Burger King 15760</b><br>4268 Ogeechee Road<br>Savannah, GA 31405<br>912-443-9676</p>';
  var bk14614address = '<p class="map-caption"><b>Burger King 14614</b><br>602 Fair Road<br>Statesboro, GA 30458<br>912-681-6436</p>';
  var bk9423address = '<p class="map-caption"><b>Burger King 9423</b><br>421 S. Columbus Avenue<br>Rincon, GA 31326<br>912-826-4223</p>';
  var bk10893address = '<p class="map-caption"><b>Burger King 10893</b><br>815 E.G. Miles Parkway<br>Hinesville, GA 31313<br>912-876-3301</p>';
  var bk16269address = '<p class="map-caption"><b>Burger King 16269</b><br>1262 Highway 21 S.<br>Springfield, GA 31329</p>';
  var bk23049address = '<p class="map-caption"><b>Burger King 23049</b><br>496 Jimmy Deloach Parkway<br>Savannah, GA 31407</p>';

  var infowindow332 = new google.maps.InfoWindow({
    content: bk332address
  });
  var infowindow521 = new google.maps.InfoWindow({
    content: bk521address
  });
  var infowindow1226 = new google.maps.InfoWindow({
    content: bk1226address
  });
  var infowindow1404 = new google.maps.InfoWindow({
    content: bk1404address
  });
  var infowindow1551 = new google.maps.InfoWindow({
    content: bk1551address
  });
  var infowindow15760 = new google.maps.InfoWindow({
    content: bk15760address
  });
  var infowindow14614 = new google.maps.InfoWindow({
    content: bk14614address
  });
  var infowindow9423 = new google.maps.InfoWindow({
    content: bk9423address
  });
  var infowindow10893 = new google.maps.InfoWindow({
    content: bk10893address
  });
  var infowindow16269 = new google.maps.InfoWindow({
    content: bk16269address
  });
  var infowindow23049 = new google.maps.InfoWindow({
    content: bk23049address
  });

  // The markers
  var marker332 = new google.maps.Marker({position: bk332, map: map, animation: google.maps.Animation.DROP});
  var marker521 = new google.maps.Marker({position: bk521, map: map, animation: google.maps.Animation.DROP});
  var marker1226 = new google.maps.Marker({position: bk1226, map: map, animation: google.maps.Animation.DROP});
  var marker1404 = new google.maps.Marker({position: bk1404, map: map, animation: google.maps.Animation.DROP});
  var marker1551 = new google.maps.Marker({position: bk1551, map: map, animation: google.maps.Animation.DROP});
  var marker15760 = new google.maps.Marker({position: bk15760, map: map, animation: google.maps.Animation.DROP});
  var marker14614 = new google.maps.Marker({position: bk14614, map: map, animation: google.maps.Animation.DROP});
  var marker9423 = new google.maps.Marker({position: bk9423, map: map, animation: google.maps.Animation.DROP});
  var marker10893 = new google.maps.Marker({position: bk10893, map: map, animation: google.maps.Animation.DROP});
  var marker16269 = new google.maps.Marker({position: bk16269, map: map, animation: google.maps.Animation.DROP});
  var marker23049 = new google.maps.Marker({position: bk23049, map: map, animation: google.maps.Animation.DROP});

  marker332.addListener('click', function() {
    infowindow332.open(map, marker332);
  });
  marker521.addListener('click', function() {
    infowindow521.open(map, marker521);
  });
  marker1226.addListener('click', function() {
    infowindow1226.open(map, marker1226);
  });
  marker1404.addListener('click', function() {
    infowindow1404.open(map, marker1404);
  });
  marker1551.addListener('click', function() {
    infowindow1551.open(map, marker1551);
  });
  marker15760.addListener('click', function() {
    infowindow15760.open(map, marker15760);
  });
  marker14614.addListener('click', function() {
    infowindow14614.open(map, marker14614);
  });
  marker9423.addListener('click', function() {
    infowindow9423.open(map, marker9423);
  });
  marker10893.addListener('click', function() {
    infowindow10893.open(map, marker10893);
  });
  marker16269.addListener('click', function() {
    infowindow16269.open(map, marker16269);
  });
  marker23049.addListener('click', function() {
    infowindow23049.open(map, marker23049);
  });

  //listener for buttons
  $('#322').on('click', function() {
    infowindow332.open(map, marker332);
  });
  $('#521').on('click', function() {
    infowindow521.open(map, marker521);
  });
  $('#1226').on('click', function() {
    infowindow1226.open(map, marker1226);
  });
  $('#1404').on('click', function() {
    infowindow1404.open(map, marker1404);
  });
  $('#1551').on('click', function() {
    infowindow1551.open(map, marker1551);
  });
  $('#15760').on('click', function() {
    infowindow15760.open(map, marker15760);
  });
  $('#14614').on('click', function() {
    infowindow14614.open(map, marker14614);
  });
  $('#9423').on('click', function() {
    infowindow9423.open(map, marker9423);
  });
  $('#10893').on('click', function() {
    infowindow10893.open(map, marker10893);
  });
  $('#16269').on('click', function() {
    infowindow16269.open(map, marker16269);
  });
  $('#23049').on('click', function() {
    infowindow23049.open(map, marker23049);
  });
}
   