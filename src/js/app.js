import games from "../games.json"
import templates from "../templates-games.hbs"

const listRef = document.querySelector(".list");
listRef.innerHTML = templates({ games })