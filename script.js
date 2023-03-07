const APIkey = "5P6QO7VJRqnquUEJr7susQ==jNfogauqhz6Oe2kU";
const categorySelection = document.querySelector(".dropdown-menu");

// var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': "5P6QO7VJRqnquUEJr7susQ==jNfogauqhz6Oe2kU"},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

//Function to call API
function fetchApi() {
    fetch('https://api.api-ninjas.com/v1/quotes?category=' +  categorySelection.options[typeEl.selectedIndex].text, {
        headers: {
            'X-Api-Key': '5P6QO7VJRqnquUEJr7susQ==jNfogauqhz6Oe2kU'
        },
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    }).then(data => {
        createExercises(data)
    }).catch(error => {
        console.log(error)
    })
}


categorySelection.addEventListener("click", function (event) {
    category.textContent = "";
    const category = event.target.textContent;
});

window.onload = function() {
    // generateQuote();
    document.getElementById("button").addEventListener('click', generateQuote);
    document.getElementById("button").addEventListener('click', choosePic);
    choosePic();
}
