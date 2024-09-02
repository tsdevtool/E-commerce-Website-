import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Pages/Home";
const MyContext = createContext();


function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  },[])

  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values ={

    countryList,
    setSelectedCountry,
    selectedCountry
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header></Header>
      <Routes>
        <Route path="/" exact={true} element={<Home />}/>
      </Routes>

    </MyContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;

export { MyContext };

