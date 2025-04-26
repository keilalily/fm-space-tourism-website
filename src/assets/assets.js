import iconClose from './shared/icon-close.svg';
import iconHamburger from './shared/icon-hamburger.svg';
import logo from './shared/logo.svg';

import homeMobile from './home/background-home-mobile.jpg';
import homeTablet from './home/background-home-tablet.jpg';
import homeDesktop from './home/background-home-desktop.jpg';

import destinationMobile from './destination/background-destination-mobile.jpg';
import destinationTablet from './destination/background-destination-tablet.jpg';
import destinationDesktop from './destination/background-destination-desktop.jpg';

import crewMobile from './crew/background-crew-mobile.jpg';
import crewTablet from './crew/background-crew-tablet.jpg';
import crewDesktop from './crew/background-crew-desktop.jpg';

import moon from './destination/image-moon.webp';
import europa from './destination/image-europa.webp';
import mars from './destination/image-mars.webp';
import titan from './destination/image-titan.webp';

import douglas from './crew/image-douglas-hurley.webp';
import mark from './crew/image-mark-shuttleworth.webp';
import victor from './crew/image-victor-glover.webp';
import anousheh from './crew/image-anousheh-ansari.webp';

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
    },
    crew: {
        mobile: crewMobile,
        tablet: crewTablet,
        desktop: crewDesktop
    }
};

export const destinationImages = {
    moon,
    mars,
    europa,
    titan
};

export const crewImages = {
    douglas,
    mark,
    victor,
    anousheh
};