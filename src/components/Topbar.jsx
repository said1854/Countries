import { faArrowDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import SiteContext from "../context/SiteContext";

const Topbar = () => {
  const {
    language,
    orderByArea,
    handleOrderByArea,
    natoMember,
    handleNatoMemberSort,
    orderByPopulation,
    handleContinentSelect,
    handleOrderByPopulation,
    selectValue,
    handleSearch,
  } = useContext(SiteContext);
  return (
    <div className="md:flex justify-between w-5/6 mx-auto mt-4">
      <div className="w-1/3 flex">
        <button
          className="btn mr-4 overflow-hidden"
          onClick={handleOrderByPopulation}
        >
          <span
            className={
              orderByPopulation && natoMember ? "mr-2 text-sm" : "mr-2"
            }
          >
            {language === "en" ? "Population" : "Nüfus"}
          </span>
          {orderByPopulation && <FontAwesomeIcon icon={faArrowDown} />}
        </button>
        <button className="btn mr-4" onClick={handleOrderByArea}>
          <span className="mr-2">
            {language === "en" ? "Area" : "Yüzölçümü"}
          </span>
          {orderByArea && <FontAwesomeIcon icon={faArrowDown} />}
        </button>
        <button className="btn mr-4" onClick={handleNatoMemberSort}>
          <span className="mr-2">
            {language === "en" ? "Nato Member" : "Nato Üyesi"}
          </span>
          {natoMember && <FontAwesomeIcon icon={faThumbsUp} />}
        </button>
      </div>
      <div className="w-1/3 text-center my-2 h-full">
        <input
          placeholder={language === "en" ? "Search Country" : "Ülke ara"}
          type="text"
          className="bg-light dark:bg-dark dark:text-white dark:border rounded-xl px-4 py-2 text-center"
          onChange={handleSearch}
        />
      </div>
      <div className="w-1/3 text-right text-lg">
        <select
          name="continent"
          className="cursor-pointer bg-dark p-4 text-light rounded dark:border"
          value={selectValue}
          onChange={handleContinentSelect}
        >
          <option value="" disabled selected>
            {language === "en" ? "Select Continent" : "Kıta Seçimi"}
          </option>
          <option value="asia">{language === "en" ? "Asia" : "Asya"}</option>
          <option value="europe">Europe</option>
          <option value="africa">Africa</option>
          <option value="oceania">Oceania</option>
          <option value="north america">North America</option>
          <option value="south america">South America</option>
          <option value="antarctica">Antarctica</option>
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
