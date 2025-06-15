'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProjects } from '../lib/sanity.queries';

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        console.log('Fetched projects:', data); // Debug log
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="min-h-screen py-20">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="text-center">Loading projects...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="min-h-screen py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-block px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 