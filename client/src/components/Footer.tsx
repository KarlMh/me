import { Heart } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/karl-mehanna-363569263",
    icon: SiLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/KarlMh",
    icon: SiGithub,
  },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>by Karl Mehanna</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-elevate p-2 rounded-md"
                data-testid={`footer-link-${link.name.toLowerCase()}`}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm font-mono">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
