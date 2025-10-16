"use client";
import ExperienceCard from "@/components/common/experienceCard";
import React, { useEffect, useState } from "react";
import {ExperienceCardProps} from "@/components/common/experienceCardProps";


export default function Projects() {
    const [experiences,setExperiences] = useState<ExperienceCardProps[]>([]);
    useEffect(() => {
        fetch("/experiences.json")
            .then((res) => res.json())
            .then((data) => setExperiences(data));
    }, []);
    return(
        <div className="relative flex flex-col justify-between gap-4">
            {experiences.map((experience,idx) => (
                <ExperienceCard key={idx} date={experience.date} title={experience.title} description={experience.description} skills={experience.skills} />
            ))}
        </div>

    )
}