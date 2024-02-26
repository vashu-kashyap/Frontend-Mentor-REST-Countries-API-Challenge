const countryData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
  
    return data;
  };
  
  export default countryData;
  