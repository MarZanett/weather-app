import { useState } from "react";
import styles from "./weatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(event) {
    const value = event.target.value;

    if (value != "") setCity(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <div>
  <h1 className={styles.title} >Weather App</h1>
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" onChange={onChange}  className={styles.input} placeholder="search" />
      
    </form>
    </div>
  );
}
