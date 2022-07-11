import styles from './weatherMainInfo.module.css'

export default function WeatherInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{`${weather?.data.location.name}`}</div>
      <div className={styles.country}>{` ${weather?.data.location.region}, ${weather?.data.location.country}`}</div>
      
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.data.current.condition.icon}`}
            alt={weather?.data.current.condition.text}
            width="128"
            
          />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>{weather?.data.current.condition.text}</div>
          <div className={styles.current}>{`${weather?.data.current.temp_c} c°`}</div>
        </div>
      </div>
      <div className={styles.data}>
      <div className={styles.condition}>{`Feels like ${weather?.data.current.feelslike_c}c°`}</div>
      <div className={styles.condition}>{`Humidity ${weather?.data.current.humidity}%`}</div>
      <div className={styles.condition}>{`Vision ${weather?.data.current.vis_km}km`}</div>
      <div className={styles.condition}>{`Wind ${weather?.data.current.wind_kph}kph`}</div>
      {/* <div className={styles.condition}>{`Local time: ${weather?.data.location.localtime} hs`}</div> */}
      </div>
      <iframe
      title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106644.1146047488!2d${weather?.data.location.lon}4!3d${weather?.data.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1657226911494!5m2!1ses-419!2sar`}
        width="100%"
        height="300"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

