fetch('https://api.github.com/repos/Chinmay-KB/project_fireflies/issues?state=open')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });