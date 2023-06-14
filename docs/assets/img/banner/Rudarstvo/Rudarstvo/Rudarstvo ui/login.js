var GetLogin = function ()
{
     var username = $('#txtUsername').val();
     var password = $('#txtPassword').val();
    

    console.log(username);
    var loginUrl = "http://localhost/Rudarstvo/GetLogin";
    var loginData = JSON.stringify({ "Username": username, "Password": password });

    $.ajax({
        type: "POST",
        data: loginData,
        url: loginUrl,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result)
        {
            alert(result);
            if (result === "Logged in")
            {
                window.location.replace("http://127.0.0.1:5501/index.html");

                let token = result.token;

                document.cookie = "token = "+ token;
            }
            else
            {
                alert("Popunite sva polja!")
            }
            
        },
        error: function (result)
        {
            alert(result);
        },
    });

};