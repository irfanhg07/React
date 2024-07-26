//import { useState, useEffect } from "react"

//designing custom hook
// function useCurrencyInfo(currency){

//     const [data, setData] = useState({})
//     useEffect(()=>{

//         fetch( `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>SVGMetadataElement(res[currency]))
//     },[currency])
//     console.log(data)
//     return data

//     console.log(data)
// }
// export default useCurrencyInfo


import { useState, useEffect } from "react";

// Designing custom hook
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`);
        const result = await response.json();
        setData(result[currency]); // Correctly setting the state
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
