const { buildSchema } = require('graphql');

exports.createSchema = () => {
  const schema = buildSchema(`
      type Global {
        NewConfirmed: Int,
        TotalConfirmed: Int,
        NewDeaths: Int,
        TotalDeaths: Int,
        NewRecovered: Int,
        TotalRecovered: Int
      }

      type Countries {
        Country: String,
        CountryCode: String,
        Slug: String,
        NewConfirmed: Int,
        TotalConfirmed: Int,
        NewDeaths: Int,
        TotalDeaths: Int,
        NewRecovered: Int,
        TotalRecovered: Int
      }

      type Query {
        Global: Global,
        Countries: [Countries]
      }
  `);
  return schema;
}