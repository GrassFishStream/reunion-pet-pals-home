
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Star, Heart, Shield, Clock, MapPin, Phone, Mail, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import CommentForm from "@/components/CommentForm";

const Index = () => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [userComments, setUserComments] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petType: "",
    message: "",
    time: "",
  });
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCommentForm(true);
  };

  const handleCommentSubmit = (comment: any) => {
    setUserComments([...userComments, comment]);
    setShowCommentForm(false);
    setFormData({ name: "", email: "", phone: "", petType: "", message: "", time: "" });
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

  if (showCommentForm) {
    return <CommentForm onSubmitComment={handleCommentSubmit} onBack={handleBackToHome} />;
  }

  // Static testimonials
  const staticTestimonials = [
    {
      rating: 5,
      comment: "Sarah took amazing care of our two cats while we were on vacation. Daily updates and photos gave us such peace of mind!",
      name: "Jennifer & Mike",
      location: "Reunion, CO"
    },
    {
      rating: 5,
      comment: "Our dog Max loves his visits with the team. They're so reliable and caring - we couldn't ask for better pet sitters!",
      name: "The Rodriguez Family",
      location: "Commerce City, CO"
    },
    {
      rating: 5,
      comment: "Professional, punctual, and genuinely care about our pets. We've used them for over a year and couldn't be happier!",
      name: "David & Lisa",
      location: "Brighton, CO"
    }
  ];

  // Combine static and user testimonials
  const allTestimonials = [...staticTestimonials, ...userComments];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            Serving Reunion, Colorado & Surrounding Areas
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Book Pet Care Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Overnight Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Sleep-over services to ensure your pets feel secure and maintain their routine.
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
                    src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=96&h=96&fit=crop"
                    alt="Caroline - Pet Care Specialist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Caroline Clark</h3>
                <p className="text-blue-600 font-medium mb-3">Senior Pet Care Specialist</p>
                <p className="text-gray-600 text-sm">
                  8+ years experience with dogs and cats. Certified in pet first aid and specialized in senior pet care. No Bugs.
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
                  Professional dog trainer and walker. Specializes in high-energy breeds and behavioral training. No Reptiles.
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
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Fully Licensed & Insured</span>
                </div>
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
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">(720) 555-PETS</div>
                    <div className="text-gray-600">Available 7 days a week</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">hello@reunionpetcare.com</div>
                    <div className="text-gray-600">Quick response guaranteed</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Serving Reunion, CO</div>
                    <div className="text-gray-600">And surrounding communities</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
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
            <span>Licensed & Insured</span>
            <span>•</span>
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
