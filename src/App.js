import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import stays from './resources/database/stays.json';

import Header from './components/header.component';
import Places from './components/places.component';
import Footer from './components/footer.component';

function App(props) {
  const [city, setCity] = useState('Helsinki');
  const [country, setCountry] = useState('Finland');
  const [childCount, setChildCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [stayArr, setStayArr] = useState(stays);
  const [countStay, setCountStay] = useState(12);

  function selectCity(city, country){
    setCity(city);
    setCountry(country);
  }

  function count(sign, type){
    if(sign === '+'){
      switch(type){
        case 'Adults':
          setAdultCount(adultCount+1);
          break;
        case 'Children':
          setChildCount(childCount+1);
          break;
        default:
          break;
      }
      setCounter(counter+1);
    } else {
      switch(type){
        case 'Adults':
          if(adultCount===0 ) return;
          setAdultCount(adultCount-1);
          break;
        case 'Children':
          if(childCount===0 ) return;
          setChildCount(childCount-1);
          break;
        default:
          break;
      }
      if(counter!==0){
        setCounter(counter-1);
      }
    }
  }

  function filterStays(cityName,totalCount){
    const filteredStays=stays.filter(stay=>{  
      return (stay.city===cityName && stay.maxGuests>=totalCount);
    });
    setStayArr(filteredStays);
    setCountStay(filteredStays.length)
    // console.log(filteredStays);  
  }

  return (
    <div>
      {/* header */}
      <Header
        setHiddenList={props.setHiddenList}
        hiddenLoct={props.hiddenList}
        selectCity={selectCity}
        hiddenCounter={!props.hiddenList}
        count={count}
        counter={counter}
        adultCount={adultCount}
        childCount={childCount}
        city={city}
        country={country}
        filterStays={filterStays}
        countStay={countStay}
        stayArr={stayArr}
      />
      {/* body */}
      <Places
        setHiddenList={props.setHiddenList}
        hiddenLoct={props.hiddenList}
        selectCity={selectCity}
        hiddenCounter={!props.hiddenList}
        count={count}
        counter={counter}
        adultCount={adultCount}
        childCount={childCount}
        city={city}
        country={country}
        filterStays={filterStays}
        countStay={countStay}
        stayArr={stayArr}
      />
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
