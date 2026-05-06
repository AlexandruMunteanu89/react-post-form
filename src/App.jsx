import { useState } from 'react';

const NuovoForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [publicPost, setPublicPost] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      author,
      title,
      body,
      public: publicPost,
    };
    console.log(newPost);
  };
  return (
    <>
      
    </>
  )
}

export default NuovoForm;
