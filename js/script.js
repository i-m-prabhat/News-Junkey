let articlesPerPage;
let totalPages;
console.log("Hello this is prabhat");
let query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
let page = parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
console.log(query , page)
const fetchNews= async (query,page)=>{
    let a = await fetch('/api?q=${query}&apiKey=dbe57b028aeb41e285a226a94865f7a7')
    let r=await a.json()
    console.log(r)
    totalPageesc = Math.ceil(r.totalResults/articlesPerPage)
    pre.href = `/?q=${query}&pageno=${page-1}`
    pre.href = `/?q=${query}&pageno=${page+1}`
}

fatchNews("sports",page)