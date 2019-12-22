const size = 4;
let solgrid = Array.from({ length: size }, x => Array.from({ length: size}, x => false));

function handleClick(row, col) {
    iterator(row, col);  
}

function iterator(row, col){
    solgrid.forEach((x, i) => {
      x.forEach((y, k, z) => {
        if ((k==col && (i==row+1||i==row-1||i==row)) || (i==row && (k==col+1||k==col-1||k==col))){
            App.updateView(i,k,!y);
            z[k] = !y;
        }            
      });
    });
}


App.createView(size);
App.subscribeClick(handleClick);
