
total_pokemons = 3;

// function to change pokemon location randomnly 
$(function () {

    for (var i = 1; i <= total_pokemons; i++) {
        let pokemon_id = "#pokemon" + i;
        let margin_top = randomInteger(15, 95);
        margin_top = "-" + margin_top.toString() + "%";

        let margin_left = randomInteger(0, 90);
        margin_left = margin_left.toString() + "%";
        console.log("mt, ml", margin_top, margin_left);
        $(pokemon_id).css('margin-top', margin_top);
        $(pokemon_id).css('margin-left', margin_left);

    }

});

// function to change background colors of "start game" option
$(function () {
    let backgrounds = [['#9fec5b', '#48ad40'], ['#fecd81', '#ae7b65'], ['#75e5d9', '#588aab'], 
    ['#de7273', '#d04e65'], ['#ffb35f', '#e36e49'], ['#ed78e5', '#8749b2']];
    let opt = randomInteger(0, backgrounds.length - 1);
    let background_color = backgrounds[opt][0];
    let border = "5px solid " + backgrounds[opt][1];
    $('#brand-name span').css("background-color", background_color);
    $('#brand-name span').css("border", border);

});

function goPoke(){
    location.href = '#poketech';
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        goPoke();
    }
});

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

