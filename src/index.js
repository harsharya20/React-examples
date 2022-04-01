import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css'

let currtime= ' '
const curtime = new Date(2022,4,4,23).getHours();
const times = {};
if(curtime >=1 && curtime <12){
  currtime = 'Good Morning'
  times.color = 'Orange'
} else{
  if(curtime >=12 && curtime <19){
  times.color = 'purple'
  currtime = 'Good Afternoon'
  } else {
    currtime = 'Good Night'
    times.color = 'blue'
  }
}



ReactDOM.render(
  <>
  <div>
  <h1>Hello User, <span style={times}>{currtime}</span> </h1>
  </div>
  </>,
  document.getElementById('root')
)

// const name = 'harsh';
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/300"
// const img3 = "https://picsum.photos/300/300"

// const names = {
//   color: '#fa9191',
//   textTransform : 'capitalize',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #ffe9c5',
//   margin: '50px 0px',
//   fontFamily: "'Poppins', sans-serif",
// };

// ReactDOM.render(
//   <>
//   <h1 style={names}>
//      {`My name is ${name} `}</h1>
//   <div className='image'>
//   <img src={img1} alt= "Random"/>
//   <img src={img2} alt= "Random"/>
//   <img src={img3} alt= "Random"/>
//   </div>
//   </>,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <>
//   <h1>My Favourite Show</h1>
//   <h2>Here are my top picks</h2>
//   <ol>
//     <li>Stranger Things</li>
//     <li>Peaky Blinders</li>
//     <li>The Boys</li>
//     <li>Friends</li>
//     <li>Daredevil</li>
//     <li>Breaking Bad</li>
//     <li>Game of thrones</li>
//     <li>Better Call Saul</li>
//     <li>Money Heist</li>
//   </ol>
//   </>,
//   document.getElementById('root')
// )


// var name = "harsh"
// var today = new Date();
// const currtime = new Date().toLocaleTimeString();
// var dd = today.getDate();
// var mm = String(today.getMonth() + 1); //January is 0!
// var yyyy = today.getFullYear();
// today = mm + '/' + dd + '/' + yyyy;
// var hr = time.getHours();
// var min = time.getMinutes();
// var sec = time.getSeconds();
// time = hr + ':' + min + ':' + sec; 

// ReactDOM.render(
//   <>
//   <h1>{`My name is ${name}`}</h1>
//   <p>{`Current Date is ${today}`}</p>
//   <p>{`Current Time is ${currtime} `}</p>
//   </>,
//     document.getElementById('root')
// )




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
