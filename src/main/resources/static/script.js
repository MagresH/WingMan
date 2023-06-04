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

function createOrder() {
    const sender = {
        firstName: document.getElementById("senderFirstName").value,
        lastName: document.getElementById("senderLastName").value,
        companyName: document.getElementById("senderCompanyName").value,
        email: document.getElementById("senderEmail").value,
        phoneNumber: document.getElementById("senderPhoneNumber").value,
        firstAddressLine: document.getElementById("senderFirstAddressLine").value,
        secondAddressLine: document.getElementById("senderSecondAddressLine").value,
        zipCode: document.getElementById("senderZipCode").value,
        city: document.getElementById("senderCity").value,
        state: document.getElementById("senderState").value,
        country: document.getElementById("senderCountry").value,
        longitude: document.getElementById("senderLongitude").value,
        latitude: document.getElementById("senderLatitude").value,
    };

    const receiver = {
        firstName: document.getElementById("receiverFirstName").value,
        lastName: document.getElementById("receiverLastName").value,
        companyName: document.getElementById("receiverCompanyName").value,
        email: document.getElementById("receiverEmail").value,
        phoneNumber: document.getElementById("receiverPhoneNumber").value,
        firstAddressLine: document.getElementById("receiverFirstAddressLine").value,
        secondAddressLine: document.getElementById("receiverSecondAddressLine").value,
        zipCode: document.getElementById("receiverZipCode").value,
        city: document.getElementById("receiverCity").value,
        state: document.getElementById("receiverState").value,
        country: document.getElementById("receiverCountry").value,
        longitude: document.getElementById("receiverLongitude").value,
        latitude: document.getElementById("receiverLatitude").value,
    };

    const _package = {
        height: document.getElementById("height").value,
        width: document.getElementById("width").value,
        length: document.getElementById("length").value,
        weight: document.getElementById("weight").value,
        typeOfGoods: document.getElementById("type_of_goods").value,
        isFragile: document.getElementById("is_fragile").checked,
    };
    const _order = {
        sender,
        receiver,
        _package,
    };
    fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(_order),
    })
        .then((response) => response.json())
        .then((createdOrder) => {
            confirm("Zamówienie zostało utworzone");
            console.log("Nowe zamówienie zostało utworzone:");
            console.log(createdOrder.delivery.status);
            console.log(createdOrder);

            // Tworzenie sekcji z danymi zamówienia
            const orderContainer = document.getElementById("orderContainer");
            orderContainer.innerHTML = ""; // Usunięcie poprzedniej zawartości

            // Sender section
            const senderSection = document.createElement("div");
            senderSection.classList.add("col-md-4");

            const senderTable = createTable("Nadawca", [
                ["Pierwsze Imię", createdOrder.sender.firstName],
                ["Nazwisko", createdOrder.sender.lastName],
                ["Firma", createdOrder.sender.companyName],
                ["Email", createdOrder.sender.email],
                ["Numer Telefonu", createdOrder.sender.phoneNumber],
                ["Adres 1", createdOrder.sender.firstAddressLine],
                ["Adres 2", createdOrder.sender.secondAddressLine],
                ["Kod Pocztowy", createdOrder.sender.zipCode],
                ["Miasto", createdOrder.sender.city],
                ["Województwo", createdOrder.sender.state],
                ["Kraj", createdOrder.sender.country],
            ]);

            senderSection.appendChild(senderTable);
            orderContainer.appendChild(senderSection);

            // Receiver section
            const receiverSection = document.createElement("div");
            receiverSection.classList.add("col-md-4");

            const receiverTable = createTable("Odbiorca", [
                ["Pierwsze Imię", createdOrder.receiver.firstName],
                ["Nazwisko", createdOrder.receiver.lastName],
                ["Firma", createdOrder.receiver.companyName],
                ["Email", createdOrder.receiver.email],
                ["Numer Telefonu", createdOrder.receiver.phoneNumber],
                ["Adres 1", createdOrder.receiver.firstAddressLine],
                ["Adres 2", createdOrder.receiver.secondAddressLine],
                ["Kod Pocztowy", createdOrder.receiver.zipCode],
                ["Miasto", createdOrder.receiver.city],
                ["Województwo", createdOrder.receiver.state],
                ["Kraj", createdOrder.receiver.country],
            ]);

            receiverSection.appendChild(receiverTable);
            orderContainer.appendChild(receiverSection);

            // Package section
            const packageSection = document.createElement("div");
            packageSection.classList.add("col-md-4");

            const packageTable = createTable("Dostawa", [
                ["Data złożenie zamówienia", createdOrder.orderTime],
                ["Status przesyłki", createdOrder.delivery.status],
                ["Czas dostawy", createdOrder.delivery.deliveryHours + "h"],
                ["Wielkość paczki", createdOrder._package.height + "cm x" + createdOrder._package.width + "cm x" + createdOrder._package.length + "cm"],
                ["Typ Towaru", createdOrder._package.typeOfGoods],
                ["Czy Delikatne", createdOrder._package.isFragile ? "Tak" : "Nie"],
            ]);

            packageSection.appendChild(packageTable);
            orderContainer.appendChild(packageSection);

            // Resetowanie formularzy
            document.getElementById("senderForm").reset();
            document.getElementById("receiverForm").reset();
            document.getElementById("packageForm").reset();
            document.getElementById("packageForm1").reset();
        })
        .catch((error) => {
            confirm("Wystąpił błąd podczas tworzenia zamówienia");
            console.error("Wystąpił błąd podczas tworzenia zamówienia:", error);
        });
}

function createTable(title, data) {
    const table = document.createElement("table");
    table.classList.add("table");

    const tbody = document.createElement("tbody");

    // Table title row
    const titleRow = document.createElement("tr");
    const titleCell = document.createElement("th");
    titleCell.setAttribute("colspan", "2");
    titleCell.textContent = title;
    titleRow.appendChild(titleCell);
    tbody.appendChild(titleRow);

    // Data rows
    for (const [label, value] of data) {
        const row = document.createElement("tr");
        const labelCell = document.createElement("td");
        labelCell.textContent = label;
        const valueCell = document.createElement("td");
        valueCell.textContent = value;
        row.appendChild(labelCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    return table;
}

// Funkcja sprawdzająca, czy wszystkie pola formularza są wypełnione
function validateForm(formId) {
    var inputs = document.querySelectorAll("#" + formId + " input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "" && inputs[i].hasAttribute("required")) {
            return false;
        }
    }
    return true;
}

function updateEnterButtonState(formId, buttonId) {
    var enterButton = document.getElementById(buttonId);
    enterButton.disabled = !validateForm(formId);
}

// Funkcja sprawdzająca stan formularza przy każdej zmianie wartości pola
document.getElementById("senderForm").addEventListener("input", function () {
    updateEnterButtonState("senderForm", "enter1");
});
document.getElementById("receiverForm").addEventListener("input", function () {
    updateEnterButtonState("receiverForm", "enter2");
});
document.getElementById("packageForm1").addEventListener("input", function () {
    updateEnterButtonState("packageForm1", "enter3");
    updateEnterButtonState("packageForm", "enter3");
});

// Obsługa kliknięcia przycisku "Dalej"
document.getElementById("enter1").addEventListener("click", function () {
    var senderFormValid = validateForm("senderForm");
    if (senderFormValid) {
        // Przejdź do kolejnego slajdu (jeśli formularz jest poprawnie wypełniony)
        $("#myCarousel").carousel("next");
    } else {
        alert("Wypełnij wszystkie pola formularza");
    }
});

document.getElementById("enter2").addEventListener("click", function () {
    var receiverFormValid = validateForm("receiverForm");
    if (receiverFormValid) {
        // Przejdź do kolejnego slajdu (jeśli formularz jest poprawnie wypełniony)
        $("#myCarousel").carousel("next");
    } else {
        alert("Wypełnij wszystkie pola formularza");
    }
});

document.getElementById("enter3").addEventListener("click", function () {
    var packageForm1Valid = validateForm("packageForm1");
    var packageFormValid = validateForm("packageForm");
    if (packageForm1Valid && packageFormValid) {
        // Przejdź do kolejnego slajdu (jeśli formularz jest poprawnie wypełniony)
        $("#myCarousel").carousel("next");
    } else {
        alert("Wypełnij wszystkie pola formularza");
    }
});

// Wywołanie funkcji validateForm() na starcie, aby ustawić stan przycisków "Dalej"
document.addEventListener("DOMContentLoaded", function () {
    updateEnterButtonState("senderForm", "enter1");
    updateEnterButtonState("receiverForm", "enter2");
    updateEnterButtonState("packageForm1", "enter3");
    updateEnterButtonState("packageForm", "enter3");
});
