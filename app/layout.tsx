import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DermDetect - AI Skin Disease Detection',
  description: 'Upload a photo of your skin condition for AI-powered analysis and personalized treatment recommendations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="border-b bg-background">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <Link href="/" className="font-bold text-xl">DermDetect</Link>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/detect" legacyBehavior passHref>
                        <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                          Detect
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                          About
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div>
                <Button asChild variant="outline" size="sm" className="mr-2">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
          <footer className="bg-slate-900 text-white py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">DermDetect</h3>
                <p className="text-slate-300 text-sm">
                  AI-powered skin disease detection and personalized treatment recommendations.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Features</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><Link href="/detect" className="hover:text-white transition-colors">Skin Analysis</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Treatment Plans</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Condition Tracking</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Educational Resources</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
              <p>© 2025 DermDetect. All rights reserved.</p>
              <p className="mt-2">Disclaimer: This tool provides information only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}