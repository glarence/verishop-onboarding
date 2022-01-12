//Javascript object destructuring for users
//const UserProfile = ({user}) => {
const UserProfile = (props) => {
    //if(props.userSearched){
        return(
            <div className='UserProfile'>
              <div className='Username'>
                <h5>Username: {props.username}</h5>
                <h5>Name: {props.firstname + " " + props.lastname}</h5>
                <h5>Email: {props.emailaddress}</h5>
              </div>
          </div>
          );
    //}
}

export default UserProfile;