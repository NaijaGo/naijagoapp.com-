export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.naijago.naija_go";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/naijago/id6753323009";

export const DOWNLOAD_PAGE_PATH = "/download";
export const SITE_URL = "https://naijagoapp.com";
export const DOWNLOAD_PAGE_URL = `${SITE_URL}${DOWNLOAD_PAGE_PATH}`;

export const PLAY_STORE_BADGE_SRC = "/badges/google-play-badge.png";
export const APP_STORE_BADGE_SRC = "/badges/app-store-badge.svg";

export const appStoreLinks = [
  {
    name: "Google Play",
    description: "Best for Android shoppers and vendors",
    href: PLAY_STORE_URL,
    badgeSrc: PLAY_STORE_BADGE_SRC,
    badgeAlt: "Get it on Google Play",
    variant: "primary",
  },
  {
    name: "App Store",
    description: "For iPhone users ready to join NaijaGo",
    href: APP_STORE_URL,
    badgeSrc: APP_STORE_BADGE_SRC,
    badgeAlt: "Download on the App Store",
    variant: "secondary",
  },
];
