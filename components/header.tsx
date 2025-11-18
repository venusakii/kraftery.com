'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X, Search } from 'lucide-react'
import Link from "next/link"
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-1 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🧸</span>
            </div>
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-1">
              Kraftery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#categories" className="font-bold hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="#products" className="font-bold hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#about" className="font-bold hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="font-bold hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="font-bold hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
              <span className="sr-only">Cart</span>
            </Button>
            <Button className="font-bold rounded-full">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t-2 border-border animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              <Link
                href="#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-lg hover:text-primary transition-colors py-2"
              >
                Categories
              </Link>
              <Link
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-lg hover:text-primary transition-colors py-2"
              >
                Products
              </Link>
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-lg hover:text-primary transition-colors py-2"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-lg hover:text-primary transition-colors py-2"
              >
                Reviews
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-lg hover:text-primary transition-colors py-2"
              >
                Contact
              </Link>
              <div className="flex gap-3 pt-4 border-t-2 border-border">
                <Button variant="outline" size="icon" className="rounded-full flex-1">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full flex-1 relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    0
                  </span>
                </Button>
                <Button className="font-bold rounded-full flex-1">
                  Shop Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
