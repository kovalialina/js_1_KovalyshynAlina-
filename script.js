let inputText = document.getElementById("inputText");
let add = document.getElementById("add");
let pairs= [];

add.onclick = function (){
if( inputText.value.match(/^[a-zA-Z\d]+\s*=\s*[a-zA-Z\d]+$/)){

    let pair = inputText.value.split("=");
    let name = pair[0].trim();
    let value = pair[1].trim();
    let newPair = name + "=" + value;
    pairs.push(newPair);

    let pairList = document.getElementById("pairList");
    let input = document.createElement('input');
    input.type = "checkbox";
    input.className = 'checkbox'
    input.value = newPair;

    let label = document.createElement('label');
    label.innerText = newPair;

    let div = document.createElement('div');
    div.append(input,label);

    pairList.appendChild(div);
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
    showPairs();
}

let sortByValue = document.getElementById('sortByValue');
sortByValue.onclick = function (){
    pairs.sort((a, b) =>{
        let nameA = a.split("=")[1];
        let nameB = b.split("=")[1];
        return nameA.localeCompare(nameB);
    } )
    console.log(pairs);
    showPairs();
}

function showPairs(){
    let pairList = document.getElementById("pairList");
    pairList.innerHTML = "";
    pairs.forEach(pair => {
        let input = document.createElement('input');
        input.type = "checkbox";
        input.className = 'checkbox'
        input.value = pair;

        let label = document.createElement('label');
        label.innerText = pair;
        let div = document.createElement('div');
        div.append(input,label);
        pairList.appendChild(div);
    })

}


let deleteBut = document.getElementById('delete');
deleteBut.onclick = function () {
    let checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach((checkbox) => {
        if (checkbox.checked) {
            pairs = pairs.filter(pair => {
                return pair !== checkbox.value;
            })
            checkbox.parentElement.remove()
        }
    })
}