import Image from "next/image";

const Card = ({ countryName, population, region, capital, flag, imgAlt }) => {
  return (
    <div className="min-h-96 w-72 rounded-md bg-white dark:bg-dark-blue shadow-sm">
      <Image
        src={flag}
        className="h-[173px] w-full rounded-t-md object-cover"
        width={288}
        height={173}
        alt={imgAlt}
        priority
      />

      <h1 className="p-5 text-2xl font-bold text-very-dark-blue dark:text-white">
        {countryName}
      </h1>
      <ul className="space-y-0.5 px-5">
        <li className="font-semibold text-light-mode-text dark:text-white">
          Population:{" "}
          <span className="font-normal dark:text-very-light-gray">
            {population}
          </span>
        </li>
        <li className="font-semibold text-light-mode-text dark:text-white">
          Region:{" "}
          <span className="font-normal dark:text-very-light-gray">
            {region}
          </span>
        </li>
        <li className="font-semibold text-light-mode-text dark:text-white">
          Capital:{" "}
          <span className="font-normal dark:text-very-light-gray">
            {capital}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
