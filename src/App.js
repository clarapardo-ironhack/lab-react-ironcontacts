import { useState } from 'react'
import './App.css'
import Contacts from './contacts.json'


function App() {


  // Selecciona 5 contactos
  let contactsCopy = [...Contacts]

  const [contactValue, setContactValue] = useState(contactsCopy)

  let contact = contactsCopy.slice(0, 5)




  // Añade 1 contacto random
  const addRandom = () => {

    let randomNum = Math.floor(Math.random() * (Contacts.length) + 4)
    let randomContact = Contacts[randomNum]

    contact.push(randomContact)

    setContactValue(contact)
  }

  return (
    <div className="App">

      <h1>IronContacts</h1>
      <button onClick={() => addRandom()}>Add random contact</button>

      <table className="tableActors">

        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>

        {contactValue.map(elm => {
          return (
            <tbody key={elm.id}>
              <td><img src={elm.pictureUrl} /></td>
              <td>{elm.name}</td>
              <td>{elm.popularity}</td>
              <td>{elm.wonOscar ? '🏆' : ''}</td>
              <td>{elm.wonEmmy ? '🏆' : ''}</td>
            </tbody>
          )
        })}

      </table>

    </div>
  )
}

export default App
