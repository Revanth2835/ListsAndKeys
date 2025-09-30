import UserProfile from './Components/UserProfile/index'
import './App.css'
const UserDetailsList = [
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

// const App = () => <UserProfile UserDetails={UserDetailsList} />
const App = () => (
  <div className="list-container">
    <h1 className="title"> Users List</h1>
    <ul>
      {UserDetailsList.map(each => (
        <UserProfile UserDetails={each} key={each.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
