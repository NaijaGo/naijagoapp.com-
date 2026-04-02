import { Container } from "react-bootstrap";
import "./VideoSection.css";

const videoHighlights = [
  {
    title: "Founder-led introduction",
    text: "Hear the NaijaGo story directly from the founder in a personal and engaging format.",
  },
  {
    title: "Clear product context",
    text: "Understand what the app does, who it serves, and why it matters before continuing to browse.",
  },
  {
    title: "Stronger trust",
    text: "Video helps visitors connect with the brand faster and builds confidence in the vision behind NaijaGo.",
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
            <h2 className="video-section__title">Meet NaijaGo</h2>

            <p className="video-section__subtitle">
              Get a quick introduction to NaijaGo through a short video from
              the founder. Discover what the app does, the real problem it
              solves, and the bigger vision driving the platform forward.
            </p>

            <div className="video-section__points">
              {videoHighlights.map((item) => (
                <div key={item.title} className="video-section__point">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="video-section__player-card">
            <h3 className="video-section__player-title">Meet NaijaGo</h3>

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

            <p className="video-section__caption">
              A short founder introduction to NaijaGo, the problem it solves,
              and the vision driving the platform forward.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
