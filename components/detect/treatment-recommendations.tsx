'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Leaf, Home, ShoppingBag, Pill, ArrowLeft, Printer, Download } from 'lucide-react';
import { exportToPDF } from '@/lib/pdf-export';
import { useToast } from '@/hooks/use-toast';

interface TreatmentRecommendationsProps {
  condition: string;
  severity: string;
  questionnaireAnswers: Record<string, string>;
  onReset: () => void;
}

export default function TreatmentRecommendations({ 
  condition, 
  severity,
  questionnaireAnswers, 
  onReset 
}: TreatmentRecommendationsProps) {
  const { toast } = useToast();

  const handleExportPDF = async () => {
    const success = await exportToPDF('treatment-recommendations', `${condition.toLowerCase()}-treatment-plan.pdf`);
    
    if (success) {
      toast({
        title: "PDF exported successfully",
        description: "Your treatment plan has been downloaded as a PDF file.",
      });
    } else {
      toast({
        title: "PDF export failed",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Generate treatments based on condition and severity
  const getTreatments = () => {
    if (condition === 'Eczema') {
      return {
        ayurvedic: [
          {
            name: 'Neem and Turmeric Paste',
            description: 'Mix neem powder and turmeric with water to form a paste. Apply to affected areas for 15-20 minutes before rinsing.',
            frequency: 'Once daily',
            caution: 'Discontinue if irritation occurs.'
          },
          {
            name: 'Coconut Oil with Tulsi',
            description: 'Mix a few drops of tulsi (holy basil) extract with cold-pressed coconut oil and apply to affected areas.',
            frequency: 'Twice daily',
            caution: 'Use organic ingredients when possible.'
          },
          {
            name: 'Triphala Supplement',
            description: 'An Ayurvedic herbal supplement that may help reduce inflammation.',
            frequency: 'As directed by an Ayurvedic practitioner',
            caution: 'Consult with an Ayurvedic doctor before starting supplements.'
          }
        ],
        homeRemedies: [
          {
            name: 'Colloidal Oatmeal Bath',
            description: 'Add colloidal oatmeal to lukewarm bathwater and soak for 15-20 minutes.',
            frequency: '2-3 times per week',
            caution: 'Ensure water is not too hot as it can worsen symptoms.'
          },
          {
            name: 'Aloe Vera Gel',
            description: 'Apply pure aloe vera gel to affected areas.',
            frequency: '2-3 times daily',
            caution: 'Use pure aloe vera without added alcohols or fragrances.'
          },
          {
            name: 'Cold Compress',
            description: 'Apply a cold, damp cloth to the affected areas to reduce itching and inflammation.',
            frequency: 'As needed for itching relief',
            caution: 'Do not apply ice directly to the skin.'
          }
        ],
        otc: [
          {
            name: 'Hydrocortisone Cream (1%)',
            description: 'A mild steroid cream that reduces inflammation and itching.',
            frequency: 'Up to twice daily for no more than 7 consecutive days',
            caution: 'Prolonged use can thin the skin. Avoid use on face unless directed by a doctor.'
          },
          {
            name: 'Ceramide-containing Moisturizer',
            description: 'Moisturizers with ceramides help repair the skin barrier.',
            frequency: 'Apply liberally multiple times daily, especially after bathing',
            caution: 'Choose fragrance-free formulations.'
          },
          {
            name: 'Oral Antihistamines',
            description: 'Can help reduce itching, especially at night.',
            frequency: 'As directed on packaging',
            caution: 'May cause drowsiness. Non-drowsy formulations are available for daytime use.'
          }
        ],
        prescription: [
          {
            name: 'Topical Calcineurin Inhibitors',
            description: 'Non-steroid medications like tacrolimus or pimecrolimus that reduce inflammation.',
            frequency: 'As prescribed by physician',
            caution: 'May initially cause burning or stinging sensation.'
          },
          {
            name: 'Medium to High-potency Topical Corticosteroids',
            description: 'Stronger anti-inflammatory creams for moderate to severe eczema.',
            frequency: 'As prescribed by physician',
            caution: 'Long-term use can cause skin thinning and other side effects.'
          },
          {
            name: 'Systemic Immunomodulators',
            description: 'For severe cases, medications like dupilumab may be prescribed.',
            frequency: 'As prescribed by physician',
            caution: 'Requires regular monitoring by a healthcare provider.'
          }
        ]
      };
    } else if (condition === 'Psoriasis') {
      return {
        ayurvedic: [
          {
            name: 'Aloe Vera and Turmeric Paste',
            description: 'Mix aloe vera gel with turmeric powder and apply to affected areas.',
            frequency: 'Twice daily',
            caution: 'Turmeric may stain clothing and skin temporarily.'
          },
          {
            name: 'Neem Oil',
            description: 'Apply pure neem oil to psoriasis plaques.',
            frequency: 'Once or twice daily',
            caution: 'Has a strong odor. Perform a patch test first.'
          },
          {
            name: 'Panchakarma Therapy',
            description: 'Ayurvedic detoxification and rejuvenation treatments.',
            frequency: 'As recommended by an Ayurvedic practitioner',
            caution: 'Should only be performed by qualified practitioners.'
          }
        ],
        homeRemedies: [
          {
            name: 'Dead Sea Salt Bath',
            description: 'Add Dead Sea salt to warm bathwater and soak for 15 minutes.',
            frequency: '2-3 times per week',
            caution: 'Pat skin dry gently after bathing, do not rub.'
          },
          {
            name: 'Apple Cider Vinegar Solution',
            description: 'Mix equal parts water and apple cider vinegar and apply to affected areas with a cotton ball.',
            frequency: 'Several times per week',
            caution: 'May sting, especially if skin is cracked. Discontinue if irritation occurs.'
          },
          {
            name: 'Tea Tree Oil Mixture',
            description: 'Mix a few drops of tea tree oil with a carrier oil (like coconut oil) and apply to plaques.',
            frequency: 'Once daily',
            caution: 'Always dilute tea tree oil before applying to skin.'
          }
        ],
        otc: [
          {
            name: 'Coal Tar Products',
            description: 'Shampoos, creams, or ointments containing coal tar can slow skin cell growth and reduce inflammation.',
            frequency: 'As directed on packaging',
            caution: 'May stain clothing and make skin more sensitive to sunlight.'
          },
          {
            name: 'Salicylic Acid Products',
            description: 'Helps remove scales and smooth skin.',
            frequency: 'As directed on packaging',
            caution: 'May cause irritation. Limit use on large areas to avoid salicylate toxicity.'
          },
          {
            name: 'Moisturizers with Urea or Lactic Acid',
            description: 'Helps soften and remove scales while moisturizing.',
            frequency: 'Multiple times daily',
            caution: 'May cause stinging on application, especially if skin is cracked.'
          }
        ],
        prescription: [
          {
            name: 'Topical Corticosteroids',
            description: 'Anti-inflammatory creams or ointments in varying strengths.',
            frequency: 'As prescribed by physician',
            caution: 'Long-term use can cause skin thinning. Use as directed.'
          },
          {
            name: 'Vitamin D Analogues',
            description: 'Calcipotriene and similar medications slow skin cell growth.',
            frequency: 'As prescribed by physician',
            caution: 'May irritate skin initially. Avoid excessive sun exposure.'
          },
          {
            name: 'Biologic Treatments',
            description: 'For moderate to severe psoriasis, injected or infused medications that target specific parts of the immune system.',
            frequency: 'As prescribed by physician',
            caution: 'Requires careful monitoring and regular bloodwork.'
          }
        ]
      };
    } else {
      // Default treatments for other skin conditions
      return {
        ayurvedic: [
          {
            name: 'Turmeric and Honey Paste',
            description: 'Mix turmeric powder with raw honey to form a paste and apply to affected areas.',
            frequency: 'Once daily',
            caution: 'Turmeric may stain skin and clothing.'
          }
        ],
        homeRemedies: [
          {
            name: 'Gentle Cleansing',
            description: 'Wash affected areas with mild, fragrance-free soap and lukewarm water.',
            frequency: 'Once or twice daily',
            caution: 'Avoid hot water and harsh soaps.'
          }
        ],
        otc: [
          {
            name: 'Gentle Moisturizer',
            description: 'Apply a fragrance-free, hypoallergenic moisturizer to affected areas.',
            frequency: 'Multiple times daily',
            caution: 'Choose products labeled for sensitive skin.'
          }
        ],
        prescription: [
          {
            name: 'Consult a Dermatologist',
            description: 'For proper diagnosis and treatment recommendations.',
            frequency: 'As soon as possible',
            caution: 'Self-diagnosis can delay proper treatment.'
          }
        ]
      };
    }
  };

  const treatments = getTreatments();

  // Render a treatment card
  const TreatmentCard = ({ treatment }: { treatment: any }) => (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{treatment.name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-2 space-y-2">
        <p>{treatment.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Frequency:</span> {treatment.frequency}
          </div>
          <div className="flex items-start gap-1">
            <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span className="text-amber-700 dark:text-amber-400">{treatment.caution}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={onReset}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Start Over
        </Button>
        <Button onClick={handleExportPDF}>
          <Download className="mr-2 h-4 w-4" />
          Export PDF
        </Button>
      </div>

      <div id="treatment-recommendations" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Treatment Recommendations</CardTitle>
            <CardDescription>
              Based on your condition: {condition} (Severity: {severity})
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Treatment Recommendations</h2>
                <p className="text-muted-foreground">
                  Based on your {condition} diagnosis and questionnaire responses, we recommend 
                  the following treatments. Always consult with a healthcare professional before 
                  starting any new treatment.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold mb-2">Condition Summary</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Condition:</span>
                    <p className="font-medium">{condition}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Severity:</span>
                    <p className="font-medium">{severity}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <p>
                      {questionnaireAnswers.duration === 'less-than-week' ? 'Less than a week' :
                       questionnaireAnswers.duration === '1-4-weeks' ? '1-4 weeks' :
                       questionnaireAnswers.duration === '1-3-months' ? '1-3 months' :
                       questionnaireAnswers.duration === '3-12-months' ? '3-12 months' :
                       questionnaireAnswers.duration === 'more-than-year' ? 'More than a year' :
                       'Not specified'}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Itchiness:</span>
                    <p>
                      {questionnaireAnswers.itchiness === '0' ? 'None' :
                       questionnaireAnswers.itchiness === '25' ? 'Mild' :
                       questionnaireAnswers.itchiness === '50' ? 'Moderate' :
                       questionnaireAnswers.itchiness === '75' ? 'Severe' :
                       questionnaireAnswers.itchiness === '100' ? 'Very Severe' :
                       'Not specified'}
                    </p>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="ayurvedic">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="ayurvedic" className="flex items-center gap-2">
                    <Leaf className="h-4 w-4" /> Ayurvedic
                  </TabsTrigger>
                  <TabsTrigger value="home" className="flex items-center gap-2">
                    <Home className="h-4 w-4" /> Home Remedies
                  </TabsTrigger>
                  <TabsTrigger value="otc" className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" /> Over-the-Counter
                  </TabsTrigger>
                  <TabsTrigger value="prescription" className="flex items-center gap-2">
                    <Pill className="h-4 w-4" /> Prescription
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="ayurvedic" className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Ayurvedic Treatments</h3>
                    <p className="text-sm text-muted-foreground">
                      Traditional Ayurvedic approaches focus on balancing the body's doshas (energies) 
                      and supporting the body's natural healing processes.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  {treatments.ayurvedic.map((treatment, index) => (
                    <TreatmentCard key={index} treatment={treatment} />
                  ))}
                </TabsContent>
                
                <TabsContent value="home" className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Home Remedies</h3>
                    <p className="text-sm text-muted-foreground">
                      These natural treatments can be prepared at home and may help soothe symptoms 
                      and support healing.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  {treatments.homeRemedies.map((treatment, index) => (
                    <TreatmentCard key={index} treatment={treatment} />
                  ))}
                </TabsContent>
                
                <TabsContent value="otc" className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Over-the-Counter Treatments</h3>
                    <p className="text-sm text-muted-foreground">
                      These medications are available without a prescription at pharmacies and 
                      can help manage symptoms.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  {treatments.otc.map((treatment, index) => (
                    <TreatmentCard key={index} treatment={treatment} />
                  ))}
                </TabsContent>
                
                <TabsContent value="prescription" className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Prescription Treatments</h3>
                    <p className="text-sm text-muted-foreground">
                      These treatments require a prescription from a healthcare provider and are typically 
                      used for moderate to severe cases or when other treatments haven't been effective.
                    </p>
                  </div>
                  <Separator className="my-4" />
                  {treatments.prescription.map((treatment, index) => (
                    <TreatmentCard key={index} treatment={treatment} />
                  ))}
                </TabsContent>
              </Tabs>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Important Notice</h3>
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      This information is provided for educational purposes only and is not a substitute for 
                      professional medical advice, diagnosis, or treatment. Always seek the advice of your 
                      physician or other qualified health provider with any questions you may have regarding 
                      a medical condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}