export default function CapabilitiesSection() {
  return (
    <section className="capabilities section container">
      <div className="section-label">
        <span>04</span>
        Capabilities
      </div>

      <div className="capability-grid">
        <div className="capability-column reveal">
          <span className="capability-label">Engineering</span>

          <h3>Building the <span>system.</span></h3>

          <div className="tag-list">
            <span>React.js</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>REST APIs</span>
            <span>GraphQL</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Prisma</span>
            <span>Supabase</span>
          </div>
        </div>

        <div className="capability-column reveal">
          <span className="capability-label">AI &amp; Automation</span>

          <h3>Making software <span>do more.</span></h3>

          <div className="tag-list">
            <span>AI Agents</span>
            <span>LLMs</span>
            <span>n8n</span>
            <span>Gemini</span>
            <span>OpenRouter</span>
            <span>Local LLMs</span>
            <span>AI Workflows</span>
            <span>Automation</span>
          </div>
        </div>

        <div className="capability-column reveal">
          <span className="capability-label">Product &amp; Growth</span>

          <h3>Thinking beyond <span>the code.</span></h3>

          <div className="tag-list">
            <span>Product Strategy</span>
            <span>PRDs</span>
            <span>SEO</span>
            <span>Analytics</span>
            <span>Meta Pixel</span>
            <span>Performance</span>
            <span>QA</span>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
}