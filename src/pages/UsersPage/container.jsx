import { UsersPage } from ".";
import { useEffect, useState } from "react";




export const UsersPageContainer = () => {
	const [users, setUsers] = useState([]);
  const handleUserRemove = (index) => {
    const stateCopy = [...users];
    stateCopy.splice(index, 1);
    setUsers(stateCopy);
  };
  const handleUserActive = (index) => {
   const newUsers = users.map((user, i) => ({ ...user, active: i === index}))
   setUsers(newUsers);
   console.log(newUsers);
  }
  const handleUsersSort = () => {
    const usersSort = users.sort((a, b) => a.name - b.name);
    setUsers(usersSort);
    // const usersSortReverse = users.sort((a, b) => (b.name - a.name));
    // const usersSort = () => {
    //   if (users.sort((a, b) => (a.name - b.name))) {
    //     users.sort((a, b) => (b.name - a.name));
    //   } else {
    //     users.sort((a, b) => (a.name - b.name));
    //   }
    // };
  };
  useEffect(() => {
    setUsers([
      { name: 'Alex', age: 27, phone: '+3752993847474', avatar: 'http://archilab.online/images/1/123.jpg' },
      { name: 'Bella', age: 23, phone: '+3752974756674', avatar: 'https://www.blast.hk/attachments/64805/' },
      { name: 'Vendetta', age: 27, phone: '+3752993847474', avatar: 'http://archilab.online/images/1/123.jpg' },
      { name: 'John', age: 23, phone: '+3752974756674', avatar: 'https://www.blast.hk/attachments/64805/' },
      { name: 'Tim', age: 27, phone: '+3752993847474', avatar: 'http://archilab.online/images/1/123.jpg' },
      { name: 'Alexa', age: 23, phone: '+3752974756674', avatar: 'https://www.blast.hk/attachments/64805/' },
    ]);
  }, []);
  return (
    <UsersPage
      OnClickSortUsers={()=>handleUsersSort}
      users={users}
      handleUserRemove={handleUserRemove}
      handleUserActive={handleUserActive}
      handleUsersSort={handleUsersSort}
    />
  );
}