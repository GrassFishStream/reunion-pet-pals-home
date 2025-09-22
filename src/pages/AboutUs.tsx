import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import backgroundImage from "@/assets/pets-background.png";
import carolineProfile from "@/assets/caroline-new-profile.png";
import teaganProfile from "@/assets/teagan-new-profile.png";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background with downloaded image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '130%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
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
          
          {/* Profile Photos */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <img 
                src={carolineProfile} 
                alt="Caroline Clark" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-4 border-4 border-white/20"
              />
              <h3 className="text-2xl font-bold font-dancing text-black">Caroline</h3>
            </div>
            <div className="text-center">
              <img 
                src={teaganProfile} 
                alt="Teagan Cuffe" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-4 border-4 border-white/20"
              />
              <h3 className="text-2xl font-bold font-dancing text-black">Teagan</h3>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-black/10">
            <p className="text-xl md:text-2xl font-bold font-dancing text-black leading-relaxed">
              Caroline and Teagan are 10 and up aged who specialize in personal and public pet care.
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