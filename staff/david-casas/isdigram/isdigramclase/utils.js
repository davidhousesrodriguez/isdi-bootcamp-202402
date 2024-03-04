//utils

function block (millis) {
    var before= Date.now()
    while (Date.now() - before < millis);

}