import React from 'react';
import { FaYoutube, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
  },
  {
    id: 3,
    url: '/contact',
    text: 'Contact',
  },
  {
    id: 4,
    url: '/profile',
    text: 'Profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.Facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.Linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.Youtube.com',
    icon: <FaYoutube />,
  },
];