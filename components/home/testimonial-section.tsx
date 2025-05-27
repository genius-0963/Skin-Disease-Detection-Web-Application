import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  initials: string;
}

function Testimonial({ quote, author, role, avatarUrl, initials }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <p className="text-lg italic">"{quote}"</p>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={avatarUrl} alt={author} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover how our platform has helped people identify and manage their skin conditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="The analysis was incredibly accurate! I had been struggling with a skin issue for months, and this app correctly identified it as eczema. The treatment recommendations were very helpful."
            author="Sarah Johnson"
            role="Fitness Instructor"
            avatarUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
            initials="SJ"
          />
          <Testimonial 
            quote="As someone living in a rural area with limited access to dermatologists, this platform has been a game-changer for me and my family."
            author="Michael Chen"
            role="Software Engineer"
            avatarUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            initials="MC"
          />
          <Testimonial 
            quote="I was skeptical at first, but the Ayurvedic treatment recommendations worked wonders for my psoriasis. I'm now a believer in this holistic approach."
            author="Priya Patel"
            role="Teacher"
            avatarUrl="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
            initials="PP"
          />
        </div>
      </div>
    </section>
  );
}