var deskripsi = document.querySelector('deskripsi-area')
deskripsi.addEventListener('input',function(){
    console.log("s");
    deskripsi.style.height = "1px";
    deskripsi.style.height = (deskripsi.scrollHeight)+"px";

})
