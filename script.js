const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '500f194b76mshdea800d39cdfda0p1d40cbjsn62138058827c',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
const btn=document.getElementById("btn")
const jokeContainer=document.getElementById("joke")
btn.addEventListener('click',getjoke)
function getjoke(){
         jokeContainer.classList.remove("fade");
         const response =  fetch(url, options)
	.then(res=>res.json())
         .then(data=>{
		data.content
                  jokeContainer.textContent=data.content
                  jokeContainer.classList.add("fade")
         })
	// console.log(result);
}

