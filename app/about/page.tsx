import PageContainer from '@/components/layout/page-container';
import PageHeader from '@/components/layout/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Activity, Brain, Lock } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader 
        title="About Our Platform" 
        description="Learn how our skin disease detection technology works and how we prioritize your privacy and security."
      />
      
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="technology">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technology" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Technology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <Shield className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Advanced AI Models</h3>
                    <p className="text-muted-foreground">
                      Our platform uses state-of-the-art deep learning models trained on millions of dermatological images to accurately identify over 200 skin conditions.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <Activity className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Our AI system continuously improves through regular training with new, verified medical data under expert dermatologist supervision.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">How It Works</h3>
                  <ol className="space-y-4 ml-6 list-decimal">
                    <li>
                      <p className="font-medium">Image Processing</p>
                      <p className="text-muted-foreground">
                        When you upload an image, our system enhances and normalizes it for optimal analysis, removing irrelevant background elements and focusing on the skin condition.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Feature Extraction</p>
                      <p className="text-muted-foreground">
                        Our neural networks extract thousands of visual features from your image, identifying patterns associated with different skin conditions.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Classification</p>
                      <p className="text-muted-foreground">
                        These features are compared against our extensive database of skin conditions to identify the most likely diagnosis and potential alternatives.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Personalization</p>
                      <p className="text-muted-foreground">
                        Your questionnaire responses help refine our analysis and provide more personalized treatment recommendations based on your specific situation.
                      </p>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="accuracy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Accuracy & Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Brain className="h-10 w-10 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Commitment to Accuracy</h3>
                    <p className="text-muted-foreground">
                      Our AI model has been validated through rigorous clinical testing and achieves an average accuracy of 91% for the most common skin conditions, comparable to experienced dermatologists. However, it's important to understand the limitations of AI-based analysis.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Understanding Our Results</h3>
                  <ul className="space-y-4 ml-6 list-disc">
                    <li>
                      <p className="font-medium">Confidence Scores</p>
                      <p className="text-muted-foreground">
                        Each analysis includes a confidence percentage indicating how certain the AI is about its prediction. Higher confidence generally indicates greater reliability.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Alternative Predictions</p>
                      <p className="text-muted-foreground">
                        We provide alternative possibilities because some skin conditions can appear similar. This information can be valuable for discussions with healthcare providers.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Not a Replacement for Medical Care</p>
                      <p className="text-muted-foreground">
                        Our system is designed to provide information and guidance, not to replace professional medical diagnosis. Always consult with a healthcare provider for definitive diagnosis and treatment.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    We regularly update our AI models with new medical research and validated data. Our team of dermatologists reviews system performance to identify areas for improvement and ensure the highest possible accuracy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Lock className="h-10 w-10 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Your Data Is Protected</h3>
                    <p className="text-muted-foreground">
                      We take the security and privacy of your medical information extremely seriously. Our platform is designed with privacy-first principles and implements industry-leading security measures.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Data Encryption</h3>
                    <p className="text-muted-foreground">
                      All images and personal information are encrypted both during transmission (TLS/SSL) and when stored on our servers (AES-256 encryption).
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">HIPAA Compliance</h3>
                    <p className="text-muted-foreground">
                      Our platform adheres to HIPAA (Health Insurance Portability and Accountability Act) guidelines for the protection of sensitive patient health information.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Limited Data Retention</h3>
                    <p className="text-muted-foreground">
                      We only retain your data for as long as necessary to provide our service. You can request deletion of your data at any time.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">No Third-Party Sharing</h3>
                    <p className="text-muted-foreground">
                      We never sell or share your personal information or images with third parties without your explicit consent.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Security Audits</h3>
                  <p className="text-muted-foreground">
                    Our systems undergo regular security audits and penetration testing by independent cybersecurity experts to identify and address potential vulnerabilities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How accurate is the skin disease detection?</AccordionTrigger>
                    <AccordionContent>
                      Our AI system achieves an average accuracy of 91% for common skin conditions, comparable to experienced dermatologists. However, accuracy can vary depending on image quality, the rarity of the condition, and other factors. We always recommend consulting with a healthcare professional for a definitive diagnosis.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is my personal health information secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we take data security extremely seriously. All images and personal information are encrypted during transmission and storage. We are HIPAA compliant and implement multiple layers of security protection. We never share your data with third parties without your explicit consent.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I use this service instead of seeing a doctor?</AccordionTrigger>
                    <AccordionContent>
                      No, our service is designed to provide information and guidance but is not a replacement for professional medical care. We strongly recommend consulting with a qualified healthcare provider for proper diagnosis and treatment of any skin condition.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How should I take photos for the best results?</AccordionTrigger>
                    <AccordionContent>
                      For optimal results, take photos in good lighting (natural daylight is best), keep the affected area in focus, and include only the skin condition without jewelry or clothing if possible. Take multiple angles if the condition appears different from different views. Avoid using filters or editing the photos.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What types of skin conditions can be detected?</AccordionTrigger>
                    <AccordionContent>
                      Our system can identify over 200 skin conditions, including common issues like eczema, psoriasis, acne, rosacea, and fungal infections, as well as various types of skin cancers and rare dermatological disorders. The accuracy varies by condition, with higher accuracy for more common conditions.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Are the Ayurvedic treatments scientifically proven?</AccordionTrigger>
                    <AccordionContent>
                      Many Ayurvedic treatments have centuries of traditional use, but scientific research on their efficacy varies. Some ingredients like turmeric and neem have been studied and shown to have anti-inflammatory or antimicrobial properties. We include these options as part of a holistic approach, but always recommend discussing all treatment options with your healthcare provider.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-7">
                    <AccordionTrigger>Can I use this for my child's skin condition?</AccordionTrigger>
                    <AccordionContent>
                      While our system can analyze images of skin conditions in people of all ages, children's skin conditions can present differently than in adults. We recommend being particularly cautious with interpretations for children and always consulting with a pediatrician or pediatric dermatologist for skin issues in children.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-8">
                    <AccordionTrigger>How often is the AI model updated?</AccordionTrigger>
                    <AccordionContent>
                      We update our AI models on a quarterly basis to incorporate new medical research, improve accuracy, and expand the range of detectable conditions. Our team of dermatologists continuously reviews and validates these updates before they're deployed to ensure reliability.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}