import { initializeGraphQL } from '../../client/lib/graphql-client';
import graphQLRequest from '../../client/lib/graphql-request';
import CoronaLayout from '../../client/components/corona-layout';
import WordCorona from '../../client/components/word';
import Country from '../../client/components/country'
import { getDataVirusCorona } from '../../client/schema/querySchema';

export default function Index() {
  return(
    <>
      <CoronaLayout>
        <WordCorona/>
        <Country/>
      </CoronaLayout>
    </>
  )
}

export async function getStaticProps() {
  const client = initializeGraphQL()

  await graphQLRequest(client, getDataVirusCorona)

  return {
    props: {
      initialGraphQLState: client.cache.getInitialState(),
    },
    unstable_revalidate: 1,
  }
}