Actúa como un **ingeniero senior full stack especializado en React y desarrollo de e-commerce ligeros sin backend**.

Necesito que generes **un proyecto completo funcional** para una tienda de productos de limpieza llamada **Mass Limpio**.

El objetivo es crear **una aplicación simple, rápida y lista para producción**, que permita a los usuarios **agregar productos a un carrito y enviar el pedido por WhatsApp**, sin pasarela de pago ni control de stock.

El diseño debe ser renponsive y mobile first.
Mercado libre me gusta como ejemplo de como debe verse.

Usa las imagenes de la carpeta "imagenes".

Toma como guia el archivo "prompt.md".



El proyecto debe estar **optimizado para deploy en Vercel mediante un repositorio de GitHub**.

---

# Tecnologías obligatorias

* React
* Vite
* JavaScript (NO TypeScript)
* Bootstrap (para estilos)
* React Router
* localStorage para persistencia del carrito

No usar backend ni base de datos.

Los productos deben cargarse desde un **archivo JSON local**.

---

# Estructura del proyecto

Genera una estructura profesional y clara.

Ejemplo esperado:

src/
components/
Header.jsx
ProductCard.jsx
CartItem.jsx
CategoryMenu.jsx
SearchBar.jsx

pages/
Home.jsx
Category.jsx
Cart.jsx
Promo.jsx
NotFound.jsx

data/
products.json

context/
CartContext.jsx

hooks/
useCart.js

styles/

App.jsx
main.jsx

---

# Funcionalidades obligatorias

## 1 Home

Debe mostrar:

* Header con logo "Mass Limpio"
* menú desplegable de categorías
* barra de búsqueda
* icono del carrito
* sección destacada de productos

---

## 2 Categorías

Categorías iniciales:

* Lavado
* Limpieza del hogar
* Piscinas
* Línea a granel
* Línea Dclod
* Variedad

Las categorías deben mostrarse dentro de **un menú desplegable en el header**.

Al elegir una categoría se deben listar los productos correspondientes.

---

## 3 Productos

Los productos se cargan desde:

data/products.json

Cada producto debe tener:

id
name
price
category
image
description

---

## 4 Buscador

Debe permitir buscar productos por nombre.

---

## 5 Carrito de compras

El usuario debe poder:

* agregar productos
* aumentar o disminuir cantidad
* eliminar productos
* ver total

El carrito debe persistir usando **localStorage**.

---

## 6 Enviar pedido por WhatsApp

Debe existir un botón:

"Enviar pedido por WhatsApp"

El sistema debe generar automáticamente un mensaje con este formato:

Hola, quiero hacer este pedido desde Mass Limpio:

* Producto x cantidad
* Producto x cantidad

Total: $XXXX

El botón debe abrir:

https://wa.me/542234389793?text=MENSAJE_ENCODEADO

---

## 7 Página especial de promoción

Crear una página especial:

/promo

Esta página mostrará una promoción especial para **ayudar a viajar a los chicos del Club Mar Chiquita**.

Debe incluir:

* banner destacado
* texto explicativo
* productos promocionales

El acceso a esta página debe estar visible en el menú principal.

---

## 8 Diseño

Usar Bootstrap.

El diseño debe ser:

* mobile first
* limpio
* moderno
* tarjetas de productos con sombra
* botones redondeados
* colores predominantes azul claro

---

## 9 Header

Debe incluir:

* logo "Mass Limpio"
* menú desplegable de categorías
* link a promoción
* barra de búsqueda
* icono del carrito con contador

---

## 10 Carrito

Debe mostrarse en una página separada:

/cart

---

## 11 Manejo de estado

Usar:

React Context API para el carrito.

---

## 12 Deploy

El proyecto debe:

* funcionar inmediatamente con `npm install` y `npm run dev`
* poder desplegarse en **Vercel sin configuración adicional**

---

## 13 Código

El código debe:

* estar limpio
* bien comentado
* usar buenas prácticas de React
* dividir correctamente componentes
* evitar sobreingeniería

---

## 14 Datos de ejemplo

Generar al menos **10 productos de ejemplo en el JSON**.

---

# Entrega esperada

Proporciona:

1. estructura completa del proyecto
2. código de todos los archivos
3. ejemplo del JSON de productos
4. instrucciones para ejecutar el proyecto
5. instrucciones para deploy en Vercel

El resultado debe ser **una aplicación funcional completa lista para producción**.
