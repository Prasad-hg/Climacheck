import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
import './WeatherApp.css';
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        
        city:"wonderland",
        feelsLike: 21.54,
        humidity: 94,
        temp: 20.94,
        tempMax: 20.94,
        tempMin: 20.94,
        weather: "overcast clouds"
    })
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"ceneter"}}>
            <h1 className="app-title">ClimaCheck 🌍</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
 <footer className="footer">
  &copy; {new Date().getFullYear()} ClimaCheck by Prasad. All rights reserved.
</footer>


        </div>
        
    )
}