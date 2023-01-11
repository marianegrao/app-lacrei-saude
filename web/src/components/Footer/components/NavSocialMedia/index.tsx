import { InstagramLogo, FacebookLogo, LinkedinLogo } from "phosphor-react";
import { socialMedias } from "../../../../data/navigations";
import { ContainerSocialMediaNavigation } from "./style";

export default function NavSocialMedia() {
  function verifyIfLinkIncludesLogosComponents(link: string) {
    if (link.includes("instagram")) {
      return <InstagramLogo />;
    } else if (link.includes("facebook")) {
      return <FacebookLogo />;
    } else {
      return <LinkedinLogo />;
    }
  }
  return (
    <ContainerSocialMediaNavigation>
      {socialMedias.map((socialMedia) => (
        <a key={socialMedia.link} href={socialMedia.link}>
          {verifyIfLinkIncludesLogosComponents(socialMedia.link)}
        </a>
      ))}
    </ContainerSocialMediaNavigation>
  );
}
