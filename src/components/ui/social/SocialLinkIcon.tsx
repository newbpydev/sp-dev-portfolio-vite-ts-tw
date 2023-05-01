// * TYPES
export interface SocialSite {
  icon: string;
  href: string;
  width: number;
  height: number;
  title: string;
}

interface Props {
  socialSite: SocialSite;
}

// * COMPONENT: SocialLinkIcon
function SocialLinkIcon({ socialSite }: Props) {
  const src = `/images/icon-${socialSite.icon}`;

  // @ Output
  return <img src={src} alt={socialSite.title} className="w-5 md:w-6" />;
}

export default SocialLinkIcon;
