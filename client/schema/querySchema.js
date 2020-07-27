export const getDataVirusCorona = `
  query {
    Global {
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
    },
    Countries {
      Country,
      CountryCode,
      Slug,
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered
    }
  }
`;
