import convert from 'convert-units';

  const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
  }

  const transformWeather = weather_data => {
    const  { humidity, temp } = weather_data.main;
    const temperature = getTemp(temp);
    const { speed } = weather_data.wind;
    const weatherState = 'sun';
    const data = {
      humidity,
      temperature,
      wind : `${speed} m/s`,
      weatherState,
    }

    return data;
  }

export default transformWeather;
