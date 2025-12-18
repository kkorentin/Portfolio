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
        <div className="flex flex-row gap-4">
            <div className="flex flex-col justify-between w-[50%] gap-1 ">
                {experiences.map((experience, idx) => (
                    <ExperienceCard key={idx} date={experience.date} title={experience.title}
                                    description={experience.description} skills={experience.skills}/>
                ))}
            </div>
            <div className="flex flex-col justify-between w-[50%] gap-4">
            </div>
        </div>


    )
}