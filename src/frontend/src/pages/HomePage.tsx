import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Award, Target, GraduationCap, Heart, Phone } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const programs = [
    {
      title: 'Pre-Foundation (5th–7th)',
      description: 'Building strong fundamentals with activity-based learning and logical thinking.',
    },
    {
      title: 'Foundation (8th–10th SSC & CBSE)',
      description: 'Comprehensive preparation with weekly tests and personality development.',
    },
    {
      title: '11th & 12th – MH-CET, NEET, JEE, NDA',
      description: 'Expert coaching with full syllabus coverage and regular testing.',
    },
    {
      title: 'Integrated Science Stream Program',
      description: 'Complete bridge course, syllabus coverage, and entrance test series.',
    },
    {
      title: 'Golden Test Series',
      description: 'Prelim exams with deep analysis and competitive exam readiness.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: 'Holistic Learning Experience',
      description: 'Education beyond marks—nurturing minds, values, and emotional intelligence.',
    },
    {
      icon: Users,
      title: 'Equal Opportunity Education',
      description: 'Quality education accessible to every student, regardless of background.',
    },
    {
      icon: Award,
      title: 'Inspired Educators & Personal Mentorship',
      description: 'Dedicated faculty providing personalized guidance and support.',
    },
    {
      icon: Target,
      title: 'Leadership & Social Responsibility',
      description: 'Building future leaders with strong ethical values and social awareness.',
    },
    {
      icon: GraduationCap,
      title: 'Community-Focused Education Model',
      description: 'Creating a supportive learning ecosystem for student success.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-lg font-medium text-brand-yellow md:text-xl">
              Empowering Dreams, Inspiring Success
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-brand-blue md:text-5xl lg:text-6xl">
              SHREE SUBODH SWADHYAY CLASSES
            </h1>
            <p className="mb-2 text-xl font-semibold text-brand-blue/80 md:text-2xl">
              From Pre-Foundation to NEET | JEE | MHT-CET | NDA
            </p>
            <p className="mb-8 text-lg text-brand-blue/70">
              We Build Leaders with Values
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/contact' })}
                className="bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
              >
                Enroll Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: '/contact' })}
                className="border-brand-blue text-brand-blue hover:bg-brand-blue/5"
              >
                Book a Free Career Guidance Session
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = 'tel:+919975323281')}
                className="gap-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5"
              >
                <Phone className="h-5 w-5" />
                Call Now: +91 99753 23281
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot Section */}
      <section className="bg-brand-blue/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-brand-blue md:text-4xl">About Us</h2>
            <p className="text-lg leading-relaxed text-brand-blue/80">
              At Shree Subodh Swadhyay Classes, we believe true education goes beyond marks.
              We focus on nurturing strong minds, ethical values, leadership skills, and emotional intelligence 
              to prepare students not just for exams—but for life.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-blue md:text-4xl">Our Programs</h2>
            <p className="mx-auto max-w-2xl text-lg text-brand-blue/70">
              Comprehensive educational programs designed to build strong foundations and achieve excellence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-brand-blue/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-brand-blue">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-brand-blue/70">{program.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              size="lg"
              onClick={() => navigate({ to: '/courses' })}
              className="bg-brand-blue text-white hover:bg-brand-blue/90"
            >
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-brand-blue/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-blue md:text-4xl">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-brand-blue/70">
              We are committed to providing transformative education that shapes character, confidence, and competence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((feature, index) => (
              <Card
                key={index}
                className="border-brand-blue/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-brand-blue">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-brand-blue/70">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Banner Section */}
      <section className="bg-brand-yellow py-16 text-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Admissions Open – Limited Seats</h2>
          <p className="mb-8 text-lg md:text-xl">
            Get a free academic roadmap for your child.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate({ to: '/contact' })}
              className="bg-white text-brand-blue hover:bg-white/90"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = 'tel:+919975323281')}
              className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
            >
              Call +91 99753 23281
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
