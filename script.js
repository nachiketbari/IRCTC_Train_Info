const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c42e0f8618msh1c49f3067d09753p122efdjsn6ba700325d85',
        'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
    }
};

const getdata = (pnrNumber) => {
    fetch(`https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${pnrNumber}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Assuming pnrData and boardingInfo are elements in your HTML
            document.getElementById('pnrData').innerHTML = `PNR Number: ${pnrNumber}`;
            // Update the following line based on the actual structure of the response data
            document.getElementById('boardingInfo').innerHTML = `trainId: ${data.data.boardingInfo.trainId}`; 
            document.getElementById('trainInfo').innerHTML = `train No: ${data.data.trainInfo.trainNo}`;
            document.getElementById('name').innerHTML = `Name: ${data.data.trainInfo.name}`;
            document.getElementById('boarding').innerHTML = `boarding: ${data.data.trainInfo.boarding}`;
            document.getElementById('destinationInfo').innerHTML = `destination: ${data.data.trainInfo.destination}`;
            document.getElementById('berth').innerHTML = `berth: ${data.data.seatInfo.berth}`;
            document.getElementById('coach').innerHTML = `coach: ${data.data.seatInfo.berth}`;
            document.getElementById('seatInfo').innerHTML = `noOfSeats: ${data.data.trainInfo.noOfSeats}`;

            
        })
            
        
        .catch(error => {
            console.error('error:', error);
            // Handle errors here
        });
};

const submit = document.getElementById('submit');
const pnrNumberInput = document.getElementById('pnrNumber');

submit.addEventListener("click", (event) => {
    event.preventDefault();
    getdata(pnrNumberInput.value);
    
});

    





// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'c42e0f8618msh1c49f3067d09753p122efdjsn6ba700325d85',
//         'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
//     }
// };

// const getdata = (pnrNumber) => {
//     fetch(`https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${pnrNumber}`, options)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             // Assuming pnrData and boardingInfo are elements in your HTML
//             document.getElementById('pnrData').innerHTML = pnrNumber;
//             document.getElementById('-').innerHTML = data.data.boardingInfo[0];
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             // Handle errors here
//         });
// };

// const submit = document.getElementById('submit');
// const pnrNumberInput = document.getElementById('pnrNumber');

// submit.addEventListener("click", (event) => {
//     event.preventDefault();
//     getdata(pnrNumberInput.value);
// });



		
		
		
		
		
		
		
		
		
		
