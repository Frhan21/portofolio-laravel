import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ project }) => {
    return (
        <>
            {/* Card 1 */}
            <div className="h-[500px] p-6 transition-all transform bg-white rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden rounded-lg">
                    <img
                        src={`/storage/${project.imageUrl}`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h3 className="mt-4 mb-2 text-2xl font-bold">
                    {project.title}
                </h3>
                <p className="w-auto px-2 py-1 mb-4 text-center text-gray-500 border-2 border-gray-500 rounded-full bg-[#f4f4f4f4] text-sm">
                    {project.description}
                </p>
                <div className="flex items-center justify-start gap-2">
                    {project.linkGithub && (
                        <a
                            href={project.linkGithub}
                            className="bg-[#0a0a0a] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-[#333333] transition-colors"
                        >
                            <FontAwesomeIcon icon="fa-brands fa-github" />{" "}
                            GitHub
                        </a>
                    )}

                    {project.linkDemo && (
                        <a
                            href={project.linkDemo}
                            className="bg-[#ff8132] cursor-pointer border-2 border-[#ff8132] text-white px-4 py-2 rounded-lg hover:bg-[#fffff] transition-colors"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-eye" /> View
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

export default Card;
