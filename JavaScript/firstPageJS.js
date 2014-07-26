/**
 * Created by Bogdan on 7/20/2014.
 */
function createDivs() {

    $(".mainContainer").append(
        $("<div></div>")
            .addClass("container")
    );

    $(".container").append(
        $("<div></div>")
            .addClass('block1 oppacity'),
        $("<div></div>")
            .addClass('block2 oppacity'),
        $("<div></div>")
            .addClass('block3 oppacity'),
        $("<div></div>")
            .addClass('block4 oppacity'),
        $("<div></div>")
            .addClass('block5 oppacity')
    );

    $(".oppacity").bind({
        mouseenter: function () {
            $(this).fadeTo('fast', 0.8);
        },
        mouseleave: function () {
            $(this).fadeTo('fast', 0.2);
        }
    });

}

function myFunction() {
    var name = $("#id_name").val();
    var money = $("#id_money").val();

    var credit = 0;

    localStorage.setItem('name', name);
    localStorage.setItem('money', money);

    var ok = 0;

    if (name.length == 0 && money.length == 0) {
        alert("Username field is empty! ");
        ok = 1;
    }
    else {
        if (name.length == 0) {
            alert("Username field is empty!");
            ok = 1;
        }
        if (money.length == 0) {
            alert("You need at least 50 credit to play!");
            ok = 1;
        }
    }

    if (ok == 0) {
        var m = parseInt(money) || 0;

        if (m >= 50) {
            window.open("mainPage.html");
            window.close();

        } else {
            alert("You can play only if you have 50 credit");
        }
    }
}
