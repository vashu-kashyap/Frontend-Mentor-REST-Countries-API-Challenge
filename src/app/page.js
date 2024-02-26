"use client";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import countryData from "./country";
 

export default function Home() {
  const [data, setData] = useState([]); // State to store fetched data
  // Function to handle search query change

  console.log(data)

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const fetchedData = await countryData();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData function
  }, []); // Empty dependency array ensures that useEffect runs only once

  return (
    // Main container
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between p-24">
      {/* Card wrapper */}
      <div className="card-wrapper grid justify-items-center space-y-8 lg:w-full lg:grid-cols-4 lg:gap-14 lg:space-y-0 ">
        {/* Map through the data and render Card components */}
        {data.map((item) => (
          <Card
            key={item.name.common}
            countryName={item.name.common}
            population={
              item.population === 0
                ? "No Population "
                : item.population.toLocaleString()
            }
            region={item.region}
            capital={item.capital}
            flag={item.flags.svg}
            imgAlt={`${item.flags.alt}`}
          />
        ))}
      </div>
    </main>
  );
}
