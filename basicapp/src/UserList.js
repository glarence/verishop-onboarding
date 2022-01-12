function UserList (props) {
    return props.users.map(user => {
        return (
          <div key={user.id}>
            {user.userName}
          </div>
          );
      });
}

export default UserList;