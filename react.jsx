function User() {
    let age = 25;

    return (
        <div>
            <h2>Razi</h2>
            <p>Age: {age}</p>
        </div>
    );
}


function userList(){
    let users = ["Razi", "Rahim", "Karim"];

    return(
        <ul>
            {users.map(user => <li> {user} </li> )}
        </ul>
    );
}


function ProductList(){
    let products = ["Laptop", "Mouse", "Keyboard"];

    return(
        <ul>
            {products.map((product,index) => <li key={index}> {product} </li> )}
        </ul>
    );
}