var UI = window.UI || (function () {
    function appendClasses(classList, el) {
        classList.forEach(function (className) {
            el.classList.add(className);
        });
    }
    return {
        appendClasses : appendClasses
    }
}());