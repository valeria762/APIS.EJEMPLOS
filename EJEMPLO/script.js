function getApi(done){
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        dataType: 'json',
        success: function(data){
            done(data);
        }
    })
}

getApi(data => {
    data.forEach(pais => {
        const articulo = document.createRange().createContextualFragment(`
            <div id="container" class="tarjeta"></div>
            <p>${pais.name.common}</p>
            `);
            const main =document.querySelector("main");
            main.append(articulo);
    });
})
