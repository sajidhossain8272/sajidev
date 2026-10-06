export default function WorkSection() {
  return (
    <section className="work-section section container" id="work">
      <div className="section-heading reveal">
        <div>
          <div className="section-label">
            <span>02</span>
            Selected work
          </div>

          <h2>Things I&apos;ve <span>built.</span></h2>
        </div>

        <a
          href="https://github.com/sajidhossain8272"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          View GitHub
          <span>↗</span>
        </a>
      </div>

      <div className="project-grid">
        {/* AGENTBROKO */}

        <article className="project-card project-featured reveal">
          <div className="project-top">
            <span className="project-category">AI · Developer Tools</span>
            <span className="project-number">01</span>
          </div>

          <div className="project-content">
            <h3>AgentBroko</h3>

            <p>
              A developer-focused ecosystem for giving AI agents
              reusable skills, workflows and practical capabilities.
              The idea is simple: make agents more useful by giving
              them structured abilities they can actually use.
            </p>

            <div className="project-tech">
              <span>AI Agents</span>
              <span>LLMs</span>
              <span>Automation</span>
              <span>Developer Tools</span>
            </div>
          </div>

          <div className="project-bottom">
            <a
              href="https://www.npmjs.com/package/agentbroko"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Explore AgentBroko
              <span>↗</span>
            </a>
          </div>
        </article>

        {/* NOTEPAD OS */}

        <article className="project-card reveal">
          <div className="project-top">
            <span className="project-category">Desktop · Open Source</span>
            <span className="project-number">02</span>
          </div>

          <div className="project-content">
            <h3>Notepad OS</h3>

            <p>
              A lightweight desktop application experiment combining
              modern React tooling with Tauri for native desktop
              software.
            </p>

            <div className="project-tech">
              <span>Tauri 2</span>
              <span>React 19</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="project-bottom">
            <a
              href="https://github.com/sajidhossain8272/notepad-os"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Explore project
              <span>↗</span>
            </a>
          </div>
        </article>

        {/* QUULIX */}

        <article className="project-card reveal">
          <div className="project-top">
            <span className="project-category">E-commerce · Web</span>
            <span className="project-number">03</span>
          </div>

          <div className="project-content">
            <h3>QUULIX</h3>

            <p>
              An e-commerce product combining modern web development,
              product presentation and conversion-focused thinking.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Web</span>
              <span>E-commerce</span>
            </div>
          </div>

          <div className="project-bottom">
            <a
              href="https://quulix.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View project
              <span>↗</span>
            </a>
          </div>
        </article>

        {/* GRAFIXR */}

        <article className="project-card reveal">
          <div className="project-top">
            <span className="project-category">Platform · Growth</span>
            <span className="project-number">04</span>
          </div>

          <div className="project-content">
            <h3>GrafiXr</h3>

            <p>
              A platform built around helping designers turn creative
              work into a more effective commercial system.
            </p>

            <div className="project-tech">
              <span>Web</span>
              <span>Product</span>
              <span>Growth</span>
            </div>
          </div>

          <div className="project-bottom">
            <a
              href="https://grafixr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View project
              <span>↗</span>
            </a>
          </div>
        </article>

        {/* PLZWORK */}

        <article className="project-card reveal">
          <div className="project-top">
            <span className="project-category">Product · Developer Tools</span>
            <span className="project-number">05</span>
          </div>

          <div className="project-content">
            <h3>Plzwork</h3>

            <p>
              A collection of practical digital tools and products
              designed to remove friction from everyday technical
              and creative work.
            </p>

            <div className="project-tech">
              <span>Web Apps</span>
              <span>JavaScript</span>
              <span>Product</span>
            </div>
          </div>

          <div className="project-bottom">
            <a
              href="https://quickconvert.plzwork.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Try it live
              <span>↗</span>
            </a>
          </div>
        </article>

        {/* DEV APPLY */}

        <article className="project-card reveal">
          <div className="project-top">
            <span className="project-category">Developer Tool · SaaS</span>
            <span className="project-number">06</span>
          </div>

          <div className="project-content">
            <h3>dev-apply</h3>

            <p>
              A developer-focused resume and application workflow
              built around GitHub authentication and structured
              professional information.
            </p>

            <div className="project-tech">
              <span>GitHub OAuth</span>
              <span>Web</span>
              <span>SaaS</span>
            </div>
          </div>

          <div className="project-bottom">
            <a
              href="https://dev-apply.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Explore project
              <span>↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}