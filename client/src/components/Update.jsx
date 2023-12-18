import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import TopMenu from './TopMenu.jsx';



const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const idchoco = location.pathname.split('/')[2];

  const [formData, setFormData] = useState({
    chocoName: '',
    chocoPrice: 0,
    chocoDesc: '',
    picture:null

  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'patient');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dodim9flq/image/upload',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        }
      );

      const imageUrl = response.data.secure_url;
      setFormData((prev) => ({ ...prev, picture: imageUrl }));
    } catch (err) {
      console.log(err);
    }
  }


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/choco/${idchoco}`, formData);
     
      navigate('/listAdmin');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
  <div className="w3-main w3-content w3-padding" style={{ maxWidth: '1200px', marginTop: '100px' }}>
      <Sidebar onClose={() => { document.getElementById("mySidebar").style.display = "none"; }} />
      <TopMenu onOpen={() => { document.getElementById("mySidebar").style.display = "block"; }} />
<h2>Update chocolat</h2>
<hr style={{width:'200px'}} className="w3-opacity"/>


<form action="/action_page.php" target="_blank">
<p><input onChange={handleChange} className="w3-input w3-padding-16" type="text" placeholder="chocoName" required name="chocoName"/></p>
  <p><input onChange={handleChange} className="w3-input w3-padding-16" type="text" placeholder="chocoPrice" required name="chocoPrice"/></p>
  <p><input onChange={handleChange} className="w3-input w3-padding-16" type="text" placeholder="chocoDescription" required name="chocoDesc"/></p>
  <p><input onChange={handleImageUpload} className="w3-input w3-padding-16" type="file"  required name="picture"/></p>

  <p>
    <button onClick={handleClick} className="w3-button w3-light-grey w3-padding-large" type="submit">
      <i className="fa fa-paper-plane"></i> Update
    </button>
  </p>
</form>
</div>
</div>
  )
}

export default Update