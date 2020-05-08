jQuery(function () {
    $("#submit").prop('disabled', true);
    $("#password").keyup(function () {
        var pwd = $("#password").val();
        progressbar(pwd);
        if (pwd.length > 7) {
            $("#submit").prop('disabled', false);
        } else {
            $("#submit").prop('disabled', true);
        }
    });

    function progressbar(pwd) {
        var checkstrength = 0;
        if (pwd.match(/[a-z]+/)) {
            checkstrength += 1;
        }
        if (pwd.match(/[A-Z]+/)) {
            checkstrength += 1;
        }
        if (pwd.match(/[0-9]+/)) {
            checkstrength += 1;
        }
        if (pwd.match(/[$@#&!]+/)) {
            checkstrength += 1;
        }
        switch (checkstrength) {
            case 0:
                $("#progressbar").css("width", "0%");
                $("#progressbar").removeClass("bg-success");
                $("#progressbar").removeClass("bg-danger");
                $("#progressbar").removeClass("bg-warning");
                $("#progressbar").text("");
                break;
            case 1:
                $("#progressbar").css("width", "25%");
                $("#progressbar").removeClass("bg-success");
                $("#progressbar").text("25%");
                $("#progressbar").addClass("bg-danger");
                $("#progressbar").removeClass("bg-warning");
                break;
            case 2:
                $("#progressbar").css("width", "50%");
                $("#progressbar").removeClass("bg-success");
                $("#progressbar").text("50%");
                $("#progressbar").removeClass("bg-danger");
                $("#progressbar").addClass("bg-warning");
                break;
            case 3:
                $("#progressbar").css("width", "75%");
                $("#progressbar").removeClass("bg-success");
                $("#progressbar").text("75%");
                $("#progressbar").removeClass("bg-danger");
                $("#progressbar").removeClass("bg-warning");
                break;
            case 4:
                $("#progressbar").css({
                    "width": "100%"
                });
                $("#progressbar").removeClass("bg-warning");
                $("#progressbar").removeClass("bg-danger");
                $("#progressbar").addClass("bg-success");
                $("#progressbar").text("100%");
                break;
        }
    }

});
