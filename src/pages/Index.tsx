import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Heart, Shield, Clock, MapPin, Mail, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import CommentForm from "@/components/CommentForm";

const Index = () => {
  const navigate = useNavigate();
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [userComments, setUserComments] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petType: "",
    message: "",
    time: "",
    worker: "",
  });
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCommentForm(true);
  };

  const handleCommentSubmit = (comment: any) => {
    setUserComments([...userComments, comment]);
    setShowCommentForm(false);
    setFormData({ name: "", email: "", phone: "", petType: "", message: "", time: "", worker: "" });
    setDate(undefined);
  };

  const handleBackToHome = () => {
    setShowCommentForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWorkerChange = (value: string) => {
    setFormData({
      ...formData,
      worker: value,
    });
  };

  if (showCommentForm) {
    return <CommentForm onSubmitComment={handleCommentSubmit} onBack={handleBackToHome} />;
  }

  // Multiple sets of testimonials that rotate every 24 hours
  const testimonialsRotation = [
    // Set 1
    [
      {
        rating: 5,
        comment: "Caroline has been watching our bearded dragon Zeus for 6 months now. She sends me pictures every visit and even noticed when he wasn't eating well one day. Found out he was about to shed! So grateful for her attention to detail.",
        name: "Marcus & Sarah",
        location: "Reunion, CO"
      },
      {
        rating: 5,
        comment: "We were nervous leaving our rescue pitbull Luna with anyone, but Teagan was amazing. Luna actually gets excited when she sees Teagan coming up the driveway now. The daily walk photos are the best part of my workday!",
        name: "Jennifer Chen",
        location: "Commerce City, CO"
      },
      {
        rating: 5,
        comment: "Our elderly cat Whiskers needs medication twice daily. Caroline never missed a dose and even helped us transition to a new prescription when our vet changed it. Professional and caring - exactly what we needed.",
        name: "Robert & Linda Thompson",
        location: "Brighton, CO"
      }
    ],
    // Set 2
    [
      {
        rating: 4,
        comment: "Great service overall! Teagan walked our golden retriever Max while we were out of town for a week. Only wish they offered overnight stays, but the twice-daily visits worked well. Max was happy and tired each day.",
        name: "The Patel Family",
        location: "Reunion, CO"
      },
      {
        rating: 5,
        comment: "I have three cats and they're all pretty particular about strangers. Caroline won them over by the second visit. She even learned each of their quirks - Tiger likes his food warmed up and Mittens only drinks from the bathroom faucet. Highly recommend!",
        name: "Amanda Rodriguez",
        location: "Thornton, CO"
      },
      {
        rating: 5,
        comment: "Teagan has been walking our energetic border collie Bella for 8 months. Rain or shine, she's always there. Bella comes home tired and happy every single time. Worth every penny!",
        name: "Kevin & Maria Santos",
        location: "Commerce City, CO"
      }
    ],
    // Set 3
    [
      {
        rating: 5,
        comment: "Caroline took incredible care of our gecko colony while we were away for two weeks. She followed our detailed feeding schedule perfectly and even caught a potential health issue early. Professional reptile care!",
        name: "Dr. Emily Watson",
        location: "Brighton, CO"
      },
      {
        rating: 4,
        comment: "Our senior dog Charlie has special needs, and Teagan handles everything with such patience. The medication reminders and gentle exercise routine have made such a difference in his quality of life.",
        name: "Patricia Williams",
        location: "Reunion, CO"
      },
      {
        rating: 5,
        comment: "We have two rabbits and a chinchilla - not the easiest pets to find care for! Caroline researched their specific needs and provided amazing care. The daily photos were adorable too.",
        name: "Alex & Jordan Kim",
        location: "Thornton, CO"
      }
    ]
  ];

  // Calculate which set of testimonials to show based on current date
  // This will rotate every 24 hours
  const getCurrentTestimonialSet = () => {
    const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const setIndex = daysSinceEpoch % testimonialsRotation.length;
    return testimonialsRotation[setIndex];
  };

  const staticTestimonials = getCurrentTestimonialSet();

  // Combine static and user testimonials
  const allTestimonials = [...staticTestimonials, ...userComments];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            Serving Reunion, Colorado
          </Badge>
          <div className="relative inline-block mb-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight">
              <div className="flex flex-col items-start">
                <div className="text-4xl md:text-6xl mb-2">
                  Reunion
                </div>
                <div className="text-6xl md:text-8xl">
                  Pet
                </div>
                <div className="text-5xl md:text-7xl mt-2 ml-8">
                  Sitters
                </div>
              </div>
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Professional, loving pet care in the comfort of your own home. We treat your scaled, feathered, or fluffy family members like our own while you're away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              onClick={() => {
                const contactSection = document.querySelector('[data-contact-form]');
                contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Book Pet Care Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => navigate('/about')}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Pet Care Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive care tailored to your pet's unique needs and personality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Daily Pet Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Regular check-ins, feeding, playtime, and companionship for your pets while you're away.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Emergency Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  24/7 availability for urgent situations and immediate veterinary coordination.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workers Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Pet Care Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced, passionate professionals dedicated to providing the best care for your scaled, feathered, or fluffy family members
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/src/assets/caroline-new-profile.png"
                    alt="Caroline - Pet Care Specialist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Caroline Clark</h3>
                <p className="text-blue-600 font-medium mb-3">Pet Care Specialist</p>
                <p className="text-gray-600 text-sm">
                  4+ years experience with dogs, cats, reptiles, and amphibians. No Bugs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=96&h=96&fit=crop" 
                    alt="Teagan - Dog Walking Expert" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Teagan Cuffe</h3>
                <p className="text-green-600 font-medium mb-3">Dog Walking Expert</p>
                <p className="text-gray-600 text-sm">
                  Amateur dog walker. Specializes in mid-energy breeds. No Reptiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Local Reunion Pet Care Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 8 years of experience caring for pets in the Reunion area, we understand the unique needs of Colorado pets and their families. Our bonded and insured team provides personalized care that keeps your pets happy and healthy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">5-Star Rated Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Local Reunion Colorado Team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl p-8 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop" 
                  alt="Person walking a happy dog" 
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <p className="text-gray-700 font-medium">
                  "Your pets will be loved and cared for as if they were our own family members."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Pet Parents Say</h2>
            <p className="text-lg text-gray-600">Trusted by families throughout Reunion and beyond</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "{testimonial.comment}"
                  </p>
                  <div className="font-semibold text-gray-900">- {testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Give Your Pet the Best Care?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today for a free consultation. We'll discuss your pet's needs and create a customized care plan.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">reunionpetcare@gmail.com</div>
                    <div className="text-gray-600">Quick response guaranteed</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Serving Reunion, CO</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card data-contact-form>
              <CardHeader>
                <CardTitle>Get Your Free Consultation</CardTitle>
                <CardDescription>Tell us about your pet and we'll create a perfect care plan</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    placeholder="Pet Type (Dog, Cat, etc.)"
                    name="petType"
                    value={formData.petType}
                    onChange={handleInputChange}
                    required
                  />
                  <Select value={formData.worker} onValueChange={handleWorkerChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pick a worker" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="caroline">Caroline Clark - Reptiles & Amphibians Specialist</SelectItem>
                      <SelectItem value="teagan">Teagan Cuffe - Dog Walking Expert</SelectItem>
                      <SelectItem value="any">Any Available Worker</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <Input
                      type="time"
                      placeholder="Preferred Time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Textarea
                    placeholder="Tell us about your pet care needs..."
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                  />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Free Pet Care Today!
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Reunion Pet Care Services</h3>
          <p className="text-gray-400 mb-6">
            Professional pet sitting and care services in Reunion, Colorado
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>Emergency Available</span>
            <span>•</span>
            <span>Local Team</span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
            © 2024 Reunion Pet Care Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
