import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background with sky blue and pastel polka dots */}
      <div 
        className="absolute inset-0 bg-sky-400"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 192, 203, 0.3) 2px, transparent 2px),
                           radial-gradient(circle at 80% 20%, rgba(173, 216, 230, 0.3) 2px, transparent 2px),
                           radial-gradient(circle at 40% 80%, rgba(255, 255, 224, 0.3) 2px, transparent 2px),
                           radial-gradient(circle at 90% 90%, rgba(221, 160, 221, 0.3) 2px, transparent 2px),
                           radial-gradient(circle at 10% 10%, rgba(176, 224, 230, 0.3) 2px, transparent 2px)`,
          backgroundSize: '60px 60px, 80px 80px, 100px 100px, 70px 70px, 90px 90px'
        }}
      />
      
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border-black/20 text-black hover:bg-white/30"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold font-dancing text-black mb-12 leading-tight">
            Caroline and Teagan
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-black/10">
            <p className="text-xl md:text-2xl font-bold font-dancing text-black leading-relaxed">
              Caroline and Teagan are 10+ aged who specialize in personal and public pet care. 
              They cannot guarantee that they will always be open but they clear their schedules 
              and are always alert for people who may need their help. At Reunion Pet Sitters 
              we are there for you in times of need like we always say, Axolotls to Zebras A to Z 
              animals are all we see! A fun rhyme that lets pet owners know that they care, even 
              if they cannot attend!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;