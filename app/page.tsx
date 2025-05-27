import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, BadgeCheck, Sparkles } from 'lucide-react';
import FeatureCard from '@/components/home/feature-card';
import HowItWorks from '@/components/home/how-it-works';
import TestimonialSection from '@/components/home/testimonial-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              AI-Powered Skin Disease Detection
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-lg">
              Upload a photo of your skin condition and receive instant analysis, 
              personalized treatment recommendations, and expert guidance.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/detect">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative h-[400px] w-full md:w-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" 
                alt="Skin analysis on smartphone"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Advanced Features for Accurate Detection
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with medical expertise to provide
              you with reliable skin disease detection and personalized care recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-blue-500" />}
              title="Accurate Analysis" 
              description="Our AI model is trained on millions of dermatological images for precise detection of 200+ skin conditions."
            />
            <FeatureCard 
              icon={<BadgeCheck className="h-10 w-10 text-emerald-500" />}
              title="Personalized Treatment" 
              description="Receive customized treatment plans based on your specific condition, symptoms, and medical history."
            />
            <FeatureCard 
              icon={<Sparkles className="h-10 w-10 text-amber-500" />}
              title="Holistic Approach" 
              description="Get recommendations ranging from Ayurvedic treatments and home remedies to medical interventions."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Take the First Step Towards Healthier Skin</h2>
          <p className="text-xl mb-8 opacity-90">
            Upload an image of your skin condition and get instant analysis and personalized treatment recommendations.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <Link href="/detect">
              Analyze Your Skin Condition
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}