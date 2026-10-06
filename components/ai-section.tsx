export default function AiSection() {
  return (
    <section className="ai-section section">
      <div className="container">
        <div className="ai-panel reveal">
          <div className="ai-panel-header">
            <div className="section-label">
              <span>03</span>
              AI is part of how I build
            </div>

            <span className="ai-badge">AI-native mindset</span>
          </div>

          <div className="ai-grid">
            <div className="ai-intro">
              <h2>Not just <span>AI features.</span></h2>

              <p>
                I use AI as an engineering primitive — for building
                agents, automating workflows, accelerating research,
                improving operations and creating entirely new
                product experiences.
              </p>
            </div>

            <div className="ai-capabilities">
              <div className="ai-capability">
                <span className="capability-index">01</span>

                <div>
                  <h3>AI Agents</h3>

                  <p>
                    Agent workflows that can reason, use tools,
                    process information and perform tasks.
                  </p>
                </div>
              </div>

              <div className="ai-capability">
                <span className="capability-index">02</span>

                <div>
                  <h3>Automation</h3>

                  <p>
                    Turning repetitive business operations into
                    reliable and observable workflows.
                  </p>
                </div>
              </div>

              <div className="ai-capability">
                <span className="capability-index">03</span>

                <div>
                  <h3>Local AI</h3>

                  <p>
                    Experimenting with local models, lightweight
                    infrastructure and privacy-conscious workflows.
                  </p>
                </div>
              </div>

              <div className="ai-capability">
                <span className="capability-index">04</span>

                <div>
                  <h3>AI Products</h3>

                  <p>
                    Designing practical AI experiences rather than
                    adding AI merely as a marketing checkbox.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}