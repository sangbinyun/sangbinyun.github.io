
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Download } from 'lucide-react';

const Publications = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive list of my academic publications, conference presentations, and research outputs.
          </p>
        </div>

        {/* Journal Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b pb-2">Journal Articles</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Novel Approaches to [Research Topic]: A Comprehensive Analysis
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  [Your Name], [Co-author 1], [Co-author 2] (2024)
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">Journal of [Field Name], Vol. X, Issue Y, pp. 1-20</p>
                <p className="text-sm text-muted-foreground mb-4">
                  This study presents innovative methodologies for addressing [specific research problem], 
                  demonstrating significant improvements in [outcome metrics].
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    DOI Link
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-3 w-3 mr-1" />
                    Abstract
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Understanding [Specific Phenomenon] in [Research Context]
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  [Your Name], [Co-author 1] (2023)
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">[Journal Name], Vol. X, Issue Y, pp. 45-67</p>
                <p className="text-sm text-muted-foreground mb-4">
                  An in-depth investigation into the mechanisms underlying [phenomenon], 
                  providing new insights into [implications for field].
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    DOI Link
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-3 w-3 mr-1" />
                    Abstract
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conference Presentations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b pb-2">Conference Presentations</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Collaborative Framework for [Application Area]
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  [Your Name] (2024)
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">
                  International Conference on [Topic], [Location], [Date]
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Oral presentation discussing the development and implementation of a novel framework 
                  for enhancing [specific application or process].
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3 mr-1" />
                    Download Poster
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-3 w-3 mr-1" />
                    Abstract
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Emerging Trends in [Research Area]: Current Challenges and Future Directions
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  [Your Name], [Co-presenter] (2023)
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">
                  [Conference Name], [Location], [Date]
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Poster presentation highlighting key findings from ongoing research and 
                  identifying future research opportunities in [specific area].
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3 mr-1" />
                    Download Poster
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-3 w-3 mr-1" />
                    Abstract
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Working Papers */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b pb-2">Working Papers & Preprints</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  Advanced Methodologies in [Research Area]: A Systematic Review
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  [Your Name], [Co-author 1], [Co-author 2] (Under Review, 2024)
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">Submitted to [Journal Name]</p>
                <p className="text-sm text-muted-foreground mb-4">
                  A comprehensive systematic review examining current methodological approaches 
                  and identifying gaps in the literature for future research directions.
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="h-3 w-3 mr-1" />
                    Preprint
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
