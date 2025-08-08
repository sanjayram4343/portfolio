function showDetails(project) {
    const details = {
        project1: {
            title: "Project 1",
            description: "Detailed description of Project 1. This project involved..."
        },
        project2: {
            title: "Project 2",
            description: "Detailed description of Project 2. This project focused on..."
        },
        project3: {
            title: "Project 3",
            description: "Detailed description of Project 3. This project was about..."
        },
        project4: {
            title: "Project 4",
            description: "Detailed description of Project 4. This project included..."
        }
    };

    document.getElementById('project-title').innerText = details[project].title;
    document.getElementById('project-description').innerText = details[project].description;
    document.getElementById('project-details').style.display = 'block';
}

function closeDetails() {
    document.getElementById('project-details').style.display = 'none';
}