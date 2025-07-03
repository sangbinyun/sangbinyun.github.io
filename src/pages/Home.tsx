import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/figures/profile.jpg" 
              alt="Profile" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h1 className="text-4xl font-bold text-foreground mb-4">Sangbin Yun</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              I am a researcher passionate about cognitive science and artificial intelligence. 
              My research focuses on characterizing and enhancing cognitive features in AI, with a particular interest in language model and top-down processing for goal-directedness. 
              I am passionate about bridging neuroscience and AI to develop more human-like, effective intelligent systems.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-12 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-center">Education</h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Ph.D. in [Field], [University Name] (Year)</p>
                  <p className="text-sm text-muted-foreground">Dissertation: "[Dissertation Title]"</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">M.S./M.A. in [Field], [University Name] (Year)</p>
                  <p className="text-sm text-muted-foreground">Thesis: "[Thesis Title]"</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">B.S./B.A. in [Field], [University Name] (Year)</p>
                  <p className="text-sm text-muted-foreground">Magna Cum Laude, Phi Beta Kappa</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Publications</h2>
            <p className="text-muted-foreground">Selected recent work</p>
          </div>
          
          <div className="space-y-6">
            {/* Publication 1 */}
            <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center space-x-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Novel Approaches to [Research Topic]</h3>
                <p className="text-sm text-muted-foreground mb-2">Journal of [Field Name], 2024</p>
                <p className="text-sm mb-3">A comprehensive study exploring innovative methodologies in computational research...</p>
                <Link to="/publications" className="text-primary hover:underline text-sm font-medium">
                  Read more →
                </Link>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=120&h=80&fit=crop" 
                  alt="Research visualization" 
                  className="w-24 h-16 object-cover rounded"
                />
              </div>
            </div>

            {/* Publication 2 */}
            <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center space-x-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Understanding [Specific Phenomenon]</h3>
                <p className="text-sm text-muted-foreground mb-2">International Conference on [Topic], 2023</p>
                <p className="text-sm mb-3">This research investigates the underlying mechanisms and provides new insights...</p>
                <Link to="/publications" className="text-primary hover:underline text-sm font-medium">
                  Read more →
                </Link>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=120&h=80&fit=crop" 
                  alt="Data analysis" 
                  className="w-24 h-16 object-cover rounded"
                />
              </div>
            </div>

            {/* Publication 3 */}
            <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center space-x-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Collaborative Framework for [Application]</h3>
                <p className="text-sm text-muted-foreground mb-2">[Journal Name], 2023</p>
                <p className="text-sm mb-3">Development of a new framework that enhances collaborative research efforts...</p>
                <Link to="/publications" className="text-primary hover:underline text-sm font-medium">
                  Read more →
                </Link>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=80&fit=crop" 
                  alt="Code development" 
                  className="w-24 h-16 object-cover rounded"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/publications" className="inline-flex items-center space-x-2">
                <span>View All Publications</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Research Projects</h2>
            <p className="text-muted-foreground">Ongoing and completed initiatives</p>
          </div>
          
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center space-x-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">[Project Title 1]</h3>
                <p className="text-sm mb-3 text-muted-foreground">
                  This project explores innovative approaches to computational modeling and analysis...
                </p>
                <div className="text-xs text-primary mb-2">
                  Funded by [Grant Agency/Institution]
                </div>
                <Link to="/projects" className="text-primary hover:underline text-sm font-medium">
                  Learn more →
                </Link>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=120&h=80&fit=crop" 
                  alt="Research project" 
                  className="w-24 h-16 object-cover rounded"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center space-x-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">[Project Title 2]</h3>
                <p className="text-sm mb-3 text-muted-foreground">
                  A collaborative investigation into advanced methodologies for data analysis and interpretation...
                </p>
                <div className="text-xs text-primary mb-2">
                  In collaboration with [Institution/Partner]
                </div>
                <Link to="/projects" className="text-primary hover:underline text-sm font-medium">
                  Learn more →
                </Link>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=120&h=80&fit=crop" 
                  alt="Collaborative research" 
                  className="w-24 h-16 object-cover rounded"
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center space-x-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">[Project Title 3]</h3>
                <p className="text-sm mb-3 text-muted-foreground">
                  Long-term research initiative focusing on sustainable solutions and practical applications...
                </p>
                <div className="text-xs text-primary mb-2">
                  Multi-year initiative
                </div>
                <Link to="/projects" className="text-primary hover:underline text-sm font-medium">
                  Learn more →
                </Link>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=80&fit=crop" 
                  alt="Long-term research" 
                  className="w-24 h-16 object-cover rounded"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects" className="inline-flex items-center space-x-2">
                <span>Explore All Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Curriculum Vitae</h2>
          <p className="text-muted-foreground mb-8">
            Download my complete academic CV for detailed information about my research, 
            publications, presentations, and professional experience.
          </p>
          <Button asChild size="lg">
            <Link to="/cv" className="inline-flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>View & Download CV</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
