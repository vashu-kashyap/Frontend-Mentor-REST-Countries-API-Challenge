import Image from "next/image";

const Card = () => {
  return (
    <div className="dark:bg-dark-blue min-h-96 w-72 rounded-md bg-white">
      <Image
        src={
          "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        className="rounded-t-md"
        width={288}
        height={173}
        alt=""
      />

      <h1 className="p-5 text-2xl font-bold text-white">Brazil</h1>
      <ul className="space-y-0.5 px-5">
        <li className="text-light-mode-text font-semibold dark:text-white">
          Population:{" "}
          <span className="dark:text-very-light-gray font-normal">
            206,135,893
          </span>
        </li>
        <li className="text-light-mode-text font-semibold dark:text-white">
          Region:{" "}
          <span className="dark:text-very-light-gray font-normal">
            Americas
          </span>
        </li>
        <li className="text-light-mode-text font-semibold dark:text-white">
          Capital:{" "}
          <span className="dark:text-very-light-gray font-normal">Braslia</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
