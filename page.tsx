import { useState } from 'react';

const EnterEmail = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    // Save the text to local storage
    localStorage.setItem('savedText', text);
    alert('Text saved!');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter some text"
      />
      <button onClick={handleSave}>Save Text</button>
    </div>
  );
};

export default EnterEmail;


const YourBirthdate = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    // Save the text to local storage
    localStorage.setItem('savedText', text);
    alert('Text saved!');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter some text"
      />
      <button onClick={handleSave}>Save Text</button>
    </div>
  );
};

export default YourBirthdate;
