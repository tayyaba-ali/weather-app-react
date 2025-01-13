import React from "react";
import Card from 'react-bootstrap/Card';


const WeatherCard = (props) => {
  let citiesData = props.weather;

  return (
    <>
      {/* {console.log(citiesData)} */}
      { citiesData.map((weather, index) => (
        
 <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      
          
        {/* <div key={index}>
          {console.log(weather.name)}
          <p>city name {weather?.name}</p>
          <p>temp {weather?.main?.temp}</p>
          <p>humidity {weather?.main?.humidity}</p>
          <p>feels like {weather?.main?.feels_like}</p>
          <p>feels like {weather?.main?.feels_like}</p>

          {console.log(weather?.weather?.[0].icon)}
          <img
            src={`http://openweathermap.org/img/w/${weather?.weather?.[0].icon}.png`}
            alt=""
          />
        </div> */}
      ))}
    </>
  );
};

export default WeatherCard;
