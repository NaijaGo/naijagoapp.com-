import StoreBadgeLink from "./StoreBadgeLink";
import { APP_STORE_BADGE_SRC, PLAY_STORE_BADGE_SRC } from "../constants/appLinks";
import { apps } from "../seo/siteMeta";
import { trackEvent } from "../analytics/trackEvent";

// Store badges for one of the three NaijaGo apps. Apps that are not on a store
// yet simply don't show that badge.
export default function AppBadges({ app }) {
  const { name, playUrl, appStoreUrl } = apps[app];
  const track = (store) => () => trackEvent("app_download_click", { app, store });
  return (
    <div className="guide-page__badges">
      <span onClickCapture={track("google_play")}>
        <StoreBadgeLink href={playUrl} src={PLAY_STORE_BADGE_SRC} alt={`Get ${name} on Google Play`} />
      </span>
      {appStoreUrl && (
        <span onClickCapture={track("app_store")}>
          <StoreBadgeLink href={appStoreUrl} src={APP_STORE_BADGE_SRC} alt={`Download ${name} on the App Store`} />
        </span>
      )}
    </div>
  );
}
