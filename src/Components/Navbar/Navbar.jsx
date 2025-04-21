import React from "react";
import "./Navbar.css";
import { IoPersonAdd } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-main-left">
        <div className="navbar-main-left-top1">
          <div className="navbar-main-left-top1-logo">
            <svg
              width="30"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 18H21V21H24M24 12H21V15H24M27 24H15V21H18V18H15V15H18V12H15V9H27M12 6H9V3H12M12 12H9V9H12M12 18H9V15H12M12 24H9V21H12M6 6H3V3H6M6 12H3V9H6M6 18H3V15H6M6 24H3V21H6M15 6V0H0V27H30V6H15Z"
                fill="#AFB8CF"
              />
            </svg>
          </div>
          <div className="navbar-main-left-top1-text">Company Name</div>
        </div>

        <div className="navbar-main-left-top2">
          <div className="navbar-main-left-top2-logo">
            <IoPersonAdd />
          </div>
          <div className="navbar-main-left-top2-text">Invite</div>
        </div>
      </div>

      <div className="navbar-main-right">
        <div className="navbar-main-right-top">
          <div className="navbar-main-right-top-search">
            <input type="search" placeholder="Search" />
          </div>
          <div className="navbar-main-right-top-button">
            <div className="navbar-main-right-top-button-icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 23C17.799 23 22.5 18.299 22.5 12.5C22.5 6.701 17.799 2 12 2C6.201 2 1.5 6.701 1.5 12.5C1.5 18.299 6.201 23 12 23Z"
                  fill="#FFCB4B"
                />
                <path
                  d="M12.1054 21.5266C17.032 21.5266 21.0258 17.5329 21.0258 12.6063C21.0258 7.67968 17.032 3.68591 12.1054 3.68591C7.17883 3.68591 3.18506 7.67968 3.18506 12.6063C3.18506 17.5329 7.17883 21.5266 12.1054 21.5266Z"
                  fill="#E5A33D"
                />
                <path
                  d="M11.8892 15.6622L7.63176 18.1254C7.61889 18.1148 7.64002 17.8326 7.82752 16.7893C8.58409 13.8311 11.9208 12.9497 13.0951 12.5579C14.3023 12.1551 14.6969 11.1499 14.9108 10.6432C15.1725 10.0133 15.2369 8.79634 16.0523 8.75581C16.5196 8.73258 15.7004 8.42065 15.1841 8.23143C13.9597 7.70471 13.0248 8.75362 11.9124 9.42741C9.82793 10.37 8.96518 9.52171 6.20902 7.46698C8.71815 6.87644 10.1896 6.76759 11.5427 6.61273C13.2342 6.41916 17.8118 6.24097 18.1957 9.58854C18.5028 12.2666 15.9019 13.756 14.5631 14.166C14.7098 14.2116 15.1117 14.5492 15.5456 15.5344C15.9795 16.5196 15.7714 17.6977 15.6131 18.1636L11.8892 15.6622Z"
                  fill="#FFCB4B"
                />
                <path
                  d="M12.7095 10.3023C12.6179 10.2764 11.6841 10.1713 9.88596 9.98526L7.73655 9.7564C7.03955 9.68122 6.45402 9.62234 6.43658 9.62564C6.39124 9.63422 6.38512 9.62099 6.68951 10.084C7.56827 11.4249 8.70587 12.1675 10.0857 12.3004C11.2008 12.4086 12.4628 12.0144 13.0537 11.3762C13.2696 11.1426 13.3561 11.0084 13.3045 10.7736C13.246 10.5077 12.8875 10.3292 12.7095 10.3023Z"
                  fill="#FFCB4B"
                />
                <circle
                  cx="14.3421"
                  cy="9.12906"
                  r="0.354607"
                  transform="rotate(-5.3352 14.3421 9.12906)"
                  fill="#FFCB4B"
                />
              </svg>
            </div>
            <div className="navbar-main-right-top-button-text">0 Credit</div>
          </div>
          <div className="navbar-main-right-top-admin">
            <div className="navbar-main-right-top-admin-photo">
              <img
                src="https://plus.unsplash.com/premium_photo-1672329275106-073b5493c00f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
              />
              <div className="navbar-main-right-top-admin-dot"></div>
            </div>
            <div className="navbar-main-right-top-admin-text">
              <div>
                <p style={{ fontSize: "15Px", color: "gray" }}>Anand Kumar</p>
                <p style={{ fontSize: "15Px", color: "rgb(195,195,195)" }}>
                  Admin
                </p>
              </div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className="navbar-main-right-bottom">
          <div className="navbar-main-right-bottom-search">
            <div className="navbar-main-right-bottom-search-logo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.25 12H8.895M4.534 12H2.75M4.534 12C4.534 11.4218 4.76368 10.8673 5.17251 10.4585C5.58134 10.0497 6.13583 9.82001 6.714 9.82001C7.29217 9.82001 7.84666 10.0497 8.25549 10.4585C8.66432 10.8673 8.894 11.4218 8.894 12C8.894 12.5782 8.66432 13.1327 8.25549 13.5415C7.84666 13.9503 7.29217 14.18 6.714 14.18C6.13583 14.18 5.58134 13.9503 5.17251 13.5415C4.76368 13.1327 4.534 12.5782 4.534 12ZM21.25 18.607H15.502M15.502 18.607C15.502 19.1853 15.2718 19.7404 14.8628 20.1494C14.4539 20.5583 13.8993 20.788 13.321 20.788C12.7428 20.788 12.1883 20.5573 11.7795 20.1485C11.3707 19.7397 11.141 19.1852 11.141 18.607M15.502 18.607C15.502 18.0287 15.2718 17.4746 14.8628 17.0657C14.4539 16.6567 13.8993 16.427 13.321 16.427C12.7428 16.427 12.1883 16.6567 11.7795 17.0655C11.3707 17.4743 11.141 18.0288 11.141 18.607M11.141 18.607H2.75M21.25 5.39301H18.145M13.784 5.39301H2.75M13.784 5.39301C13.784 4.81484 14.0137 4.26035 14.4225 3.85152C14.8313 3.44269 15.3858 3.21301 15.964 3.21301C16.2503 3.21301 16.5338 3.2694 16.7983 3.37896C17.0627 3.48851 17.3031 3.64909 17.5055 3.85152C17.7079 4.05395 17.8685 4.29427 17.9781 4.55876C18.0876 4.82325 18.144 5.10673 18.144 5.39301C18.144 5.67929 18.0876 5.96277 17.9781 6.22726C17.8685 6.49175 17.7079 6.73207 17.5055 6.93451C17.3031 7.13694 17.0627 7.29751 16.7983 7.40707C16.5338 7.51663 16.2503 7.57301 15.964 7.57301C15.3858 7.57301 14.8313 7.34333 14.4225 6.93451C14.0137 6.52568 13.784 5.97118 13.784 5.39301Z"
                  stroke="#757575"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="navbar-main-right-bottom-search-text">
                <div className="navbar-main-right-bottom-search-text1">Filters</div>
                <div className="navbar-main-right-bottom-search-text2">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
