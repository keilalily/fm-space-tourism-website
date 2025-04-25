import iconClose from './shared/icon-close.svg';
import iconHamburger from './shared/icon-hamburger.svg';
import logo from './shared/logo.svg';

import homeMobile from './home/background-home-mobile.jpg';
import homeTablet from './home/background-home-tablet.jpg';
import homeDesktop from './home/background-home-desktop.jpg';

import destinationMobile from './destination/background-destination-mobile.jpg';
import destinationTablet from './destination/background-destination-tablet.jpg';
import destinationDesktop from './destination/background-destination-desktop.jpg';

import moon from './destination/image-moon.webp';
import europa from './destination/image-europa.webp';
import mars from './destination/image-mars.webp';
import titan from './destination/image-titan.webp';

export const shared = {
    iconClose,
    iconHamburger,
    logo,
};

export const backgrounds = {
    home: {
        mobile: homeMobile,
        tablet: homeTablet,
        desktop: homeDesktop
    },
    destination: {
        mobile: destinationMobile,
        tablet: destinationTablet,
        desktop: destinationDesktop
    }
};

export const destinationImages = {
    moon,
    mars,
    europa,
    titan
};