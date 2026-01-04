import React from 'react'

export default function CommentForm() {

  // Récupération de l'utilisateur enregistré
  const storedUserJSON = localStorage.getItem('user');
  console.log(storedUserJSON);
  const storedUser = JSON.parse(storedUserJSON);
  console.log("User :", storedUser);
  let token;  
  storedUser ? token = storedUser.token : null;

  const [comment, setComment] = useState({
    "contenu": "",
    "auteur": storedUser?.auteur,
    "article": ""
  });

  const commentURL = 'http://localhost:3000/api/comments';

  function handleChange(value, articleID) {
		setComment(prev => ({
      contenu: value,
      auteur: storedUser.nom,
      article: articleID,
    }));
	}

    async function sendComment(e, articleID) {
        e.preventDefault();
        wantToComment = true;
        try {
          commentURL = commentURL+=articleID;
          const {data} = await axios.post(commentURL, comment, {
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
    <>
      <form>
        <textarea placeholder="Votre commentaire" value={values.email} onChange={(e) => handleChange(e.target.value, article._id)} />
        <button type="submit" onSubmit={(e) => displayTextArea(article._id)}>Envoyer</button>
      </form> 
    </>
  )
}
