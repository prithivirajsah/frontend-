import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "../services/base44Client";
import { MapPin, Mail, Phone, Car } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export default function Footer() {
  const { data: footerData, isLoading } = useQuery({
    queryKey: ['footer'],
    queryFn: async () => {
      const data = await base44.entities.Footer.list();
      return data[0] || null;
    },
  });

  if (isLoading) {
    return (
      <footer className="bg-gradient-to-br from-slate-50 to-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Skeleton className="h-32 w-full" />
        </div>
      </footer>
    );
  }

  if (!footerData) return null;

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Section - Logo & Contact Info */}
          <div className="lg:col-span-7 space-y-8">
            {/* Company Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Car className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {footerData.company_name}
              </h2>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <a 
                    href="tel:+9779815836412"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    +977 9815836412
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a 
                    href="mailto:prithivirajsah584@gmail.com"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    prithivirajsah584@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{footerData.address}</p>
                </div>
              </div>  
            </div>

            {/* Navigation Links */}
            {footerData.navigation_links?.length > 0 && (
              <div className="pt-4">
                <nav className="flex flex-wrap gap-x-8 gap-y-3">
                  {footerData.navigation_links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Right Section - About Us */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About Us</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {footerData.about_text}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            {footerData.legal_links?.length > 0 && (
              <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                {footerData.legal_links.map((link, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={link.url}
                      className="text-xs text-gray-500 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                    {index < footerData.legal_links.length - 1 && (
                      <span className="text-gray-300 hidden md:inline">|</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}

            {/* Copyright */}
            <p className="text-xs text-gray-500">
              {footerData.copyright_text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
