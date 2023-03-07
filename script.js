const APIkey = "5P6QO7VJRqnquUEJr7susQ==jNfogauqhz6Oe2kU"
const quoteApi = "https://api.api-ninjas.com/v1/quotes"
const categorySelection = document.querySelector("#category")
const submitBtnEl = document.querySelector(".generate")


submitBtnEl.addEventListener("click", function (event) {
    console.log("something");
    // formEl.classList.add("hide");
    // populatedDataEl.classList.remove("hide");
    event.preventDefault()
    // let type = typeEl.options[typeEl.selectedIndex].text;
    fetchApi();
})

//Function to call API
function fetchApi() {
    fetch('https://api.api-ninjas.com/v1/quotes?category=' +  categorySelection.options[categorySelection.selectedIndex].text + '&limit=10', {
        headers: {
            'X-Api-Key': '5P6QO7VJRqnquUEJr7susQ==jNfogauqhz6Oe2kU'
        },
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    }).then(data => {
        // createQuotes(data)
        console.log(data);
    }).catch(error => {
        console.log(error)
    })
}



// categorySelection.addEventListener("click", function (event) {
//     category.textContent = "";
//     const category = event.target.textContent;
// });

// window.onload = function() {
//     // generateQuote();
//     document.getElementById("button").addEventListener('click', generateQuote);
//     document.getElementById("button").addEventListener('click', choosePic);
//     choosePic();
// }
