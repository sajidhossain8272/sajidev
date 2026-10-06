export default function ExperienceSection() {
  return (
    <section className="experience section container" id="experience">
      <div className="section-heading reveal">
        <div>
          <div className="section-label">
            <span>05</span>
            Experience
          </div>

          <h2>Engineering with <span>ownership.</span></h2>
        </div>
      </div>

      <div className="timeline">
        <article className="timeline-item reveal">
          <div className="timeline-date">2024 — 2026</div>

          <div className="timeline-content">
            <div className="timeline-heading">
              <div>
                <h3>Software Developer</h3>

                <p>Panorama Management Advisory Services</p>
              </div>

              <span>Dhaka · Hybrid</span>
            </div>

            <p>
              Built and maintained modern web applications,
              translated product requirements into working systems,
              supported deployment and release processes, developed
              automation workflows and worked directly with leadership
              on product and technical decisions.
            </p>

            <div className="timeline-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind</span>
              <span>REST APIs</span>
              <span>n8n</span>
              <span>QA</span>
            </div>
          </div>
        </article>

        <article className="timeline-item reveal">
          <div className="timeline-date">2024</div>

          <div className="timeline-content">
            <div className="timeline-heading">
              <div>
                <h3>Software Associate</h3>

                <p>Panorama Management Advisory Services</p>
              </div>

              <span>Dhaka · Hybrid</span>
            </div>

            <p>
              Worked across development support, quality assurance,
              performance monitoring, analytics and product workflows,
              building a foundation that expanded into broader
              software development responsibilities.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}