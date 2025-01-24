import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Inertia } from "@inertiajs/inertia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ projects }) => {
    const [isFading, setIsFading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentProjects, setCurrentProjects] = useState(projects);

    useEffect(() => {
        if (!isFading) {
            setCurrentProjects(projects);
        }
    }, [projects, isFading]);

    const handlePagination = (url) => {
        if (url) {
            setIsFading(true);
            setIsLoading(true);
            setTimeout(() => {
                Inertia.visit(url, {
                    preserveScroll: true,
                    preserveState: true,
                    onFinish: () => {
                        setIsFading(false);
                        setIsLoading(false);
                    },
                });
            }, 500);
        }
    };

    return (
        <section
            className="w-full min-h-[125vh] bg-[#ffffff] font-['Poppins'] p-4 flex flex-col items-center gap-6 rounded-b-[4rem]"
            id="project"
        >
            {/* Header */}
            <header className="flex items-center justify-center gap-4 mx-4 mt-6">
                <div className="w-24 sm:w-40 h-1 bg-[#0a0a0a] rounded-full"></div>
                <h2 className="text-2xl font-bold text-center sm:text-4xl">
                    Few of My Projects
                </h2>
                <div className="w-24 sm:w-40 h-1 bg-[#0a0a0a] rounded-full"></div>
            </header>

            {/* Loading State */}
            {isLoading && (
                <div className="flex items-center justify-center h-48">
                    <p className="text-lg text-gray-500 animate-pulse">
                        Loading projects...
                    </p>
                </div>
            )}

            {/* Data kosong */}
            {!isLoading && currentProjects.data.length === 0 && (
                <div className="flex items-center justify-center mt-10">
                    <p className="text-lg text-gray-600">
                        No projects available at the moment.
                    </p>
                </div>
            )}

            {/* Card Section */}
            {!isLoading && currentProjects.data.length > 0 && (
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 max-w-[1200px] transition-opacity duration-300 ${
                        isFading ? "opacity-0" : "opacity-100"
                    }`}
                >
                    {currentProjects.data.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </div>
            )}

            {/* Pagination Section */}
            <div className="flex justify-center gap-2 mt-6">
                {/* Previous Button */}
                <button
                    className={`px-4 py-2 rounded-lg ${
                        currentProjects.links[0].url
                            ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                            : "bg-gray-300 text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={() =>
                        handlePagination(currentProjects.links[0].url)
                    }
                    disabled={!currentProjects.links[0].url}
                    aria-label="Previous Page"
                >
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                </button>

                {/* Page Numbers */}
                {currentProjects.links.map(
                    (link, index) =>
                        ![0, currentProjects.links.length - 1].includes(
                            index
                        ) && (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-lg ${
                                    link.active
                                        ? "bg-[#0a0a0a] text-white"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                }`}
                                onClick={() => handlePagination(link.url)}
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                                aria-label={`Page ${link.label}`}
                            ></button>
                        )
                )}

                {/* Next Button */}
                <button
                    className={`px-4 py-2 rounded-lg ${
                        currentProjects.links[currentProjects.links.length - 1]
                            .url
                            ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                            : "bg-gray-300 text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={() =>
                        handlePagination(
                            currentProjects.links[
                                currentProjects.links.length - 1
                            ].url
                        )
                    }
                    disabled={
                        !currentProjects.links[currentProjects.links.length - 1]
                            .url
                    }
                    aria-label="Next Page"
                >
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                </button>
            </div>
        </section>
    );
};

export default Project;
