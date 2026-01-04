import React, {useState, useEffect} from 'react'

export const Profile = () => {

  // Récupération de l'utilisateur enregistré
  const storedUserJSON = localStorage.getItem('user');
  console.log(storedUserJSON);
  const storedUser = JSON.parse(storedUserJSON);
  console.log(storedUser);
  token = storedUser.token;

  const [values, setValues] = useState({
    nom: storedUser.nom,
    email: storedUser.email,
    password: storedUser.password,
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
      const {data} = await axios.post('http://localhost:3000/api/auth/updateMe', values, {
        headers: {
          'Content-Type': 'application/json',
          'Bearer': token
        }
      })
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form id="ProfileFrom" onSubmit={handleSubmit}>
        <div>
          <h2>Profil</h2>
          <hr />

          <label htmlFor="nom"><b>Nom</b></label>
          <input type="text" name="nom" id="nom" value={values.nom} onChange={(e) => handleChange("nom", e.target.value)} required />

          <label htmlFor="email"><b>Adresse e-mail</b></label>
          <input type="text" name="email" id="email" value={values.email} onChange={(e) => handleChange("email", e.target.value)} required />

          <label htmlFor="password"><b>Mot de passe</b></label>
          <input type="password" name="password" id="password" value={values.password} onChange={(e) => handleChange("password", e.target.value)} required />
          <hr />

          <button type="submit">Enregister les modifications</button>
        </div>
      </form>
    </div>
  )
}
