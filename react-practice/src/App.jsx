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


function App(){
  return(
    <div>
      <Greeting name = "Wazid" age ={25} />
    </div>
  );
}

function Greeting(props){
  return(
    <h2>
      Hello {props.name} <br/>
      Age: {props.age}
    </h2>
  );
}

export default App;
