import React, { useEffect, useState } from 'react';
import './css.css';
import NavbarUser from '../salah/navbareUser';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Pannier = () => {
  const [Data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
 const  Navigte = useNavigate()
  let tt = 0;


  Data.forEach((e, i) => {
    tt += e.cartPrice;
  });

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/cart');
        setData(res.data);
        console.log(Data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/cart/${id}`);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete('http://localhost:3000/api/cart');
      alert('You will receive your product after 24 hours');
      Navigte('/listUser')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavbarUser />
      <div className="cart">
        <h1>Your Panel</h1>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Data.map((elem, i) => (
              <tr key={i}>
                <td>{elem.cartName}</td>
                <td>{elem.cartPrice}</td>
                <td>1</td>
                <td>
                  <button onClick={() => handleDelete(elem.idcart)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total">
          <p>Total : ${tt}</p>
        </div>

        <div className="actions">
          <button onClick={handleDeleteAll}>Passer la commande</button>
        </div>
      </div>
    </div>
  );
};

export default Pannier;
