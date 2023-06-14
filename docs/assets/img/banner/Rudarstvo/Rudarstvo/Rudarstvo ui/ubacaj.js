function UbacitiRudu() {
    console.log('radi ubacaj');
    $("#create-item-form").submit(function(event) {
        event.preventDefault();

        var formData = {
            ID: $("#InsertID").val(),
            Ime: $("#InsertNazivRude").val(),
            Prezime: $("#InsertPHVrednost").val(),
            StrucnaSprema: $("#InsertOpis").val(),
            Plata: $("#InsertPlata").val(),
            Struka: $("#InsertStruka").val(),
            Slika: $("#InsertRegion").val(),
            Stranka: $("#InsertRegion").val()

        };

        $.ajax({
            header: {
                 'Access-Control-Allow-Origin': '*'
            },
            type: "POST",
            url: "http://localhost/Rudarstvo/CreateBirac",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function() {
                alert("Uspesno ste ubacili biraca");
                console.log(formData);
            },
            error: function(xhr, status, error) {
                console.log("Error: " + error + status);
                alert("Error");
                console.log(formData);
            }
        });
    });
}