import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Sparkles, Heart, Shield, Truck, Gift } from 'lucide-react'
import Link from "next/link"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-background to-secondary pt-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-chart-1 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
            <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-chart-2 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full border-2 border-primary">
                <p className="text-sm font-bold text-primary uppercase tracking-wider">Discover Joy Through Play</p>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-balance">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-chart-1 to-chart-2">
                  Kraftery
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold mb-4 text-foreground/90 text-balance">
                Where Imagination Comes to Life
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Curated collection of educational, creative, and imaginative toys that inspire wonder and learning in every child
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 font-bold rounded-full">
                  Shop Now
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-bold rounded-full">
                  Explore Collections
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-foreground/30 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        <section id="categories" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Popular Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore our handpicked collections designed for every age and interest
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Educational", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop", desc: "Learn & Grow" },
                { name: "Creative Arts", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop", desc: "Express Yourself" },
                { name: "Building Blocks", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop", desc: "Build Dreams" },
                { name: "Outdoor Play", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop", desc: "Active Fun" }
              ].map((category, idx) => (
                <Card key={idx} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2">
                  <div className="h-48 relative overflow-hidden bg-secondary">
                    <img 
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-black mb-2">{category.name}</h3>
                    <p className="text-muted-foreground font-medium">{category.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Bestsellers</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Most Loved Toys</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover what parents and kids are raving about this season
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Wonder Builder Set", price: "$49.99", rating: 5, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop", tag: "Ages 3+" },
                { name: "Creative Art Studio", price: "$34.99", rating: 5, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop", tag: "Ages 5+" },
                { name: "Smart Learning Tablet", price: "$79.99", rating: 4, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", tag: "Ages 4+" },
                { name: "Adventure Playset", price: "$59.99", rating: 5, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop", tag: "Ages 6+" },
                { name: "Musical Instruments Kit", price: "$44.99", rating: 4, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop", tag: "Ages 3+" },
                { name: "Science Explorer Lab", price: "$64.99", rating: 5, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop", tag: "Ages 7+" }
              ].map((product, idx) => (
                <Card key={idx} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2">
                  <div className="relative overflow-hidden bg-gradient-to-br from-accent to-secondary">
                    <img 
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      {product.tag}
                    </div>
                    <button className="absolute top-4 left-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-chart-4 text-chart-4" />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-balance">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      
                      <Button size="sm" className="font-bold rounded-full">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-6 px-6 py-2 bg-chart-2/10 rounded-full border-2 border-chart-2">
                  <p className="text-sm font-bold text-chart-2 uppercase tracking-wider">Our Story</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
                  Crafting Joy Since 2010
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                  At Kraftery, we believe every child deserves toys that spark imagination, encourage learning, and create lasting memories. For over a decade, we've been carefully curating the world's best educational and creative toys.
                </p>
                <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                  Our mission is simple: provide parents with safe, high-quality toys that support their child's development while bringing endless hours of joy and discovery.
                </p>
                <Button size="lg" className="font-bold rounded-full">
                  Learn More About Us
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border-4 border-primary shadow-2xl">
                  <img 
                    src="/happy-children-playing-with-colorful-toys.jpg"
                    alt="Children playing with toys"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-chart-1 rounded-full opacity-20 blur-2xl" />
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-chart-2 rounded-full opacity-20 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Why Parents Trust Kraftery</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
                We're committed to providing the best experience for you and your children
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Safety First", desc: "All toys meet international safety standards and certifications" },
                { icon: Star, title: "Quality Guarantee", desc: "Premium materials and rigorous quality control on every product" },
                { icon: Truck, title: "Fast Shipping", desc: "Free delivery on orders over $50, worldwide shipping available" },
                { icon: Gift, title: "Gift Wrapping", desc: "Complimentary gift wrapping for all orders, perfect for any occasion" }
              ].map((feature, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary-foreground/10 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-black mb-3">{feature.title}</h3>
                  <p className="opacity-90 text-pretty leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Shop by Age</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Find the perfect toys for your child's developmental stage
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { age: "0-12m", label: "Infants", color: "bg-chart-1" },
                { age: "1-2y", label: "Toddlers", color: "bg-chart-2" },
                { age: "3-4y", label: "Preschool", color: "bg-chart-3" },
                { age: "5-7y", label: "Early School", color: "bg-chart-4" },
                { age: "8-11y", label: "Tweens", color: "bg-chart-5" },
                { age: "12+y", label: "Teens", color: "bg-primary" }
              ].map((group, idx) => (
                <button key={idx} className="group p-6 rounded-2xl border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-16 h-16 mx-auto mb-4 ${group.color} rounded-full flex items-center justify-center text-white font-black text-lg group-hover:scale-110 transition-transform`}>
                    {group.age}
                  </div>
                  <p className="font-bold text-sm">{group.label}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-chart-4/10 rounded-full">
                <Heart className="h-5 w-5 text-chart-4 fill-chart-4" />
                <span className="text-sm font-bold text-chart-4 uppercase tracking-wider">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">What Parents Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Real stories from happy families
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Emily Rodriguez", role: "Mother of 2", text: "Kraftery has been our go-to for birthday and holiday gifts. The quality is outstanding, and my kids learn while playing!", rating: 5 },
                { name: "David Chen", role: "Father of 3", text: "Finally found a toy store that shares our values. Educational, safe, and fun - everything we look for as parents.", rating: 5 },
                { name: "Amanda Williams", role: "Preschool Teacher", text: "I recommend Kraftery to all parents in my class. These toys genuinely support child development and creativity.", rating: 5 }
              ].map((testimonial, idx) => (
                <Card key={idx} className="border-2">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-chart-4 text-chart-4" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-chart-1 to-chart-2 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">Join the Kraftery Family</h2>
              <p className="text-lg mb-8 opacity-90 text-pretty">
                Subscribe to get exclusive offers, early access to new products, and parenting tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-foreground font-medium focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <Button size="lg" className="bg-white text-chart-1 hover:bg-white/90 font-bold rounded-full px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-75">No spam, unsubscribe anytime. We respect your privacy.</p>
            </div>
          </div>
        </section>

        <footer id="contact" className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-3xl font-black mb-4">Kraftery</h3>
                <p className="opacity-90 mb-6 text-pretty leading-relaxed">
                  Inspiring young minds through creative and educational play since 2010.
                </p>
                <div className="flex gap-4">
                  {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                    <button key={social} className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 bg-primary-foreground/80 rounded-full" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-black text-lg mb-4">Shop</h4>
                <ul className="space-y-3">
                  {['New Arrivals', 'Bestsellers', 'Sale Items', 'Gift Cards', 'All Products'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-black text-lg mb-4">Support</h4>
                <ul className="space-y-3">
                  {['Contact Us', 'Shipping Info', 'Returns', 'FAQ', 'Track Order'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-black text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  {['About Us', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8 text-center">
              <p className="opacity-75">&copy; 2025 Kraftery. All rights reserved. Made with ❤️ for children worldwide.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
