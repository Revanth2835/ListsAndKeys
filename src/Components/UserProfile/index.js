import './index.css'
const UserProfile = props => {
  const {UserDetails , deleteUser} = props
  const {uniqueNo,imageUrl, name, role} = UserDetails
  const onDeleteUser = () => {
   deleteUser(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
  
      </div>
       <button onClick={onDeleteUser} className='btn'  type="button">
          <img className='delete-button' src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross"/>
        </button>
    </li>
  ) 
}
export default UserProfile 
