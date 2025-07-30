import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
interface HeroSectionProps {
  onScrollToNext: () => void;
}
export const HeroSection = ({
  onScrollToNext
}: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Creative Developer & Digital Artist';
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-fluid-2xl font-bold text-glow">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Ekundayo King </span>
            </h1>
            
            {/* Animated Title */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-fluid-lg text-foreground-muted font-mono">
                {displayText}
                <span className={`inline-block w-0.5 h-8 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{
          animationDelay: '0.5s'
        }}>
            Crafting immersive digital experiences through innovative web technologies, 
            creative design, and cutting-edge development practices.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{
          animationDelay: '1s'
        }}>
            <Button size="lg" className="morph-button bg-gradient-primary hover:scale-105 transition-transform duration-300 glow-primary text-lg px-8 py-6" onClick={() => onScrollToNext()}>
              Explore My Work
              <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
            
            <Button variant="outline" size="lg" className="morph-button border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6">
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{
          animationDelay: '1.5s'
        }}>
            {[{
            icon: Github,
            href: '#',
            label: 'GitHub'
          }, {
            icon: Linkedin,
            href: '#',
            label: 'LinkedIn'
          }, {
            icon: Mail,
            href: '#',
            label: 'Email'
          }].map((social, index) => <Button key={social.label} variant="ghost" size="icon" className="morph-button hover-scale group hover:glow-primary transition-all duration-300" style={{
            animationDelay: `${1.5 + index * 0.2}s`
          }}>
                <social.icon className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
                <span className="sr-only">{social.label}</span>
              </Button>)}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>;
};