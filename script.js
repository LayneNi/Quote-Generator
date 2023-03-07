const APIkey = "5P6QO7VJRqnquUEJr7susQ==jNfogauqhz6Oe2kU";
const quoteApi = "https://api.api-ninjas.com/v1/quotes";
const categorySelection = document.querySelector("#category");
const submitBtnEl = document.querySelector(".generate");
const dropDown = document.querySelector(".form-select");
document.getElementById("quote-author").style.display = "none";
document.getElementById("quote-link").style.display = "none";

submitBtnEl.addEventListener("click", function (event) {
    console.log("something");
    // formEl.classList.add("hide");
    // populatedDataEl.classList.remove("hide");
    event.preventDefault()
    // let type = typeEl.options[typeEl.selectedIndex].text;
    fetchApi();
    get_dynamic_url()
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
        createQuote(data)
        
        console.log(data);
    }).catch(error => {
        console.log(error)
    })
}

const createQuote = function(data){
    console.log(data);
    const quoteData = [
            {
                quote: data[0].quote,
                author: data[0].author,
                category: data[0].category,
            },
            {
                quote: data[1].quote,
                author: data[1].author,
                category: data[1].category,
            },
            {
                quote: data[2].quote,
                author: data[2].author,
                category: data[2].category,
            },
            {
                quote: data[3].quote,
                author: data[3].author,
                category: data[3].category,
            },
            {
                quote: data[4].quote,
                author: data[4].author,
                category: data[4].category,
            },
            {
                quote: data[5].quote,
                author: data[5].author,
                category: data[5].category,
            },
            {
                quote: data[6].quote,
                author: data[6].author,
                category: data[6].category,
            },
            {
                quote: data[7].quote,
                author: data[7].author,
                category: data[7].category,
            },
            {
                quote: data[8].quote,
                author: data[8].author,
                category: data[8].category,
            },
            {
                quote: data[9].quote,
                author: data[9].author,
                category: data[9].category,
            }
        
    ]
    let arrayIndex = Math.floor(Math.random() * quoteData.length);
    console.log(arrayIndex);
    document.getElementById("quote-category").innerHTML = quoteData[arrayIndex].category.charAt(0).toUpperCase() + quoteData[arrayIndex].category.slice(1) + " " + "Quote";
    document.getElementById("quote-text").innerHTML = quoteData[arrayIndex].quote;
    document.getElementById("author-text").innerHTML = "-" + quoteData[arrayIndex].author;
    console.log(quoteData[arrayIndex].author);
    // console.log(quoteData[arrayIndex].author.split(" ")[0] + " " + quoteData[arrayIndex].author.split(" ")[1]);
    // document.getElementById("quote-author").setAttribute("href", "https://www.google.com/search?q=" + quoteData[arrayIndex].author.split(" ")[0] + " " + quoteData[arrayIndex].author.split(" ")[1])
    document.getElementById("quote-author").setAttribute("href", "https://www.google.com/search?q=" + quoteData[arrayIndex].author)
    document.getElementById("quote-author").style.display = "";
    console.log(quoteData[arrayIndex].quote.split(" ")[0] + " " + quoteData[arrayIndex].quote.split(" ")[1] + " " + quoteData[arrayIndex].quote.split(" ")[2] + " " + quoteData[arrayIndex].quote.split(" ")[3] + " " + quoteData[arrayIndex].quote.split(" ")[4] + " " + quoteData[arrayIndex].quote.split(" ")[5] + " " + quoteData[arrayIndex].quote.split(" ")[6] + " " + quoteData[arrayIndex].quote.split(" ")[7] + " " + quoteData[arrayIndex].quote.split(" ")[8] + " " + quoteData[arrayIndex].author);
    document.getElementById("quote-link").setAttribute("href", "https://www.google.com/search?q=" + quoteData[arrayIndex].quote.split(" ")[0] + " " + quoteData[arrayIndex].quote.split(" ")[1] + " " + quoteData[arrayIndex].quote.split(" ")[2] + " " + quoteData[arrayIndex].quote.split(" ")[3] + " " + quoteData[arrayIndex].quote.split(" ")[4] + " " + quoteData[arrayIndex].quote.split(" ")[5] + " " + quoteData[arrayIndex].quote.split(" ")[6] + " " + quoteData[arrayIndex].quote.split(" ")[7] + " " + quoteData[arrayIndex].quote.split(" ")[8] + " " + quoteData[arrayIndex].author)
    document.getElementById("quote-link").style.display = "";
}