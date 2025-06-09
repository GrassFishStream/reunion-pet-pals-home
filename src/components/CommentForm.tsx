
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface CommentFormProps {
  onSubmitComment: (comment: any) => void;
  onBack: () => void;
}

const CommentForm = ({ onSubmitComment, onBack }: CommentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    comment: "",
    rating: 5
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newComment = {
      id: Date.now(),
      name: formData.name,
      location: formData.location,
      comment: formData.comment,
      rating: formData.rating
    };
    
    onSubmitComment(newComment);
    toast.success("Thank you for your review! It will appear in our testimonials.");
    setFormData({ name: "", location: "", comment: "", rating: 5 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const setRating = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Share Your Experience</CardTitle>
            <CardDescription>
              Tell other pet parents about your experience with Reunion Pet Care Services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              
              <Input
                placeholder="Your Location (e.g., Reunion, CO)"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
              
              <div>
                <label className="block text-sm font-medium mb-2">Rate Your Experience</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-8 h-8 cursor-pointer transition-colors ${
                        star <= formData.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
              
              <Textarea
                placeholder="Share your experience with our pet care services..."
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows={4}
                required
              />
              
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onBack}
                  className="flex-1"
                >
                  Back to Home
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Submit Review
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommentForm;
