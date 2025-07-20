import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e91d1061762d0a38f02220d99cddfc86";

    let getWeatherInfo = async () => {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        let jsonResponse = await response.json();

        if (jsonResponse.cod !== 200) {
            throw new Error("City not found");
        }

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
            setError(false);   // ✅ Clear error on success
            setCity("");       // ✅ Clear input after success
        } catch (err) {
            setError(true);    // ✅ Set error if fetch or city fails
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists 🙅</p>}
            </form>
        </div>
    );
}
