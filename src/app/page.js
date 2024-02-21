// Import the Card component
import Card from "@/components/Card";

// Function to fetch data from the API
async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Default function for the Home page component
export default async function Home() {
  // Fetch data from the API
  const data = await getData();

  return (
    // Main container
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between p-24">
      {/* Card wrapper */}
      <div className="card-wrapper grid space-y-8 lg:w-full lg:grid-cols-4 lg:gap-y-10 lg:space-y-0">
        {/* Map through the data and render Card components */}
        {data.map((item) => {
          // Log the type of population
          console.log(typeof item.population);

          return (
            // Card component
            <Card
              key={item.name.common} // Unique key for each Card
              countryName={item.name.common} // Country name
              population={
                item.population === 0
                  ? "No Population " // If population is 0, display "No Population"
                  : item.population.toLocaleString() // Format population with commas
              }
              region={item.region} // Country region
              capital={item.capital} // Country capital
              flag={item.flags.svg} // Country flag
              imgAlt={`${item.flags.alt}`} // Alt text for the flag image
            />
          );
        })}
      </div>
    </main>
  );
}
