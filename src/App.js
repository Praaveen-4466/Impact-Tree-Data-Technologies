
import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail('');
  };

  return (
    <div className = "body-style">
      <h1 className = "heading">Email Form</h1>
      <form className = "form-style" onSubmit={handleSubmit}>
        <label className='label'>Email:
          <input type = "email" className="input-email" value = {email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <button className = "button-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmailForm;
