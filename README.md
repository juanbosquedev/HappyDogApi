# Happy Dog

## Descripción

Happy Dog es una aplicación de escritorio diseñada para ayudar a las personas a encontrar perros para adoptar. La aplicación cuenta con funcionalidades de registro, inicio de sesión, navegación, publicación de perros en adopción, edición y eliminación de publicaciones. Además, ofrece una sección informativa sobre la aplicación y un carrusel de imágenes de perros disponibles para adoptar.

## Despliegue

-El back end de Happy Dog está desplegado en la siguiente dirección: [Happy Dog API](https://happydogapi.onrender.com/)

-El frontend de Happy Dog está desplegado en la siguiente dirección: [Happy Dog Frontend](https://happy-dog-front.vercel.app/)

## Video descriptivo

En el siguiente link se muestra en un video las funcionalidades: [demostración de funcionamiento](https://www.youtube.com/watch?v=LJfkwNTY9RU)

## Instrucciones de Inicio

### 1. Clonar el Repositorio

```bash
git clone https://github.com/juanbosquedev/HappyDogFront.git
```

### 2. Instalar Dependencias

- Corre el siguiente comando para instalar las dependencias:
  ```bash
  npm install
  ```

### Configuración de Variables de Entorno

Para configurar las variables de entorno necesarias para el funcionamiento del frontend de HappyDogFront, sigue estos pasos:

1. Crea un archivo llamado `.env` en la raíz de la carpeta HappyDogFront.

2. Agrega la siguiente variable de entorno según corresponda:

POSTGRESQL_URL=postgres://fhakqcej:55JGxy1rPBQk48p4oeoC5NvK_pF1wj1g@trumpet.db.elephantsql.com/fhakqcej

PORT=8000

API_DOG=https://api.thedogapi.com/v1/images/search?limit=20&api_key=live_eo5wxb0Y6lkd1CC3C0IYMrN2Eu2PMvPrv67RHad0RQVrW2xg5yXJ6YQa2v56Gs4l

JWT_SECRET='2b7f05f09eef876d1ad5e24c4382d6ec593b26989a5eb5d4b5a1f0b24fa2b426'

### 3. Ejecutar la Aplicación

Una vez que se hayan instalado las dependencias y configurado las variables de entorno, (encender la API en caso de que sea local), puedes iniciar la aplicación con el siguiente comando:

```bash
npm start
```

# Configuración de Rutas

## Rutas de Usuario

Para las operaciones relacionadas con los usuarios:


```bash
https://happydogapi.onrender.com/userLogin
https://happydogapi.onrender.com/userLogout
https://happydogapi.onrender.com/userRegister

```

## Rutas de perros

Para las operaciones relacionadas con los perros:

```bash
https://happydogapi.onrender.com/allDogs
https://happydogapi.onrender.com/newDog
https://happydogapi.onrender.com/updateDog/:id
https://happydogapi.onrender.com/dogDelete/:id


```

### 3. Ejecutar la Aplicación

Una vez que se hayan instalado las dependencias y configurado las variables de entorno, puedes iniciar la aplicación con el siguiente comando:

```bash
npm start
```


#### Technologias utilizadas

- JavaScript
- Node
- Express
- Sequelize
- PostgreSql
- JWT


---


