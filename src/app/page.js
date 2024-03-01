'use client'
// Importing necessary modules and components
import { useState, useEffect } from "react";
import Card from "@/components/Card"; // Assuming Card component path is correct
import countryData from "./country"; // Assuming countryData fetches country information
import { IoSearch } from "react-icons/io5";
import Dropdown from "@/components/Dropdown";

// Define the Home component
export default function Home() {
  // Dropdown options
  const options = [
    { value: "Filter by Region", label: "Filter by Region" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  // State variables
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from the countryData source
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await countryData();
        setOriginalData(fetchedData);
        setFilteredData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Only run once after initial render

  // Handle dropdown change event
  const handleDropdownChange = (selectedOptionValue) => {
    if (selectedOptionValue === "Filter by Region") {
      // Reset to original data when "Filter by Region" is selected
      setFilteredData(originalData);
    } else {
      // Filter data based on selected region
      const dataByRegion = originalData.filter(
        (country) => country.region.toLowerCase() === selectedOptionValue
      );
      setFilteredData(dataByRegion);
    }
  };

  // Handle search input change event
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Filter results based on search term
    const filteredResults = originalData.filter((country) =>
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  // JSX rendering
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between  px-24 max-sm:p-4">
      <div className="wrapper my-8 w-full space-y-8 lg:flex lg:items-center lg:justify-between">
        {/* Search Bar */}
        <div className="search-bar flex h-14 w-full items-center justify-start rounded-md bg-white shadow-sm dark:bg-dark-blue lg:w-5/12">
          <button className="search-btn h-full pl-8 pr-4 text-xl text-dark-gray dark:text-white">
            <IoSearch />
          </button>
          <input
            type="text"
            className="h-full w-full rounded-r-md bg-transparent p-2 outline-none dark:placeholder:text-white"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {/* Dropdown for filtering by region */}
        <Dropdown options={options} onChange={handleDropdownChange} />
      </div>

      {/* Render cards for countries */}
      <div className="card-wrapper grid justify-items-center space-y-8 lg:w-full lg:grid-cols-4 lg:gap-14 lg:space-y-0">
        {filteredData.map((item) => (
          <Card
            key={item.name.common}
            countryName={item.name.common}
            population={item.population === 0 ? "No Population " : item.population.toLocaleString()}
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
