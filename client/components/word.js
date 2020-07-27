import { useQuery } from 'graphql-hooks';
import { getDataVirusCorona } from '../schema/querySchema';

export default function WordCorona() {
  const { loading, error, data } = useQuery(getDataVirusCorona);
  if(loading){
    return <h3>Dang lay du lieu tren toan the gioi ...</h3>
  }
  if(error){
    return <h3>Co loi - khong lay dc du lieu</h3>
  }

  return(
    <>
      <div className="confirmed">
        <p>Moi nhiem : {data.Global.NewConfirmed}</p>
        <p>Tong ca nhiem: {data.Global.TotalConfirmed}</p>
      </div>
    </>
  )
}