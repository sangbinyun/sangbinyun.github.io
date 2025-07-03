
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed overview of my current and completed research projects, including methodologies, 
            findings, and collaborative efforts that advance knowledge in my field.
          </p>
        </div>

        {/* Current Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-foreground border-b pb-2">Current Projects</h2>
          
          <div className="grid gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl text-primary">
                    [Principal Research Project Title]
                  </CardTitle>
                  <Badge variant="default">Ongoing</Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>2023 - Present</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Principal Investigator</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop" 
                    alt="Research visualization" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3">Summary</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This comprehensive research project investigates [detailed description of research question and significance]. 
                    The study employs [methodological approach] to examine [specific aspects being studied]. 
                    Through [data collection methods], we aim to [research objectives and expected contributions to field].
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Objectives</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Develop novel methodological frameworks for [specific area]</li>
                    <li>• Analyze [specific data or phenomena] to understand [research focus]</li>
                    <li>• Establish theoretical foundations for [theoretical contribution]</li>
                    <li>• Generate practical applications in [application domain]</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Methodology</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• [Primary research method and approach]</li>
                    <li>• [Secondary analysis technique or framework]</li>
                    <li>• [Data collection approach and instruments]</li>
                    <li>• [Statistical/analytical methods and tools]</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl text-primary">
                    Collaborative Study on [Topic Area]
                  </CardTitle>
                  <Badge variant="secondary">Ongoing</Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>2024 - 2026</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Co-Investigator</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Summary</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A multi-institutional collaborative research initiative examining [research focus]. 
                    This project brings together expertise from [different institutions/departments] to address 
                    [complex research problem]. My role involves [specific contributions] and [areas of expertise].
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Objectives</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• [Primary objective of the collaborative study]</li>
                    <li>• [Secondary research goal or hypothesis testing]</li>
                    <li>• [Cross-institutional knowledge sharing objective]</li>
                    <li>• [Long-term impact or application goal]</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Methodology</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• [Collaborative research design and framework]</li>
                    <li>• [Multi-site data collection protocol]</li>
                    <li>• [Cross-institutional analysis methods]</li>
                    <li>• [My specific methodological contributions]</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Completed Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-foreground border-b pb-2">Completed Projects</h2>
          
          <div className="grid gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl text-primary">
                    [Completed Project Title]
                  </CardTitle>
                  <Badge variant="outline">Completed</Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>2021 - 2023</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Principal Investigator</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
                    alt="Research data visualization" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Summary</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This project successfully addressed [research question] through [methodology used]. 
                    The study focused on [specific research area] and contributed significantly to [field/area] by [key contributions]. 
                    The research was conducted over [time period] and involved [research activities].
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Objectives</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• [Primary research objective that was achieved]</li>
                    <li>• [Secondary goal or hypothesis that was tested]</li>
                    <li>• [Methodological innovation or contribution]</li>
                    <li>• [Practical application or implementation goal]</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Methodology</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• [Primary research design and approach used]</li>
                    <li>• [Data collection methods and instruments]</li>
                    <li>• [Analytical techniques and statistical methods]</li>
                    <li>• [Quality assurance and validation procedures]</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Findings</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• [Major finding 1 and its significance]</li>
                    <li>• [Major finding 2 and implications]</li>
                    <li>• [Major finding 3 and contribution to field]</li>
                    <li>• [Unexpected discovery or methodological insight]</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Related Publications</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• [Author names]. ([Year]). "[Publication title]." <em>[Journal Name]</em>, [Volume(Issue)], [pages].</li>
                    <li>• [Author names]. ([Year]). "[Conference paper title]." In <em>[Conference Proceedings]</em>, [location], [pages].</li>
                    <li>• [Author names]. ([Year]). "[Book chapter or other publication]." In <em>[Book/Volume title]</em>, [publisher], [pages].</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
