

document.addEventListener('DOMContentLoaded', function() {

    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const senderFirstName = document.getElementById('senderFirstName').value;
        const senderLastName = document.getElementById('senderLastName').value;
        const receiverFirstName = document.getElementById('receiverFirstName').value;
        const receiverLastName = document.getElementById('receiverLastName').value;
        const packageDimension = document.getElementById('packageDimension').value;
        const packageWeight = document.getElementById('packageWeight').value;
        const packageType = document.getElementById('packageType').value;
        const isFragile = document.getElementById('isFragile').value === 'true';

        const orderData = {
            sender: {
                firstName: senderFirstName,
                lastName: senderLastName
            },
            receiver: {
                firstName: receiverFirstName,
                lastName: receiverLastName
            },
            _package: {
                dimension: packageDimension,
                weight: parseFloat(packageWeight),
                typeOfGoods: packageType,
                isFragile: isFragile
            }
        };

        fetch('http://localhost:8080/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(response => {
                if (response.ok) {
                    alert('Zamówienie zostało dodane.');
                    orderForm.reset();
                } else {
                    alert('Wystąpił błąd podczas dodawania zamówienia.');
                }
            })
            .catch(error => {
                console.error('Wystąpił błąd:', error);
            });
    });
});
