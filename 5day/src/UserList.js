import React from 'react'

function User({user}) {

    return(
    <div>    
      <b>{users[0].username}</b> <span>({users[0].email})</span>
    </div>
    )
}

export default function UserList() {
    const users = [
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ];
  return (
    <div>
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
}
