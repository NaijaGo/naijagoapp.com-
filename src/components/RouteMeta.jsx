import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, findRoute } from "../seo/siteMeta";

// The build writes the right head tags into each route's HTML file. This keeps
// them correct after client-side navigation, and marks unknown URLs noindex.
const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(selector.startsWith("link") ? "link" : "meta");
    const [, key, name] = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/) || [];
    if (key) element.setAttribute(key, name);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = findRoute(pathname);
    if (!route) {
      document.title = "Page not found | NaijaGo";
      setMeta('meta[name="robots"]', "content", "noindex, follow");
      return;
    }
    const url = canonicalUrl(route.path);
    document.title = route.title;
    setMeta('meta[name="description"]', "content", route.description);
    setMeta('meta[name="robots"]', "content", "index, follow, max-image-preview:large");
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", route.title);
    setMeta('meta[property="og:description"]', "content", route.description);
  }, [pathname]);

  return null;
}
