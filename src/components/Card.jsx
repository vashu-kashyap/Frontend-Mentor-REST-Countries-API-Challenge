import Image from "next/image";

const Card = ({countryName,population,region,capital,flag,imgAlt}) => {
  return (
    <div className="dark:bg-dark-blue min-h-96 w-72 rounded-md bg-white">
      <Image
        src={flag}
        className="rounded-t-md h-[173px] w-full object-cover"
        width={288}
        height={173}
        alt={imgAlt}
        priority
      />

      <h1 className="p-5 text-2xl font-bold text-white">{countryName}</h1>
      <ul className="space-y-0.5 px-5">
        <li className="text-light-mode-text font-semibold dark:text-white">
          Population:{" "}
          <span className="dark:text-very-light-gray font-normal">
            {population}
          </span>
        </li>
        <li className="text-light-mode-text font-semibold dark:text-white">
          Region:{" "}
          <span className="dark:text-very-light-gray font-normal">
            {region}
          </span>
        </li>
        <li className="text-light-mode-text font-semibold dark:text-white">
          Capital:{" "}
          <span className="dark:text-very-light-gray font-normal">{capital}</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
