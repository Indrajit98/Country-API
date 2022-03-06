import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Country from "./components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        //  console.log(data);
        const names = data.map((county) => county.name.common);
        // console.log(names);
      })
      .catch((err) => console.error(err));
  }, []);

  const handlesAddCountry = ( (country) => {
    // console.log('insdra',country.name.common);
    const newCart= [...cart,country];
    setCart(newCart)
  })

  return (
    <div className="App">
      <h2> Country:{countries.length}</h2>
      {/* <h5>Country added: {cart.length} </h5> */}
      <Cart cart={cart} ></Cart>
      <div className="country">
      {
        countries.map( country => <Country countryDocuments={country} key={country.cca2} handlesAddCountry={handlesAddCountry}></Country>)
      }
     </div>
      
    </div>
  );
}

export default App;
