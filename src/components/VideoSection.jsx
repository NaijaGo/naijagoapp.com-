import { Container } from "react-bootstrap";
import "./VideoSection.css";

const videoHighlights = [
  {
    title: "Founder-led introduction",
    text: "Hear directly from the founder as he shares the story behind NaijaGo, the vision driving it, and why the platform was built to solve real everyday challenges.",
  },
  {
    title: "Clear product context",
    text: "Understand how NaijaGo works, who it serves, and how it connects people to nearby vendors, essential services, and fast delivery within 24 hours.",
  },
  {
    title: "Stronger trust",
    text: "A founder-led video helps new visitors connect with the brand faster, understand the mission clearly, and build confidence in the future of NaijaGo.",
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
              Discover NaijaGo through a short founder-led introduction. NaijaGo
              is a hyper-local e-commerce and service platform that connects
              people to nearby vendors, essential services, and fast delivery
              within 24 hours. Learn how the platform is solving real everyday
              needs while building a more connected and trusted marketplace
              across Nigeria.
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
            <h3 className="video-section__player-title">
              Founder Introduction
            </h3>

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
              A quick introduction to NaijaGo — a hyper-local platform
              connecting users to nearby vendors, essential services, and fast
              24-hour delivery while solving real everyday problems.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
