import React, { useState } from 'react';
import './Table.css';
import TableRow from '../TableRow/TableRow';


const Table = () => {

  const users = [
    { name: 'Olivia Rhye', role: 'Admin', generated: 123, unlocked: 123, assigned: 40 },
    { name: 'Olivia Rhye', role: 'Removed', generated: 23, unlocked: 23, assigned: 25 },
    { name: 'Olivia Rhye', role: 'Member', generated: 56, unlocked: 56, assigned: 15 },
    { name: 'Olivia Rhye', role: 'Admin', generated: 12, unlocked: 12, assigned: 10 },
    { name: 'Olivia Rhye', role: 'Member', generated: 123, unlocked: 123, assigned: 5 },
    { name: 'Olivia Rhye', role: 'Member', generated: 111, unlocked: 111, assigned: 8 },
    { name: 'Olivia Rhye', role: 'Removed', generated: 56, unlocked: 56, assigned: 18 },
    { name: 'Olivia Rhye', role: 'Admin', generated: 23, unlocked: 23, assigned: 2 },
    { name: 'Olivia Rhye', role: 'Member', generated: 87, unlocked: 87, assigned: 4 },
    { name: 'Olivia Rhye', role: 'Removed', generated: 9, unlocked: 9, assigned: 1 },
  ];
  
  const PAGE_SIZE = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / PAGE_SIZE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="user-table-container">
    <table className="user-table">
      <thead>
        <tr>
          <td>Team</td>
          <td>Role</td>
          <td>Generated</td>
          <td>Unlocked</td>
          <td>Assigned</td>
        </tr>
      </thead>
      <tbody>
        {paginatedUsers.map((user, index) => (
          <TableRow key={index} user={user} />
        ))}
      </tbody>
    </table>
    <div className="pagination-controls">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>
      <div className="pagination-pages">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  </div>  )
}

export default Table



