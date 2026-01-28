import UserProfile from './Components/UserProfile/index'
import {useState} from 'react'
import './App.css'
const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Revanth',
    role: 'Data Analyst',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Thanya',
    role: 'Data Engineer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Daniel',
    role: 'Data Scientist',
  },
]


const App = () =>{ 
  const [searchInput,setSearchInput]=useState('');
  const [userDetailsList, setUserDetailsList] = useState(initialUserDetailsList);
  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }
  const searchResult = userDetailsList.filter(eachUser => eachUser.name.toLowerCase().includes(searchInput.toLowerCase()));

  const deleteUser=uniqueNo=>{
    const filteredUserDetails = userDetailsList.filter(eachUser=>eachUser.uniqueNo !== uniqueNo)
    setUserDetailsList(filteredUserDetails)
  }
  return( 
  <div className="list-container">
    <h1 className="title"> Users List</h1>
    <input onChange={onChangeSearchInput} type="text" placeholder="Search users..." value={searchInput} />

    <ul>
      {searchResult.map(each => (
        <UserProfile UserDetails={each} key={each.uniqueNo} deleteUser={deleteUser} />
      ))}
    </ul>
  </div>
  )
}

export default App
