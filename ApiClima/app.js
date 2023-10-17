const UrlBase = "https://api.openweathermap.org/data/2.5/weather";
const ApiKey ="05097fa9628d963e68baf88173b65e19";
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city');

const fetApi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon, apiKey){
    const url=`${ UrlBase}?lat=${lat}&lon=${lon}&appid=${ apiKey }`;
    console.log(url)
    const clima = await fetApi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML=clima.name;
    pintaTem(temperature);
    pintaFondo(temperature);
}
    
async function getClimaByCity(city, apiKey){
    const url =`${ UrlBase}?q=${city}&appid=${ apiKey}`;
    const clima = await fetApi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    
    document.querySelector('#left h2').innerHTML=clima.name;
    pintaTem(temperature);
    pintaFondo(temperature);
}

function pintaTem(tem){
    const h3 = document.querySelector('h3');
    if(tem < 15){
        h3.innerHTML = `${ tem } °C ❄❄❄❄`;
    }else if (tem <22){
        h3.innerHTML = `${ tem } °C ⛅⛅⛅⛅`;
    }else{
        h3.innerHTML = `${ tem } °C 🌞🥵🌞`;
    }
}

function pintaFondo(tem){
    const fondo = document.querySelector('body');
    if(tem < 15){
        fondo.style.background = '#a8f3da';
    }else if (tem <22){
        fondo.style.background='#ffff88';
    }else{
        fondo.style.background= 'OrangeRed';
    }
}

navigator.geolocation.getCurrentPosition(
    position =>{
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat,lon,ApiKey);
    }
)

btnCiudad.addEventListener('click',()=>{
    const city = inputCity.value;
    if(city){
        getClimaByCity(city,ApiKey);
    }
})