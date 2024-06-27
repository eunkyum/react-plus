import React from "react";
import { useParams } from "react-router-dom";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";

const CountryDetail: React.FC = () => {
  const { name } = useParams();
  const [country, setCountry] = React.useState<Country | null>(null);

  React.useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data: Country[] = await getCountries();
        const selectedCountry = data.find((c) => c.name.common === name);
        setCountry(selectedCountry || null);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountry();
  }, [name]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img
        src={country.flags.svg}
        alt={country.name.common}
        style={{ width: "100px", height: "100px" }}
      />
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      {/* 필요한 정보 추가 */}
    </div>
  );
};

export default CountryDetail;
