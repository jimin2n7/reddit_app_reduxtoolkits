import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MakePost from './Components/Post/MakePost';
import Posts from './Components/Post/Posts';
import Edit from './Components/Edit/Edit';
import { useSelector } from 'react-redux';

function App() {

  const [edit, setEdit] = useState(false)
  const [isOpen, setOpenPost] = useState(false)
  const pending = useSelector(state => state.user.pending)
  const error = useSelector(state => state.user.error)

  return (
    <div className="App">
      {
        edit?<Edit setEdit={setEdit}/>
        :
        (<>
          <Header setEdit={setEdit}/>
          {
            isOpen?<MakePost setOpenPost={setOpenPost}/>:<Posts/>
          }
          <Footer isOpen = {isOpen} setOpenPost = {setOpenPost}/>
        </>)
      }
      {
        pending && <p className='loading'>Loading...</p>
      }
      {
        !edit&&error&&(<p className='error'> Error when fetching data from server</p>)
      }
    </div>
  );
}

export default App;
