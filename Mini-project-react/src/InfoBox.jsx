import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    console.log(info)
   const rain_url = import.meta.env.VITE_RAIN_URL ;
   const hot_url = import.meta.env.VITE_HOT_URL ;
   const cold_url = import.meta.env.VITE_COLD_URL ;


    return(

        <div className = "InfoBox">
        <div className= "card-Container">

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ?
             rain_url
              : (info.temp > 15)
              ? hot_url
             : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
         <p> 
            {info.humidity >80 ?
          < ThunderstormIcon />
              : (info.temp > 15)
              ?<WbSunnyIcon />
              : <AcUnitIcon/>}
         </p>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={ "span"}>
         <p>Temperature: {info.temp}&deg;</p>
         <p>Humidity: {info.humidity}</p>
         <p>Min Temperature: {info.tempMin}&deg;</p>
         <p>Max Temperature: {info.tempMax}&deg;</p>
         <p>The weather can be described as<i> {info.weather}</i> and feels like {info.feeelsLike}&deg;</p>


        </Typography>
      </CardContent>
      
    </Card>  
     </div>
        </div>
    )

}