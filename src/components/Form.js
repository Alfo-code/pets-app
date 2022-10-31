import {useState} from 'react';

// name input using state

function Form(props) {

    const [ name, setName ] = useState('');
    const [dropdownState, setDropdownState ] = useState('apple'); // This is a the state for the input personName

    const submitFunction = (e) => {
        e.preventDefault()
        console.log('My favorite fruit is:', dropdownState)
    }


  return (
    <>
    <div className='formStyle'>
        <h1>This is a Form</h1>
        <form onSubmit={submitFunction}>
            <label htmlFor='personName'>Your name: </label>
            <input
                type="text" 
                name='personName'
                id='personName'
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <div>
                <select name="dropdown-choices" id="dropdown-choices" value={dropdownState} onChange={(e) => setDropdownState(e.target.value)} >
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="pear">Pear</option>
                    <option value="mango">Mango</option>
                </select>
            </div>

            <button type="submit">Submit choices</button>

        </form>
        <div className='display' style={{fontSize: '3rem'}}>
            <p>{name} favorite fruit is: {dropdownState}</p>
        </div>

    </div>
    </>
   
  )
}
export default Form;