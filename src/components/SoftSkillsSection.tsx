import { Lightbulb, Users, MessageCircle, Target } from "lucide-react";

const SoftSkillsSection = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical approach to breaking down complex problems into manageable solutions"
    },
    {
      icon: Target,
      title: "Logical Thinking",
      description: "Structured reasoning and systematic approach to challenges"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Effective teamwork and contribution to group projects and objectives"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Clear articulation of technical concepts to diverse audiences"
    }
  ];

  return (
    <section id="soft-skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Soft <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            Beyond technical expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
