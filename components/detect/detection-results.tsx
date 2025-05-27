import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, ChevronRight } from 'lucide-react';

interface DetectionResult {
  prediction: string;
  confidence: number;
  alternativePredictions: Array<{
    name: string;
    confidence: number;
  }>;
  affectedArea: string;
  severity: string;
}

interface DetectionResultsProps {
  results: DetectionResult;
  image: string | null;
  onContinue: () => void;
  onReset: () => void;
}

export default function DetectionResults({ 
  results, 
  image, 
  onContinue, 
  onReset 
}: DetectionResultsProps) {
  // Format confidence percentage
  const formatConfidence = (confidence: number) => {
    return `${(confidence * 100).toFixed(1)}%`;
  };

  // Get color based on confidence level
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.7) return 'text-green-600';
    if (confidence >= 0.4) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image preview */}
        {image && (
          <div className="w-full md:w-2/5">
            <div className="rounded-lg overflow-hidden border shadow-sm">
              <img 
                src={image} 
                alt="Uploaded skin condition" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
        
        {/* Results */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Detection Results</h3>
            <p className="text-muted-foreground">
              Based on our AI analysis, we've identified the following potential condition:
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-semibold mb-2">{results.prediction}</h4>
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span>Confidence:</span>
                <span className={getConfidenceColor(results.confidence)}>
                  {formatConfidence(results.confidence)}
                </span>
              </div>
              <Progress 
                value={results.confidence * 100} 
                className="h-2"
              />
            </div>
            <div className="text-sm grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
              <div>
                <span className="text-muted-foreground">Affected Area:</span>
                <p>{results.affectedArea}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Severity:</span>
                <p>{results.severity}</p>
              </div>
            </div>
          </div>
          
          {/* Alternative predictions */}
          {results.alternativePredictions && results.alternativePredictions.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Alternative Possibilities:</h4>
              <div className="space-y-2">
                {results.alternativePredictions.map((alt, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{alt.name}</span>
                    <span className="text-muted-foreground text-sm">
                      {formatConfidence(alt.confidence)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Disclaimer */}
          <div className="flex items-start gap-2 p-3 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 text-sm">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <p>
              This analysis is not a medical diagnosis. Please consult with a healthcare professional for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onReset}>
          Upload New Image
        </Button>
        <Button onClick={onContinue}>
          Continue to Questionnaire <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}