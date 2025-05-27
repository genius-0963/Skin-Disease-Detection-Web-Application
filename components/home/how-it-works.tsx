import { Camera, Search, FileText, Stethoscope } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}

function Step({ icon, number, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our platform makes it easy to get accurate skin condition analysis and personalized treatment recommendations in just a few simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step 
            icon={<Camera className="h-8 w-8 text-blue-600" />}
            number={1}
            title="Upload Image"
            description="Take a clear photo of your skin condition and upload it to our secure platform."
          />
          <Step 
            icon={<Search className="h-8 w-8 text-blue-600" />}
            number={2}
            title="AI Analysis"
            description="Our advanced AI analyzes your image to identify potential skin conditions."
          />
          <Step 
            icon={<FileText className="h-8 w-8 text-blue-600" />}
            number={3}
            title="Answer Questions"
            description="Complete a short questionnaire to provide additional context about your symptoms."
          />
          <Step 
            icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
            number={4}
            title="Get Treatment Plan"
            description="Receive personalized treatment recommendations and care guidance."
          />
        </div>
      </div>
    </section>
  );
}