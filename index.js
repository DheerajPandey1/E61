const api_key="AIzaSyBxSOZlh86iBItPKF04F1CjDqzCAVZUESw";

let search=async () =>{
    try{
        let query=document.getElementById("query").value;
let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyBxSOZlh86iBItPKF04F1CjDqzCAVZUESw`
let res= await fetch(url);

let data=await res.json();
// c```onsole.log(data);
append(data.items)
    }

catch (err) {
    console.log(err)
}

};

let append=(data) => {
    console.log(data)
let container=document.getElementById("results")

data.forEach(({ id: { videoId }, snippet: { title, thumbnails }})=>{
    let div=document.createElement("div")
let iframe=document.createElement("iframe")
iframe.src=`http://www.youtube.com/embed/${videoId}`;

let h3=document.createElement("h3");

div.append(iframe,h3)
container.append(div);
})
}
