import { useQuery } from 'graphql-hooks';
import { getDataVirusCorona } from '../schema/querySchema';

export default function WordCorona() {
  const { loading, error, data } = useQuery(getDataVirusCorona);
  if(loading){
    return <h3>Dang lay du lieu</h3>
  }
  if(error){
    return <h3>Co loi - khong lay dc du lieu</h3>
  }

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.Countries.map((item, index) => (
            <tr key={index}>
              <td>{item.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}