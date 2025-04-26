import { useMediaQuery } from "react-responsive";

export const useResponsiveMedia = ({ mobile, tablet, desktop }) => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    return isDesktop ? desktop : isTablet ? tablet : mobile;
}