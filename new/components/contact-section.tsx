"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "vadavatha.s@northeastern.edu",
      link: "mailto:vadavatha.s@northeastern.edu",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (217) 305-5622",
      link: "tel:+12173055622",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Boston, MA",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-orange-500/5 to-red-600/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 border-orange-500 text-orange-500"
          >
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500">
                Contact Information
              </h3>
              <p className="text-gray-300">
                Feel free to reach out through any of the following channels.
                I'm always open to discussing new projects, creative ideas, or
                opportunities.
              </p>

              <div className="space-y-4 mt-8">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900 border-0 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all"
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 p-3 rounded-full text-orange-500">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-200">
                          {item.title}
                        </h4>
                        <a
                          href={item.link}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-900 border-0 overflow-hidden relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg blur opacity-30"></div>
              <CardContent className="p-6 relative">
                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Send a Message
                </h3>
                {isSubmitted ? (
                  <div className="bg-green-900/30 text-green-400 p-4 rounded-md border border-green-700">
                    Thank you for your message! I'll get back to you as soon as
                    possible.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="bg-gray-800 border-gray-700 focus:border-orange-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white border-none hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
