/*fetch('https://randomuser.me/api')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const user1 = data.results[0];
        const picture = user1.picture.large;
        //const user2 = data.results[1];
        //const picture2 = user2.picture.large;

        picture1.src = picture;
        //picture3.src = picture2;

        console.log('Picture:', picture);
        //console.log('Picture:', picture2);
    })
    .catch(error => {
        console.error('Error:', error);
    }) */

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
            //console.log(pictures[0]);
            //pictures[0].src = data.results[0].picture.large;
            //pictures[1].src = data.results[1].picture.large;
            for(let i = 0; i < pictures.length; i++) {
                pictures[i].src = data.results[i].picture.large;
                cities[i].innerText += data.results[i].location.city;
            }
          });
      }