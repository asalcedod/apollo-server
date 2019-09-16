# Apollo Server

Iniciamos con el siguiente comando.
```bash
npm start
```

Ejemplo de Querys
## Obtener 1 o Todos los usuarios
query{
  getUsers{
    name
    lastname
    username
    age
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
    name
    lastname
    username
    age
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
## Crear Usuarios
mutation{
  createUser(input: {
    name: "Eduardo"
    lastname: "Carrillo"
    username: "prueba2"
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

## Actualizar Usuarios
mutation {
  updateUser(input: {
    id: "id"
    name: "Antonio"
    lastname: "Salcedo"
    username: "pruebauser"
    age: 25
    type: PREMIUM
  }){
    name
  }
}

## Eliminar Usuarios
mutation {
  deleteUser(id: "id")
}