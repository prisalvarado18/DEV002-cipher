# Chat seguro para colectivos de mujeres usando Cifrado César

## Índice

* [1. Tema](#1-tema)
* [2. Planteamiento del problema](#2-planteamiento-del-problema)
* [3. Objetivos](#3-objetivos)
* [4. Definición del producto](#4-definición-del-producto)
* [5. Metodología](#5-metodología)

***

## 1. Tema
DISEÑO Y DESARROLLO DE UNA APLICACIÓN DE CIFRADO SECRETO PARA COLECTIVOS DE MUJERES PARA MEJORAR SU SEGURIDAD ONLINE Y PROTEGER SU PRIVACIDAD

## 2. Planteamiento del problema

En la actualidad, Ecuador se enfrenta a una crsis de seguridad tanto cibernética como física. Por un lado,
los riegos cibernéticos y el filtrado de datos son muy comunes. De hecho, según [Prensa.ec](https://prensa.ec/2022/06/22/ecuador-es-uno-de-los-paises-mas-vulnerables-para-los-ciberdelincuentes/#:~:text=En%20Ecuador%2C%20de%20acuerdo%20con,demuestra%20que%20desde%20el%20primer) 
en Ecuador se notificaron 7.292 ataques en el primer cuatrimestre del 2022, mientras que en 2021 hubo 15.847 alertas. De esta manera, la confianza de los ciudadanos en los sistemas informáticos es casi nula. Inclusive
los mensajes de whatsapp del ex-presidente Lenin Moreno con su familia fueron filtrados. 

Por otro lado, entre el 1 de enero y el pasado 3 de septiembre se ha registrado un total de 206 feminicidios, acumulando 1.247 casos desde 2014, cuando se tipificó el delito en el país. Es así, como varios colectivos de mujeres han creado chats grupales en whatsapp para apoyarse en caso de necesitar apoyo no solo emocional sino también relacionado con violencia. Sin embargo, aun existen riesgos de seguridad y sus mensajes pueden ser filtrados poniéndolas en riesgo. Por estas razones, se ha decidido crear una aplicación en la que colectivos de mujeres puedan enviar mensajes cifrados si así lo desean y a su vez los puedan descifrar. De esta manera, si los mensajes cifrados son filtrados, será más difícil para los hackers o las personas que accedan a los mensajes, saber lo que dice.

## 3. Objetivos
### Objetivo General
- [ ] **Diseñar y desarrollar una aplicación de cifrado secreto para colectivos de mujeres.**

### Objetivos Específicos
- [ ] **Definir el producto.**
- [ ] **Emplear la metodología SCRUM en el proceso de la creación de la aplicación.**
- [ ] **Usar y comprender HTML semántico, selectores de CSS, Web APIs, JavaScript y Github**

## 4. Definición del producto
Cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

### ¿Quiénes son los principales usuarios del producto?
* Miembros de colectivos de mujeres en Ecuador.

### ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?
* Proteger la seguridad de sus miembros en caso de haber infiltradas/os en el chat grupo o si hay brechas de seguridad. 
* Crear un espacio seguro para mujeres donde puedan hablar de cualquier tema.
* Tener una aplicación que cifre y descifre mensajes.

### ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?
* Protege a los miembros del chat grupal en caso de filtrado de mensajes ya sea de manera escrita o con capturas.
* Hace que los miembros se sientan seguras en caso de compartir información sensible a su privacidad.
* Aumenta su confianza para contar lo que sea que quieran compartir con el grupo. 

## 5. Metodología
La metodología empleada fue SCRUM como parte del bootcamp de Laboratoria. La información que se puede destacar de este proceso es el siguiente: 

### 5.1. User Story
##### Como
Usuario del sistema
##### Quiero 
Ingresar a la aplicación y cifrar mis mensajes para que solo ciertas personas ingresen a esta misma app y decifren mi mensaje en caso de que no quiera escibir directamente algo en el chat grupal.
##### Para 
Proteger mi privacidad y seguridad.
##### Condiciones
* Debe mostrarse la parte donde pueda ingresar mi mensaje a cifrar.
* Debe mostrarse la parte donde pueda ingresar mi mensaje a decifrar.


### 5.2. Prototipo
A continuación, se muestra el diseño de los prototipos el conjunto con el cliente.

* Prototipo de baja fidelidad 
</br>
![primer-prototipo](./src/img/prototipo%20baja%20fidelidad.png)

* Prototipo de alta fidelidad (Primero)
![primer-prototipo](https://i.ibb.co/44LSPMm/primer-prototipo.jpg)

* Prototipo de alta fidelidad (Segundo)
![segundo-prototipo](https://i.ibb.co/44LSPMm/primer-prototipo.jpg)

### 5.3. Manual de usuario
### 5.3.1. Uso online
* Para emplear esta aplicación en línea debe ingresar al siguiente enlace: https://prisalvarado18.github.io/DEV002-cipher/src/index.html

### 5.3.2. Descarga
* Para emplear esta aplicación en su computador debe ingresar a la página principal de este repositorio, dar click en "Code" y "Download ZIP". 

* Una vez que esté completa la descarga, tiene que extraer la carpeta, ingresar a la carpeta "src" y ejecutar el archivo index.html.

### 5.3.3. Funcionalidad 
Una vez que la app esté siendo ejecutada en su navegador de preferencia podrá observar las siguientes secciones:
#### Texto
En este recuadro debe ingresar el texto que desea cifrar o descifrar.
#### Clave
En este recuadro debe ingresar la clave la cual consta solamente de números. Si no es el caso, el mensaje no será mostrado.
#### Mensaje
En este recuadro se desplegará el mensaje cifrado o descifrado. 

#### Inicio
Adicionalmente, si la usuaria desea borrar todo puede dar click en "INICIO" que se encuentra en la parte superior derecha de la aplicación. 