import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-brand-blue md:text-5xl">
              Welcome to Shree Subodh Swadhyay Classes
            </h1>
            <p className="mb-4 text-xl font-medium text-brand-yellow md:text-2xl">
              Empowering Dreams. Inspiring Success.
            </p>
            <p className="text-lg leading-relaxed text-brand-blue/80">
              At Shree Subodh Swadhyay Classes, we believe that education is about shaping character, confidence, 
              and competence. Our goal is to nurture students into socially responsible leaders equipped with 
              academic excellence and life skills.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-brand-blue/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-l-4 border-l-brand-blue border-brand-blue/10">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-brand-blue">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-blue/80 leading-relaxed">
                  To create an ecosystem where every student—regardless of background—has equal access to quality 
                  education and personal growth, emerging as a confident and responsible leader of tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-brand-yellow border-brand-blue/10">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-brand-blue">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-blue/80 leading-relaxed">
                  To deliver transformative education that blends academic excellence with life skills, mindfulness, 
                  and ethical grounding—ensuring success in exams and in life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
