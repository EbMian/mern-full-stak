import React, {useState} from 'react';
import axios from 'axios'; 

export const Register = () => {
  const [values, setValues] = useState({
    nom: "",
    email: "",
    password: "",
  });

  function handleChange(key, value) {
		setValues(prev => ({
      ...prev,
      [key]: value,
    }));
	}

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:3000/api/auth/register', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(data);
      window.location.href = '/login';
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form id="registerFrom" onSubmit={handleSubmit}>
        <div className="my-5" style={{maxWidth: "50%", textAlign: "justify", marginLeft: "auto", marginRight: "auto"}}>
          <h2>Inscription</h2>
          <br />

          <div className='pb-3'>
            <label htmlFor="name"><b>Nom</b></label>
            <br />
            <input type="text" name="name" id="name" value={values.nom} onChange={(e) => handleChange("nom", e.target.value)} required />
            <br />
          </div>
          <div className='pb-3'>
            <label htmlFor="email"><b>Adresse e-mail</b></label>
            <br />
            <input type="text" name="email" id="email" value={values.email} onChange={(e) => handleChange("email", e.target.value)} required />
            <br />
          </div>
          <div className='pb-3'>
            <label htmlFor="password"><b>Mot de passe</b></label>
            <br />
            <input type="password" name="password" id="password" value={values.password} onChange={(e) => handleChange("password", e.target.value)} required />
            <br />
          </div>
          <button type="submit" className='mb-3'>S'inscrire</button>
        
          <div>
            <p>Vous avez déjà un compte ? <a href="/login">Connexion</a>.</p>
          </div>
        </div>

        
      </form>
    </div>
  )
}
