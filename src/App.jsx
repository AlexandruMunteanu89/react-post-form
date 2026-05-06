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
    <form onSubmit={handleSubmit}>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div>
          <label>Public:</label>
          <input
            type="checkbox"
            checked={publicPost}
            onChange={(e) => setPublicPost(e.target.value)}
          />
        </div>
        <button>Nuovo Post</button>
      </form>
  )
}

export default NuovoForm;
