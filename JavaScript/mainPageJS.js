$(document).ready(function () {

    var myArray = [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];
    var bet = 5;
    var minBet = 5;
    var maxBet = 30;
    var money = 100;
    var rand1 = 0;
    var rand2 = 0;
    var rand3 = 0;
    var result = 0;
    var clickDisabled = false;

    $("#d1").append(
        $("<canvas></canvas>")
            .attr({
                id: "canvas1",
                width: 260,
                height: 260
            })
            .addClass("canvasClass")
    );
    $("#d2").append(
        $("<canvas></canvas>")
            .attr({
                id: "canvas2",
                width: 260,
                height: 260
            })
            .addClass("canvasClass")
    );
    $("#d3").append(
        $("<canvas></canvas>")
            .attr({
                id: "canvas3",
                width: 260,
                height: 260
            })
            .addClass("canvasClass")
    );

    $("#h2_name").text(localStorage.getItem("name"));
    $("#bet").text(5);
    $("#pMoneyValue").text(money = localStorage.getItem("money"));
    $("#creditWonValue").text(0);

    setInterval(function () {
        $("#pcc").css("color", "red");
        setTimeout(function () {
            $("#pcc").css({
                "color": "black"
            });
        }, 2000)
    }, 3000);


    var spin = function () {

        if (result != 0) {
            money += parseInt(result);
        }

        if (money >= bet) {
            rand1 = myArray[Math.floor(Math.random() * myArray.length)];
            rand2 = myArray[Math.floor(Math.random() * myArray.length)];
            rand3 = myArray[Math.floor(Math.random() * myArray.length)];

            doTheMath();
            showSpinResults();

        } else {
            alert("Not enough money!");
        }
    };

    var doTheMath = function () {

        money = parseInt(money) - parseInt(bet);
        result = 0;

        if (rand1 == rand2 && rand2 == rand3) {
            if (rand1 == 1 || rand1 == 2)
                result = rand1 * 5 * bet;

            if (rand1 == 3 || rand1 == 4)
                result = rand1 * 10 * bet;

            if (rand1 == 5)
                result = rand1 * 20 * bet;

        } else {

            if (rand1 == 5 || rand2 == 5 || rand3 == 5) {
                result = bet;
            }
        }
        $("#creditWonValue").text(result);
        $("#pMoneyValue").text(money);

    };

    var showSpinResults = function () {
        var c = $("#canvas1").get(0);
        calculateSpinResults(c, rand1);

        c = $("#canvas2").get(0);
        calculateSpinResults(c, rand2);

        c = $("#canvas3").get(0);
        calculateSpinResults(c, rand3);

    };

    var calculateSpinResults = function (canvas, rand) {
        var ctx = canvas.getContext("2d");
        var img = new Image();

        if (rand == 1)
            img.src = "../resources/images/cherries.png";
        if (rand == 2)
            img.src = "../resources/images/lemon.png";
        if (rand == 3)
            img.src = "../resources/images/grapes.png";
        if (rand == 4)
            img.src = "../resources/images/melon.png";
        if (rand == 5)
            img.src = "../resources/images/7.png";

        ctx.fillRect(0, 0, 300, 300);
        ctx.drawImage(img, 10, 10, 240, 240);
    };

    $("#upImg").click(function () {
        console.log("da");
        if (bet < maxBet) {
            bet = bet + 5;
            $("#bet").text(bet);
        }
        else {
            setTimeout(function () {
                alert("Max bet reached!")
            }, 500);
        }
    });

    $("#downImg").click(function () {
        if (bet > minBet) {
            bet = bet - 5;
            $("#bet").text(bet);
        } else
            setTimeout(function () {
                alert("Min bet reached!")
            }, 500);
    });

    $("#add100Credit:first").click(function () {
        money = parseInt(money) + 100;
        $("#pMoneyValue").text(money);
    });

    $('#myGif').click(function () {
        myFunction();
    });

    $(document).keypress(function () {
        if (event.which == 13) {
            myFunction();
        }
    });

    var myFunction = function () {
        if (clickDisabled)
            return;

        $("#myGif").attr("src", "../resources/gifs/Slot_machine.gif");
        spin();

        clickDisabled = true;
        setTimeout(function () {
                $("#myGif").attr("src", "../resources/images/7.png");
                clickDisabled = false;
            },
            1500);
    };

    $("input[type=radio][name=sameName]").change(function () {
        if (this.value == "casino") {
            $("body").css("background", "green");
        }
        else if (this.value == "normal") {
            $("body").css("background", "blue");
        }
    });

    $("#rightDiv")
        .append(
        $("<div></div>")
            .attr({
                "id": "first"
            })
            .css({
                "background-image": "url(../resources/images/backgroundMoney.jpg)"
            })
            .addClass("backgroundChanger")
            .on({
                click: function () {
                    $("body").css({
                        "background-image" : $(this).css("background-image"),
                        "opaccity": 0.8
//                        divafterrrrrrrrrrr
                });
                } ,
                mouseover : function () {
                    $(this).fadeTo("slow", 0.8);
                },
                mouseleave : function () {
                    $(this).fadeTo("slow", 0.2);
                }
            })
            .append(
            $("<p>a</p>")),
        $("<div></div>")
            .attr({
                "id": "second"
            })
            .css({
                "background-color": "blue"
            })
            .addClass("backgroundChanger")
            .on({
                click: function () {
                    $("body").css("background-color", $(this).css("backgroundColor"));
                } ,
                mouseover : function () {
                    $(this).fadeTo("slow", 0.8);
                },
                mouseleave : function () {
                    $(this).fadeTo("slow", 0.2);
                }
            })
            .append(
            $("<p>b</p>")),
        $("<div></div>")
            .attr({
                "id": "third"
            })
            .css({
                "background-color": "yellow"
            })
            .addClass("backgroundChanger")
            .on({
                click: function () {
                    $("body").css("background-color", $(this).css("backgroundColor"));
                } ,
                mouseover : function () {
                    $(this).fadeTo("slow", 0.8);
                },
                mouseleave : function () {
                    $(this).fadeTo("slow", 0.2);
                }
            })
            .append(
            $("<p>a</p>"))
    );
});