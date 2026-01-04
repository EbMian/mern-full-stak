import React, {useState} from 'react';
import axios from 'axios';

export const Login = () => {
  const [values, setValues] = useState({
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
      const {data} = await axios.post('http://localhost:3000/api/auth/login', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const token = data.token
      // Stockage dans localStorage sous forme de chaîne JSON
      localStorage.setItem('token', token);
      // Test de récupération du token
      const storedToken = localStorage.getItem('token');
      console.log(storedToken);
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form id="loginFrom" onSubmit={handleSubmit}>
        <div className="my-5" style={{maxWidth: "50%", textAlign: "justify", marginLeft: "auto", marginRight: "auto"}}>
          <h2>Connexion</h2>
          

          <label htmlFor="email"><b>Adresse e-mail</b></label>
          <br/>
          <input type="text" name="email" id="email" value={values.email} onChange={(e) => handleChange("email", e.target.value)} required />
          <br/>
          <label htmlFor="password"><b>Mot de passe</b></label>
          <br/>
          <input type="password" name="password" id="password" value={values.password} onChange={(e) => handleChange("password", e.target.value)} required />
          <br/>

          <button type="submit">Se connecter</button>

          {/* <div>
          <p>Mot de passe oublié ? <a href="/register">Modifier le mot de passe</a></p>
          </div> */}
          <div>
            <p>Vous n'êtes pas encore inscrit ? <a href="/register">Inscription</a></p>
          </div>
        </div>
        
      </form>
    </div>
  )
}
