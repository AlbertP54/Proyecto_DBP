
total_pokemons = 2;

// function to change pokemon location randomnly 
$(function () {

    for (var i = 1; i <= total_pokemons; i++) {
        let pokemon_id = "#pokemon" + i;
        let margin_top = randomInteger(15, 95);
        margin_top = "-" + margin_top.toString() + "%";

        let margin_left = randomInteger(0, 90);
        margin_left = margin_left.toString() + "%";
        $(pokemon_id).css('margin-top', margin_top);
        $(pokemon_id).css('margin-left', margin_left);

    }

});

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}