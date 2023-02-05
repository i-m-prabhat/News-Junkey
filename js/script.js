let articlesPerPage;
let totalPages;
console.log("Hey I am javascript")
let query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
let page = parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
console.log(query, page)
const fetchNews = async (query, pageNo) =>
{
    let a = await fetch(`/api?q=${query}&apiKey=d99e1b37ae004e808b0ee06e896192eb&pageSize=8&page=${pageNo}`)
    let r = await a.json()
    console.log(r)
    queryText.innerHTML = query.replace("+", " ")
    queryResults.innerHTML = r.totalResults
    totalPages = Math.ceil(r.totalResults / articlesPerPage)
    pre.href = `/?q=${query}&pageno=${page - 1}`
    next.href = `/?q=${query}&pageno=${page + 1}`
    let str = ""
    for (let item of r.articles)
    {
        let date = new Date(item.publishedAt).toLocaleDateString()
        str = str + `
        <div class="col-sm-3">
              <div class="card text-bg-dark m-2" style="width: 18rem;">
                <img src="${item.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body text-bg-dark">
                    <h5 class="card-title">${item.title}</h5>
                    <span class="fw-bold">Published </span> : ${date}
                    <p class="card-text">${item.description}</p>
                    <a target="_blank" href="${item.url}" class="btn btn-success">Read More...</a>
                </div>
            </div>
        </div>    
        `
    }
    content.innerHTML = str;
}

fetchNews(query, page)