import React from "react";


function printpage(){
    window.print();
}
function Print(){
    return <button id="Print" type="button" onClick={printpage}>print</button>
}

export default Print;