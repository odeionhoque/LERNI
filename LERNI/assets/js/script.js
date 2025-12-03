document.addEventListener('DOMContentLoaded', function(){
const selectBtn = document.querySelector('.select-btn');
if(selectBtn){
selectBtn.addEventListener('click', function(){
const opts = ['Todo o Brasil','Região Sudeste','Região Nordeste','Região Sul'];
const choice = prompt('Selecionar região: (exemplo)\n' + opts.map((o,i)=> (i+1)+'. '+o).join('\n'));
if(choice){
alert('Filtrando por: ' + (opts[Number(choice)-1] || 'Personalizado'));
}
});
}
});