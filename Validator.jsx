import '../styles/Validator.css'
import { useState } from 'react'

const Validator = () => {
  const initialState = {
    username: '',
    password: '',
    passwordConfirm: '',
    valid: 'Passwords must match'
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialState)

  if (formState.password === formState.passwordConfirm) {
    setFormState({...formState, ['valid']: 'Successfully signed up.'})
  } else {
    setFormState({...formState, ['valid']: 'Passwords do not match.'})
  }
  }

  const handleChange = event => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  return (
    <div className="form">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" id="username" onChange={handleChange} value={formState.username}/>
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" onChange={handleChange} value={formState.password}/>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={handleChange} value={formState.passwordConfirm}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit">Sign Up</button>
        <p>Passwords must match.</p>
        <p>{formState.valid}</p>
      </form>
    </div>
  )
}