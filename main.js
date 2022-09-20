$('header button').click(()=>{
    $('form').slideDown();
})

$('#btn-reset').click(()=>{
    $('form').slideUp();
})

$('form').submit(function(e){
    e.preventDefault();
    const novaImagem = $('#nova-imagem').val();
    const novoItem = $('<li style="display:none"> </li>');
    $(`<img src="${novaImagem}" />`).appendTo(novoItem)
    $(`
        <div class="layout"> 
            <a href="${novaImagem}" target="_blank" title="ver imagem completa">
                Ver imagem completa 
            </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(500);
    $('#nova-imagem').val('');
})
