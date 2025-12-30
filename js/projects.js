const container = document.getElementById("projects-container");

fetch("extras/projects.json")
  .then(res => res.json())
  .then(projects => {
    container.innerHTML = projects.map(project => `
      <article class="project">
        <img src="${project.image}" alt="${project.alt}">
        <h3>${project.title}</h3>
        <p>
          ${project.tech.map(t => `<span>${t}</span>`).join("")}
        </p>
        <div class="overlay">
          <a href="${project.demo}" target="_blank" rel="noopener">
            VIEW PROJECT
          </a>
          <a href="${project.code}" target="_blank" rel="noopener">
            VIEW CODE
          </a>
        </div>
      </article>
    `).join("");
  })
  .catch(error => {
    container.innerHTML = "<p>Error cargando proyectos</p>";
    console.error(error);
  });