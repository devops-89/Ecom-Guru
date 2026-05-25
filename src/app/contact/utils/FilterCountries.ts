import type {
  CountryOption,
} from "../types/contact.types";

export default function filterCountries(
  countries: CountryOption[],
  countrySearch: string
) {

  return countries
    .filter((country) => {

      const search =
        countrySearch
          .trim()
          .toLowerCase();

      return (
        !search ||
        country.name
          .toLowerCase()
          .includes(search)
      );
    })
    .sort((
      firstCountry,
      secondCountry
    ) => {

      const search =
        countrySearch
          .trim()
          .toLowerCase();

      if (!search) return 0;

      const firstStarts =
        firstCountry.name
          .toLowerCase()
          .startsWith(search);

      const secondStarts =
        secondCountry.name
          .toLowerCase()
          .startsWith(search);

      if (
        firstStarts === secondStarts
      ) {
        return 0;
      }

      return firstStarts ? -1 : 1;
    });
}