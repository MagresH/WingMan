//Wczytanie współrzędnych z mapy
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51, lng: 20 },
    zoom: 6,
  });

  map.addListener("click", function (event) {
    var latLng = event.latLng;
    var senderLatitude = latLng.lat();
    var senderLongitude = latLng.lng();

    document.getElementById("senderLatitude").value = senderLatitude;
    document.getElementById("senderLongitude").value = senderLongitude;
  });

  var map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 51, lng: 20 },
    zoom: 6,
  });

  map2.addListener("click", function (event) {
    var latLng = event.latLng;
    var receiverLatitude = latLng.lat();
    var receiverLongitude = latLng.lng();

    document.getElementById("receiverLatitude").value = receiverLatitude;
    document.getElementById("receiverLongitude").value = receiverLongitude;
  });
}

function saveAndDisplayData() {
  var senderFirstName = document.getElementById("senderFirstName").value;
  var senderLastName = document.getElementById("senderLastName").value;
  var senderCompanyName = document.getElementById("senderCompanyName").value;
  var senderEmail = document.getElementById("senderEmail").value;
  var senderPhoneNumber = document.getElementById("senderPhoneNumber").value;
  var senderFirstAddressLine = document.getElementById("senderFirstAddressLine").value;
  var senderSecondAddressLine = document.getElementById("senderSecondAddressLine").value;
  var senderZipCode = document.getElementById("senderZipCode").value;
  var senderCity = document.getElementById("senderCity").value;
  var senderState = document.getElementById("senderState").value;
  var senderCountry = document.getElementById("senderCountry").value;
  var senderLongitude = document.getElementById("senderLongitude").value;
  var senderLatitude = document.getElementById("senderLatitude").value;

  var receiverFirstName = document.getElementById("receiverFirstName").value;
  var receiverLastName = document.getElementById("receiverLastName").value;
  var receiverCompanyName = document.getElementById("receiverCompanyName").value;
  var receiverEmail = document.getElementById("receiverEmail").value;
  var receiverPhoneNumber = document.getElementById("receiverPhoneNumber").value;
  var receiverFirstAddressLine = document.getElementById("receiverFirstAddressLine").value;
  var receiverSecondAddressLine = document.getElementById("receiverSecondAddressLine").value;
  var receiverZipCode = document.getElementById("receiverZipCode").value;
  var receiverCity = document.getElementById("receiverCity").value;
  var receiverState = document.getElementById("receiverState").value;
  var receiverCountry = document.getElementById("receiverCountry").value;
  var receiverLongitude = document.getElementById("receiverLongitude").value;
  var receiverLatitude = document.getElementById("receiverLatitude").value;

  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var typeOfGoods = document.getElementById("type_of_goods").value;
  var isFragile = document.getElementById("is_fragile").checked ? "Tak" : "Nie";

  var summary = document.getElementById("summary");
  summary.innerHTML =
    "<h2>Nadawca</h2>" +
    "<hr>" +
    "<p>Imię i nazwisko nadawcy: " +
    senderFirstName +
    " " +
    senderLastName +
    "</p>" +
    "<p>Nazwa firmy nadawcy: " +
    senderCompanyName +
    "</p>" +
    "<p>Adres e-mail nadawcy: " +
    senderEmail +
    "</p>" +
    "<p>Numer telefonu nadawcy: " +
    senderPhoneNumber +
    "</p>" +
    "<p>Adres nadawcy: " +
    senderFirstAddressLine +
    ", " +
    senderSecondAddressLine +
    ", " +
    senderZipCode +
    " " +
    senderCity +
    "</p>" +
    "<p>Województwo nadawcy: " +
    senderState +
    "</p>" +
    "<p>Kraj nadawcy: " +
    senderCountry +
    "</p>" +
    "<p>Długość geograficzna nadawcy: " +
    senderLongitude +
    "</p>" +
    "<p>Szerokość geograficzna nadawcy: " +
    senderLatitude +
    "</p>";

  var summary = document.getElementById("summary2");
  summary.innerHTML =
    "<h2>Odbiora</h2>" +
    "<hr>" +
    "<p>Imię i nazwisko odbiorcy: " +
    receiverFirstName +
    " " +
    receiverLastName +
    "</p>" +
    "<p>Nazwa firmy odbiorcy: " +
    receiverCompanyName +
    "</p>" +
    "<p>Adres e-mail odbiorcy: " +
    receiverEmail +
    "</p>" +
    "<p>Numer telefonu odbiorcy: " +
    receiverPhoneNumber +
    "</p>" +
    "<p>Adres odbiorcy: " +
    receiverFirstAddressLine +
    ", " +
    receiverSecondAddressLine +
    ", " +
    receiverZipCode +
    " " +
    receiverCity +
    "</p>" +
    "<p>Województwo odbiorcy: " +
    receiverState +
    "</p>" +
    "<p>Kraj odbiorcy: " +
    receiverCountry +
    "</p>" +
    "<p>Długość geograficzna odbiorcy: " +
    receiverLongitude +
    "</p>" +
    "<p>Szerokość geograficzna odbiorcy: " +
    receiverLatitude +
    "</p>";

  var summary = document.getElementById("summary3");
  summary.innerHTML =
    "<h2>Paczka</h2>" +
    "<hr>" +
    "<p>Długość paczki: " +
    length +
    " cm</p>" +
    "<p>Szerokość paczki: " +
    width +
    " cm</p>" +
    "<p>Wysokość paczki: " +
    height +
    " cm</p>" +
    "<p>Waga paczki: " +
    weight +
    " kg</p>" +
    "<p>Zawartość paczki: " +
    typeOfGoods +
    "</p>" +
    "<p>Czy paczka jest krucha: " +
    isFragile +
    "</p>";
}
