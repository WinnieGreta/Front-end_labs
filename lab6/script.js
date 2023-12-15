function getUsers() {
    fetch("https://randomuser.me/api/?results=5")
        .then(response => {
            const responseText = document.getElementById("responseHead");
            if (!response.ok) {
                responseText.innerText = "Not OK";
                throw new Error('Network response not ok');
            }
            else {
                responseText.innerText = "OK";
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const pictures = document.getElementsByClassName("photo");
            const cities = document.getElementsByClassName("city");
            const postcodes = document.getElementsByClassName("postcode");
            const phones = document.getElementsByClassName("phone");
            const names = document.getElementsByClassName("fullname");
            //console.log(pictures[0]);
            //pictures[0].src = data.results[0].picture.large;
            //pictures[1].src = data.results[1].picture.large;
            for (let i = 0; i < pictures.length; i++) {
                pictures[i].src = data.results[i].picture.large;
                cities[i].innerText += data.results[i].location.city;
                postcodes[i].innerText += data.results[i].location.postcode;
                phones[i].innerText += data.results[i].phone;
                names[i].innerText += data.results[i].name.first + " " + data.results[i].name.last;
            }
        });
}