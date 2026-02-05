import { useState, useEffect } from 'react';
import { useSubmitContactForm } from '@/hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { SiFacebook, SiGoogle, SiInstagram } from 'react-icons/si';
import { toast } from 'sonner';
import { useSearch } from '@tanstack/react-router';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitContactForm = useSubmitContactForm();
  const search = useSearch({ strict: false });

  useEffect(() => {
    if (search && 'focus' in search && search.focus === 'form') {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitContactForm.mutateAsync(formData);
      toast.success('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-brand-blue md:text-5xl">Contact Us</h1>
            <p className="text-lg text-brand-blue/70 md:text-xl">
              Get in touch with us for admissions, inquiries, or any questions. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="bg-brand-blue/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-brand-blue">Get In Touch</h2>
                <p className="text-brand-blue/70">
                  We'd love to hear from you. Whether you're interested in enrolling, have questions about our
                  courses, or need more information, feel free to reach out.
                </p>
              </div>

              <Card className="border-brand-blue/10">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-brand-blue">Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-blue/80">
                    Shree Subodh Swadhyay Classes
                    <br />
                    F.C. Road, Behind Lalit Mahal Hotel
                    <br />
                    Model Colony, Pune – 411016
                  </p>
                </CardContent>
              </Card>

              <Card className="border-brand-blue/10">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                    <Phone className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-brand-blue">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+919975323281" className="text-brand-blue hover:underline">
                    📞 Phone: +91 99753 23281
                  </a>
                  <p className="mt-2 text-sm text-brand-blue/70">Available during office hours</p>
                </CardContent>
              </Card>

              <Card className="border-brand-blue/10">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-brand-blue">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://wa.me/919975323219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    💬 WhatsApp: +91 99753 23219
                  </a>
                  <p className="mt-2 text-sm text-brand-blue/70">Quick response via WhatsApp</p>
                </CardContent>
              </Card>

              <Card className="border-brand-blue/10">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue">
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-brand-blue">Timings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-blue/80">
                    🕒 11:00 AM – 8:00 PM (Mon–Sat)
                  </p>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/shreesubodhswadhyayclasses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue transition-colors hover:bg-brand-yellow/30"
                  aria-label="Instagram"
                >
                  <SiInstagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61558262736477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue transition-colors hover:bg-brand-yellow/30"
                  aria-label="Facebook"
                >
                  <SiFacebook className="h-6 w-6" />
                </a>
                <a
                  href="https://share.google/b9nFCafzEIQoDjTnU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/20 text-brand-blue transition-colors hover:bg-brand-yellow/30"
                  aria-label="Google Business Profile"
                >
                  <SiGoogle className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card id="contact-form" className="border-brand-blue/10">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-blue">Send Us a Message</CardTitle>
                <CardDescription className="text-brand-blue/70">Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-brand-blue">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-brand-blue/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-blue">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-brand-blue/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-brand-blue">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your inquiry or requirements"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-brand-blue/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-yellow text-brand-blue hover:bg-brand-yellow/90"
                    disabled={submitContactForm.isPending}
                  >
                    {submitContactForm.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-brand-blue">Find Us on Map</h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890&q=Shree+Subodh+Swadhyay+Classes+Model+Colony+Pune"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Subodh Swadhyay Classes Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
