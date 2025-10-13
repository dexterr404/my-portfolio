import { experiences } from "../data/experience";

export default function ExperienceList() {
    return(
        <section className="mt-2">
            <ol className="list-decimal list-inside space-y-4 experience">
                {
                    experiences.map((exp, index) => (
                        <li key={index} className="text-sm list-none text-left">
                            <div className="font-semibold text-text-primary">{exp.role}</div>
                            <div className="text-text-secondary">{exp.company}</div>
                            <div className="text-xs text-gray-500">{exp.period}</div>
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}