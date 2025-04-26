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

import technologyMobile from './technology/background-technology-mobile.jpg';
import technologyTablet from './technology/background-technology-tablet.jpg';
import technologyDesktop from './technology/background-technology-desktop.jpg';

import moon from './destination/image-moon.webp';
import europa from './destination/image-europa.webp';
import mars from './destination/image-mars.webp';
import titan from './destination/image-titan.webp';

import douglas from './crew/image-douglas-hurley.webp';
import mark from './crew/image-mark-shuttleworth.webp';
import victor from './crew/image-victor-glover.webp';
import anousheh from './crew/image-anousheh-ansari.webp';

import launchVehicleLandscape from './technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePortrait from './technology/image-launch-vehicle-portrait.jpg';
import spaceportLandscape from './technology/image-spaceport-landscape.jpg';
import spaceportPortrait from './technology/image-spaceport-portrait.jpg';
import spaceCapsuleLandscape from './technology/image-space-capsule-landscape.jpg';
import spaceCapsulePortrait from './technology/image-space-capsule-portrait.jpg';

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
    },
    technology: {
        mobile: technologyMobile,
        tablet: technologyTablet,
        desktop: technologyDesktop
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

export const technologyImages = {
    launchVehicleLandscape,
    launchVehiclePortrait,
    spaceportLandscape,
    spaceportPortrait,
    spaceCapsuleLandscape,
    spaceCapsulePortrait
}