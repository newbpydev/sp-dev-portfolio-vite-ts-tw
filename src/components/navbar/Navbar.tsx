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
    <div className="flex flex-col items-center space-y-5 mt-5 md:mt-7 md:mx-7 md:flex-row md:justify-between md:space-y-0 lg:mt-10 lg:mx-40 ">
      <span className="text-base font-bold md:text-md lg:text-xm">
        adamkeyes
      </span>

      <div className="flex justify-between w-36 md:w-48 ">
        {renderSocialLinks && renderSocialLinks}
      </div>
    </div>
  );
}

export default Navbar;
