import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div className="country-card" onClick={() => handleSelectCountry(country)}>
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="country-flag"
      />
      <h3>{country.name.common}</h3>
      <p>{country.capital?.[0]}</p>
    </div>
  );
};

export default CountryCard;
