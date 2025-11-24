import React from "react";
import {ExperienceCardProps} from "@/components/common/experienceCardProps";
import SkillsDecoration from "@/components/common/skillsDecoration";



export default function ExperienceCard({ date, title, description, skills }: ExperienceCardProps) {
    const skillsArray = skills.split(',').map(s => s.trim());
    const descriptionArray = description.split('•').map(s => s.trim()).filter(s => s);
    return (
        <div className="relative bg-amber-50 max-w-[50%] p-4">
            <div className="flex items-start px-2">
                <p className="text-sm font-semibold text-gray-700 flex-shrink-0" id="dateExperience">{date}</p>
                <div className="pl-8">
                    <p className="text-sm font-semibold text-gray-700" id="titleExperience">{title}</p>
                    <div className="text-sm  text-gray-700 mt-2" id="description">{descriptionArray.map((desc,idx)=>(
                        <p key={idx} id={idx.toString()}>• {desc}</p>
                    ))}</div>
                    <div className="text-sm text-gray-700 flex flex-row pt-2 space-x-1" id="skillExperience">{skillsArray.map((skill,idx)=>(
                        <SkillsDecoration skillsDeco={skill} key={idx} />
                        ))}</div>
                </div>
            </div>
        </div>
    );
}
