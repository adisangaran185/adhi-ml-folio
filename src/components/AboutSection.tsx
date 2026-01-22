import { Brain, Code, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "ML Enthusiast",
      description: "Deep understanding of machine learning algorithms and neural networks"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in Python, data analysis, and ML frameworks"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Analytical mindset with focus on data-driven solutions"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Passionate about turning data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a final-year Electronics and Communication Engineering student at Government 
              College of Engineering, Srirangam, with a strong foundation in analytical thinking 
              and programming.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey into Machine Learning began with a curiosity about how data can drive 
              intelligent decision-making. I have since developed expertise in supervised and 
              unsupervised learning, working with real-world datasets to build predictive models 
              and derive meaningful insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently seeking entry-level roles, internships, or collaborative projects in 
              Machine Learning and Artificial Intelligence where I can apply my skills and 
              continue learning from industry professionals.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
