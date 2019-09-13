# apollo-server

npm start

Ejemplo de Querys
## Obtener 1 o Todos los usuarios
query{
  getUsers{
    name
    lastname
    emails{
      email
    }
    avatar{
      name
      ext
      url
    }
  }
}

## Obtener 1  usuario especifico
query {
  getUser(id: "id") {
    nombre
    apellido
    emails {
      email
    }
    avatar{
      name
      ext
      url
    }
  }
}

# Mutaciones
mutation{
  createUser(input: {
    name: "Eduardo"
    lastname: "Carrillo"
    age: "22"
    emails: [
      {email: "aaa"}
      {email: "bbb"}
      {email: "ccc"}
    ]
    avatar: {
      name: "Foto"
      ext: "jpg"
      url: "abcabc"
    }
    type: PREMIUM
  }){
    id
    name
    emails{
      email
    }
    avatar{
      name
    }
  }
}
mutation {
  updateUser(input: {
    id: "id"
    name: "Antonio"
    lastname: "Salcedo"
    age: "25"
    type: PREMIUM
  }){
    name
  }
}
mutation {
  deleteUser(id: "id")
}