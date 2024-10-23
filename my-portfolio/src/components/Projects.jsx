import React from "react";

function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "Description of Project 1",
            link: "https://example.com/project1"
        },
        {
            title: "Project 2",
            description: "Description of Project 2",
            link: "https://example.com/project2"
        },
        {
            title: "Project 3",
            description: "Description of Project 3",
            link: "https://example.com/project3"
        }
    ];

    return (
        <section className="bg-gray-200 py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                        >
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
