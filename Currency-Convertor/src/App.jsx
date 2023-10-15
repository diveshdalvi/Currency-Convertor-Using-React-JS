import React, { useState } from "react";


const convertCurrency = async () => {
  const url = 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '658f5b8a7dmsh8ef18cf53673e22p14bf79jsn91d91ab012df',
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
convertCurrency();
const App = () => {
  const {fromCurrency , setFromCurrency} = useState();
  const {toCurrency , setToCurrency} = useState();
  return (
    <>
    <div className=" bg-slate-950 h-screen">
      <div className="flex flex-col h-screen justify-center">
        <h1 className=" text-white text-center text-5xl mb-4">
          Currency Convertor
        </h1>
      <div  className="flex  justify-center p-5 border-white border-2 rounded-lg mt-5 flex-col">
      <div className="flex justify-center p-8">
        <span className=" text-white text-xl  mr-4 ">Enter The Currency To Want to Select</span>
          <select name="" id="" className="mr-4"></select>
          <input type="number"/>
        </div>
        <div className="flex justify-center">
        <span className=" text-white text-xl mr-4 ">Enter The Currency To Change To</span>
        <select name="" id="" className="mr-4"></select>
          <input type="number"/>
        </div>
        <div className="flex justify-center mt-6">
          <button className=" bg-blue-800 text-white p-2 rounded-md cursor-pointer active:bg-blue-900">Convert</button>
        </div>
       
      </div>
      
        
        </div >
    </div>
    </>
  );
};

export default App;
