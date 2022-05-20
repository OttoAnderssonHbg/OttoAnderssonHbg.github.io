var result  = document.getElementById("result").innerHTML;

function sendData(){

    var options = document.getElementById("PicturePick")
    var id = options[options.selectedIndex].id;
    const resultcontent  = `
    
    <div class ="card" style="background-color: ${document.querySelector("#colorpicker").value}; text-align:center;">
     <h1>${document.querySelector("#text").value}</h1>
     <img src="..//img/${id}" alt="${id}">
    </div>
    `
    document.getElementById("result").innerHTML = resultcontent;
}