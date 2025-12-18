import React from "react";
import {EducationCardProps} from "@/components/common/Education/EducationCardProps";


export default function EducationCard({ date, title, skills }: EducationCardProps) {
    const skillsArray = skills.split(",").map(s => s.trim()).filter(Boolean);

    return (
        <div className="relative bg-slate-50 border border-slate-200 rounded-lg p-3">
            <div className="flex items-start px-2">
                <p className="text-sm font-semibold text-slate-600 flex-shrink-0 w-24">
                    {date}
                </p>
                <div className="pl-4">
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    <div className="flex flex-wrap gap-1 pt-2 text-xs">
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
