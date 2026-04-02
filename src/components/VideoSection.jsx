import { Button, Container } from "react-bootstrap";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPlayCircle,
  FaStore,
  FaUsers,
} from "react-icons/fa";
import "./VideoSection.css";

const videoHighlights = [
  {
    icon: <FaPlayCircle />,
    title: "Founder-led introduction",
    text: "Let visitors hear the NaijaGo story directly from you in a more personal format.",
  },
  {
    icon: <FaStore />,
    title: "Clear product context",
    text: "Explain what the app does, who it serves, and why it matters before users keep browsing.",
  },
  {
    icon: <FaUsers />,
    title: "Stronger trust",
    text: "Video helps new visitors connect with the brand faster and understand the vision behind it.",
  },
];

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-section__glow video-section__glow--one"></div>
      <div className="video-section__glow video-section__glow--two"></div>

      <Container className="video-section__container">
        <div className="video-section__shell">
          <div className="video-section__content">
            <p className="video-section__eyebrow">
              <FaPlayCircle className="me-2" />
              Watch NaijaGo in action
            </p>

            <h2 className="video-section__title">
              Give new visitors a quick video introduction to the NaijaGo app.
            </h2>

            <p className="video-section__subtitle">
              This section gives your homepage a natural place to feature the
              YouTube video where you talk about NaijaGo, the problem it solves,
              and the bigger vision behind the platform.
            </p>

            <div className="video-section__highlights">
              {videoHighlights.map((item) => (
                <div key={item.title} className="video-section__highlight">
                  <div className="video-section__highlight-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="video-section__cta">
              <Button
                as="a"
                href="https://www.youtube.com/watch?v=mphwR5HL0Pk"
                target="_blank"
                rel="noreferrer"
                className="video-section__primary-btn"
              >
                Watch on YouTube <FaArrowRight className="ms-2" />
              </Button>

              <div className="video-section__note">
                <FaCheckCircle className="me-2" />
                Embedded directly on the homepage for easy viewing.
              </div>
            </div>
          </div>

          <div className="video-section__player-card">
            <div className="video-section__player-top">
              <span className="video-section__player-badge">Featured Video</span>
              <span className="video-section__player-meta">YouTube Embed</span>
            </div>

            <div className="video-section__frame">
              <iframe
                src="https://www.youtube.com/embed/mphwR5HL0Pk?si=BqkGWoIXeHx-OS3K"
                title="NaijaGo app introduction video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
