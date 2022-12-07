import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from './store';

function App() {
  const [name ,setName] = useState('')
  const [data,setData] = useState('')
  const dispatch = useDispatch()
  const allUser = useSelector(selectors.selectAll)

  const handelFormsubmit = ((e) => {
    e.preventDefault()
    dispatch(
      actions.userAddOne({
        id : String(Math.random()),
        name : name,
        isEdit : false,
        // image : 'https://placeimg.com/49/49/people',
      }),
      setName('')
    )
  })

  console.log(allUser)

  return (
    <div className="App">
      <form onSubmit={handelFormsubmit} > 
        <input
        type="text"
        value = {name}
        onChange = {(e) => setName(e.target.value)}
         />
         <button>Create</button>
      </form>

      {allUser.map((user) => (
        <>
        <p >{user.name}</p>
        {user.isEdit ?  <><input type="text" value={data} onChange={(e) => setData(e.target.value)}></input><button>Close</button></> : <p></p>}
        {/* <img src={user.image} alt='demo' /> */}
        <button onClick={() => {
          dispatch(actions.userUpdate({id : user.id , changes : {name : data ,isEdit : true}}),
          setData(user.name))}}>Edit
          </button>
        <button onClick={() => dispatch(actions.userRemove(user.id))}>Delete</button>
        </>
      ))}
    </div>
  );
}

// function Edit(props){
//   return(
//     <>
//     {props.data ? <p>hello</p> : <p></p>}
//     </>    
//   )
// }

export default App;
