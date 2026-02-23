# Buscador de Emojis (Patrón Maestro-Detalle)

Una pequeña aplicación web estática que consume la API pública de **EmojiHub** para mostrar una lista de emojis y sus detalles individuales. Este proyecto sirve como ejemplo práctico de la implementación del patrón de diseño **Maestro-Detalle (Master-Detail)** utilizando Vanilla JavaScript.

## Características

* **Página de Detalle:** Al hacer clic en un emoji, se abre una segunda página que recupera y muestra la información técnica detallada de ese emoji en concreto.
* **Paso de Parámetros:** La navegación entre páginas se realiza pasando el nombre del emoji a través de la URL (`?nom=nombre_del_emoji`).
* **Diseño Responsivo:** CSS moderno sin frameworks, utilizando CSS Grid, Flexbox y variables CSS para un diseño limpio y adaptable.

## Estructura del Proyecto

El proyecto consta de tres archivos principales:

* `index.html`: La vista principal que carga y muestra la lista de emojis.
* `verEmoji.html`: La vista de detalle que lee la URL y busca la información de un emoji específico.
* `styles.css`: La hoja de estilos compartida por ambos archivos HTML.

## API utilizada

* **Repositorio del API:** [EmojiHub API](https://github.com/cheatsnake/emojihub)
* **Obtener la lista:** `GET https://emojihub.yurace.pro/api/all/category/food-and-drink`
* **Buscar un emoji específico:** `GET https://emojihub.yurace.pro/api/search?q={nombre}`