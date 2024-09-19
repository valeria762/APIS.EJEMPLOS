function getApi(done){
    $.ajax({
        url: 'https://fakestoreapi.com/products',
        dataType: 'json',
        success: function(data){
            done(data);
        }
    })
}

getApi(data => {
    data.forEach(producto => {
        const articulo = document.createRange().createContextualFragment(`
            <div id="container" class="tarjeta"></div>
            <p>${producto.title}</p>
             <img src="${producto.image}" class="imagen"></img>
            `);
            const main =document.querySelector("main");
            main.append(articulo);
    });
})
