"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Linkedin,
  Menu,
  X,
  Twitter,
  Youtube,
  Target,
  LightbulbIcon,
  Microscope,
  BarChart2,
  Wrench,
  TrendingUp,
  Battery,
  LineChart,
  Shield,
} from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#0d0d0d] text-gray-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-[#0d0d0d]/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center space-x-0 mr-4 z-50" aria-label="Battlytics - Home">
            <Image
              src="/images/new_logo_battlytics.png"
              alt=""
              width={40}
              height={40}
              className="h-8 sm:h-10 w-auto drop-shadow-md"
              priority
            />
            <span className="text-lg sm:text-xl font-semibold whitespace-nowrap">
              <span className="text-white">Batt</span>
              <span className="text-[#00bcd4]">lytics</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            <Link
              href="#solutions"
              className="text-sm font-medium text-gray-300 hover:text-[#00bcd4] transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#data-insights"
              className="text-sm font-medium text-gray-300 hover:text-[#00bcd4] transition-colors"
            >
              Data Insights
            </Link>
            <Link href="#usecases" className="text-sm font-medium text-gray-300 hover:text-[#00bcd4] transition-colors">
              Use Cases
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-[#00bcd4] transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-[#00bcd4] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-[#0d0d0d]/95 flex flex-col items-center justify-center md:hidden z-40">
              <nav className="flex flex-col items-center space-y-8">
                <Link
                  href="#solutions"
                  className="text-xl font-medium text-gray-100 hover:text-[#00bcd4] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="#data-insights"
                  className="text-xl font-medium text-gray-100 hover:text-[#00bcd4] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Data Insights
                </Link>
                <Link
                  href="#usecases"
                  className="text-xl font-medium text-gray-100 hover:text-[#00bcd4] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Use Cases
                </Link>
                <Link
                  href="#about"
                  className="text-xl font-medium text-gray-100 hover:text-[#00bcd4] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-xl font-medium text-gray-100 hover:text-[#00bcd4] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Update button to be more rounded */}
        <section
          id="hero"
          className="hero-grid flex flex-col items-center justify-center min-h-screen py-20 px-4 text-center bg-gradient-to-b from-[#0d0d0d] to-[#111921]"
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Powering Batteries with Intelligence.
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Smarter data. Stronger batteries. Unlock predictive insights with Battlytics.
            </p>
            <Button className="bg-[#00bcd4] hover:bg-[#00acc1] text-black font-semibold px-6 py-5 sm:px-8 sm:py-6 rounded-full text-lg transition-colors">
              Request a Consultation
            </Button>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider relative h-24 bg-gradient-to-b from-[#111921] to-[#0b1c2b] flex items-center justify-center overflow-hidden">
          <div className="absolute w-full max-w-5xl px-4 mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-[#00bcd4]/70 to-transparent"></div>
          </div>
        </div>

        {/* Our Solutions Section - Redesigned */}
        <section id="solutions" className="bg-[#0b1c2b] py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Our Solutions</h2>
              <p className="text-lg text-gray-300 mb-16">
                Precision battery analytics to power innovation, safety, and efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-gradient-to-b from-[#0f2135] to-[#0a1a2a] p-8 rounded-xl shadow-lg border border-gray-800 hover:border-[#00bcd4] transition-all">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#00bcd4]/30 to-[#00bcd4]/10 p-4 rounded-full shadow-md">
                    <Battery className="text-[#00bcd4] w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center">Battery Health Monitoring</h3>
                <p className="text-gray-300 text-center text-sm">
                  In-depth analysis to monitor and optimize battery health, ensuring longevity and efficiency for your
                  energy solutions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-b from-[#0f2135] to-[#0a1a2a] p-8 rounded-xl shadow-lg border border-gray-800 hover:border-[#00bcd4] transition-all">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#00bcd4]/30 to-[#00bcd4]/10 p-4 rounded-full shadow-md">
                    <BarChart2 className="text-[#00bcd4] w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center">Data-Driven Solutions</h3>
                <p className="text-gray-300 text-center text-sm">
                  Cutting-edge data analytics to enhance battery performance and decision-making processes for optimal
                  outcomes.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-b from-[#0f2135] to-[#0a1a2a] p-8 rounded-xl shadow-lg border border-gray-800 hover:border-[#00bcd4] transition-all">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#00bcd4]/30 to-[#00bcd4]/10 p-4 rounded-full shadow-md">
                    <LineChart className="text-[#00bcd4] w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center">Predictive Maintenance</h3>
                <p className="text-gray-300 text-center text-sm">
                  Leverage predictive analytics to anticipate maintenance needs, reducing downtime and extending battery
                  system lifespan.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-b from-[#0f2135] to-[#0a1a2a] p-8 rounded-xl shadow-lg border border-gray-800 hover:border-[#00bcd4] transition-all">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#00bcd4]/30 to-[#00bcd4]/10 p-4 rounded-full shadow-md">
                    <Shield className="text-[#00bcd4] w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white text-center">Custom R&D Reporting</h3>
                <p className="text-gray-300 text-center text-sm">
                  Tailored reports providing actionable insights, helping you make informed decisions for your battery
                  operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Battery Data Insights Section */}
        <section id="data-insights" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Battery Data Insights</h2>
              <p className="mt-4 text-lg text-gray-300">
                Comprehensive case-driven tools to extract intelligence from battery test data.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="bg-gray-900 border-gray-800 text-gray-100 hover:border-[#00bcd4] transition-all rounded-xl">
                <CardHeader>
                  <CardTitle className="text-[#00bcd4]">Battery Life Prediction Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/battery_life_prediction.png"
                    alt="Battery Life Prediction Models"
                    width={400}
                    height={200}
                    className="mb-4 rounded-md object-cover"
                  />
                  <p className="text-sm text-gray-300">
                    We leveraged publicly available battery cycling datasets to develop predictive models that forecast
                    battery degradation and lifespan. Our insights help companies anticipate maintenance needs and
                    extend battery service life efficiently.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-gray-100 hover:border-[#00bcd4] transition-all rounded-xl">
                <CardHeader>
                  <CardTitle className="text-[#00bcd4]">Charge/Discharge Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/charge_discharge_analysis.jpeg"
                    alt="Charge/Discharge Pattern Analysis"
                    width={400}
                    height={200}
                    className="mb-4 rounded-md object-cover"
                  />
                  <p className="text-sm text-gray-300">
                    By analysing charge-discharge curves, voltage profiles, and impedance growth over time, Battlytics
                    identifies early warning signs of capacity fade, resistance build-up, and thermal issues, enabling
                    proactive battery management strategies.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 text-gray-100 hover:border-[#00bcd4] transition-all rounded-xl">
                <CardHeader>
                  <CardTitle className="text-[#00bcd4]">Battery Performance Benchmarking</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/battery_performance_benchmark.jpeg"
                    alt="Battery Performance Benchmarking"
                    width={400}
                    height={200}
                    className="mb-4 rounded-md object-cover"
                  />
                  <p className="text-sm text-gray-300">
                    We benchmark multiple battery chemistries across key performance indicators, including energy
                    density, cycle life, and degradation rates, to provide data-driven recommendations for energy
                    storage, electric vehicles, and grid-scale solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section - Redesigned to two-column layout */}
        <section id="usecases" className="py-24 bg-gradient-to-b from-[#0a1520] to-[#0d0d0d]">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Use Cases</h2>
              <p className="text-lg text-gray-300">
                Real-world applications of Battlytics analytics for battery performance, diagnostics, and R&D workflows.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-b from-[#0f2135] to-[#0a1a2a] p-8 rounded-xl border border-gray-800 hover:border-[#00bcd4] transition-all shadow-lg">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-br from-[#00bcd4]/30 to-[#00bcd4]/10 p-3 rounded-full mr-4 shadow-md">
                        <Battery className="text-[#00bcd4] w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">SoH Tracking for Battery Labs</h3>
                        <ul className="text-gray-300 space-y-2 list-disc pl-5">
                          <li>Identified capacity fade thresholds in NASA battery datasets</li>
                          <li>Predicted Remaining Useful Life (RUL) with up to 92% accuracy</li>
                          <li>Developed early warning indicators for cell degradation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-[#0f2135] to-[#0a1a2a] p-8 rounded-xl border border-gray-800 hover:border-[#00bcd4] transition-all shadow-lg">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-br from-[#00bcd4]/30 to-[#00bcd4]/10 p-3 rounded-full mr-4 shadow-md">
                        <Shield className="text-[#00bcd4] w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Safety Risk Assessment</h3>
                        <ul className="text-gray-300 space-y-2 list-disc pl-5">
                          <li>Thermal runaway prediction models for lithium-ion cells</li>
                          <li>Identified voltage anomalies correlated with safety incidents</li>
                          <li>Created risk scoring system for battery pack configurations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-b from-[#0f2135] to-[#0a1a2a] p-8 rounded-xl border border-gray-800 hover:border-[#00bcd4] transition-all shadow-lg">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-br from-[#00bcd4]/30 to-[#00bcd4]/10 p-3 rounded-full mr-4 shadow-md">
                        <LineChart className="text-[#00bcd4] w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Charge/Discharge Pattern Analysis</h3>
                        <ul className="text-gray-300 space-y-2 list-disc pl-5">
                          <li>Analyzed impedance growth trends in aging battery cells</li>
                          <li>Assessed degradation and repurposing potential in second-life batteries</li>
                          <li>Optimized charging protocols to extend cycle life by 15%</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-[#0f2135] to-[#0a1a2a] p-8 rounded-xl border border-gray-800 hover:border-[#00bcd4] transition-all shadow-lg">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-br from-[#00bcd4]/30 to-[#00bcd4]/10 p-3 rounded-full mr-4 shadow-md">
                        <BarChart2 className="text-[#00bcd4] w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">IR Benchmarking in Parallel Packs</h3>
                        <ul className="text-gray-300 space-y-2 list-disc pl-5">
                          <li>Created internal resistance heatmaps across 20-cell test configurations</li>
                          <li>Identified early cell failure risks before capacity loss</li>
                          <li>Improved maintenance planning and reduced downtime by 30%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h2>
              <p className="mt-4 text-lg text-[#00bcd4] font-medium">Battery Data Analytics, Done Right</p>
            </div>
            <div className="mt-10 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Battlytics is a UK-based data analytics consultancy focused on helping battery professionals extract
                actionable insights from real test data. Our services are designed for battery researchers, developers,
                and engineers who want to make smarter, data-informed decisions about battery performance, health, and
                lifetime.
              </p>
              <p className="text-gray-300 mb-10">
                We specialize in interpreting GCD, CV, EIS, and impedance data from lithium-ion and other
                electrochemical systems. Using well-structured workflows, benchmark datasets, and custom diagnostic
                reports, we help you visualize, analyze, and understand how your batteries are performing—and what comes
                next.
              </p>

              <div className="mb-10 bg-gray-900 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center mb-4">
                  <Target className="text-[#00bcd4] mr-3 h-6 w-6" />
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <blockquote className="border-l-4 border-[#00bcd4] pl-4 italic text-gray-300">
                  "To simplify battery data analytics and make predictive battery insights accessible, accurate, and
                  impactful for R&D teams, labs, and clean-tech startups."
                </blockquote>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <LightbulbIcon className="text-[#00bcd4] mr-3 h-6 w-6" />
                  <h3 className="text-xl font-bold text-white">Why Battyltics?</h3>
                </div>
                <p className="text-gray-400 mb-6 font-medium">What Makes Us Different</p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
                    <div className="flex items-start mb-3">
                      <Microscope className="text-[#00bcd4] mr-3 h-5 w-5 mt-1" />
                      <h4 className="font-semibold text-white">Electrochemistry-Led Expertise</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      We bring domain-specific understanding of electrochemical systems to every project—not just
                      generic data dashboards.
                    </p>
                  </div>

                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
                    <div className="flex items-start mb-3">
                      <BarChart2 className="text-[#00bcd4] mr-3 h-5 w-5 mt-1" />
                      <h4 className="font-semibold text-white">Real-World Data Interpretation</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      We use open and real datasets to build insights into battery degradation, SoH (State of Health),
                      RUL (Remaining Useful Life), and internal resistance changes—without requiring cloud
                      infrastructure or lab automation.
                    </p>
                  </div>

                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
                    <div className="flex items-start mb-3">
                      <Wrench className="text-[#00bcd4] mr-3 h-5 w-5 mt-1" />
                      <h4 className="font-semibold text-white">Toolkits That Teach and Serve</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      From Python notebooks to Power BI dashboards, our outputs don't just deliver insight—they help
                      your team learn how to repeat and scale it.
                    </p>
                  </div>

                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
                    <div className="flex items-start mb-3">
                      <TrendingUp className="text-[#00bcd4] mr-3 h-5 w-5 mt-1" />
                      <h4 className="font-semibold text-white">Insights You Can Trust</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Our work is guided by transparency, clarity, and reproducibility. No black boxes—just
                      well-documented, collaborative analytics that help drive better battery decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW Contact Section - Completely redesigned */}
        <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-[#00bcd4] to-[#00e5ff] bg-clip-text text-transparent sm:text-5xl mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
                Ready to start your battery intelligence journey? Contact us today and let's explore how we can help you
                unlock smarter battery insights.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#1a1a1a] border-gray-800 text-gray-100 placeholder:text-gray-500 rounded-xl h-14 px-4"
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#1a1a1a] border-gray-800 text-gray-100 placeholder:text-gray-500 rounded-xl h-14 px-4"
                />

                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-[#1a1a1a] border-gray-800 text-gray-100 placeholder:text-gray-500 rounded-xl px-4 py-3"
                />

                <Button className="w-full h-14 rounded-full font-medium text-black bg-gradient-to-r from-[#00bcd4] to-[#00e5ff] hover:opacity-90 transition-opacity text-base">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Remove CTA Section - per request */}
      </main>

      {/* NEW Footer - Completely redesigned */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">© 2025 Battlytics Solutions Ltd. All rights reserved.</div>

            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
