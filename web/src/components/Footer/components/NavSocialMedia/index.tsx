import { socialMedias } from "../../../../data/navigations";
import { ContainerSocialMediaNavigation } from "./style";

export default function NavSocialMedia() {
  return (
    <ContainerSocialMediaNavigation>
      {socialMedias.map((socialMedia) => (
        <a key={socialMedia.link} href={socialMedia.link}>
          <img src={socialMedia.icon} alt="social media icon" />
        </a>
      ))}
    </ContainerSocialMediaNavigation>
  );
}
