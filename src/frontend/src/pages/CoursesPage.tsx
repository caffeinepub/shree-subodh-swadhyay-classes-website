import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { BookOpen, GraduationCap, Award, Target } from 'lucide-react';

export default function CoursesPage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-brand-blue md:text-5xl">Our Courses</h1>
            <p className="text-lg text-brand-blue/70 md:text-xl">
              Comprehensive programs from Pre-Foundation to competitive exam preparation, designed to build excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-brand-blue/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {/* Pre-Foundation */}
            <Card className="border-brand-blue/10">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-brand-blue">Pre-Foundation (5th–7th Standard)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-brand-blue/80">
                  <li>• Concept clarity & memory building</li>
                  <li>• Activity-based learning</li>
                  <li>• Logical thinking & reasoning</li>
                  <li>• Exposure to Olympiads & quizzes</li>
                  <li>• Basics of Science, Math, English & Logic</li>
                  <li>• Parent-teacher interaction & assessments</li>
                  <li className="pt-2 font-semibold">Duration: April – February</li>
                </ul>
                <Button
                  onClick={() => navigate({ to: '/contact' })}
                  className="mt-6 bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            {/* Foundation Course */}
            <Card className="border-brand-blue/10">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-brand-blue">Foundation Course (8th–10th SSC & CBSE)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-brand-blue/80">
                  <li>• Strong academic foundation</li>
                  <li>• Weekly MCQ tests & doubt sessions</li>
                  <li>• Exam techniques & time management</li>
                  <li>• Introduction to MH-CET, NEET, JEE, NDA, MPSC & UPSC</li>
                  <li>• Spoken English & foreign language basics</li>
                  <li>• Leadership & personality development</li>
                  <li>• Mindfulness & mental well-being</li>
                </ul>
                <Button
                  onClick={() => navigate({ to: '/contact' })}
                  className="mt-6 bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            {/* 11th & 12th Coaching */}
            <Card className="border-brand-blue/10">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-brand-blue">11th & 12th Coaching (MH-CET | NEET | JEE | NDA)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-brand-blue/80">
                  <li>• Expert faculty & mentorship</li>
                  <li>• Full syllabus coverage</li>
                  <li>• Regular testing & performance analysis</li>
                  <li>• Personalized counseling & doubt solving</li>
                </ul>
                <Button
                  onClick={() => navigate({ to: '/contact' })}
                  className="mt-6 bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            {/* SUBODH Integrated Science Stream Program */}
            <Card className="border-brand-blue/10">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-brand-blue">SUBODH Integrated Science Stream Program</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-brand-blue">11th Standard</h4>
                    <ul className="space-y-1 text-brand-blue/80">
                      <li>• April–May: Bridge Course</li>
                      <li>• June–Jan: Full syllabus + tests</li>
                      <li>• Feb–Mar: Revision & retention</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-brand-blue">12th Standard</h4>
                    <ul className="space-y-1 text-brand-blue/80">
                      <li>• April–Oct: Board + entrance syllabus</li>
                      <li>• Nov–Jan: Prelims & doubt clearing</li>
                      <li>• Jan–May: Full entrance test series</li>
                    </ul>
                  </div>
                </div>
                <Button
                  onClick={() => navigate({ to: '/contact' })}
                  className="mt-6 bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            {/* Golden Test Series */}
            <Card className="border-brand-blue/10">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-brand-blue">Golden Test Series (10th & 12th)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-brand-blue/80">
                  <li>• 5 prelim exams with deep analysis</li>
                  <li>• Chapter-wise MCQs</li>
                  <li>• Exam strategy & performance tracking</li>
                  <li>• Competitive exam readiness</li>
                </ul>
                <Button
                  onClick={() => navigate({ to: '/contact' })}
                  className="mt-6 bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Illustration */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <img
              src="/assets/generated/course-illustrations-sss.dim_1200x800.png"
              alt="Course Illustrations"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-yellow py-16 text-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Excel in Your Studies?</h2>
          <p className="mb-8 text-lg md:text-xl">
            Join Shree Subodh Swadhyay Classes and experience transformative education.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate({ to: '/contact' })}
            className="bg-white text-brand-blue hover:bg-white/90"
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
}
