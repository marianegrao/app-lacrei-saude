import { InstagramLogo, FacebookLogo, LinkedinLogo } from "phosphor-react";
import { ContainerSocialMediaNavigation } from "./style";

export default function NavSocialMedia() {
  const socialMedias = [
    { link: "https://www.instagram.com/lacrei.saude/", component: <InstagramLogo /> },
    { link: "https://www.facebook.com/lacrei.saude", component: <FacebookLogo /> },
    { link: "https://www.linkedin.com/company/lacrei/", component: <LinkedinLogo /> },
  ];
  return (
    <ContainerSocialMediaNavigation>
      {socialMedias.map((socialMedia) => (
        <a key={socialMedia.link} href={socialMedia.link}>
          {socialMedia.component}
        </a>
      ))}
    </ContainerSocialMediaNavigation>
  );
}
