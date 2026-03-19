import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const footerLinks = [
    ["FAQs", "Acts and Regulations", "Circulars", "RTI"],
    ["Investor Charter", "Annual Reports", "Website Policies", "Tenders"],
    ["List of Holidays", "Disclosures", "Careers", "Contact Us"],
  ];

  return (
    <footer className="w-full bg-foreground text-background pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Link Columns */}
        {footerLinks.map((col, i) => (
          <ul key={i} className="space-y-4">
            {col.map((link) => (
              <li
                key={link}
                className="flex items-center gap-2 text-sm hover:translate-x-1 transition-transform cursor-pointer opacity-80 hover:opacity-100"
              >
                <ChevronRight className="w-3 h-3" /> {link}
              </li>
            ))}
          </ul>
        ))}

        {/* Apps & Socials */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            <div className="text-center">
              <div className="bg-background p-2 rounded-lg mb-2 text-foreground text-xs">
                [QR Code]
              </div>
              <span className="text-xs uppercase">iOS</span>
            </div>
            <div className="text-center">
              <div className="bg-background p-2 rounded-lg mb-2 text-foreground text-xs">
                [QR Code]
              </div>
              <span className="text-xs uppercase">Android</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm mb-4">Social Connections</p>
            <div className="flex gap-3 justify-center md:justify-end">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-background p-2 rounded-full text-foreground hover:bg-orange-400 hover:text-white cursor-pointer transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs gap-4">
          <p className="opacity-75">
            Copyright © 2024 National Pension System Trust (NPS Trust). All
            rights reserved
          </p>
          <div className="flex items-center gap-8">
            <p className="opacity-75">Last Updated: 20 January 2026</p>
            <p className="opacity-75">
              Visitors: <span className="text-lg font-mono">0050593564</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 rounded-full bg-orange-600 hover:bg-orange-700 h-12 w-12 shadow-xl"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </footer>
  );
}
