"use client";

import React, { useEffect, useState } from "react";
import ExperienceCard from "@/components/common/Experience/experienceCard";
import { ExperienceCardProps } from "@/components/common/Experience/experienceCardProps";
import EducationCard from "@/components/common/Education/EducationCard";
import { EducationCardProps } from "@/components/common/Education/EducationCardProps";

export default function Projects() {
    const [experiences, setExperiences] = useState<ExperienceCardProps[]>([]);
    const [educations, setEducations] = useState<EducationCardProps[]>([]);

    useEffect(() => {
        fetch("/experiences.json")
            .then((res) => res.json())
            .then((data) => setExperiences(data));
    }, []);

    useEffect(() => {
        fetch("/formation.json")
            .then((res) => res.json())
            .then((data) => setEducations(data));
    }, []);

    return (
        <section className="mt-12">
            {/* Grille 2 colonnes : expériences / formations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Colonne gauche : expériences */}
                <section>
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">
                        Expériences professionnelles
                    </h2>
                    <div className="flex flex-col gap-4">
                        {experiences.map((experience, idx) => (
                            <ExperienceCard
                                key={idx}
                                date={experience.date}
                                title={experience.title}
                                description={experience.description}
                                skills={experience.skills}
                            />
                        ))}
                    </div>
                </section>

                {/* Colonne droite : formations */}
                <section>
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">
                        Formations
                    </h2>
                    <div className="flex flex-col gap-4">
                        {educations.map((education, idx) => (
                            <EducationCard
                                key={idx}
                                date={education.date}
                                title={education.title}
                                skills={education.skills}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
