// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  
  function handleSubmit(event) {
    event.preventDefault() // Evitar que a pagina recarregue
    // Capturar o valor do input (caixa de texto)

    //const username = document.getElementById('username').value
    //const username = document.querySelector('#username').value
    /*
      event -> o evento de envio (submit)
      target -> o destino do evento, o formulario (form)
      elements[0] -> o primeiro elemento dentro do form
    */
    const username = event.target.elements[0].value
    onSubmitUsername(username)
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form>
      <div>
          {/*
            Em JSX, <label htmlFor="username"> equivale, em HTML puro,
            a label for="username">
          */}
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
