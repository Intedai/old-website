/**
 * Adds a new project to the projects container
 * @param {string} name - The name of the project
 * @param {string} description - The description of the project
 * @param {string} link - The link to the project's repository
 */
function addProject(name, description, link) {
    // Create the new project element
    let newProject = document.createElement("div");
    newProject.classList.add("project");
  
    // Create the project name element and add it to the project
    let projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.textContent = name;
    newProject.appendChild(projectName);
  
    // Create the project description element and add it to the project
    let projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.textContent = description;
    newProject.appendChild(projectDescription);
  
    // Create the anchor tag and add the new project to it
    let projectLink = document.createElement("a");
    projectLink.href = link;
    projectLink.appendChild(newProject);
  
    // Append the new project to the first element with the class "mid"
    let midContainer = document.querySelector(".Mid");
    midContainer.appendChild(projectLink);
  }

/**
 * Fetches the user's GitHub repositories and adds them to the projects container
 */
function projectsAdder()
{
    githubConfigID = "564377533"
    fetch('https://api.github.com/users/Intedai/repos')
    .then(response => response.json())
    .then(data => {
    // Access the JSON data here
    for(let i = 0; i < data.length; i++)
    {
      if (data[i]['id'] == githubConfigID) continue;
      addProject(data[i]["name"],data[i]["description"],data[i]["html_url"])
    }
    // Loop through the repositories and display the names
    let midContainer = document.querySelector(".Mid");
    midContainer.innerHTML += "\n<br><br><br><br><br>"
  })

  .catch(error => console.error(error));
}