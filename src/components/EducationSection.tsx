import { GraduationCap, School } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "B.E. Electronics and Communication Engineering",
      institution: "Government College of Engineering, Srirangam, Trichy",
      period: "Expected Graduation: May 2026",
      current: true
    },
    {
      icon: School,
      degree: "Higher Secondary (12th)",
      institution: "Jayarani Matric Higher Secondary School, Salem",
      period: "2022",
      current: false
    },
    {
      icon: School,
      degree: "Secondary (10th)",
      institution: "Jayarani Matric Higher Secondary School, Salem",
      period: "2020",
      current: false
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div 
                key={index}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                  item.current 
                    ? 'bg-gradient-to-br from-primary to-secondary text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <item.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className={`flex-grow glass-card rounded-xl p-6 ${
                  item.current ? 'border-primary/30' : ''
                }`}>
                  {item.current && (
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
                      Currently Pursuing
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <p className="text-sm text-primary font-medium">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
