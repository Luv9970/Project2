import React, { useState } from "react";
import "./Content.css";
import { IoLocationSharp } from "react-icons/io5";

const Content = () => {
  const data = [
    {
      name: "Jennifer Markus",
      address: "Mumbai, India",
      image:
        "https://images.unsplash.com/photo-1744000043352-eabd36a2ecb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text:"Looking for recommendations on product analytics tools for our B2B SaaS platform. Currently evaluating options for a team of 50 ...read more",
      isActive: false,
      credits:0,
      number:96
    },
    {
      name: "John Doe",
      address: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1744179211676-f0536705fcd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text:"Looking for recommendations on product analytics tools for our B2B SaaS platform. Currently evaluating options for a team of 50 ...read more",
      isActive: true,
      number:99
    },
    {
      name: "Alice Smith",
      address: "London, UK",
      image:
        "https://images.unsplash.com/photo-1744887078747-31d9a636e8f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
      text:"Looking for recommendations on product analytics tools for our B2B SaaS platform. Currently evaluating options for a team of 50 ...read more",
      isActive: false,
      credits:2,
      number:39
    },{
      
      name: "Bob Johnson",
      address: "Sydney, Australia",
      image:
        "https://images.unsplash.com/photo-1744566917600-57a72a02a6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
      text:"Looking for recommendations on product analytics tools for our B2B SaaS platform. Currently evaluating options for a team of 50 ...read more",
      isActive: false,
      credits:1,
      number:29
    },{
        
        name: "Emily Davis",
        address: "Toronto, Canada",
        image:
          "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8fDA%3D",
        text:"Looking for recommendations on product analytics tools for our B2B SaaS platform. Currently evaluating options for a team of 50 ...read more",
        isActive: true,
        number:19
    }
  ];

  // const [openSearch , setopenSearch] = useState()

  return (<>
  
  
      {data.map((item,index)=>(
           <div className="content-main" key={index} style={{borderLeft: item.isActive ? 'null' : '4px solid rgb(40, 89, 223)'}}>
           <div className="content-main-photo">
             <img
               src={item.image}
               alt=""
             />
           </div>
     
           <div className="content-main-container">
             <div className="content-main-container-top">
               <div className="content-main-container-top-left">
                 <div className="content-main-container-top-left-name">
                   {item.name}
                 </div>
                 <div className="content-main-container-top-left-address">
                   <IoLocationSharp />
                   <p>{item.address}</p>
                 </div>
     
                 <div className="content-main-container-top-left-employee">
                     {/* <img src="" alt=""/> */}
                 </div>
                 
               </div>
     
               <div className="content-main-container-top-right">

                {item.isActive ? 
                ( <div className="content-main-container-top-right-alternate-button">
                   <button className='content-main-container-top-right-assign' >Assign</button>
                   <button className='content-main-container-top-right-view-details'>View Details</button>
                 </div> ) : 
                 (<button className="content-main-container-top-right-button">
                   <div className="content-main-container-top-right-buttoncontainer">
                     <div className="content-main-container-top-right-button1">
                       <svg
                         width="19"
                         height="18"
                         viewBox="0 0 19 18"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           d="M15.6875 3H3.6875C2.8625 3 2.195 3.675 2.195 4.5L2.1875 13.5C2.1875 14.325 2.8625 15 3.6875 15H15.6875C16.5125 15 17.1875 14.325 17.1875 13.5V4.5C17.1875 3.675 16.5125 3 15.6875 3ZM15.6875 6L9.6875 9.75L3.6875 6V4.5L9.6875 8.25L15.6875 4.5V6Z"
                           fill="#EDEFF2"
                         />
                       </svg>
                     </div>
                     <div className="content-main-container-top-right-button2">
                       Unlock
                     </div>
                     <div className="content-main-container-top-right-button3">
                       <svg
                         width="17"
                         height="16"
                         viewBox="0 0 17 16"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <path
                           d="M8.1875 15C12.0535 15 15.1875 11.866 15.1875 8C15.1875 4.134 12.0535 1 8.1875 1C4.3215 1 1.1875 4.134 1.1875 8C1.1875 11.866 4.3215 15 8.1875 15Z"
                           fill="#FFCB4B"
                         />
                         <path
                           d="M8.25782 14.0177C11.5422 14.0177 14.2047 11.3552 14.2047 8.07083C14.2047 4.78645 11.5422 2.12393 8.25782 2.12393C4.97343 2.12393 2.31091 4.78645 2.31091 8.07083C2.31091 11.3552 4.97343 14.0177 8.25782 14.0177Z"
                           fill="#E5A33D"
                         />
                         <path
                           d="M8.11364 10.1081L5.27534 11.7503C5.26676 11.7432 5.28085 11.555 5.40585 10.8596C5.91023 8.88739 8.13471 8.29976 8.91759 8.03856C9.72234 7.77006 9.98544 7.0999 10.128 6.7621C10.3025 6.34217 10.3454 5.53088 10.889 5.50386C11.2005 5.48838 10.6545 5.28042 10.3103 5.15427C9.49394 4.80313 8.87069 5.5024 8.12911 5.9516C6.73945 6.57998 6.16429 6.01447 4.32684 4.64464C5.9996 4.25095 6.98054 4.17838 7.88264 4.07514C9.01027 3.9461 12.0621 3.8273 12.318 6.05902C12.5227 7.84439 10.7888 8.83733 9.89621 9.11063C9.99402 9.14107 10.262 9.36614 10.5512 10.0229C10.8405 10.6797 10.7018 11.4651 10.5962 11.7757L8.11364 10.1081Z"
                           fill="#FFCB4B"
                         />
                         <path
                           d="M8.66056 6.53483C8.59951 6.51762 7.97693 6.44753 6.77818 6.3235L5.34524 6.17092C4.88057 6.1208 4.49022 6.08155 4.47859 6.08375C4.44837 6.08947 4.44429 6.08065 4.64721 6.38933C5.23305 7.28327 5.99145 7.77829 6.91135 7.8669C7.65474 7.93905 8.49608 7.67625 8.89 7.25078C9.03392 7.09506 9.09164 7.0056 9.0572 6.84903C9.01822 6.67179 8.77922 6.5528 8.66056 6.53483Z"
                           fill="#FFCB4B"
                         />
                         <circle
                           cx="9.74894"
                           cy="5.75271"
                           r="0.236404"
                           transform="rotate(-5.3352 9.74894 5.75271)"
                           fill="#FFCB4B"
                         />
                       </svg>
                       {item.credits}
                     </div>
                   </div>
                 </button> )}
      
                  {(item.number > 90) ? 
                  (<div className="content-main-container-top-right-number1">{item.number}</div>) : 
                  (<div className="content-main-container-top-right-number2">{item.number}</div>)}
                 <div className="content-main-container-top-right-rating">
                   <div className="content-main-container-top-right-like">
                     <svg
                       width="18"
                       height="17"
                       viewBox="0 0 18 17"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M15.6666 5.66666H10.99L11.9258 2.86082C12.0941 2.35416 12.0091 1.79249 11.6966 1.35916C11.3841 0.925823 10.8775 0.666656 10.3433 0.666656H8.99996C8.75246 0.666656 8.51829 0.776656 8.35913 0.966656L4.44246 5.66666H2.33329C1.41413 5.66666 0.666626 6.41416 0.666626 7.33332V14.8333C0.666626 15.7525 1.41413 16.5 2.33329 16.5H13.4225C13.7615 16.4989 14.0923 16.3949 14.371 16.2017C14.6497 16.0086 14.8632 15.7354 14.9833 15.4183L17.2808 9.29249C17.3157 9.19892 17.3335 9.09985 17.3333 8.99999V7.33332C17.3333 6.41416 16.5858 5.66666 15.6666 5.66666ZM2.33329 7.33332H3.99996V14.8333H2.33329V7.33332ZM15.6666 8.84916L13.4225 14.8333H5.66663V6.80166L9.38996 2.33332H10.345L9.04329 6.23582C9.00104 6.36109 8.98925 6.49462 9.00891 6.62535C9.02857 6.75607 9.07911 6.88023 9.15634 6.98752C9.23358 7.09482 9.33527 7.18215 9.453 7.24229C9.57073 7.30243 9.70109 7.33364 9.83329 7.33332H15.6666V8.84916Z"
                         fill="#2859DF"
                       />
                     </svg>
                   </div>
                   <div className="content-main-container-top-right-dislike">
                     <svg
                       width="18"
                       height="17"
                       viewBox="0 0 18 17"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M15.6667 0.5H4.57752C4.23845 0.501126 3.9077 0.605132 3.62901 0.798269C3.35031 0.991405 3.1368 1.26458 3.01669 1.58167L0.719188 7.7075C0.684304 7.80107 0.666522 7.90014 0.666688 8V9.66667C0.666688 10.5858 1.41419 11.3333 2.33335 11.3333H7.01002L6.07502 14.1392C5.99139 14.3897 5.96848 14.6564 6.00818 14.9175C6.04788 15.1786 6.14905 15.4265 6.30335 15.6408C6.61669 16.0742 7.12169 16.3333 7.65669 16.3333H9.00002C9.24752 16.3333 9.48169 16.2233 9.64085 16.0333L13.5575 11.3333H15.6667C16.5859 11.3333 17.3334 10.5858 17.3334 9.66667V2.16667C17.3334 1.2475 16.5859 0.5 15.6667 0.5ZM8.60919 14.6667H7.65502L8.95669 10.7633C8.99839 10.6381 9.00976 10.5048 8.98986 10.3743C8.96996 10.2439 8.91935 10.12 8.84222 10.0129C8.76508 9.90583 8.66361 9.8186 8.54617 9.75841C8.42872 9.69821 8.29866 9.66677 8.16669 9.66667H2.33335V8.15083L4.57752 2.16667H12.3334V10.1983L8.60919 14.6667ZM14 9.66667V2.16667H15.6667L15.6675 9.66667H14Z"
                         fill="#2859DF"
                       />
                     </svg>
                   </div>
                 </div>
               </div>
             </div>
     
             <div className="content-main-container-bottom">
               <div className="content-main-container-bottom-text">
                 {item.text}
               </div>
               <div className="content-main-container-bottom-logo">
                 <div className="content-main-container-bottom-logo1">
                   <div className="content-clock-logo">
                     <svg
                       width="11"
                       height="13"
                       viewBox="0 0 11 13"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M5.99744 1.77539C8.75894 1.77539 10.9974 4.01389 10.9974 6.77539C10.9974 9.53689 8.75894 11.7754 5.99744 11.7754C3.23594 11.7754 0.997437 9.53689 0.997437 6.77539C0.997437 4.01389 3.23594 1.77539 5.99744 1.77539ZM5.99744 3.77539C5.86483 3.77539 5.73765 3.82807 5.64388 3.92184C5.55012 4.01561 5.49744 4.14278 5.49744 4.27539V6.77539C5.49746 6.90799 5.55016 7.03514 5.64394 7.12889L7.14394 8.62889C7.23824 8.71997 7.36454 8.77037 7.49564 8.76923C7.62674 8.76809 7.75214 8.7155 7.84485 8.6228C7.93755 8.5301 7.99013 8.40469 7.99127 8.27359C7.99241 8.14249 7.94202 8.01619 7.85094 7.92189L6.49744 6.56839V4.27539C6.49744 4.14278 6.44476 4.01561 6.35099 3.92184C6.25722 3.82807 6.13004 3.77539 5.99744 3.77539Z"
                         fill="#555560"
                       />
                     </svg>
                   </div>
                   <div className="content-clock-text">3 hours ago</div>
                 </div>
                 <div className="content-main-container-bottom-logo2">
                   <div className="content-whatsapp-logo">
                     <svg
                       width="17"
                       height="17"
                       viewBox="0 0 17 17"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M2.32306 12.5003L1.32306 15.5002L4.82306 15.0002C7.82306 16.5001 11.3233 15.5003 13.8233 13.0001C16.3233 10.5 15.3231 5.50033 13.8231 3.50033C12.3231 1.50033 7.82339 -0.500128 3.82349 2.5C0.323673 5.12503 0.323016 9.50021 2.32306 12.5003Z"
                         fill="#25D366"
                       />
                       <path
                         fillRule="evenodd"
                         clipRule="evenodd"
                         d="M8.31853 16.3625H8.31525C6.98832 16.3621 5.68449 16.0291 4.52646 15.3975L0.323486 16.5L1.44827 12.3916C0.754449 11.1892 0.389363 9.82527 0.389958 8.42791C0.391698 4.0565 3.94839 0.5 8.31845 0.5C10.4394 0.500915 12.4301 1.32659 13.9269 2.82523C15.4238 4.32379 16.2477 6.31574 16.2469 8.43417C16.2451 12.8046 12.6899 16.3607 8.31853 16.3625ZM4.72126 13.9621L4.96189 14.105C5.97365 14.7054 7.13344 15.023 8.31592 15.0235H8.31859C11.9507 15.0235 14.9068 12.0673 14.9083 8.43369C14.909 6.67287 14.2242 5.01725 12.98 3.77164C11.7359 2.52603 10.0813 1.83972 8.32119 1.83911C4.68629 1.83911 1.73009 4.79504 1.72865 8.42835C1.72814 9.67352 2.07654 10.8862 2.73618 11.9353L2.89287 12.1847L2.22715 14.6164L4.72126 13.9621ZM12.0416 10.1411C12.1797 10.2079 12.273 10.253 12.3129 10.3195C12.3624 10.4021 12.3624 10.7987 12.1974 11.2615C12.0322 11.7243 11.2408 12.1466 10.8602 12.2035C10.5189 12.2545 10.087 12.2758 9.61242 12.125C9.32469 12.0337 8.95571 11.9118 8.48307 11.7077C6.62588 10.9058 5.3708 9.10574 5.13359 8.76554C5.11697 8.7417 5.10535 8.72504 5.09887 8.71638L5.09727 8.71424C4.99243 8.57436 4.28996 7.63709 4.28996 6.66706C4.28996 5.75454 4.7382 5.27624 4.94453 5.05608C4.95866 5.041 4.97166 5.02713 4.98331 5.01441C5.16489 4.81608 5.37952 4.76649 5.51158 4.76649C5.64364 4.76649 5.77585 4.76771 5.89127 4.77351C5.90551 4.77423 5.92033 4.77414 5.93564 4.77405C6.05108 4.77337 6.19501 4.77253 6.33699 5.11358C6.39162 5.24483 6.47154 5.43941 6.55584 5.64464C6.72631 6.05964 6.91465 6.51817 6.94778 6.58452C6.99732 6.68369 7.03033 6.79933 6.9643 6.93161C6.95439 6.95144 6.94522 6.97015 6.93646 6.98804C6.88686 7.08929 6.85038 7.16377 6.7662 7.26206C6.7331 7.30071 6.69889 7.34237 6.66468 7.38403C6.59653 7.46703 6.52838 7.55002 6.46904 7.60914C6.36986 7.70793 6.26662 7.8151 6.38218 8.01344C6.49774 8.21177 6.89532 8.86047 7.48425 9.38579C8.11732 9.95046 8.66754 10.1891 8.94643 10.3101C9.0009 10.3337 9.04501 10.3529 9.07738 10.3691C9.27541 10.4683 9.39097 10.4517 9.50654 10.3195C9.62211 10.1873 10.0018 9.741 10.1338 9.5427C10.2659 9.34444 10.398 9.37747 10.5795 9.44355C10.7612 9.50972 11.7351 9.98892 11.9332 10.0881C11.9719 10.1074 12.0081 10.1249 12.0416 10.1411Z"
                         fill="white"
                       />
                     </svg>
                   </div>
                   <div className="content-whatsapp-text">Group name</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      ))}
  </>
 
  );
};

export default Content;
