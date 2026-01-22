import { Code2, Database, Brain, Megaphone } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "ML & Data Tools",
      skills: ["Pandas", "Jupyter Notebook", "Anaconda", "Matplotlib"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "ML Concepts",
      skills: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Neural Networks"],
      color: "from-primary to-secondary"
    },
    {
      icon: Megaphone,
      title: "Domain Knowledge",
      skills: ["Digital Marketing Optimization", "Data-Driven Decision Making"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            A diverse toolkit for building intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
