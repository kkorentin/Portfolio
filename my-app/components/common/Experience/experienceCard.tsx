import React from "react";
import {ExperienceCardProps} from "@/components/common/Experience/experienceCardProps";


export default function ExperienceCard({ date, title, description, skills }: ExperienceCardProps) {
    const skillsArray = skills.split(',').map(s => s.trim());
    const descriptionArray = description.split('•').map(s => s.trim()).filter(s => s);

    return (
        <div className="relative bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="flex items-start px-2">
                <p className="text-sm font-semibold text-slate-600 flex-shrink-0" id="dateExperience">
                    {date}
                </p>
                <div className="pl-8">
                    <p className="text-sm font-semibold text-slate-900" id="titleExperience">
                        {title}
                    </p>
                    <div className="text-sm text-slate-700 mt-2" id="description">
                        {descriptionArray.map((desc, idx) => (
                            <p key={idx} id={idx.toString()}>
                                • {desc}
                            </p>
                        ))}
                    </div>
                    <div className="text-sm flex flex-row flex-wrap pt-2 gap-1" id="skillExperience">
                        {skillsArray.map((skill, idx) => (
                            <span
                                key={idx}
                                className="rounded-full bg-amber-100 text-amber-800 px-2 py-0.5"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

