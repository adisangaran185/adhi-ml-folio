import { ExternalLink, Home, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Home,
      title: "Smart Home Automation Using IoT",
      description: "Designed an IoT-based automation system to control home appliances efficiently with real-time monitoring and control capabilities.",
      highlights: ["IoT Integration", "Sensor Networks", "Real-time Control", "Automation"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Optimization Using ML",
      description: "Applied machine learning techniques to analyze marketing data and improve campaign performance through predictive modeling.",
      highlights: ["Classification Models", "Regression Analysis", "Data Optimization", "Prediction"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Hands-on experience building real-world solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative m-[1px] bg-card rounded-2xl p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                    <project.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
