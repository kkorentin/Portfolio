import React from "react";

export default function ExperienceCard() {
    return (
        <div className="relative bg-amber-50 max-w-2xl p-4">
            <div className="flex items-start px-2">
                <p className="text-sm font-semibold text-gray-700 flex-shrink-0" id="dateExperience">2022-Actuel</p>
                <div className="pl-8">
                    <p className="text-sm text-gray-700" id="titreExperience">Développeur web et mobile</p>
                    <p className="text-sm font-semibold text-gray-700 mt-2" id="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                    <p className="text-sm text-gray-700" id="skillExperience">
                        Java React
                    </p>
                </div>
            </div>
        </div>
    )
}