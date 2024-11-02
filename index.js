function getData()
{
    const city = search.value;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city ;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffc1979a64mshfd991f46b87cc29p1071b1jsn70afa4d358b5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = awaitfetch(url, options);
	const result = awaitresponse.text();
    
	console.log(result);
} catch (error) {
	console.error(error);
}
}