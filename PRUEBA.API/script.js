function getApi(done){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data){
            done(data);
        }
    })
}

getApi(data => {
    data.results.forEach(personaje => {
        const articulo = document.createRange().createContextualFragment(`
            <div id="container" class="tarjeta"></div>
            <p>${personaje.name.last}</p>
            <p>${personaje.location.street.name}</p>
            <img src="${personaje.picture.large}"></img>
            `);
            const main =document.querySelector("main");
            main.append(articulo);
    });
})
