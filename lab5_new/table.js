let colorPicker;

const defaultColor = "#0000ff";
let nextColor = defaultColor;

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#color-picker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    //colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

function updateFirst(event) {
    nextColor = event.target.value;
}

//const table = document.getElementById('table');
//let selectedCell = null;

function changeOnHover(x) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    x.style.backgroundColor = "#" + randomColor;
}

function changeOnClick(x) {
    x.style.backgroundColor = nextColor;
}

function changeOnDblclick(x) {
    //const element = document.getElementById('table');
    const cells = document.querySelectorAll('td');
    for (let i = 0; i < cells.length; i++)
    {
        if (i + 1 > 9 && (i + 1) % 12 === 9)
        {
            //cells[i].style.backgroundColor = '#000000';
            cells[i].style.backgroundColor = nextColor;
        }
        /*if (i >= 4) {
            cells[i].innerHTML = '99';
        }
        cells[i].style.backgroundColor = "#0000ff";*/
    }
}
//&& (parseInt(cells[i].innerText) - parseInt(x.innerText)) % 2 === 0