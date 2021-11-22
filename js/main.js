var colors = ["#fff", "lightgray", "lightblue", "teal"];
for (let i = 0; i < colors.length; i++) {
    $(".color-option li").eq(i).css("background-color", colors[i]);
}

$(".color-option li").click(function () {
    let currbg = $(this).css("background-color"); //bring the color that the user click on it
    //   console.log(currbg);
    $(".change").css("color", currbg);
});
$(".color-box i").click(function () {
    //  alert("hi");
    let outerWidth = $(".color-option").outerWidth(); //bring the outerWidth of the color-option
    // console.log(outerWidth);
    if ($(".color-box").css("left") == "0px") {
        $(".color-box").animate({ "left": -outerWidth }, 2000);
    }
    else $(".color-box").animate({ "left": 0 }, 2000);
});

$(window).scroll(function () {
    //  console.log("hello");
    let scrollOffset = $(window).scrollTop(); //represents the distance relative to the top of the window
    let home = $(".parent2").offset().top;
    console.log(home);
    // console.log(scrollOffset);
    if (scrollOffset >= home) {
        $(".header-div").css({ "background-color": "rgba(0,0,0,0.7)", "transition": "all 2s" });
    }
    else $(".header-div").css("backgroundColor", "transparent");
});


