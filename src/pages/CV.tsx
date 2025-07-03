
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Download, ExternalLink } from 'lucide-react';

const CV = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Curriculum Vitae</h1>
          <p className="text-lg text-muted-foreground mb-8">Updated on July 1, 2025</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button size="lg" className="inline-flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Full CV (PDF)</span>
            </Button>
            <Button variant="outline" size="lg" className="inline-flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span>View Online Version</span>
            </Button>
          </div>
        </div>

        {/* Personal Information */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Sangbin Yun</h2>
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> (82) 10-2012-3741</p>
                <p><strong>Email:</strong> bin0113@korea.ac.kr</p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sangbin-yun-b0438223b" className="text-primary hover:underline">https://www.linkedin.com/in/sangbin-yun-b0438223b</a></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Research Interest */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Research Interest</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h3 className="font-semibold">Cognitive science & Artificial intelligence (human-inspired AI)</h3>
                <p className="text-sm leading-relaxed">
                  Interested in characterizing and enhancing cognitive features in AI. Through self-directed projects, 
                  I developed language model (LM) agents for a research assistance application and explored top-down 
                  processing as a potential cognitive structure for improving goal-directedness in LMs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold">M.S, candidate, Brain & Cognitive Engineering and Interdisciplinary Data Science</h3>
                <p className="text-sm text-muted-foreground">Korea University, Seoul, Republic of Korea</p>
                <p className="text-sm">Advisor: Byoung-Kyong Min, Ph.D.</p>
                <p className="text-sm font-medium">Mar 2023 – Aug 2025</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold">B.A, Psychology</h3>
                <p className="text-sm text-muted-foreground">Kwangwoon University, Seoul, Republic of Korea</p>
                <p className="text-sm font-medium">Mar 2017 – Feb 2023</p>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Skill</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• <strong>Programming:</strong> Python, MATLAB</li>
                <li>• <strong>ML Tools:</strong> PyTorch</li>
                <li>• <strong>Versioning:</strong> Git, Poetry</li>
              </ul>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Experience</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold">Conference Secretary</h3>
                <p className="text-sm text-muted-foreground">the Korean Society for Cognitive Science, Seoul, Republic of Korea</p>
                <p className="text-sm font-medium mb-2">Mar 2023 – Dec 2024</p>
                <p className="text-sm">
                  Organized and facilitated academic conferences and monthly seminars, coordinating schedules, 
                  managing communications with participants.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold">Research Intern</h3>
                <p className="text-sm text-muted-foreground">Laboratory for Behavioral Neurophysiology of Memory, Seoul National University, Seoul, Republic of Korea</p>
                <p className="text-sm">Advisor: Inah Lee, Ph.D.</p>
                <p className="text-sm font-medium mb-2">June 2022 – Aug 2022</p>
                <ul className="text-sm space-y-1">
                  <li>• Performed multimodal reinforcement learning experiments with rats, observing that the perirhinal cortex is critical for integrating multimodal information through drug injection.</li>
                  <li>• Gained hands-on experience in behavioral experiments, as well as knowledge of surgical procedures and histological analysis.</li>
                </ul>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold">Exchange Student Program</h3>
                <p className="text-sm text-muted-foreground">Purdue University Northwest, Hammond, IN, United States</p>
                <p className="text-sm font-medium mb-2">Aug 2021 – Dec 2021</p>
                <p className="text-sm">
                  Implemented goldfish habituation and reinforcement learning experiment, observing decreased response 
                  to noise stimulus and variability in learning food-sound associations across different units. 
                  (Advisor: Robert Hallock, Ph.D.)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Presentation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Presentation</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Oral Presentation</h4>
                <p className="text-sm">
                  Yun SB, Lee JH, Kim YK, Park JC, Kwon JW, Yang JW, Seo J, Min BK*, 'Phase-prediction of EEG alpha 
                  activity using an artificial neural network' The Annual Meeting of Korean Society for Cognitive & 
                  Biological Psychology, Seoul National University, Seoul, Republic of Korea, February 2024
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Poster Presentation</h4>
                <div className="space-y-3 text-sm">
                  <p>
                    Yun SB, Yang JW, Min BK*, 'EEG alpha phase synchronization correlates with response time during 
                    inhibitory control' The 28th annual meeting of Korean Society for Brain and Neural Sciences (KSBNS), 
                    K-Brain 2025 & The 3rd CJK Neuroscience Meeting, Songdo Convensia, Incheon, Korea, August 2025 (submitted)
                  </p>
                  <p>
                    Yang JW†, Yun SB†, Min BK*, 'Deep learning-based electroencephalic decoding of coherence and 
                    direction of the random dot kinematogram' The 11th International BCI Meeting, Banff, Canada, June 2025
                  </p>
                  <p>
                    Yun SB, Lee JH, Yang JW, Seo J, Min BK*, 'Fronto-occipital EEG phase synchronization during 
                    inhibitory control' The 38th Annual Conference of the Korean Society for Cognitive Science, Seoul, 
                    Republic of Korea, May 2024; Printed in 'Proceedings of the Korean Society for Cognitive Science Conference', May 2024
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Patent */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Patent</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Korean Patent, Min BK, Yun SB, Seo J, Yang JW 'Non-invasive brain stimulation-based drowsiness-modulation 
                technology during driving', applied on Dec 2024 (No: 10-2024-0179412)
              </p>
            </CardContent>
          </Card>

          {/* Certifications & Training */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Certifications & Training</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Large Language Model Agents MOOC (with hackathon participation), Berkeley RDI, Feb 2025 (link)</li>
                <li>• Generative AI Agents Developer Contest, NVIDIA and LangChain, June 2024, Participated (link)</li>
                <li>• Workshop/Building Transformer-Based Natural Language Processing Applications, NVIDIA, 2024</li>
                <li>• Databases and SQL for Data Science with Python, IBM, 2024</li>
                <li>• Mathematics for Machine Learning and Data Science, DeepLearning.AI, 2023</li>
              </ul>
            </CardContent>
          </Card>

          {/* Honors and Awards */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Honors and Awards</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Dean's List for one semester, Kwangwoon University, 2021</li>
                <li>• Academic Excellence Scholarship, Kwangwoon University, 2021 – 2022</li>
                <li>• Admission Excellence Scholarship, Kwangwoon University, 2017 – 2018</li>
              </ul>
            </CardContent>
          </Card>

          {/* Language Qualifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Language Qualifications</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• TOEFL, 100/120 Score, 2024</li>
                <li>• JLPT N2, 153/180 Score, 2019</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Download Button at Bottom */}
        <div className="text-center mt-12">
          <Button size="lg" className="inline-flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download Complete CV (PDF)</span>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: July 1, 2025 • Version 1.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default CV;
