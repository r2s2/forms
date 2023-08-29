import { useState } from 'react';
import './App.css';

function App() {

  const [formValues, setFormValues] = useState({ drink: 'cafe' });
  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || [];
    if (isCheckbox) {
      data[value] = checked;

    }
    console.log('** handleInputChange', data);
    
    const newValue = (isCheckbox) ? data : value;

    
    setFormValues({...formValues, [name]: newValue});
    

    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    //console.log('*** handleSubmit', data);

  }


  console.log('*** formValues', formValues);
  return <form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Nome" onChange={handleInputChange} value={formValues.name || ''}/>
    <input type="text" name="email" placeholder="E-mail" onChange={handleInputChange} value={formValues.email || ''}/>
    
    <select name='language' onChange={handleInputChange} value={formValues.language || ''}>
      <option value='javascript'>JavaScript</option>
      <option value='python'>Python</option>
      <option value='php'>PHP</option>
    </select>

    <div className="radios">
      <label><input type='radio' value='cafe' name='drink' onChange={handleInputChange} checked={formValues.drink === 'cafe'}/> Café </label>
      <label><input type='radio' value='cha' name='drink' onChange={handleInputChange} checked={formValues.drink === 'cha'}/> Chá </label>

    </div>

    <div className="checks">
      <label><input type='checkbox' value='twitter' name='social' onChange={handleInputChange}  /> Twitter </label>
      <label><input type='checkbox' value='facebook' name='social' onChange={handleInputChange} /> Facebook </label>
      <label><input type='checkbox' value='instagram' name='social' onChange={handleInputChange} /> Instagram </label>

    </div>

    <textarea name="bio" onChange={handleInputChange} value={formValues.bio || ''} placeholder='Digite o texto aqui'></textarea>
      

    <button type="submit">Enviar</button>



  </form>
}

export default App;
