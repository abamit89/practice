import { useState, useEffect } from 'react'

export default function Myuseeffect() {
  const [data, setData] = useState({});
  const [id, setID] = useState(1);
  
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
  .then(result => setData(result)).catch(err => console.log("Error: " + err));

},[id])  



  return (
    <div>
      <hr></hr>
      <input type="text" value={id} onChange={(e)=>setID(e.target.value)}/>
<p>{`${data.name} email id is ${data.email}`}</p>
      {/* <table border="1" align="center">
        <tbody>
          {
            
            data.map((d, key) => (
              <tr key={key}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table> */}
    </div>
  )
}
