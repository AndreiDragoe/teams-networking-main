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

function $(selector){
    return document.querySelector(selector);
}

function formSubmit(e){
    e.preventDefault();
    createTeamRequest();
}

function initEvents(){
    $('#editForm').addEventListener('submit', formSubmit)
}

getTeamsRequest().then((r) => {
    showTeams(r);
});
 
initEvents();

// POST teams-json/create
function createTeamRequest(){
    fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        promotion: "WON3",
        members: "Your Name",
        name: "CV",
        url: "https://github.com/nmatei/teams-networking"
    })
    });
}

// DELETE teams-json/delete
fetch("http://localhost:3000/teams-json/delete", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ id: "fedcba1610309909431" })
});

// PUT teams-json/update
fetch("http://localhost:3000/teams-json/update", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: "fedcba1610310163146",
    promotion: "WON3",
    members: "UpdatedName",
    name: "Name",
    url: "https://github.com/nmatei/teams-networking"
  })
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