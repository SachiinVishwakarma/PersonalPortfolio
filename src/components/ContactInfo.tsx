import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Instagram
} from "lucide-react";

export const contactInfo = {
  email: "sachinvishw193@gmail.com",
  phone: "+91 7209823085",
  location: "Jharkhand, India",

  socials: [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/SachiinVishwakarma",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/SachiinVishwakarma",
    },
    {
      label: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/imsachiiin",
    },
  ],
};

export const contactItems = [
  {
    label: "Email",
    value: contactInfo.email,
    icon: Mail,
  },
  {
    label: "Location",
    value: contactInfo.location,
    icon: MapPin,
  },
  {
    label: "Phone",
    value: contactInfo.phone,
    icon: Phone,
  },
];