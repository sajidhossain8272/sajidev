export default function AboutSection() {
  return (
    <section className="about-preview section container" id="about">
      <div className="about-preview-grid">
        <div className="reveal">
          <div className="section-label">
            <span>06</span>
            A little more
          </div>

          <h2>Engineer first. <span>Builder by nature.</span></h2>
        </div>

        <div className="reveal">
          <p className="large-copy">
            I enjoy taking ambiguous ideas and turning them into
            something concrete that people can actually use.
          </p>

          <p>
            My interests span software engineering, AI agents,
            developer tooling, automation, SaaS and digital products.
            I also experiment with hardware, local AI and unconventional
            ways of combining technology with business.
          </p>

          <a
            href="https://github.com/sajidhossain8272"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Explore my GitHub
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}