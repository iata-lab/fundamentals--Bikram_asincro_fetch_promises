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

//4
function getUsers(Array) {
  console.log(Array);
}


// 5
