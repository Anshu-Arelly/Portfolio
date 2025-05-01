import { Instagram, Linkedin } from 'lucide-react';

interface SocialIconsProps {
  size?: number;
  color?: string;
}

const SocialIcons = ({ size = 20, color }: SocialIconsProps) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={size} />,
      url: 'https://linkedin.com/in/anshuarelly',
      ariaLabel: 'Visit Anshu on LinkedIn'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={size} />,
      url: 'https://instagram.com/anshuarelly?igshid=YmMyMTA2M2Y=',
      ariaLabel: 'Visit Anshu on Instagram'
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className={`transition-transform duration-300 hover:scale-110 ${
            color === 'white' ? 'text-white hover:text-[#ff6100]' : 'text-gray-700 hover:text-[#ff6100]'
          }`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;