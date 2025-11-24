export type skillsDecorationProps = {
    skillsDeco: string;
}

export default function SkillsDecoration({skillsDeco}: skillsDecorationProps) {
    return (
        <div className="relative rounded-lg shadow-sm py-0.5 px-1">
            <p className="">{skillsDeco}</p>
        </div>
    )
}