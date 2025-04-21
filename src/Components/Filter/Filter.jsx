import React, { useState } from 'react';
import './Filter.css'

const Filter = () => {

  const mockUsers = [
    { id: 1, name: 'Olivia Rhye', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Olivia Rhye1', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Olivia Rhye2', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, name: 'Olivia Rhye3', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Olivia Rhye4', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
  ];

  const [query, setQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setQuery(user.name); // Show selected user's name in input
    setShowDropdown(false);
  };

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleClear = () => {
    setQuery('');
    setSelectedUser(null);
    setShowDropdown(true);
  };

  return (
    <>
      <div className="search-input-wrapper">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onFocus={() => setShowDropdown(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
          setSelectedUser(null); // Optional: clear selected if they start typing
        }}
      />
      {query && (
        <button className="clear-btn" onClick={handleClear}>
          ✕
        </button>
      )}
    </div>

    {showDropdown && (
      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`user-item ${selectedUser?.id === user.id ? 'selected' : ''}`}
              onClick={() => handleUserSelect(user)}
            >
              <img src={user.avatar} alt={user.name} className="avatar" />
              <span>{user.name}</span>
              {selectedUser?.id === user.id && <span className="checkmark">✔</span>}
            </div>
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
    )}
    </>
  )
}

export default Filter















// import React, { useState } from 'react';

// const mockUsers = [
//   { id: 1, name: 'Olivia Rhye', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
//   { id: 2, name: 'Olivia Rhye', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
//   { id: 3, name: 'Olivia Rhye', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
//   { id: 4, name: 'Olivia Rhye', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
//   { id: 5, name: 'Olivia Rhye', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
// ];

// const UserSearchBox = () => {
//   const [query, setQuery] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);

//   const filteredUsers = mockUsers.filter((user) =>
//     user.name.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="user-search-container">
//       <div className="search-input-wrapper">
//         <input
//           type="text"
//           placeholder="Search"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         {query && (
//           <button className="clear-btn" onClick={() => setQuery('')}>
//             ✕
//           </button>
//         )}
//       </div>

//       <div className="user-list">
//         {filteredUsers.map((user) => (
//           <div
//             key={user.id}
//             className={`user-item ${selectedUser?.id === user.id ? 'selected' : ''}`}
//             onClick={() => setSelectedUser(user)}
//           >
//             <img src={user.avatar} alt={user.name} className="avatar" />
//             <span>{user.name}</span>
//             {selectedUser?.id === user.id && <span className="checkmark">✔</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserSearchBox;




// const UserSearchBox = () => {
 
//   return (

//   );
// };

// export default UserSearchBox;













