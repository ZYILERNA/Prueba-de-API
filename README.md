# Buscador de Emojis (Patrón Maestro-Detalle)

Una pequeña aplicación web estática que consume la API pública de **EmojiHub** para mostrar una lista de emojis y sus detalles individuales. Este proyecto sirve como ejemplo práctico de la implementación del patrón de diseño **Maestro-Detalle (Master-Detail)** utilizando Vanilla JavaScript.

## Características

* **Página Principal (Maestro):** Muestra una lista de emojis (categoría de comida y bebida) presentados en un formato de cuadrícula (*grid*) con tarjetas (*cards*).
* **Página de Detalle:** Al hacer clic en un emoji, se abre una segunda página que recupera y muestra la información técnica detallada de ese emoji en concreto.
* **Paso de Parámetros:** La navegación entre páginas se realiza pasando el nombre del emoji a través de la URL (`?nom=nombre_del_emoji`).
* **Diseño Responsivo:** CSS moderno sin frameworks, utilizando CSS Grid, Flexbox y variables CSS para un diseño limpio y adaptable.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura de las páginas.
* **CSS3:** Estilos, animaciones (*hover*), sombras y diseño en cuadrícula.
* **JavaScript (ES6+):** * Uso de `fetch` con `async/await` para el consumo de la API.
    * Manipulación del DOM (`document.createElement`, `innerHTML`).
    * Manejo de URLs con `URLSearchParams`.
* **API:** [EmojiHub API](https://github.com/cheatsnake/emojihub) (API pública que no requiere autenticación).

## Estructura del Proyecto

El proyecto consta de tres archivos principales:

* `index.html`: La vista principal que carga y muestra la lista de emojis.
* `verEmoji.html`: La vista de detalle que lee la URL y busca la información de un emoji específico.
* `styles.css`: La hoja de estilos compartida por ambos archivos HTML.

## API utilizada

* **Repositorio del API:** [EmojiHub API](https://github.com/cheatsnake/emojihub)
* **Obtener la lista:** `GET https://emojihub.yurace.pro/api/all/category/food-and-drink`
* **Buscar un emoji específico:** `GET https://emojihub.yurace.pro/api/search?q={nombre}`