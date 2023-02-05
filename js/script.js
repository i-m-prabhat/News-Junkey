let articlesPerPage;
let totalPages;
console.log("Hello this is prabhat");
let query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
let page = parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
console.log(query , page)
const fetchNews= async (query,page)=>{
    // let a = await fetch('/api?q=${query}&apiKey=d99e1b37ae004e808b0ee06e896192eb')
    let a = await fetch('api?q=${query}&apiKey=d99e1b37ae004e808b0ee06e896192eb')
    // https://newsapi.org/v2/everything?q=bitcoin&apiKey=d99e1b37ae004e808b0ee06e896192eb
    let r = await a.json()
    console.log(r)
    totalPages = Math.ceil(r.totalResults/articlesPerPage)
    pre.href = `/?q=${query}&pageno=${page-1}`
    next.href = `/?q=${query}&pageno=${page+1}`
    let str = ""
    for(let item of r.articles){
        str = str + `
        <div class="col-sm-3">
                    <div class="card text-bg-dark m-2" style="width: 18rem;">
                        <img src="${item.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body text-bg-dark">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text ">${item.description}</p>
                            <a href="${item.url}" target="_blank" class="btn btn-primary">Read More...</a>
                        </div>
                    </div>
                </div>`
    }
    content.innerHTML = str;
}

fetchNews("sports",page) 