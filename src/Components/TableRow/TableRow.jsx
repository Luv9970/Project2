import React from "react";
import "./TableRow.css";

const TableRow = ({ user }) => {
  return (
      <tr className="table-row-main">
        <td className="table-row-photo">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="table-row-profile-img"
          />
          <div>
            <div className="table-row-user-name">{user.name}</div>
            <div className="table-row-last-active">Last active 2min ago</div>
          </div>
        </td>
        <td>
          <span className={`role ${user.role.toLowerCase()}`}>
            <span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.50004 9.08868L4.42504 10.3387C4.33338 10.397 4.23754 10.422 4.13754 10.4137C4.03754 10.4053 3.95004 10.372 3.87504 10.3137C3.80004 10.2553 3.74171 10.1825 3.70004 10.0952C3.65838 10.0078 3.65004 9.90985 3.67504 9.80118L4.22504 7.43868L2.38754 5.85118C2.30421 5.77618 2.25221 5.69068 2.23154 5.59468C2.21088 5.49868 2.21704 5.40501 2.25004 5.31368C2.28304 5.22234 2.33304 5.14734 2.40004 5.08868C2.46704 5.03001 2.55871 4.99251 2.67504 4.97618L5.10004 4.76368L6.03754 2.53868C6.07921 2.43868 6.14388 2.36368 6.23154 2.31368C6.31921 2.26368 6.40871 2.23868 6.50004 2.23868C6.59138 2.23868 6.68088 2.26368 6.76854 2.31368C6.85621 2.36368 6.92088 2.43868 6.96254 2.53868L7.90004 4.76368L10.325 4.97618C10.4417 4.99284 10.5334 5.03034 10.6 5.08868C10.6667 5.14701 10.7167 5.22201 10.75 5.31368C10.7834 5.40534 10.7897 5.49918 10.769 5.59518C10.7484 5.69118 10.6962 5.77651 10.6125 5.85118L8.77504 7.43868L9.32504 9.80118C9.35004 9.90951 9.34171 10.0075 9.30004 10.0952C9.25838 10.1828 9.20004 10.2557 9.12504 10.3137C9.05004 10.3717 8.96254 10.405 8.86254 10.4137C8.76254 10.4223 8.66671 10.3973 8.57504 10.3387L6.50004 9.08868Z"
                  fill="#667085"
                />
              </svg>
            </span>
            {user.role}
          </span>
        </td>
        <td>{user.generated}</td>
        <td>{user.unlocked}</td>
        <td>
          <span
            className={`assigned assigned-${
              user.assigned >= 30 ? "high" : user.assigned >= 10 ? "mid" : "low"
            }`}
          >
            {user.assigned}
          </span>
        </td>
      </tr>
  );
};

export default TableRow;
