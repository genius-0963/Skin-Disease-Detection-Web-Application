'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PageContainer from '@/components/layout/page-container';
import PageHeader from '@/components/layout/page-header';
import ImageUploader from '@/components/detect/image-uploader';
import AnalysisProgress from '@/components/detect/analysis-progress';
import DetectionResults from '@/components/detect/detection-results';
import Questionnaire from '@/components/detect/questionnaire';
import TreatmentRecommendations from '@/components/detect/treatment-recommendations';
import { useToast } from '@/hooks/use-toast';

type AnalysisStep = 'upload' | 'analyzing' | 'results' | 'questionnaire' | 'treatment';

export default function DetectPage() {
  const [currentStep, setCurrentStep] = useState<AnalysisStep>('upload');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleImageUpload = (imageDataUrl: string) => {
    setUploadedImage(imageDataUrl);
    setCurrentStep('analyzing');
    
    // Simulate API call to backend
    setTimeout(() => {
      // Mock analysis results
      const mockResults = {
        prediction: 'Eczema',
        confidence: 0.89,
        alternativePredictions: [
          { name: 'Contact Dermatitis', confidence: 0.08 },
          { name: 'Psoriasis', confidence: 0.03 }
        ],
        affectedArea: 'Arm',
        severity: 'Moderate'
      };
      
      setAnalysisResults(mockResults);
      setCurrentStep('results');
      
      toast({
        title: "Analysis Complete",
        description: "We've analyzed your image and detected a potential condition.",
      });
    }, 3000);
  };

  const handleStartQuestionnaire = () => {
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireSubmit = (answers: Record<string, string>) => {
    setQuestionnaireAnswers(answers);
    setCurrentStep('treatment');
  };

  const handleReset = () => {
    setUploadedImage(null);
    setAnalysisResults(null);
    setQuestionnaireAnswers({});
    setCurrentStep('upload');
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Skin Disease Detection" 
        description="Upload a photo of your skin condition for AI-powered analysis and treatment recommendations."
      />

      <div className="w-full max-w-3xl mx-auto mb-12">
        <Card className="p-6">
          <div className="mb-8">
            <AnalysisProgress currentStep={currentStep} />
          </div>

          {currentStep === 'upload' && (
            <ImageUploader onImageUploaded={handleImageUpload} />
          )}

          {currentStep === 'analyzing' && uploadedImage && (
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="relative w-64 h-64 rounded-lg overflow-hidden">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded skin condition" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">Analyzing your image...</h3>
                <p className="text-muted-foreground">
                  Our AI is examining your skin condition. This will take just a moment.
                </p>
                <div className="mt-6">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 animate-pulse rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 'results' && analysisResults && (
            <DetectionResults 
              results={analysisResults}
              image={uploadedImage}
              onContinue={handleStartQuestionnaire}
              onReset={handleReset}
            />
          )}

          {currentStep === 'questionnaire' && analysisResults && (
            <Questionnaire 
              condition={analysisResults.prediction}
              onSubmit={handleQuestionnaireSubmit}
              onBack={() => setCurrentStep('results')}
            />
          )}

          {currentStep === 'treatment' && analysisResults && (
            <TreatmentRecommendations
              condition={analysisResults.prediction}
              severity={analysisResults.severity}
              questionnaireAnswers={questionnaireAnswers}
              onReset={handleReset}
            />
          )}
        </Card>
      </div>
    </PageContainer>
  );
}