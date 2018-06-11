"use strict";

var GetInfo = (function () {

    function GetInfo() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://swapi.co/api/films/', false);
        xhr.send();

        if (xhr.status != 200) console.log(xhr.status + ': ' + xhr.statusText);
        else console.log(xhr.response);

        var films = JSON.parse(xhr.response);

        for (var i = 0; i < films.results.length; i++) {
            document.body.appendChild(Render(
                films.results[i].episode_id,
                films.results[i].title,
                films.results[i].opening_crawl,
                films.results[i].director,
                films.results[i].edited.split('T')[0]
            ));
        }
        console.log(films.results);
    }

    function Render(episode_id, title, opening_crawl, director, edited) {
        var div = document.createElement('div'),
            header = document.createElement('header'),
            section = document.createElement('section'),
            footer = document.createElement('footer');

        header.innerHTML = episode_id + '<br>' + title;
        section.innerHTML = opening_crawl;
        footer.innerHTML = director + '<br>' + edited;

        div.appendChild(header);
        div.appendChild(section);
        div.appendChild(footer);

        div.onclick = function (event) {
        alert("Тут выводить кто играет");

        };

        return div;
    }
    return GetInfo();
}());

