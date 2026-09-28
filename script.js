let inputText = document.getElementById("inputText");
let add = document.getElementById("add");
let pairs= [];

add.onclick = function (){
if( inputText.value.match(/[a-zA-Z\d]+\s?=\s?[a-zA-Z\d]+$/)){
    pairs.push(inputText.value);
    console.log(pairs);
    let pairList = document.getElementById("pairList");
    pairList.innerHTML += " " + inputText.value + "<br>";
    inputText.value = "";
}
}

let sortByName = document.getElementById('sortByName');
sortByName.onclick = function (){
    pairs.sort((a, b) =>{
        let nameA = a.split("=")[0];
        let nameB = b.split("=")[0];
        return nameA.localeCompare(nameB);
    } )
    console.log(pairs);
    let pairList = document.getElementById("pairList");
    pairList.innerHTML =  pairs.join("<br>") ;
}

let sortByValue = document.getElementById('sortByValue');
sortByValue.onclick = function (){
    pairs.sort((a, b) =>{
        let nameA = a.split("=")[1];
        let nameB = b.split("=")[1];
        return nameA.localeCompare(nameB);
    } )
    console.log(pairs);
    let pairList = document.getElementById("pairList");
    pairList.innerHTML =  pairs.join("<br>") ;
}

let deleteBut = document.getElementById('delete');
deleteBut.onclick = function (){
pairs = [];
    let pairList = document.getElementById("pairList");
    pairList.innerHTML =  pairs ;
}