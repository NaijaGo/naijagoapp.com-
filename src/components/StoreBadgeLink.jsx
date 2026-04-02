import "./StoreBadgeLink.css";

const StoreBadgeLink = ({ href, src, alt, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`store-badge-link ${className}`.trim()}
      aria-label={alt}
    >
      <img src={src} alt={alt} className="store-badge-link__image" />
    </a>
  );
};

export default StoreBadgeLink;
