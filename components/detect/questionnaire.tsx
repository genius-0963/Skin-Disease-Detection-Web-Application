'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuestionnaireProps {
  condition: string;
  onSubmit: (answers: Record<string, string>) => void;
  onBack: () => void;
}

export default function Questionnaire({ condition, onSubmit, onBack }: QuestionnaireProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({
    duration: '',
    previousOccurrence: '',
    itchiness: '0',
    painLevel: '0',
    triggers: '',
    medications: '',
    allergies: '',
    additionalInfo: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answers);
  };

  // Generate dynamic questions based on the condition
  const getDynamicQuestions = () => {
    switch (condition) {
      case 'Eczema':
        return (
          <div className="space-y-6">
            <div>
              <Label>Do you have a family history of eczema, asthma, or allergies?</Label>
              <RadioGroup
                value={answers.familyHistory || ''}
                onValueChange={(value) => handleInputChange('familyHistory', value)}
                className="mt-2 flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="family-history-yes" />
                  <Label htmlFor="family-history-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="family-history-no" />
                  <Label htmlFor="family-history-no">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unsure" id="family-history-unsure" />
                  <Label htmlFor="family-history-unsure">Unsure</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label>Do you notice any specific triggers that worsen your symptoms?</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="trigger-stress" 
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      const newTriggers = e.target.checked 
                        ? answers.triggers + (answers.triggers ? ', Stress' : 'Stress')
                        : answers.triggers.replace(/, Stress|Stress, |Stress/g, '');
                      handleInputChange('triggers', newTriggers);
                    }}
                  />
                  <Label htmlFor="trigger-stress">Stress</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="trigger-sweat" 
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      const newTriggers = e.target.checked 
                        ? answers.triggers + (answers.triggers ? ', Sweat' : 'Sweat')
                        : answers.triggers.replace(/, Sweat|Sweat, |Sweat/g, '');
                      handleInputChange('triggers', newTriggers);
                    }}
                  />
                  <Label htmlFor="trigger-sweat">Sweat</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="trigger-food" 
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      const newTriggers = e.target.checked 
                        ? answers.triggers + (answers.triggers ? ', Certain foods' : 'Certain foods')
                        : answers.triggers.replace(/, Certain foods|Certain foods, |Certain foods/g, '');
                      handleInputChange('triggers', newTriggers);
                    }}
                  />
                  <Label htmlFor="trigger-food">Certain foods</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="trigger-fabric" 
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      const newTriggers = e.target.checked 
                        ? answers.triggers + (answers.triggers ? ', Fabrics' : 'Fabrics')
                        : answers.triggers.replace(/, Fabrics|Fabrics, |Fabrics/g, '');
                      handleInputChange('triggers', newTriggers);
                    }}
                  />
                  <Label htmlFor="trigger-fabric">Fabrics</Label>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Psoriasis':
        return (
          <div className="space-y-6">
            <div>
              <Label>Do you have joint pain or stiffness associated with your skin symptoms?</Label>
              <RadioGroup
                value={answers.jointPain || ''}
                onValueChange={(value) => handleInputChange('jointPain', value)}
                className="mt-2 flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="joint-pain-yes" />
                  <Label htmlFor="joint-pain-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="joint-pain-no" />
                  <Label htmlFor="joint-pain-no">No</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label>Have you noticed any specific triggers for flare-ups?</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="trigger-stress-ps" 
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      const newTriggers = e.target.checked 
                        ? answers.triggers + (answers.triggers ? ', Stress' : 'Stress')
                        : answers.triggers.replace(/, Stress|Stress, |Stress/g, '');
                      handleInputChange('triggers', newTriggers);
                    }}
                  />
                  <Label htmlFor="trigger-stress-ps">Stress</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="trigger-injury" 
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      const newTriggers = e.target.checked 
                        ? answers.triggers + (answers.triggers ? ', Skin injury' : 'Skin injury')
                        : answers.triggers.replace(/, Skin injury|Skin injury, |Skin injury/g, '');
                      handleInputChange('triggers', newTriggers);
                    }}
                  />
                  <Label htmlFor="trigger-injury">Skin injury</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="trigger-medication" 
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      const newTriggers = e.target.checked 
                        ? answers.triggers + (answers.triggers ? ', Medications' : 'Medications')
                        : answers.triggers.replace(/, Medications|Medications, |Medications/g, '');
                      handleInputChange('triggers', newTriggers);
                    }}
                  />
                  <Label htmlFor="trigger-medication">Medications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="trigger-infection" 
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      const newTriggers = e.target.checked 
                        ? answers.triggers + (answers.triggers ? ', Infections' : 'Infections')
                        : answers.triggers.replace(/, Infections|Infections, |Infections/g, '');
                      handleInputChange('triggers', newTriggers);
                    }}
                  />
                  <Label htmlFor="trigger-infection">Infections</Label>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-3">Tell Us More About Your {condition}</h3>
        <p className="text-muted-foreground">
          Please answer the following questions to help us provide more accurate treatment recommendations.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="duration">How long have you had this condition?</Label>
          <Select 
            value={answers.duration} 
            onValueChange={(value) => handleInputChange('duration', value)}
          >
            <SelectTrigger id="duration" className="w-full mt-1">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="less-than-week">Less than a week</SelectItem>
              <SelectItem value="1-4-weeks">1-4 weeks</SelectItem>
              <SelectItem value="1-3-months">1-3 months</SelectItem>
              <SelectItem value="3-12-months">3-12 months</SelectItem>
              <SelectItem value="more-than-year">More than a year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="previous-occurrence">Have you had this condition before?</Label>
          <RadioGroup
            value={answers.previousOccurrence}
            onValueChange={(value) => handleInputChange('previousOccurrence', value)}
            className="mt-2 flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="previous-yes" />
              <Label htmlFor="previous-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="previous-no" />
              <Label htmlFor="previous-no">No</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unsure" id="previous-unsure" />
              <Label htmlFor="previous-unsure">Unsure</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="itchiness">How itchy is the affected area?</Label>
            <span className="text-sm text-muted-foreground">
              {answers.itchiness === '0' ? 'None' : 
               answers.itchiness === '25' ? 'Mild' : 
               answers.itchiness === '50' ? 'Moderate' : 
               answers.itchiness === '75' ? 'Severe' : 'Very Severe'}
            </span>
          </div>
          <Slider
            id="itchiness"
            defaultValue={[0]}
            max={100}
            step={25}
            value={[parseInt(answers.itchiness)]}
            onValueChange={(value) => handleInputChange('itchiness', value[0].toString())}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>None</span>
            <span>Mild</span>
            <span>Moderate</span>
            <span>Severe</span>
            <span>Very Severe</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="pain-level">Pain level of the affected area:</Label>
            <span className="text-sm text-muted-foreground">
              {answers.painLevel === '0' ? 'None' : 
               answers.painLevel === '25' ? 'Mild' : 
               answers.painLevel === '50' ? 'Moderate' : 
               answers.painLevel === '75' ? 'Severe' : 'Very Severe'}
            </span>
          </div>
          <Slider
            id="pain-level"
            defaultValue={[0]}
            max={100}
            step={25}
            value={[parseInt(answers.painLevel)]}
            onValueChange={(value) => handleInputChange('painLevel', value[0].toString())}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>None</span>
            <span>Mild</span>
            <span>Moderate</span>
            <span>Severe</span>
            <span>Very Severe</span>
          </div>
        </div>
        
        {/* Dynamic questions based on condition */}
        {getDynamicQuestions()}
        
        <div>
          <Label htmlFor="medications">Are you currently taking any medications?</Label>
          <Textarea
            id="medications"
            placeholder="List any medications you are currently taking..."
            value={answers.medications}
            onChange={(e) => handleInputChange('medications', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="allergies">Do you have any known allergies?</Label>
          <Textarea
            id="allergies"
            placeholder="List any known allergies..."
            value={answers.allergies}
            onChange={(e) => handleInputChange('allergies', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="additional-info">Anything else you'd like to share about your condition?</Label>
          <Textarea
            id="additional-info"
            placeholder="Any other details that might help with your treatment recommendations..."
            value={answers.additionalInfo}
            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onBack}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Results
        </Button>
        <Button type="submit">
          Get Treatment Recommendations <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}