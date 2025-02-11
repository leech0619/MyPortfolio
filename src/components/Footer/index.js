import React from 'react';
import { 
    FooterContainer, 
    FooterWrapper, 
    Logo, 
    Nav, 
    NavLink, 
    SocialMediaIcons, 
    SocialMediaIcon, 
    Copyright 
} from './FooterStyle';

//import FacebookIcon from '@mui/icons-material/Facebook';
//import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
//import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>&lt; Chorng Huah &gt;</Logo>
        <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
            <SocialMediaIcon href={Bio.github} target="display"><GithubIcon /></SocialMediaIcon>
            <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
            &copy; 2025 Lee Chorng Huah. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
