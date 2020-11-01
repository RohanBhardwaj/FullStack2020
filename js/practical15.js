window.addEventListener('selectstart', function(e){ e.preventDefault();});


var x = document.getElementById('counter');
x.innerHTML = 0;

var y = document.getElementById('container2');
y.addEventListener('mouseover', topLeft);
y.addEventListener('click', add);
y.addEventListener('mouseout', bottomRight);

var z = document.getElementById('container1');
z.style.borderBottom = "4px solid rgba(22, 22, 22, 0.2)";
z.style.borderRight = "4px solid rgba(22, 22, 22, 0.2)";
z.style.borderLeft = "4px solid rgba(22, 22, 22, 0.2)";
z.style.borderTop = "4px solid rgba(22, 22, 22, 0.2)";
z.addEventListener('click', subtract);

function topLeft() {
    this.style.borderBottom = "4px solid rgba(22, 22, 22, 0.2)";
    this.style.borderRight = "4px solid rgba(22, 22, 22, 0.2)";
    this.style.borderTop = "4px solid black";
    this.style.borderLeft = "4px solid black";
}

function add() {
    
    x.innerHTML = Number(x.innerHTML) + 1;
    if (Number(x.innerHTML) == 1) {
        z.addEventListener('mouseover', topLeft);
        z.addEventListener('mouseout', bottomRight);
        z.style.borderBottom = "4px solid rgb(22, 22, 22)";
        z.style.borderRight = "4px solid rgb(22, 22, 22)";
        z.style.borderTop = "4px solid rgba(22, 22, 22, 0.2)";
        z.style.borderLeft = "4px solid rgba(22, 22, 22, 0.2)";
    }
}

function subtract() {
    if (Number(x.innerHTML) <= 0) {
        this.disabled = true;
    }
    else {
        x.innerHTML = Number(x.innerHTML) - 1;
        if (Number(x.innerHTML) <= 0) {
            this.style.borderBottom = "4px solid rgba(22, 22, 22, 0.2)";
            this.style.borderRight = "4px solid rgba(22, 22, 22, 0.2)";
            this.style.borderTop = "4px solid rgba(22, 22, 22, 0.2)";
            this.style.borderLeft = "4px solid rgba(22, 22, 22, 0.2)";
            z.removeEventListener('mouseover', topLeft);
            z.removeEventListener('mouseout', bottomRight);
        }
        else {
        z.addEventListener('mouseover', topLeft);
        z.addEventListener('mouseout', bottomRight);
        }
        
    }
}

function bottomRight() { 
    this.style.borderBottom = "4px solid rgb(22, 22, 22)";
    this.style.borderRight = "4px solid rgb(22, 22, 22)";
    this.style.borderTop = "4px solid rgba(22, 22, 22, 0.2)";
    this.style.borderLeft = "4px solid rgba(22, 22, 22, 0.2)";
}