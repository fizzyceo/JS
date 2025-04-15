### Remplacement de `prompt` et `alert`

Au lieu d'utiliser `prompt()` pour demander des données à l'utilisateur et `alert()` pour afficher des résultats, on utilise des éléments HTML comme des `input`, `div`, `span`, `p`, etc., pour une expérience utilisateur plus fluide et contrôlable.

#### Exemple :

```html
<input id="userInput" type="text" placeholder="Entrez un texte" />
<button onclick="updateTitle()">Valider</button>
<h1 id="displayText"></h1>
```

```js
function updateTitle() {
  const input = document.querySelector("#userInput").value;
  document.querySelector("#displayText").textContent = input;
}
```

---

### 🔎 Les Sélecteurs

Pour sélectionner des éléments dans le DOM, on utilise :

- `document.querySelector("selector")` → retourne le premier élément correspondant.
- `document.querySelectorAll("selector")` → retourne une NodeList de tous les éléments correspondants.

#### Exemples :

```js
document.querySelector("#id");
document.querySelector(".classe");
document.querySelector("div"); // élément HTML
```

---

### 🖱️ L'événement `onclick`

Permet d’exécuter une fonction lors du clic sur un élément.

#### Exemple :

```html
<button onclick="sayHello()">Clique-moi</button>
```

```js
function sayHello() {
  alert("Bonjour !");
}
```

→ BONNE PRATIQUE : utiliser `addEventListener` pour plus de flexibilité :

```js
document.querySelector("button").addEventListener("click", sayHello);
```

---

### ✏️ La propriété `.value`

Permet de récupérer ou modifier la valeur d’un champ `input`, `textarea`, `select`, etc.

#### Exemple :

```html
<input type="text" id="nameInput" />
<button onclick="showName()">Afficher</button>
```

```js
function showName() {
  const name = document.querySelector("#nameInput").value;
  alert(`Bonjour ${name}`);
}
```

---

### 🎨 Manipulation des classes avec `.classList`

`.classList` permet d'ajouter, retirer, ou vérifier les classes CSS dynamiquement.

#### Fonctions utiles :

- `element.classList.add("maClasse")`
- `element.classList.remove("maClasse")`
- `element.classList.toggle("maClasse")`
- `element.classList.contains("maClasse")`

#### Exemple :

```js
const element = document.querySelector("h1");
element.classList.add("highlight");
element.classList.remove("old-style");
```

---

Souhaites-tu un mini-projet d’exemple (avec formulaire et interactions DOM sans prompt/alert) pour illustrer tout ça ?
