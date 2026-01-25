function fetchPokemon() {
    const name = document.getElementById("pokemonInput").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon not found");
            }
            return response.json();
        })
        .then(data => {
            const img = data.sprites.other["official-artwork"].front_default;

            document.getElementById("result").innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${img}" alt="${data.name}">
            `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = `
                <p style="color:red;">Pokémon not found. Try again.</p>
            `;
        });
}
