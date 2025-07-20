import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1673776780349-79fab5006209?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   const HOT_URL ="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8fDB8fHww";
   const COLD_URL ="https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
   const RAIN_URL ="https://media.istockphoto.com/id/1456122261/photo/lonavala-beauty-of-maharastra.webp?a=1&b=1&s=612x612&w=0&k=20&c=On9AM32YSPaerSMMS1F6no-A4DMiECWoc6MN5zJvtOo=";
    return (
        <div className='InfoBox'>
            <div className="cardContainer">

             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80
             ? RAIN_URL
              : info.temp > 15 
              ? HOT_URL 
              : COLD_URL
            }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80
             ? <ThunderstormIcon/>
              : info.temp > 15 
              ? <SunnyIcon/>
              : <AcUnitIcon/>
            }
        </Typography>
        <Typography variant="body2" color= 'text.secondary'component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humididy = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>


    )
}