let total_pokeballs = 3;
$(function () {

    let top = 100;
    let left = 10;
    for (var i = 1; i <= total_pokeballs; i++) {
        let pokeball_id = "#pokeball" + i;
        margin_top = "-" + top.toString() + "%";
        margin_left = left.toString() + "px";
        console.log(margin_top);
        $(pokeball_id).css('margin-top', margin_top);
        $(pokeball_id).css('margin-left', margin_left);
        //left += 25;
    }

});