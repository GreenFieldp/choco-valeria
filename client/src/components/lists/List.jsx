import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom"
import axios from 'axios';
import './style.css'
import Sidebar from '../Sidebar';
import TopMenu from '../TopMenu';
const List = () => {
  const [data, setData] = useState([]);
  const[refrech,setRefrech]=useState(false)

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/choco');

        setData(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [refrech]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/choco/${id}`);
      setRefrech(!refrech)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="w3-main w3-content w3-padding" style={{ maxWidth: '1200px', marginTop: '0px' }}>
      <Sidebar onClose={() => { document.getElementById("mySidebar").style.display = "none"; }} />
      <TopMenu onOpen={() => { document.getElementById("mySidebar").style.display = "block"; }} />
        <table>
          <thead>
            <tr>
            <th>chocolat picture</th>
              <th>chocolat Name</th>
              <th>chocolat Price</th>
              <th>chocolat description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {data.map((elem)=>(

              <tr >
              <td>

     <img src={elem.picture} alt=""style={{height:"90px"}} />
         </td>
                <td>{elem.chocoName}</td>
                <td>{elem.chocoPrice}</td>
                <td>{elem.chocoDesc}</td>
                
                <td>  <Link to={`/update/${elem.idchoco}`}> <button>UPDATE</button> </Link> <button onClick={()=> handleDelete(elem.idchoco)}>DELETE</button> </td>
              </tr>
           ))}
              
        
          </tbody>
        </table>
      </div>
    </div>
    
    
  );
};

export default List;
