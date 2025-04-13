// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const App: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeTab, setActiveTab] = useState<string>("landing");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "form") {
      setTimeout(() => {
        const formElement = document.getElementById("admission-form");
        formElement?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const scrollToForm = () => {
    setActiveTab("form");
    setTimeout(() => {
      const formElement = document.getElementById("admission-form");
      formElement?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-[1024px] bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-indigo-600">FitConnect</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="!rounded-button whitespace-nowrap cursor-pointer">
            Login as Client
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
            Login as Owner
          </Button>
        </div>
      </nav>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="hidden">
          <TabsTrigger value="landing">Landing</TabsTrigger>
          <TabsTrigger value="form">Form</TabsTrigger>
        </TabsList>

        <TabsContent value="landing" className="w-full">
          {/* Hero Section */}
          <div className="relative pt-24 pb-16 w-full overflow-hidden">
            <div 
              className="absolute inset-0 z-0" 
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20gym%20interior%20with%20fitness%20equipment%2C%20high%20ceilings%2C%20large%20windows%20with%20natural%20light%2C%20minimalist%20design%2C%20clean%20and%20spacious%20environment%2C%20motivational%20atmosphere%2C%20premium%20quality%20photography%2C%20soft%20lighting&width=1440&height=600&seq=hero-bg-1&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.8
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent z-0"></div>
            
            <div className="container mx-auto px-8 relative z-10">
              <div className="max-w-2xl text-white pt-20 pb-16">
                <h1 className="text-5xl font-bold mb-6 leading-tight">Discover Gyms Near You or List Your Own!</h1>
                <p className="text-xl mb-8 text-gray-100">Find the perfect fitness space or showcase your gym to thousands of potential members.</p>
                
                <div className="bg-white p-2 rounded-lg shadow-lg flex mb-8">
                  <Input 
                    placeholder="Enter your location" 
                    className="border-none focus-visible:ring-0 text-gray-800 text-sm"
                  />
                  <Button className="bg-indigo-600 hover:bg-indigo-700 ml-2 !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-search mr-2"></i> Search
                  </Button>
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-search mr-2"></i> Find a Gym
                  </Button>
                  <Button variant="outline" className="bg-white text-indigo-600 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
                    <i className="fas fa-dumbbell mr-2"></i> List Your Gym
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 bg-white">
            <div className="container mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose FitConnect</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">The ultimate platform connecting fitness enthusiasts with the best gyms in their area.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-indigo-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-map-marker-alt text-indigo-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Easy Discovery</h3>
                    <p className="text-gray-600 text-center">Find gyms near you with our intuitive search and filtering system.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-indigo-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-calendar-check text-indigo-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Simple Booking</h3>
                    <p className="text-gray-600 text-center">Book memberships and classes with just a few clicks.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-indigo-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-store text-indigo-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Gym Management</h3>
                    <p className="text-gray-600 text-center">Powerful tools for gym owners to manage their business.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-indigo-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-chart-line text-indigo-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Growth Analytics</h3>
                    <p className="text-gray-600 text-center">Detailed insights and analytics to help gyms grow their business.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple steps for both gym seekers and gym owners.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-8 text-center text-indigo-600">For Fitness Enthusiasts</h3>
                  
                  <div className="space-y-12">
                    <div className="flex items-start">
                      <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                        <span>1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Find</h4>
                        <p className="text-gray-600">Search for gyms in your area based on your preferences and requirements.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                        <span>2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Book</h4>
                        <p className="text-gray-600">Choose your membership plan and complete the booking process online.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                        <span>3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Train</h4>
                        <p className="text-gray-600">Visit the gym and start your fitness journey with access to all facilities.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-8 text-center text-indigo-600">For Gym Owners</h3>
                  
                  <div className="space-y-12">
                    <div className="flex items-start">
                      <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                        <span>1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">List</h4>
                        <p className="text-gray-600">Create your gym profile with detailed information, photos, and membership plans.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                        <span>2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Manage</h4>
                        <p className="text-gray-600">Handle bookings, member communications, and payments through our platform.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                        <span>3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Grow</h4>
                        <p className="text-gray-600">Utilize analytics and marketing tools to expand your membership base.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 bg-indigo-600">
            <div className="container mx-auto px-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Fitness Journey?</h2>
              <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">Apply for a gym membership today and take the first step towards a healthier lifestyle.</p>
              <Button 
                onClick={scrollToForm} 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Apply for Gym Membership
              </Button>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-20 bg-white">
            <div className="container mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Users Say</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from people who have transformed their fitness journey with FitConnect.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20fit%20athletic%20young%20woman%20with%20a%20confident%20smile%2C%20natural%20lighting%2C%20neutral%20background%2C%20high%20quality%20portrait%20photography&width=200&height=200&seq=testimonial-1&orientation=squarish" 
                          alt="Sarah Johnson" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="text-gray-600 text-center italic mb-4">"FitConnect made it so easy to find a gym that perfectly matches my schedule and preferences. I've been a member for 6 months now and couldn't be happier!"</p>
                    <h4 className="text-center font-semibold">Sarah Johnson</h4>
                    <p className="text-center text-gray-500 text-sm">Fitness Enthusiast</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20fit%20athletic%20middle-aged%20man%20with%20short%20hair%20and%20a%20friendly%20smile%2C%20natural%20lighting%2C%20neutral%20background%2C%20high%20quality%20portrait%20photography&width=200&height=200&seq=testimonial-2&orientation=squarish" 
                          alt="Michael Chen" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                    <p className="text-gray-600 text-center italic mb-4">"As a gym owner, FitConnect has revolutionized how I manage memberships. The platform's analytics have helped me grow my business by 30% in just one year."</p>
                    <h4 className="text-center font-semibold">Michael Chen</h4>
                    <p className="text-center text-gray-500 text-sm">Gym Owner</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20fit%20athletic%20young%20man%20with%20dark%20skin%20and%20a%20bright%20smile%2C%20natural%20lighting%2C%20neutral%20background%2C%20high%20quality%20portrait%20photography&width=200&height=200&seq=testimonial-3&orientation=squarish" 
                          alt="David Williams" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="flex text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="text-gray-600 text-center italic mb-4">"I travel frequently for work, and FitConnect allows me to find and access quality gyms wherever I go. The seamless booking process is a game-changer!"</p>
                    <h4 className="text-center font-semibold">David Williams</h4>
                    <p className="text-center text-gray-500 text-sm">Business Traveler</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Featured Gyms */}
          <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Gyms</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore some of our top-rated fitness facilities.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://readdy.ai/api/search-image?query=modern%20luxury%20gym%20interior%20with%20state-of-the-art%20equipment%2C%20spacious%20layout%2C%20wooden%20flooring%2C%20large%20windows%20with%20natural%20light%2C%20clean%20and%20professional%20environment%2C%20premium%20fitness%20center&width=400&height=250&seq=gym-1&orientation=landscape" 
                      alt="Elite Fitness Center" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Elite Fitness Center</h3>
                      <div className="flex text-yellow-400 text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span className="text-gray-600 ml-1">4.5</span>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Downtown, New York</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">24/7 Access</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Personal Training</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Spa</span>
                    </div>
                    <p className="text-gray-600 mb-4">A premium fitness experience with state-of-the-art equipment and luxury amenities.</p>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer">View Details</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://readdy.ai/api/search-image?query=crossfit%20gym%20interior%20with%20functional%20training%20equipment%2C%20open%20space%2C%20industrial%20design%2C%20rubber%20flooring%2C%20kettlebells%20and%20ropes%2C%20high%20ceilings%2C%20motivational%20environment&width=400&height=250&seq=gym-2&orientation=landscape" 
                      alt="CrossFit Revolution" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">CrossFit Revolution</h3>
                      <div className="flex text-yellow-400 text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="text-gray-600 ml-1">5.0</span>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Venice Beach, California</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">CrossFit</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Group Classes</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Nutrition</span>
                    </div>
                    <p className="text-gray-600 mb-4">Functional fitness training in a supportive community environment with expert coaches.</p>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer">View Details</Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://readdy.ai/api/search-image?query=yoga%20studio%20interior%20with%20wooden%20floors%2C%20large%20mirrors%2C%20natural%20light%2C%20minimalist%20design%2C%20yoga%20mats%20arranged%20neatly%2C%20plants%2C%20peaceful%20atmosphere%2C%20zen%20environment&width=400&height=250&seq=gym-3&orientation=landscape" 
                      alt="Zen Yoga & Wellness" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">Zen Yoga & Wellness</h3>
                      <div className="flex text-yellow-400 text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="text-gray-600 ml-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-4"><i className="fas fa-map-marker-alt mr-2"></i>Austin, Texas</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Yoga</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Meditation</span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Massage</span>
                    </div>
                    <p className="text-gray-600 mb-4">A tranquil space offering a variety of yoga styles, meditation classes, and wellness services.</p>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer">View Details</Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <Button variant="outline" className="!rounded-button whitespace-nowrap cursor-pointer">
                  View All Gyms <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="form" className="w-full">
          {/* Admission Form */}
          <div id="admission-form" className="pt-24 pb-20 bg-gray-50">
            <div className="container mx-auto px-8">
              <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-indigo-600 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Gym Membership Application</h2>
                  <p className="text-indigo-100">Fill out the form below to apply for a gym membership.</p>
                </div>
                
                <form className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="fullName" className="text-gray-700 mb-1">Full Name</Label>
                      <Input id="fullName" placeholder="John Doe" className="border-gray-300" />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700 mb-1">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 mb-1">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (123) 456-7890" className="border-gray-300" />
                    </div>
                    
                    <div>
                      <Label htmlFor="gym" className="text-gray-700 mb-1">Preferred Gym</Label>
                      <Select>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="Select a gym" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elite">Elite Fitness Center</SelectItem>
                          <SelectItem value="crossfit">CrossFit Revolution</SelectItem>
                          <SelectItem value="zen">Zen Yoga & Wellness</SelectItem>
                          <SelectItem value="power">Power Strength Gym</SelectItem>
                          <SelectItem value="flex">Flex Fitness Club</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label className="text-gray-700 mb-3 block">Membership Plan</Label>
                    <RadioGroup defaultValue="monthly" className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer">Monthly ($49.99/month)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="quarterly" id="quarterly" />
                        <Label htmlFor="quarterly" className="cursor-pointer">Quarterly ($129.99/3 months - Save 15%)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yearly" id="yearly" />
                        <Label htmlFor="yearly" className="cursor-pointer">Yearly ($399.99/year - Save 30%)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="startDate" className="text-gray-700 mb-1">Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-gray-300 !rounded-button",
                            !date && "text-gray-500"
                          )}
                        >
                          <i className="fas fa-calendar-alt mr-2"></i>
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="mb-8">
                    <Label htmlFor="notes" className="text-gray-700 mb-1">Additional Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any specific requirements or health conditions we should know about?" 
                      className="border-gray-300 min-h-[100px]"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-8">
                    <input type="checkbox" id="terms" className="rounded text-indigo-600 focus:ring-indigo-500" />
                    <Label htmlFor="terms" className="text-gray-700 cursor-pointer">
                      I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">FitConnect</h3>
              <p className="mb-4">Connecting fitness enthusiasts with the best gyms worldwide.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Find a Gym</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">List Your Gym</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Membership Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                  <span>123 Fitness Street, New York, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3"></i>
                  <span>info@fitconnect.com</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-white mb-2">Payment Methods</h4>
                <div className="flex space-x-3">
                  <i className="fab fa-cc-visa text-2xl"></i>
                  <i className="fab fa-cc-mastercard text-2xl"></i>
                  <i className="fab fa-cc-amex text-2xl"></i>
                  <i className="fab fa-cc-paypal text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} FitConnect. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Last updated: April 12, 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
