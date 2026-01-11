// function App() {
//     let products = ["Laptop", "Mouse", "Keyboard"];

//     return (
//         <div>
//             <h2>Product List</h2>
//             <ul>
//                 {products.map((product, index) => (
//                     <li key={index}>{product}</li>
//                 ))}
//             </ul>

//             <FruitsName/>

//         </div>
//     );
// }


// function FruitsName(){
//   let fruits = ["Apple", "Banana", "Mango"];

//     return (
//       <div>
//         <h2>Fruits Name</h2>
//         <ul>
//           {fruits.map((fruit,index) =>
//           <li key={index}> {fruit} </li>
//           )}
//         </ul>
//       </div>
//     );
// }

// export default App;


// function App(){
//   return(
//     <div>
//       <Greeting name = "Wazid" age ={25} />
//     </div>
//   );
// }

// function Greeting(props){
//   return(
//     <h2>
//       Hello {props.name} <br/>
//       Age: {props.age}
//     </h2>
//   );
// }

// export default App;



// function App(){
//   return(
//     <div>
//       <Greeting name = "Wazid" age ={25} />
//     </div>
//   );
// }

// function Greeting({name, age}){
//   return(
//     <h2>
//       {name} - {age}
//     </h2>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div>
//       <Student student="Wazid" marks={87} />
//     </div>
//   );
// }

// function Student({ student, marks }) {
//   return (
//     <h2>
//       Student: {student} <br />
//       Marks: {marks}
//     </h2>
//   );
// }

// export default App;


// function App(){
//   return (
//     < StudentCard name = "Wazid" age={25} marks={69} />
//   );
// }

// function StudentCard({name, age, marks}){
//   return(
//     <div>
//       <p>Name: {name} </p>
//       <p>Age: {age} </p>
//       < Result marks={marks} />
//     </div>
//   );
// }

// function Result({marks}){
//   return(
//     <p>Result: {marks >= 40 ? "Pass" : "Fail"} </p>
//   );
// }
// export default App;




function App(){
  return(
    <PlayerCard name="Wazid" score={82} />
  );
}

function PlayerCard({name, score}){
  return(
    <div>
      <p>
        {name} <Performance score={score} />
      </p>
    </div>
  );
}

function Performance({score}){
  return(
   <p> {score >= 50 ? "Qualified" : "Not Qualified"} </p>
  );
}

export default App;