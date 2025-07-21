import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, Calendar } from "lucide-react";

export default function RentalsPage() {
  const rentalPackages = [
    {
      name: "Daily Rental",
      price: 89,
      duration: "Per Day",
      features: [
        "4-seater golf cart",
        "Full battery charge",
        "Basic safety equipment",
        "Local area coverage"
      ],
      popular: false
    },
    {
      name: "Weekly Rental",
      price: 399,
      duration: "Per Week",
      features: [
        "4-seater golf cart",
        "Unlimited charging",
        "Premium safety package",
        "Extended area coverage",
        "24/7 support"
      ],
      popular: true
    },
    {
      name: "Monthly Rental",
      price: 1299,
      duration: "Per Month",
      features: [
        "Choice of golf cart",
        "Maintenance included",
        "Premium safety package",
        "State-wide coverage",
        "Priority support",
        "Customization options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Golf Cart Rentals</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Flexible rental options for your golf cart needs. Perfect for events, 
            vacations, or trying before you buy.
          </p>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            Reserve Now
          </Button>
        </div>
      </section>

      {/* Rental Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Rental Packages</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect rental package for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rentalPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-2 border-blue-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600">
                    ${pkg.price}
                    <span className="text-lg text-gray-600 font-normal">/{pkg.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600">
              Simple steps to get your golf cart rental
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Reserve</h3>
              <p className="text-gray-600">
                Choose your dates and preferred golf cart model online or by phone
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Pickup</h3>
              <p className="text-gray-600">
                Pick up your cart at our location or arrange delivery service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Enjoy</h3>
              <p className="text-gray-600">
                Use your golf cart for recreation, events, or transportation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">4. Return</h3>
              <p className="text-gray-600">
                Return the cart at the agreed time or arrange pickup service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Rent Your Golf Cart?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to check availability and make your reservation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              Call 1-844-844-6638
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Reserve Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}