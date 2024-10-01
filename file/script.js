const qoute = document.getElementById("quote");
const auther = document.getElementById("auther");
const api_url = "https://api.quotable.io/randow";

async function getquote(url){
    
    const res = await fetch(url);
    var data = await res.json();
    console.log(data)
    qoute.innerHTML = data.qoute;
    auther.innerHTML = data.auther;

}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + qoute.innerHTML + "---by" + auther.innerHTML, "Tweet Window", "width=600, height=300");
}
getquote(url);

