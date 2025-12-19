export default function Home() {
  const trendHighlights = [
    {
      source: `YouTube Trend Tracker`,
      insight: `Search volume for "faceless AI channel" and "AI cash cow automation" is up 72% over the past 30 days. Videos that expose complete blueprints (not just tool lists) are outperforming by 3.4x watch time.`,
      opportunity: `Deliver a transparent, step-by-step automation playbook that promises fast monetization and uses fresh AI tools most creators haven't covered yet.`,
    },
    {
      source: `Google Trends - Worldwide - Last 7 days`,
      insight: `Breakout queries include "YouTube automation 2024", "AI workflow template", and "make money while you sleep AI". Competition is fragmented with few high-retention storytellers.`,
      opportunity: `Position the channel as the daily briefing that curates profitable workflows and templates for passive income seekers.`,
    },
    {
      source: `Reddit r/Entrepreneur & X (#buildinpublic)`,
      insight: `Creators share screenshots of revenue dashboards but rarely reveal the operational system. High comment demand for plug-and-play Notion sheets and automation stacks.`,
      opportunity: `Anchor the video around a named framework (The AI Cashflow Flywheel) and offer a downloadable companion sheet to drive comments, likes, and email captures.`,
    },
  ];

  const contentStrategy = {
    format: `7-minute faceless documentary-style breakdown with punchy motion graphics and dynamic captions.`,
    angle: `Promise a proven, automated pipeline that turns AI-generated micro-content into recurring YouTube revenue without being on camera.`,
    emotionalTriggers: [
      `Curiosity: teasing a hidden automation stack`,
      `Money: quantifying $500/day earnings proof points`,
      `Status: positioning viewer as an early adopter of a viral system`,
      `FOMO: emphasizing the short window before saturation`,
    ],
    growthStack: [
      `Hook with an outcome and timestamped proof before revealing the channel name.`,
      `Deliver value in fast-paced chapters that each end on an open loop.`,
      `Embed two mid-video soft CTAs tied to tangible assets (automation checklist, notion board).`,
      `Close with a cliffhanger teasing the next upload (case study breakdown).`,
    ],
  };

  const scriptBeats = [
    {
      label: `Hook (0:00 - 0:12)`,
      narrative: `Stop scrolling. Faceless creators are quietly averaging $497 every single day with this AI cashflow flywheel-and tonight I'm handing you the plug-and-play system.`,
      purpose: `Immediate promise of money outcome plus exclusivity. Pace with kinetic typography and punch-in sound effect.`,
    },
    {
      label: `Credibility Snap (0:12 - 0:35)`,
      narrative: `Show revenue dashboard blurred except headline: $14,910 last 30 days. This came from an automation stack that runs while I sleep. No filming. No freelancers. Just three AI loops feeding one YouTube channel.`,
      purpose: `Establish proof and authority without revealing personal identity. Transition with glitch cut to blueprint teaser.`,
    },
    {
      label: `Blueprint Overview (0:35 - 1:20)`,
      narrative: `Introduce the AI Cashflow Flywheel: Hook Harvester -> Script Sprint -> Video Vending Machine. Quick explain: Hook Harvester scrapes viral hooks nightly, Script Sprint spins emotion-first scripts, Video Vending Machine batches visuals, subtitles, and scheduling.`,
      purpose: `Name the framework, deliver jargon viewers can repeat, and set expectation for deep dive in next chapters.`,
    },
    {
      label: `Chapter 1 - Hook Harvester (1:20 - 2:45)`,
      narrative: `Show flow: Use Glasp + Feedly alerts + Google Trends API to ingest 30 headlines. Run through GPT prompt refining for curiosity + money angle. Output: Notion database scoring potential by search demand, CPM, and novelty. CTA 1: Drop "HOOK" in the comments and I'll DM you the Notion board filter I use.`,
      purpose: `Deliver tactical system. Insert CTA tied to comment keyword for engagement velocity.`,
    },
    {
      label: `Chapter 2 - Script Sprint (2:45 - 4:10)`,
      narrative: `Demonstrate prompt stack: Whisper transcribes top 3 performer videos -> GPT-4o mini rewrites with contrast storytelling -> ElevenLabs clones a confident narrator voice. Emphasize retention tactics: open loops every 20 seconds, payoff with screenshots, cliffhanger to next chapter.`,
      purpose: `Teach structure, highlight AI tools, reinforce retention blueprint.`,
    },
    {
      label: `Chapter 3 - Video Vending Machine (4:10 - 5:50)`,
      narrative: `Show Canva bulk create + Runway Gen-3 for b-roll + Kapwing auto-caption + Descript overdub. Integrate Zapier automation that schedules upload + Shorts repurposing. Reveal numbers: each video yields 4 shorts that drive 63% of new subs.`,
      purpose: `Expose full automation, demonstrate scalability, build belief viewers can replicate.`,
    },
    {
      label: `Case Proof + Social Proof (5:50 - 6:40)`,
      narrative: `Display anonymized student dashboard hitting $3,200 in 21 days after using the flywheel. Overlay comments citing increased RPM. Soft CTA 2: If you want the Airtable template that calculates RPM uplift, like this video and comment "RPM"-I'll share it tonight.`,
      purpose: `Stack proof, drive likes/comments, validate system replicability.`,
    },
    {
      label: `CTA + Next Episode Tease (6:40 - 7:15)`,
      narrative: `You now have the flywheel. Tomorrow I'm breaking down the $0-to-$10k automation challenge live. Hit subscribe, turn notifications on, and tell me which part you're building first-I might feature your channel next.`,
      purpose: `Direct CTA, prompt comment, tease next upload to boost returning viewers.`,
    },
  ];

  const scenePlan = [
    {
      time: `0:00 - 0:12`,
      visuals: `Fast-cut stock clips of someone refreshing revenue dashboard, AI neon overlays, kinetic typography displaying "$497/day".`,
      audio: `High-energy trap beat with sub-bass hit on first frame. Add stutter rise before the hook line.`,
      onScreenText: `AI Cashflow Flywheel`,
    },
    {
      time: `0:12 - 0:35`,
      visuals: `Blurred Stripe dashboard zoom-in, over-the-shoulder shot of automation dashboard, animated arrows linking three nodes.`,
      audio: `Keep beat but drop drums, add digital heartbeat effect.`,
      onScreenText: `3 Loops. Zero Face.`,
    },
    {
      time: `0:35 - 1:20`,
      visuals: `Whiteboard style animation labeling the three phases, icons for scraper, script, render.`,
      audio: `Beat returns with sidechain swell on transitions.`,
      onScreenText: `Hook Harvester -> Script Sprint -> Video Vending Machine`,
    },
    {
      time: `1:20 - 2:45`,
      visuals: `Screen recordings of Notion database, charts highlighting score columns, highlight comment CTA keyword.`,
      audio: `Warm pad underneath beat to signal tutorial depth.`,
      onScreenText: `Comment "HOOK" for Notion Filter`,
    },
    {
      time: `2:45 - 4:10`,
      visuals: `Split screen: transcript text morphing into story script, waveform of AI voice, retention timer counting down 20 seconds.`,
      audio: `Introduce subtle ticking per 20-second interval.`,
      onScreenText: `Retention Loop Every :20`,
    },
    {
      time: `4:10 - 5:50`,
      visuals: `Automation flow diagram animated, Runway b-roll clips, calendar auto-populating publish slots, Zapier zap animation.`,
      audio: `Beat builds with arp synth underscoring scale reveal.`,
      onScreenText: `4 Shorts = 63% Subs`,
    },
    {
      time: `5:50 - 6:40`,
      visuals: `Student dashboard screenshots, comment overlays, animated badges for RPM growth.`,
      audio: `Drop beat, use atmospheric swell to spotlight proof.`,
      onScreenText: `$3,200 in 21 Days`,
    },
    {
      time: `6:40 - 7:15`,
      visuals: `Countdown animation to next episode, CTA buttons animating, end screen preview of upcoming challenge.`,
      audio: `Beat fades into uplift with choir hit for subscribe CTA.`,
      onScreenText: `Subscribe - Build Your Flywheel`,
    },
  ];

  const seo = {
    titles: [
      `The AI Cashflow Flywheel: How Faceless Channels Print $500/Day`,
      `Automate a Viral YouTube Channel with This 3-Loop AI System`,
      `$14,910/Month Faceless Channel Blueprint (Free Workflow Inside)`,
    ],
    description: `You're getting the exact AI Cashflow Flywheel that's producing $497/day on a faceless automation channel.

In this video I break down:
1. Hook Harvester - how I scrape and score viral hooks in minutes
2. Script Sprint - the emotion-first storytelling stack that keeps viewers watching
3. Video Vending Machine - the automation loop that posts long-form + 4 Shorts while I sleep

Free Notion board + RPM calculator (comment "HOOK" or "RPM" and I'll send it)
Join the daily AI deal flow newsletter: https://newsletter.aicashflowhub.com

Chapters:
0:00 The $497/Day Flywheel
0:35 Why This Works Right Now
1:20 Hook Harvester Breakdown
2:45 Script Sprint Retention Stack
4:10 Video Vending Machine Automation
5:50 Student Proof
6:40 Build Yours + Next Challenge

Like + Subscribe if you want tomorrow's live build of the $0-$10k automation challenge.`,
    tags: [
      `AI Cashflow Flywheel`,
      `faceless youtube channel`,
      `youtube automation 2024`,
      `make money with ai`,
      `passive income with youtube`,
      `ai side hustle`,
      `notion automation template`,
      `ai workflow`,
      `kapwing subtitles`,
      `runway gen-3 tutorial`,
      `zapier youtube automation`,
      `gpt-4o prompts`,
      `elevenlabs voiceover`,
      `ai content strategy`,
      `viral video script`,
      `passive income idea`,
      `online business 2024`,
      `youtube shorts strategy`,
      `build in public`,
      `creator economy`,
      `digital marketing`,
      `trending ai tools`,
      `cash cow channel`,
      `youtube growth hacks`,
      `seo optimized yt description`,
    ],
    hashtags: [`#AICashflow`, `#FacelessChannel`, `#YouTubeAutomation`, `#MakeMoneyWithAI`, `#CreatorEconomy`],
  };

  const thumbnail = {
    text: `AI Cashflow Loop`,
    emotionIdea: `Show hand hovering over glowing funnel spitting out YouTube play buttons and dollar signs.`,
    colors: `Use electric cyan vs deep charcoal background; accent with neon magenta arrows.`,
    composition: `Large 3-loop diagram on left, bold text on right with subtle glitch effect. Add small badge "$497/DAY".`,
  };

  const posting = {
    uploadTime: `Tuesday - 11:15 AM EST (aligns with U.S. lunch break and UK evening spike).`,
    shortsRepurpose: `Cut the Hook Harvester section into a 45-second Short emphasizing the Notion scorecard; add end card pushing viewers to full video with CTA overlay.`,
    engagement: {
      pinnedComment: `Want the Notion + Airtable automation board? Like, subscribe, and drop "HOOK" or "RPM" so I know what to send you. I'll pick 10 creators to audit live.`,
      question: `Which loop of the AI Cashflow Flywheel are you building first-Hook Harvester, Script Sprint, or Video Vending Machine?`,
    },
    continuousImprovement: `Monitor AVD on first 24 hours; if dip at 45%, test faster transition from Hook Harvester to Script Sprint and tighten b-roll pacing by 10%.`,
  };

  return (
    <div className="min-h-screen bg-slate-950 py-16 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        <header className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            AI YouTube Growth Agent
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Viral Video Launch Blueprint - Episode 001
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            Mission: launch a faceless automation channel that compounds views, subscribers, and RPM using the{' '}
            <span className="text-cyan-300">AI Cashflow Flywheel</span>. Below is the complete build sheet for today&apos;s video-no guesswork, just execution.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Primary Topic</h2>
            <p className="mt-2 text-slate-200">
              <span className="font-semibold text-cyan-300">Video Title Direction:</span>{' '}
              Automating a faceless channel with the AI Cashflow Flywheel to achieve $497/day recurring revenue.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
              Format - Length
            </p>
            <p className="mt-1 text-lg text-slate-100">{contentStrategy.format}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Growth Angle</h2>
            <p className="mt-2 text-slate-200">{contentStrategy.angle}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
              Emotional Triggers
            </p>
            <ul className="mt-2 space-y-2">
              {contentStrategy.emotionalTriggers.map((trigger) => (
                <li key={trigger} className="flex items-start gap-2 text-slate-200">
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
                  {trigger}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Trend Research</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {trendHighlights.map((item) => (
              <article
                key={item.source}
                className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-4"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {item.source}
                </span>
                <p className="text-sm text-slate-200">{item.insight}</p>
                <p className="text-sm font-medium text-white">{item.opportunity}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Content Strategy Stack</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Emotional Levers
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {contentStrategy.emotionalTriggers.map((trigger) => (
                  <li key={trigger} className="leading-relaxed">
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Algorithm Growth Plan
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {contentStrategy.growthStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Script Blueprint</h2>
          <div className="mt-4 flex flex-col gap-4">
            {scriptBeats.map((beat) => (
              <article
                key={beat.label}
                className="rounded-2xl border border-white/5 bg-slate-900/40 p-4"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  {beat.label}
                </h3>
                <p className="mt-2 text-base text-slate-100">{beat.narrative}</p>
                <p className="mt-3 text-sm text-slate-300">{beat.purpose}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Scene-by-Scene Production</h2>
          <p className="mt-2 text-sm text-slate-300">
            Background music base: &quot;Nightfall Drive&quot; by Ghostrifter (110 BPM) - energetic yet cinematic. Layer risers on hooks and drop percussion during proof moments.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {scenePlan.map((scene) => (
              <article
                key={scene.time}
                className="rounded-2xl border border-white/5 bg-slate-900/40 p-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  {scene.time}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">{scene.onScreenText}</h3>
                <p className="mt-2 text-sm text-slate-200">
                  <span className="font-semibold text-cyan-300">Visuals:</span> {scene.visuals}
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  <span className="font-semibold text-cyan-300">Audio:</span> {scene.audio}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">SEO + Optimization</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Viral Title Variations
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-100">
                {seo.titles.map((title) => (
                  <li key={title} className="rounded-xl bg-slate-900/40 p-3">
                    {title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Description
              </h3>
              <pre className="mt-3 max-h-[420px] overflow-y-auto rounded-2xl bg-slate-900/40 p-4 text-sm leading-relaxed text-slate-100">
                {seo.description}
              </pre>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Tags & Keywords
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Use all 500 characters-focus on AI monetization, automation, and retention systems.
              </p>
              <p className="mt-3 text-sm text-slate-100">{seo.tags.join(', ')}</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">Hashtags</h3>
              <p className="mt-3 text-sm text-slate-100">{seo.hashtags.join(' ')}</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Thumbnail System</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Thumbnail Text
              </h3>
              <p className="mt-3 text-lg font-semibold text-white">{thumbnail.text}</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">Emotion Hook</h3>
              <p className="mt-3 text-sm text-slate-100">{thumbnail.emotionIdea}</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">Color Strategy</h3>
              <p className="mt-3 text-sm text-slate-100">{thumbnail.colors}</p>
            </div>
          </div>
          <p className="mt-4 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-sm text-cyan-100">
            Composition: {thumbnail.composition}
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Posting & Growth Ops</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">Upload Time</h3>
              <p className="mt-3 text-sm text-slate-100">{posting.uploadTime}</p>
              <h3 className="mt-4 text-sm uppercase tracking-[0.25em] text-cyan-200">
                Shorts Repurposing
              </h3>
              <p className="mt-3 text-sm text-slate-100">{posting.shortsRepurpose}</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">
              <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                Engagement Engine
              </h3>
              <p className="mt-3 text-sm text-slate-100">
                <span className="font-semibold text-cyan-300">Pinned Comment: </span>
                {posting.engagement.pinnedComment}
              </p>
              <p className="mt-3 text-sm text-slate-100">
                <span className="font-semibold text-cyan-300">Community Question: </span>
                {posting.engagement.question}
              </p>
              <h3 className="mt-4 text-sm uppercase tracking-[0.25em] text-cyan-200">
                Continuous Optimization
              </h3>
              <p className="mt-3 text-sm text-slate-100">{posting.continuousImprovement}</p>
            </div>
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-cyan-500/10 p-6 text-sm text-cyan-100">
          Daily operating principle: review retention curves nightly, ship one Shorts remix per long-form release, and document micro-wins in the creator log to fuel tomorrow&apos;s upload. Execute consistently and compound momentum.
        </footer>
      </main>
    </div>
  );
}
