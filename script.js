fetch("http://localhost:5000/projects")
.then(response => response.json())
.then(data => {

    const container =
    document.getElementById("projectContainer");

    data.forEach(project => {

        const div = document.createElement("div");

        div.classList.add("project-card");

        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong>
            ${project.technologies}</p>

            <a href="${project.github}"
            target="_blank">View Project</a>
        `;

        container.appendChild(div);
    });
});