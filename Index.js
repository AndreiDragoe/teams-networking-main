function getTeamsRequest(){
    fetch("http://localhost:3000/teams-json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}).then((r) => {
    return r.json();
});
}

function getTeamAsHTML(team){
    return `
    <tr>
        <td>${team.promotion}</td>
        <td>${team.members}</td>
        <td>${team.name}</td>
        <td>${team.url}</td>
    </tr>`;
}

function showTeams(teams){
    const html = teams.map(getTeamAsHTML);
    document.querySelector('table tbody').innerHTML = html.join('');
}

getTeamsRequest().then((r) => {
    showTeams(r);
});

/*
function LoadJson(fileJson) {
    fetch(fileJson).then(function (r) {
        return r.json();
    }).then(function (r2) {
        return r2;
    });
}

function LoadJsonFromUrl(fileJsonUrl) {
    fetch(fileJsonUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }).then(function (r) {
        return r.json();
    }).then(function (r2) {
        return r2;
    });
}

const date = LoadJsonFromUrl('http://localhost:3000/teams-json');

console.info(date);

*/


/*

function showSkills(skills) {
    //var skills = [];
    var html = skills.map(function (skill) {
        //return `<li>${skill.name} - <span class="endorce 
    });

    var container = document.querySelector('#skills ul');
    container.innerHTML = html.join('');
}

fetch('skills.json').then(function (r) {
    return r.json();
}).then(function (r2) {
    //console.warn('r2', r2);
    showSkills(r2);
});



function showSkills2() {
    var skills = LoadJson('skills.json');
    var skillsSorted = skills.sort(function (a, b) {
        //ASC
        return a.endorcements - b.endorcements;
        //DESC 
        //return b.endorcements - a.endorcements;

        //return a.name.localeCompare(b.name);
    });

    var html = skills.map(function (skill) {
        var cls =  skill.endorcements > 4 ? 'class="important"' : '';
        return `<li ${cls}>${skill.name} - <span class="endorcements">${skill.endorcements}</span></li>`;
    });

    var container = document.querySelector('#skills ul');
    container.innerHTML = html.join('');
}
*/