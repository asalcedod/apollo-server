# Apollo Server

Iniciamos con el siguiente comando.
```bash
npm start
```

Ejemplo de Querys
## Obtener 1 o Todos los usuarios
```bash
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
```

## Obtener 1  usuario especifico
```bash
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
```

# Mutaciones
## Crear Usuarios
```bash
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
```

## Actualizar Usuarios
```bash
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
```

## Eliminar Usuarios
```bash
mutation {
  deleteUser(id: "id")
}
```