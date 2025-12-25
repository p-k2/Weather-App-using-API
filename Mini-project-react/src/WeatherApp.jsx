import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import {useState} from "react" ;

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike : 24 ,
        temp:25.02,
        tempMin: 32,
        tempMax: 22,
        humidity: 47,
        weather: "haze"
    }) ;

    let updateInfo =(newInfo)=>{

        setWeatherInfo(newInfo) ;
    }
    return (
        <div style = {{ textAlign: "center"}}> 
        <h2>Weather App</h2>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </div>
    )
}