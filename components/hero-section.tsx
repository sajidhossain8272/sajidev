export default function HeroSection() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content reveal">
        <div className="eyebrow">
          <span className="status-dot" />
          Software Developer · AI Builder · Product Engineer
        </div>

        <h1>
          I build software <span>that thinks, works,</span> and scales.
        </h1>

        <p className="hero-description">
          I design and build modern digital products across web
          applications, SaaS, automation, AI agents and developer
          tools — combining engineering with product thinking and
          business execution.
        </p>

        <div className="hero-actions">
          <a href="#work" className="button button-primary">
            Explore my work
            <span>↗</span>
          </a>

          <a
            href="https://github.com/sajidhossain8272"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            GitHub
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* AI SYSTEM CARD */}

      <div className="hero-system reveal">
        <div className="system-header">
          <div className="system-title">
            <span className="ai-symbol">✦</span>
            AI / Automation
          </div>

          <span className="system-status">Building</span>
        </div>

        <div className="system-body">
          <div className="system-prompt">
            <span className="prompt-label">CURRENT FOCUS</span>
            <p>Give AI agents reusable skills.</p>
          </div>

          <div className="system-flow">
            <div className="flow-item">
              <span className="flow-number">01</span>
              <span>Observe</span>
            </div>

            <div className="flow-line" />

            <div className="flow-item">
              <span className="flow-number">02</span>
              <span>Reason</span>
            </div>

            <div className="flow-line" />

            <div className="flow-item">
              <span className="flow-number">03</span>
              <span>Act</span>
            </div>
          </div>

          <div className="system-tags">
            <span>AI Agents</span>
            <span>n8n</span>
            <span>LLMs</span>
            <span>Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}