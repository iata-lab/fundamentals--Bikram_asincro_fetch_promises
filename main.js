const URL_ = new URL("https://jsonplaceholder.typicode.com/users");
//Pero definir la URL en una constante (const URL_) es útil si necesitas reutilizarla en varias partes del código. La mejor opción depende de la claridad y reutilización que necesites.

let users = [];

// 1, 2
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response); //1
    const { data } = response; //2
    users = data; //3
    getUsers(users); //4

    data.map((user) => console.log(user.name));
    console.log("Final del bucle");
  })
  .catch((err) => console.log(err));

const nombreObjeto = {};

//4 and 6
function getUsers(Array) {
  const userList = document.getElementById('userList');
  userList.innerHTML = ''; // Clear previous content
  
  Array.forEach(user => {
    const userElement = document.createElement('p');
    userElement.textContent = user.name;
    userList.appendChild(userElement);
  });
}

// 5
document.getElementById('showUsers').addEventListener('click', () => getUsers(users));
