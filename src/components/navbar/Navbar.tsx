import { useEffect, useState } from "react";
import SocialLinkIcon, { SocialSite } from "../ui/social/SocialLinkIcon";

// * TYPES

// * COMPONENT: Navbar
function Navbar() {
  const [socialSites, setSocialSites] = useState<SocialSite[]>();

  useEffect(() => {
    fetch("/data/social-sites.json")
      .then((res) => res.json())
      .then((data) => setSocialSites(data.sites));
  }, []);

  const renderSocialLinks = socialSites?.map((site) => (
    <SocialLinkIcon key={site.icon} socialSite={site} />
  ));

  // @ Output
  return (
    <header className="flex flex-col items-center">
      <span className="text-base font-bold mb-5">adamkeyes</span>

      <div className="flex justify-between w-36 ">
        {renderSocialLinks && renderSocialLinks}
      </div>
    </header>
  );
}

export default Navbar;
