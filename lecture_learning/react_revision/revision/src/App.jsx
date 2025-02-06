import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts.

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;





// import { useState ,useEffect} from 'react'

// function App() {
//  const [currentTab,setCurrentTab]=useState(1);
//  const [tabData,setTabData]=useState({});
//  const [loading,setLoading]=useState(true);

//  useEffect(function (){
//   setLoading(true);
//    fetch("https://jsonplaceholder.typicode.com/todos/"+ currentTab)
//    .then( async res =>{
//    const json =await res.json();
//    setTabData(json);
//    setLoading(false);
//   });

//  },[])


// return <div>
//   <button onClick={function() { setCurrentTab(1)}}
//   style={{color :currentTab == 1 ? "red":"black"}}>Todo #1</button>
//   <button onClick={function() { setCurrentTab(2)}}
//   style={{color :currentTab == 2 ? "red":"black"}}>Todo #2</button>
//   <button onClick={function() { setCurrentTab(3)}}
//    style={{color :currentTab == 3 ? "red":"black"}}>Todo #3</button>
//   <button  onClick={function() { setCurrentTab(4)}}
//   style={{color :currentTab == 4 ? "red":"black"}}>Todo #4</button>
// <br />
// {loading ? "Loading..." : tabData.title}

//   </div>

// }
//  export default App

// import { useEffect, useState } from "react";

// function App() {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(function() {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res => {
//         const json = await res.json();
//         setTabData(json);
//         setLoading(false);
//       });

//   }, [currentTab])
  
//   return <div>
//     <button onClick={function() {
//       setCurrentTab(1)
//     }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
//     <button onClick={function() {
//       setCurrentTab(2)
//     }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
//     <button onClick={function() {
//       setCurrentTab(3)
//     }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
//     <button onClick={function() {
//       setCurrentTab(4)
//     }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
// <br /> 
//     {loading ? "Loading..." : tabData.title}
//   </div>
// }

// export default App


// Notification 
  // return <><div>
  //           <button onClick={function (){
  //             setCurrentTab("feed");
  //           }}style={{color:currentTab == "feed" ?"red":"black"}}>feed</button> 

  //           <button onClick={function (){
  //             setCurrentTab("notification")}} style={{color:currentTab == "notification" ?"red":"black"}}>Notification</button>

  //           <button onClick={function (){
  //             setCurrentTab("posts")}} style={{color:currentTab == "posts" ?"red":"black"}}
  //           >Posts </button>

  //           <button onClick={function (){
  //             setCurrentTab("messages")}} style={{color:currentTab == "messages" ?"red":"black"}}>messages</button>
  //           </div>
  // </>


// const [count, setCount] = useState(1)
  
// function IncreaseCount(){
// setCount(currentValue =>currentValue +1 );
// }


// // setInterval(IncreaseCount,1000);
// //   setCount( function(currentValue){
// //     return currentValue +1
// // });

// useEffect(function(){
// setInterval(IncreaseCount,1000);
// },[]);

// return (
//   <>
//     {count}
//   </>
// )