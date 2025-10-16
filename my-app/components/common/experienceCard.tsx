import React from "react";
import {ExperienceCardProps} from "@/components/common/experienceCardProps";



export default function ExperienceCard({ date, title, description, skills }: ExperienceCardProps) {
    return (
        <div className="relative bg-amber-50 max-w-2xl p-4">
            <div className="flex items-start px-2">
                <p className="text-sm font-semibold text-gray-700 flex-shrink-0" id="dateExperience">{date}</p>
                <div className="pl-8">
                    <p className="text-sm text-gray-700" id="titleExperience">{title}</p>
                    <p className="text-sm font-semibold text-gray-700 mt-2" id="description">{description}</p>
                    <p className="text-sm text-gray-700" id="skillExperience">{skills}</p>
                </div>
            </div>
        </div>
    );
}
