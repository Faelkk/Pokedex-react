import {
  Head,
  HeaderCenter,
  IconLi,
  IconSocial,
  MediaSocials,
  TitleLogo,
} from "./Style";
import gitHubIcon from "../../assets/icon-github.svg";
import linkedinIcon from "../../assets/icon-linkedin.svg";
import instaIcon from "../../assets/icon-instagram.svg";
const Header = () => {
  return (
    <Head>
      <HeaderCenter>
        <TitleLogo>Pokedex</TitleLogo>
        <MediaSocials>
          <IconLi href="https://github.com/Faelkk" target="_blank">
            <IconSocial src={gitHubIcon} alt="Icone do github" />
          </IconLi>
          <IconLi
            href="https://www.linkedin.com/in/rafael-achtenberg-7a4b12284/"
            target="_blank"
          >
            <IconSocial src={linkedinIcon} alt="Icone do linkedin" />
          </IconLi>
          <IconLi
            href="https://www.instagram.com/achten.rafael/"
            target="_blank"
          >
            <IconSocial src={instaIcon} alt="Icone do instagram" />
          </IconLi>
        </MediaSocials>
      </HeaderCenter>
    </Head>
  );
};

export default Header;
