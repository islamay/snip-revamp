interface devices {
    isMobile: boolean,
    isTablet: boolean,
    isLaptop: boolean,
    isDesktop: boolean
}

const device = (vw: number): devices => {
    return {
        isMobile: vw <= 480,
        isTablet: vw > 480 && vw <= 768,
        isLaptop: vw > 768 && vw <= 1200,
        isDesktop: vw > 1200
    }
}

export default device


