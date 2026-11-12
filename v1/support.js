<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Enhancing Skills – Home page wireframe</title>
<script src="./vendor/react.js"></script>
<script src="./vendor/react-dom.js"></script>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&amp;display=swap" rel="stylesheet">
<style>
body{margin:0}
a{color:inherit}a:hover{opacity:.8}
.flip{perspective:1200px;background:none;border:0;padding:0;margin:0;text-align:left;cursor:pointer;font:inherit;color:inherit;display:block;width:100%}
.flip .in{display:block;position:relative;height:100%;transition:transform .55s ease;transform-style:preserve-3d}
.flip:hover .in,.flip:focus .in{transform:rotateY(180deg)}
.flip .f,.flip .b{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;box-sizing:border-box}
.flip .b{transform:rotateY(180deg)}
.btn{font:inherit;cursor:pointer}
</style>
</helmet>
<div style="font-family: 'Open Sans', system-ui, sans-serif; color: {{c.ink}}; background: #ffffff; font-size: 16px; line-height: 1.55;">

<!-- ============ S1 HEADER ============ -->
<header style="position: sticky; top: 0; z-index: 20; background: {{c.dark}}; color: #ffffff;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; flex-wrap: wrap; align-items: center; gap: 16px 28px;">
    <a href="#top" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: #ffffff;">
      <span style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid {{c.accent}}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; color: {{c.accent}};">ES</span>
      <span style="display: flex; flex-direction: column; line-height: 1.15;"><span style="font-weight: 700; font-size: 17px; color: {{c.wordmark}};">Enhancing Skills</span><span style="font-size: 11px; opacity: .85;">For Professionals Everywhere.</span></span>
    </a>
    <nav aria-label="Main" style="display: flex; flex-wrap: wrap; gap: 4px 22px; font-size: 15px; font-weight: 600; flex: 1 1 360px;">
      <button class="btn" aria-expanded="{{menuWhatOpen}}" onClick="{{toggleWhat}}" style="background: none; border: 0; padding: 0; color: #ffffff; font-weight: 600; font-size: 15px;">What we do {{whatArrow}}</button>
      <button class="btn" aria-expanded="{{menuResOpen}}" onClick="{{toggleRes}}" style="background: none; border: 0; padding: 0; color: #ffffff; font-weight: 600; font-size: 15px;">Resources {{resArrow}}</button>
      <a href="#pricing" style="text-decoration: none;">Pricing</a>
      <a href="#about" style="text-decoration: none;">About</a>
    </nav>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px 18px; font-size: 14px;">
      <a href="#login" style="text-decoration: none;">Log in</a>
      <a href="#contact" style="text-decoration: none;">Get in touch</a>
      <a href="#try" style="text-decoration: none; background: {{c.accent}}; color: {{c.accentText}}; font-weight: 700; padding: 10px 18px; border-radius: 6px;">Try an Episode</a>
    </div>
  </div>
  <sc-if value="{{menuOpen}}" hint-placeholder-val="{{ false }}">
    <div style="background: #ffffff; color: {{c.ink}}; border-top: 4px solid {{c.accent}}; box-shadow: 0 12px 24px rgba(0,0,0,.18);">
      <div style="max-width: 1200px; margin: 0 auto; padding: 28px 24px; display: flex; flex-wrap: wrap; gap: 24px;">
        <div style="flex: 1 1 220px; display: flex; flex-direction: column; gap: 8px;">
          <strong style="font-size: 20px;">{{menuTitle}}</strong>
          <span style="font-size: 14px; color: {{c.muted}};">{{menuIntro}}</span>
          <button class="btn" onClick="{{closeMenu}}" style="align-self: flex-start; margin-top: 6px; background: none; border: 1px solid {{c.line}}; border-radius: 6px; padding: 6px 12px; color: {{c.ink}}; font-size: 13px;">Close ✕</button>
        </div>
        <div style="flex: 3 1 600px; display: flex; flex-wrap: wrap; gap: 12px;">
          <sc-for list="{{menuItems}}" as="m" hint-placeholder-count="6">
            <a href="#what" style="flex: 1 1 220px; text-decoration: none; padding: 14px 16px; border-radius: 8px; background: {{c.panel}}; display: flex; flex-direction: column; gap: 4px;">
              <strong style="font-size: 15px;">{{m.t}} →</strong>
              <span style="font-size: 13px; color: {{c.muted}};">{{m.d}}</span>
            </a>
          </sc-for>
        </div>
      </div>
    </div>
  </sc-if>
  <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
    <div style="background: #fff7cc; color: #3d3300; font-size: 12px; padding: 6px 24px; border-top: 1px dashed #b39b00;">S1 · Sticky header. “What we do” and “Resources” open a wide expanding menu (ref. slack.com). Try an Episode opens a pop-up asking for name + work email only.</div>
  </sc-if>
</header>

<!-- ============ S2 HERO ============ -->
<section id="top" style="position: relative; overflow: hidden; background: {{c.dark}}; color: #ffffff;">
  <img src="./assets/f079781692f4687daeb533bf9f50296f.jpg" alt="Still from Dignity at Work, Episode One: Jack confronts Susan" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: {{c.imgFilter}}; opacity: .42;">
  <div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 96px 24px 72px; display: flex; flex-direction: column; gap: 22px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S2 · Hero. Background = silent 10–15 s loop (N4, 0:28–1:08). Curved masthead accent to be added by Yuri.</span>
    </sc-if>
    <h1 style="margin: 0; font-size: clamp(32px, 4.6vw, 56px); line-height: 1.12; font-weight: 800; max-width: 760px;">Your managers avoid the hard conversations. We show them how to have them.</h1>
    <p style="margin: 0; font-size: 19px; max-width: 640px; opacity: .95;">Immersive, scenario-based learning that helps managers handle difficult workplace conversations earlier – before they become grievances, disciplinaries or formal HR cases.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 12px;">
      <a href="#trailer" style="display: inline-flex; align-items: center; gap: 10px; text-decoration: none; background: {{c.accent}}; color: {{c.accentText}}; font-weight: 700; padding: 14px 24px; border-radius: 6px;"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" fill="currentColor"></path></svg>Watch the trailer</a>
      <a href="#try" style="text-decoration: none; border: 2px solid #ffffff; color: #ffffff; font-weight: 700; padding: 12px 22px; border-radius: 6px;">Try an Episode</a>
    </div>
    <p style="margin: 0; font-size: 14px; opacity: .9;">Built by HR practitioners  ·  Real actors, real workplace scenarios  ·  Designed for stores, sites and shifts</p>
  </div>
  <div style="position: relative; background: rgba(255,255,255,.96); color: {{c.muted}};">
    <div style="max-width: 1200px; margin: 0 auto; padding: 18px 24px; display: flex; flex-wrap: wrap; align-items: center; gap: 14px 28px;">
      <span style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em;">Tested with teams at…</span>
      <sc-for list="{{logos}}" as="l" hint-placeholder-count="5">
        <span style="flex: 0 1 150px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; letter-spacing: -.01em; color: #a6a6a6; white-space: nowrap;">{{l}}</span>
      </sc-for>
    </div>
  </div>
</section>

<!-- ============ S3 STAKES ============ -->
<section style="background: #ffffff;">
  <div style="max-width: 1000px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 28px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px; width: 657px; height: 37px">S3 · The Stakes. Short story, then an escalation path that animates in on scroll. Grey styling = market evidence only<br></span>
    </sc-if>
    <h2 style="margin: 0; font-size: clamp(26px, 3vw, 38px); line-height: 1.2; font-weight: 800;">What happens when the difficult conversation doesn’t happen</h2>
    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 18px; max-width: 760px;">
      <p style="margin: 0;">Every time a manager avoids a difficult conversation, the problem doesn’t go away – it escalates. An informal issue becomes a formal grievance. A performance concern becomes a disciplinary hearing. Workplace tension becomes a dignity-at-work complaint.</p>
      <p style="margin: 0;">By the time it reaches HR, you’re spending 12+ hours on a single case, reconstructing how it got there. Formal process. Documentation. Legal exposure. WRC risk.</p>
      <p style="margin: 0;">Meanwhile, employees walk in prepared – they’ve checked their rights online, often with ChatGPT. Your managers come in cold.</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <span style="font-size: 14px; font-weight: 700; color: {{c.muted}}; text-transform: uppercase; letter-spacing: .05em;">How a joke becomes a formal complaint</span>
      <div style="display: flex; flex-wrap: wrap; align-items: stretch; gap: 10px;">
        <div style="flex: 1 1 190px; padding: 20px; border-radius: 10px; background: {{c.panel}}; display: flex; flex-direction: column; gap: 8px;">
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 6h32v20H16l-8 7v-7H4z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"></path><path d="M14 15q6 6 12 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>
          <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">STEP 1 · IT STARTS SMALL</span>
          <span style="font-size: 18px; font-weight: 800;">A bit of “banter”</span>
          <span style="font-size: 14px;">A colleague makes a joke at someone’s expense. Everyone laughs it off.</span>
        </div>
        <div style="flex: 1 1 190px; padding: 20px; border-radius: 10px; background: {{c.panel}}; display: flex; flex-direction: column; gap: 8px;">
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M8 14a13 13 0 0 1 23-5M32 26a13 13 0 0 1-23 5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path><path d="M31 3v7h-7M9 37v-7h7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">STEP 2 · IT KEEPS HAPPENING</span>
          <span style="font-size: 18px; font-weight: 800;">A pattern forms</span>
          <span style="font-size: 14px;">More digs. He’s left out of meetings. When he raises it, he’s told it’s “just banter”.</span>
        </div>
        <div style="flex: 1 1 190px; padding: 18px; border-radius: 10px; background: {{c.panel2}}; border: 2px dashed {{c.ink}}; display: flex; flex-direction: column; gap: 8px;">
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 6h32v20H16l-8 7v-7H4z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" stroke-linejoin="round"></path><path d="M8 4l26 26" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg>
          <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">STEP 3 · NOBODY STEPS IN</span>
          <span style="font-size: 18px; font-weight: 800;">The conversation that didn’t happen</span>
          <span style="font-size: 14px;">His manager sees it but puts off the conversation – not sure what to say, worried about making it worse.</span>
        </div>
        <div style="flex: 1 1 190px; padding: 20px; border-radius: 10px; background: {{c.alert}}; color: {{c.alertText}}; display: flex; flex-direction: column; gap: 8px;">
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><path d="M4 9h12l3 4h17v22H4z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"></path><path d="M11 22h18M11 28h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg>
          <span style="font-size: 13px; font-weight: 700;">STEP 4 · IT LANDS ON YOUR DESK</span>
          <span style="font-size: 18px; font-weight: 800;">A formal bullying complaint</span>
          <span style="font-size: 14px;">12+ hours of HR time · Legal exposure · WRC risk</span>
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 10px; padding: 14px 18px; border-radius: 10px; border: 2px dashed {{c.ink}};">
        <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true"><path d="M5 14l6 6L23 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span style="flex: 1 1 400px; font-size: 16px;"><strong>The fix is Step 3 – the conversation that didn’t happen.</strong> Handled well, and early, it stops the slide before it becomes a case.</span>
      </div>
    </div>
    <p style="margin: 8px 0; text-align: center; font-size: clamp(22px, 2.4vw, 30px); font-weight: 700;">The conversation was delayed. The problem wasn’t.</p>
    <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 22px; border-radius: 8px; background: #f4f4f4; color: #4a4a4a;">
      <div style="flex: 1 1 300px; display: flex; gap: 14px; align-items: baseline;"><span style="font-size: 30px; font-weight: 800; white-space: nowrap;">1 in 4</span><span style="font-size: 14px;">UK employees experienced workplace conflict in the past year – and were twice as likely to be thinking about leaving (33% vs 16%). <em>Source: CIPD Good Work Index 2024</em></span></div>
      <div style="flex: 1 1 300px; display: flex; gap: 14px; align-items: baseline;"><span style="font-size: 30px; font-weight: 800; white-space: nowrap;">+44%</span><span style="font-size: 14px;">rise in complaint applications to Ireland’s Workplace Relations Commission in 2025. <em>Source: WRC Annual Report 2025</em></span></div>
      <div style="flex: 1 1 300px; display: flex; gap: 14px; align-items: baseline;"><span style="font-size: 30px; font-weight: 800; white-space: nowrap;">£28.5bn</span><span style="font-size: 14px;">a year – the cost of workplace conflict to UK employers, over £1,000 for every employee. <em>Source: Acas, 2021</em></span></div>
    </div>
  </div>
</section>

<!-- ============ S4 GUIDE ============ -->
<section id="about" style="background: {{c.panel}};">
  <div style="max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-wrap: wrap; gap: 48px; align-items: stretch;">
    <div style="flex: 1 1 360px; display: flex; flex-direction: column; gap: 10px;">
      <img src="./assets/663d96421df655782c2162301e25e2dc.jpg" alt="Placeholder: Irene Frazer, presenter still from Episode One" style="flex: 1 1 auto; width: 100%; height: 100%; min-height: 380px; object-fit: cover; object-position: 50% 20%; border-radius: 10px; filter: {{c.imgFilter}};">
      <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
        <span style="background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">Placeholder still from the episode. Replace with a natural-setting photo of Irene (on set or in a workplace).</span>
      </sc-if>
    </div>
    <div style="flex: 1 1 460px; display: flex; flex-direction: column; gap: 16px;">
      <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
        <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S4 · The Guide. Empathy → authority → origin story.</span>
      </sc-if>
      <h2 style="margin: 0; font-size: clamp(26px, 3vw, 36px); line-height: 1.2; font-weight: 800;">We know where workplace conversations go wrong – because we’ve been in the room.</h2>
      <p style="margin: 0;">We’ve watched capable managers freeze, say the wrong thing or make a situation more formal than it needed to be. Not because they didn’t care – because nobody ever showed them how these conversations really unfold.</p>
      <p style="margin: 0;"><strong>We’ve watched preventable issues become formal cases.</strong></p>
      <p style="margin: 0;">Enhancing Skills was founded by Irene Frazer, an HR leader with [X] years’ experience across healthcare, retail, aviation and distribution – including Head of HR at St Vincent’s Hospital and CEO of the Royal Hospital Donnybrook.</p>
      <p style="margin: 0;">She went looking for training she could give her own clients. In-house courses, IMI programmes, generic e-learning, AI tools – none of them addressed the real problem: <strong>the interpersonal dynamics of the conversation itself.</strong> She couldn’t find it. So we built it.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 13px; font-weight: 600; padding: 6px 12px; border-radius: 999px; background: {{c.chip}}; color: {{c.chipText}};">[X] years in HR leadership</span>
        <span style="font-size: 13px; font-weight: 600; padding: 6px 12px; border-radius: 999px; background: {{c.chip}}; color: {{c.chipText}};">Healthcare · Retail · Aviation · Distribution</span>
        <span style="font-size: 13px; font-weight: 600; padding: 6px 12px; border-radius: 999px; background: {{c.chip}}; color: {{c.chipText}};">Union negotiation experience</span>
      </div>
      <a href="#about" style="font-weight: 700;">Hear Irene’s story →</a>
    </div>
  </div>
</section>

<!-- ============ S5 HOW THE LEARNING WORKS ============ -->
<section id="what" style="background: #ffffff;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 28px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S5 · How the Learning Works. Interactive decision tree using the real branch from Dignity at Work, Ep. 1 (N3 → N4 / N5). Click an option.</span>
    </sc-if>
    <div style="display: flex; flex-direction: column; gap: 12px; max-width: 760px;">
      <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 44px); line-height: 1.15; font-weight: 800;">What would you say next?</h2>
      <p style="margin: 0; font-size: 18px;">Every difficult conversation has a moment where it can go either way. Our episodes stop at that moment and ask you to choose. You see where your choice leads – and a short reflection explains why one approach works better than another.</p>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center;">
      <video src="./assets/1fa09a04f4e6df296ee279bdda43c64a.mp4" poster="./assets/dc4646447b77c28a9d72a6eb79705151.jpg" controls="" preload="none" playsinline="" style="flex: 3 1 480px; min-width: 0; max-width: 100%; aspect-ratio: 16 / 9; border-radius: 12px; background: #0C274C; filter: {{c.imgFilter}};"></video>
      <div style="flex: 2 1 300px; display: flex; flex-direction: column; gap: 12px;">
        <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">WATCH · 60 SECONDS</span>
        <h3 style="margin: 0; font-size: 24px; line-height: 1.25; font-weight: 800;">See one situation unfold – and two ways to handle it.</h3>
        <p style="margin: 0;">From Dignity at Work, Episode One. It starts with banter, becomes a pattern, and someone has to say something. Jack and Cathy take very different approaches.</p>
        <a href="#try" style="align-self: flex-start; text-decoration: none; background: {{c.accent}}; color: #ffffff; font-weight: 700; padding: 12px 20px; border-radius: 6px;">Watch the full episode free</a>
      </div>
    </div>

    <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">NOW YOU TRY · PICK AN APPROACH</span>
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: stretch; padding: 24px; border-radius: 12px; border: 1px solid {{c.line}}; background: {{c.panel}};">
      <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 10px;">
        <img src="./assets/2a3cb3eb813f6ad861429dea341391ba.jpg" alt="Susan excludes Simon from a team meeting" style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 8px; filter: {{c.imgFilter}};">
        <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">THE SCENE</span>
        <p style="margin: 0; font-weight: 600;">Susan’s “banter” towards Simon has crossed a line. Two colleagues decide to say something to her.</p>
      </div>
      <div style="flex: 1 1 280px; display: flex; flex-direction: column; gap: 12px; justify-content: center;">
        <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">HOW SHOULD THEY RAISE IT?</span>
        <sc-for list="{{options}}" as="o" hint-placeholder-count="2">
          <sc-if value="{{o.active}}" hint-placeholder-val="{{ false }}">
            <button class="btn" onClick="{{o.pick}}" style="text-align: left; padding: 16px 18px; border-radius: 8px; border: 2px solid {{c.accent}}; background: {{c.accentSoft}}; color: {{c.ink}};"><strong style="display: block; font-size: 15px;">{{o.label}}</strong><span style="font-size: 15px;">{{o.line}}</span></button>
          </sc-if>
          <sc-if value="{{o.inactive}}" hint-placeholder-val="{{ true }}">
            <button class="btn" onClick="{{o.pick}}" style="text-align: left; padding: 16px 18px; border-radius: 8px; border: 2px solid {{c.line}}; background: #ffffff; color: {{c.ink}};"><strong style="display: block; font-size: 15px;">{{o.label}}</strong><span style="font-size: 15px;">{{o.line}}</span></button>
          </sc-if>
        </sc-for>
      </div>
      <div style="flex: 1 1 320px; display: flex; flex-direction: column; gap: 10px;">
        <sc-if value="{{isA}}" hint-placeholder-val="{{ true }}"><img src="./assets/bc0e218d1af133071004f016055c5864.jpg" alt="Susan reacts defensively" style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 8px; filter: {{c.imgFilter}};"></sc-if>
        <sc-if value="{{isB}}" hint-placeholder-val="{{ false }}"><img src="./assets/70ef39c271ee8eb8d6ec109387bbe9bb.jpg" alt="Susan reflects on her behaviour" style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 8px; filter: {{c.imgFilter}};"></sc-if>
        <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">HOW IT LANDS</span>
        <p style="margin: 0; font-weight: 700; font-size: 17px;">{{outcome.quote}}</p>
        <p style="margin: 0; font-size: 15px;"><strong>Why: </strong>{{outcome.why}}</p>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <h3 style="margin: 0; font-size: 22px; font-weight: 800;">Why immersive learning is different</h3>
        <span style="font-size: 16px; color: {{c.muted}};">Most training tells people what to do. Ours lets them experience it.</span>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 14px;">
        <div style="flex: 1 1 240px; padding: 20px; border-radius: 10px; border: 1px solid {{c.line}}; display: flex; flex-direction: column; gap: 8px;">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><path d="M3 5h18v12H11l-5 5v-5H3z M14 21v3h8l5 4v-4h2V12h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"></path></svg>
          <strong style="font-size: 17px;">Communication-led, not compliance-led</strong>
          <span style="font-size: 14px;">Traditional HR training teaches the procedure. We show what happens when you change how you speak, listen and respond.</span>
        </div>
        <div style="flex: 1 1 240px; padding: 20px; border-radius: 10px; border: 1px solid {{c.line}}; display: flex; flex-direction: column; gap: 8px;">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><circle cx="11" cy="10" r="4.5" fill="none" stroke="currentColor" stroke-width="2.2"></circle><circle cx="22" cy="10" r="4.5" fill="none" stroke="currentColor" stroke-width="2.2"></circle><path d="M3 27c0-5 4-8 8-8s8 3 8 8M14 27c0-5 4-8 8-8s7 3 7 8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"></path></svg>
          <strong style="font-size: 17px;">Real actors, not avatars</strong>
          <span style="font-size: 14px;">Conversations turn on the nuance – a shift in tone, a look, a pause. Real people show it in a way avatars can’t yet.</span>
        </div>
        <div style="flex: 1 1 240px; padding: 20px; border-radius: 10px; border: 1px solid {{c.line}}; display: flex; flex-direction: column; gap: 8px;">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="6" width="26" height="17" rx="2" fill="none" stroke="currentColor" stroke-width="2.2"></rect><path d="M13 11v7l6-3.5z" fill="currentColor"></path><path d="M9 28h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"></path></svg>
          <strong style="font-size: 17px;">Episodic, like a series</strong>
          <span style="font-size: 14px;">Each series follows one situation as it escalates. People get drawn into the story and forget they’re on a training course.</span>
        </div>
        <div style="flex: 1 1 240px; padding: 20px; border-radius: 10px; border: 1px solid {{c.line}}; display: flex; flex-direction: column; gap: 8px;">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" stroke-width="2.2"></circle><path d="M16 9v7l5 3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"></path></svg>
          <strong style="font-size: 17px;">In the moment, on demand</strong>
          <span style="font-size: 14px;">Not a one-off classroom day months earlier. Learning that’s there when the conversation is.</span>
        </div>
      </div>
      <a href="#what" style="font-weight: 700;">See how we compare with courses, e-learning and AI →</a>
      <h3 style="margin: 18px 0 0; font-size: 22px; font-weight: 800;">Four series. Real workplace situations.</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 16px;">
        <sc-for list="{{series}}" as="s" hint-placeholder-count="4">
          <div style="flex: 1 1 240px; height: 230px;">
            <button class="flip" aria-label="{{s.name}}: {{s.desc}}" style="height: 230px;">
              <span class="in">
                <span class="f" style="display: flex; flex-direction: column; justify-content: flex-end; border-radius: 10px; overflow: hidden; background: {{c.panel2}};">
                  <sc-if value="{{s.img}}" hint-placeholder-val="{{ true }}">
                    <img src="./assets/db3b83e43f260fcc13faa0a54e0e9464.jpg" alt="Still from Dignity at Work, Episode One" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: {{c.imgFilter}};">
                  </sc-if>
                  <sc-if value="{{s.noImg}}" hint-placeholder-val="{{ false }}">
                    <span style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 12px; color: {{c.muted}}; border: 1px dashed {{c.line}}; border-radius: 10px;">[Still from this series]</span>
                  </sc-if>
                  <span style="position: relative; padding: 14px 16px; background: linear-gradient(transparent, rgba(0,0,0,.72)); color: #ffffff; font-weight: 800; font-size: 19px;">{{s.name}}</span>
                </span>
                <span class="b" style="display: flex; flex-direction: column; gap: 10px; justify-content: center; padding: 22px; border-radius: 10px; background: {{c.dark}}; color: #ffffff;">
                  <strong style="font-size: 18px; color: {{c.accentOnDark}};">{{s.name}}</strong>
                  <span style="font-size: 15px;">{{s.desc}}</span>
                </span>
              </span>
            </button>
          </div>
        </sc-for>
      </div>
      <p style="margin: 0; color: {{c.muted}};">Short episodes. Watch the one you need the night before a difficult conversation – or binge the lot.</p>
      <a href="#what" style="align-self: flex-start; text-decoration: none; background: {{c.accent}}; color: {{c.accentText}}; font-weight: 700; padding: 12px 22px; border-radius: 6px;">Explore what we do</a>
    </div>
  </div>
</section>

<!-- ============ S6 WHO IT'S FOR ============ -->
<section style="background: {{c.dark}}; color: #ffffff;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 26px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S6 · Who It’s For. Full-width tabbed banner (ref. slack.com, hibob.com). Accordion on mobile. Roles first, then the type of organisation.</span>
    </sc-if>
    <h2 style="margin: 0; font-size: clamp(26px, 3vw, 38px); line-height: 1.2; font-weight: 800;">Better conversations need both sides</h2>
    <div role="tablist" style="display: flex; flex-wrap: wrap; gap: 8px; border-bottom: 1px solid rgba(255,255,255,.3);">
      <sc-for list="{{tabs}}" as="t" hint-placeholder-count="3">
        <sc-if value="{{t.active}}" hint-placeholder-val="{{ false }}">
          <button class="btn" role="tab" aria-selected="true" onClick="{{t.pick}}" style="padding: 12px 20px; border: 0; border-bottom: 4px solid {{c.accent}}; background: transparent; color: #ffffff; font-weight: 800; font-size: 16px;">{{t.label}}</button>
        </sc-if>
        <sc-if value="{{t.inactive}}" hint-placeholder-val="{{ true }}">
          <button class="btn" role="tab" aria-selected="false" onClick="{{t.pick}}" style="padding: 12px 20px; border: 0; border-bottom: 4px solid transparent; background: transparent; color: rgba(255,255,255,.8); font-weight: 600; font-size: 16px;">{{t.label}}</button>
        </sc-if>
      </sc-for>
    </div>
    <div role="tabpanel" style="display: flex; flex-wrap: wrap; gap: 36px; align-items: center;">
      <sc-if value="{{tabHr}}" hint-placeholder-val="{{ true }}"><img src="./assets/3fb20d2494dcadc7996755871dc4708f.jpg" alt="A team meeting led by a manager" style="flex: 1 1 380px; min-width: 0; max-width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 10px; filter: {{c.imgFilter}};"></sc-if>
      <sc-if value="{{tabMgr}}" hint-placeholder-val="{{ false }}"><img src="./assets/374dd3b03bd2ab027059f4a8ff9815e2.jpg" alt="Jack raises a concern" style="flex: 1 1 380px; min-width: 0; max-width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 10px; filter: {{c.imgFilter}};"></sc-if>
      <sc-if value="{{tabEmp}}" hint-placeholder-val="{{ false }}"><img src="./assets/b5ff351920f11bddcdc838c000e34665.jpg" alt="Simon talks with a colleague" style="flex: 1 1 380px; min-width: 0; max-width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 10px; filter: {{c.imgFilter}};"></sc-if>
      <div style="flex: 1 1 400px; display: flex; flex-direction: column; gap: 14px;">
        <h3 style="margin: 0; font-size: 26px; font-weight: 800; color: {{c.accentOnDark}};">{{tab.head}}</h3>
        <p style="margin: 0; font-size: 17px;">{{tab.copy}}</p>
        <ul style="margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px;">
          <sc-for list="{{tab.bullets}}" as="b" hint-placeholder-count="3"><li>{{b}}</li></sc-for>
        </ul>
        <a href="#what" style="align-self: flex-start; text-decoration: none; background: {{c.accent}}; color: {{c.accentText}}; font-weight: 700; padding: 12px 22px; border-radius: 6px;">{{tab.cta}}</a>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px 40px; align-items: flex-start; margin-top: 12px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.3);">
      <div style="flex: 1 1 420px; display: flex; flex-direction: column; gap: 8px;">
        <h3 style="margin: 0; font-size: 20px; font-weight: 800;">Built for organisations that run on shifts, sites and rosters</h3>
        <p style="margin: 0; opacity: .92;">Difficult conversations happen on shop floors, in back rooms, beside production lines and between shifts. Your managers are operational first and people managers second – and HR is rarely in the room.</p>
      </div>
      <div style="flex: 1 1 340px; display: flex; flex-wrap: wrap; gap: 8px; padding-top: 4px;">
        <span style="font-size: 14px; font-weight: 600; padding: 7px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,.55); color: #ffffff;">Retail &amp; multi-site stores</span>
        <span style="font-size: 14px; font-weight: 600; padding: 7px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,.55); color: #ffffff;">Distribution &amp; logistics</span>
        <span style="font-size: 14px; font-weight: 600; padding: 7px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,.55); color: #ffffff;">Facilities management</span>
        <span style="font-size: 14px; font-weight: 600; padding: 7px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,.55); color: #ffffff;">Utilities &amp; field operations</span>
        <span style="font-size: 14px; font-weight: 600; padding: 7px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,.55); color: #ffffff;">Data centres &amp; site-based teams</span>
      </div>
    </div>
  </div>
</section>

<!-- ============ S7 GETTING STARTED ============ -->
<section style="background: {{c.panel}};">
  <div style="max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 28px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S7 · Getting Started. Explainer ungated (recommended); Try an Episode is the gated step.</span>
    </sc-if>
    <h2 style="margin: 0; font-size: clamp(26px, 3vw, 38px); line-height: 1.2; font-weight: 800;">Getting this to your team is simpler than it looks</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 18px;">
      <sc-for list="{{steps}}" as="s" hint-placeholder-count="3">
        <div style="flex: 1 1 280px; display: flex; flex-direction: column; gap: 12px; padding: 26px; border-radius: 10px; background: #ffffff; border: 1px solid {{c.line}};">
          <span style="width: 40px; height: 40px; border-radius: 50%; background: {{c.dark}}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 800;">{{s.n}}</span>
          <h3 style="margin: 0; font-size: 20px; font-weight: 800;">{{s.title}}</h3>
          <p style="margin: 0; flex-grow: 1;">{{s.copy}}</p>
          <a href="#try" style="align-self: flex-start; text-decoration: none; border: 2px solid {{c.ink}}; color: {{c.ink}}; font-weight: 700; padding: 10px 18px; border-radius: 6px;">{{s.cta}}</a>
        </div>
      </sc-for>
    </div>
    <p style="margin: 0; font-weight: 600;">Immersive, scenario-based training, on demand – there when it’s needed. No classrooms. No scheduling headaches. No pulling people off the floor.</p>
  </div>
</section>

<!-- ============ S8 PROOF ============ -->
<section style="background: #ffffff;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 28px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S8 · Proof. Numbers count up on scroll. Design: show these ES results in brand colours, so they look different from the grey industry stats in S3 (The Stakes). Andrew to confirm: figures are based on 21 survey responses, excluding one internal test entry.</span>
    </sc-if>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <h2 style="margin: 0; font-size: clamp(26px, 3vw, 38px); line-height: 1.2; font-weight: 800;">Don’t take our word for it</h2>
      <p style="margin: 0; font-size: 18px;">We asked HR professionals, managers and team members to try it. Here’s what they told us.</p>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <sc-for list="{{stats}}" as="s" hint-placeholder-count="4">
        <div style="flex: 1 1 220px; padding: 22px; border-radius: 10px; background: {{c.panel}}; display: flex; flex-direction: column; gap: 6px;">
          <span style="font-size: 46px; font-weight: 800; line-height: 1; color: {{c.statColour}};">{{s.n}}</span>
          <span style="font-size: 15px;">{{s.label}}</span>
        </div>
      </sc-for>
    </div>
    <p style="margin: -12px 0 0; font-size: 13px; color: {{c.muted}};">Based on 21 participants in Enhancing Skills product testing, 2025.</p>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px 28px; padding: 16px 0; border-top: 1px solid {{c.line}}; border-bottom: 1px solid {{c.line}};">
      <span style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: {{c.muted}};">Participants included teams from</span>
      <sc-for list="{{proofLogos}}" as="l" hint-placeholder-count="5">
        <span style="flex: 0 1 150px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; color: #a6a6a6; white-space: nowrap;">{{l}}</span>
      </sc-for>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <sc-for list="{{quotes}}" as="q" hint-placeholder-count="3">
        <figure style="flex: 1 1 300px; margin: 0; padding: 24px; border-radius: 10px; border: 1px solid {{c.line}}; display: flex; flex-direction: column; gap: 12px;">
          <blockquote style="margin: 0; font-size: 16px;">“{{q.text}}”</blockquote>
          <figcaption style="font-size: 14px; font-weight: 700; color: {{c.muted}};">– {{q.role}}</figcaption>
        </figure>
      </sc-for>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px; padding: 22px; border-radius: 10px; border: 2px dashed {{c.line}}; color: {{c.muted}};">
      <span style="flex: 1 1 400px;">[Case study card – named client, framed as investing in managers. Hidden until approved.]</span>
      <a href="#resources" style="font-weight: 700; color: {{c.ink}};">Read the case studies →</a>
    </div>
  </div>
</section>

<!-- ============ S9 OBJECTIONS ============ -->
<section style="background: {{c.panel}};">
  <div style="max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 26px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S9 · You Might Be Thinking. Hover (or tap) a card to flip it.</span>
    </sc-if>
    <h2 style="margin: 0; font-size: clamp(26px, 3vw, 38px); line-height: 1.2; font-weight: 800;">You might be thinking…</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <sc-for list="{{objections}}" as="o" hint-placeholder-count="4">
        <div style="flex: 1 1 250px; height: 290px;">
          <button class="flip" aria-label="{{o.q}} {{o.a}}" style="height: 290px;">
            <span class="in">
              <span class="f" style="display: flex; flex-direction: column; justify-content: space-between; padding: 24px; border-radius: 10px; background: #ffffff; border: 1px solid {{c.line}};">
                <span style="font-size: 21px; font-weight: 800; line-height: 1.3;">“{{o.q}}”</span>
                <span style="font-size: 13px; font-weight: 700; color: {{c.muted}};">Hover to see our answer ↻</span>
              </span>
              <span class="b" style="display: flex; align-items: center; padding: 24px; border-radius: 10px; background: {{c.dark}}; color: #ffffff; font-size: 15px;">{{o.a}}</span>
            </span>
          </button>
        </div>
      </sc-for>
    </div>
    <a href="#what" style="font-weight: 700;">More questions? Read the FAQs →</a>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 18px; padding: 26px; border-radius: 10px; background: #ffffff; border: 2px solid {{c.ink}};">
      <div style="flex: 1 1 520px; display: flex; flex-direction: column; gap: 6px;">
        <strong style="font-size: 14px; text-transform: uppercase; letter-spacing: .05em;">For HR Directors</strong>
        <span style="font-size: 17px;">You hired HR professionals to be strategic partners to the business – not to coach every difficult conversation. We build that frontline capability at scale, so your HR team can work at the level you need.</span>
      </div>
      <a href="#pricing" style="text-decoration: none; border: 2px solid {{c.ink}}; color: {{c.ink}}; font-weight: 700; padding: 10px 18px; border-radius: 6px;">See pricing</a>
    </div>
  </div>
</section>

<!-- ============ S10 FINAL CTA ============ -->
<section style="position: relative; overflow: hidden; background: {{c.dark}}; color: #ffffff;">
  <img src="./assets/110fd9795712e4c381a22399f9ef8534.jpg" alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: {{c.imgFilter}}; opacity: .14;">
  <div style="position: relative; max-width: 960px; margin: 0 auto; padding: 112px 24px; display: flex; flex-direction: column; align-items: center; gap: 40px; text-align: center;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S10 · Final Call to Action. Book a call opens a Calendly-style pop-up.</span>
    </sc-if>
    <h2 style="margin: 0; font-size: clamp(28px, 3.4vw, 44px); line-height: 1.15; font-weight: 800;">Ready to see how this works for your team?</h2>
    <div style="align-self: stretch; display: flex; flex-wrap: wrap; justify-content: center; gap: 24px;">
      <div style="flex: 1 1 320px; display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 36px 32px; border-radius: 12px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.28);">
        <span style="font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; opacity: .85;">Ready to talk</span>
        <span style="font-size: 17px; max-width: 320px;">A practical 30-minute conversation about fit, rollout and pricing. No pitch.</span>
        <a href="#call" style="margin-top: 10px; text-decoration: none; background: {{c.accent}}; color: {{c.accentText}}; font-weight: 700; padding: 14px 28px; border-radius: 6px;">Book a call</a>
      </div>
      <div style="flex: 1 1 320px; display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 36px 32px; border-radius: 12px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.28);">
        <span style="font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; opacity: .85;">See it first</span>
        <span style="font-size: 17px; max-width: 320px;">Free – just your name and work email, and you’re watching.</span>
        <a href="#try" style="margin-top: 10px; text-decoration: none; border: 2px solid #ffffff; color: #ffffff; font-weight: 700; padding: 12px 26px; border-radius: 6px;">Try an Episode</a>
      </div>
    </div>
    <a href="#trailer" style="font-weight: 600;">Not sure yet? Watch the explainer →</a>
  </div>
</section>

<!-- ============ S11 LATEST NEWS ============ -->
<section style="background: #ffffff;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 80px 24px; display: flex; flex-direction: column; gap: 24px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S11 · Latest News. Three latest posts pulled from the ES LinkedIn company page (ref. MDM “Industry News”).</span>
    </sc-if>
    <div style="display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 12px;">
      <h2 style="margin: 0; font-size: clamp(24px, 2.6vw, 32px); font-weight: 800;">Latest from Enhancing Skills</h2>
      <a href="#linkedin" style="display: inline-flex; align-items: center; gap: 10px; font-weight: 700;"><span style="width: 30px; height: 30px; border-radius: 5px; border: 1px dashed {{c.muted}}; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; color: {{c.muted}}; text-decoration: none;">LI</span>Follow us on LinkedIn →</a>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <sc-for list="{{news}}" as="n" hint-placeholder-count="3">
        <article style="flex: 1 1 300px; border-radius: 10px; border: 1px solid {{c.line}}; overflow: hidden; display: flex; flex-direction: column;">
          <div style="aspect-ratio: 16 / 9; background: {{c.panel2}}; display: flex; align-items: center; justify-content: center; font-size: 12px; color: {{c.muted}};">[LinkedIn post image]</div>
          <div style="padding: 18px; display: flex; flex-direction: column; gap: 8px;">
            <span style="font-size: 13px; color: {{c.muted}};">{{n}}</span>
            <span style="height: 12px; border-radius: 3px; background: {{c.panel2}};"></span>
            <span style="height: 12px; width: 80%; border-radius: 3px; background: {{c.panel2}};"></span>
            <a href="#linkedin" style="display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700;"><span style="width: 20px; height: 20px; border-radius: 4px; border: 1px dashed {{c.muted}}; display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 700; color: {{c.muted}};">LI</span>Read on LinkedIn →</a>
          </div>
        </article>
      </sc-for>
    </div>
  </div>
</section>

<!-- ============ S12 FOOTER ============ -->
<footer style="background: {{c.footer}}; color: #ffffff;">
  <div style="max-width: 1200px; margin: 0 auto; padding: 56px 24px 28px; display: flex; flex-direction: column; gap: 32px;">
    <sc-if value="{{showNotes}}" hint-placeholder-val="{{ true }}">
      <span style="align-self: flex-start; background: #fff7cc; color: #3d3300; font-size: 12px; padding: 4px 10px; border-radius: 4px;">S12 · Footer.</span>
    </sc-if>
    <div style="display: flex; flex-wrap: wrap; gap: 32px;">
      <div style="flex: 1 1 220px; display: flex; flex-direction: column; gap: 8px; font-size: 14px;">
        <strong style="font-size: 17px; color: {{c.wordmark}};">Enhancing Skills</strong>
        <span>[email] · [phone]</span>
        <a href="#linkedin">LinkedIn</a>
        <span style="opacity: .85;">[Newsletter sign-up – optional]</span>
      </div>
      <nav aria-label="What we do" style="flex: 1 1 160px; display: flex; flex-direction: column; gap: 6px; font-size: 14px;"><strong>What we do</strong><a href="#what">How it works</a><a href="#what">The episodes</a><a href="#what">Who it’s for</a><a href="#what">FAQs</a></nav>
      <nav aria-label="Resources" style="flex: 1 1 160px; display: flex; flex-direction: column; gap: 6px; font-size: 14px;"><strong>Resources</strong><a href="#resources">Case studies</a><a href="#resources">Whitepaper</a><a href="#resources">Videos &amp; episodes</a></nav>
      <nav aria-label="Company" style="flex: 1 1 160px; display: flex; flex-direction: column; gap: 6px; font-size: 14px;"><strong>Company</strong><a href="#about">About</a><a href="#pricing">Pricing</a><a href="#contact">Get in touch</a><a href="#login">Log in</a></nav>
    </div>
    <div style="border-top: 1px solid rgba(255,255,255,.25); padding-top: 18px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 13px; opacity: .9;">
      <span>Enhancing Skills supports, and does not replace, your organisation’s HR policies and professional advice.</span>
      <span>Privacy · Cookies · Accessibility · Terms · © Enhancing Skills</span>
    </div>
  </div>
</footer>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;brandColours&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:false,&quot;section&quot;:&quot;Wireframe&quot;},&quot;showNotes&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:false,&quot;section&quot;:&quot;Wireframe&quot;},&quot;$preview&quot;:{&quot;width&quot;:1440,&quot;height&quot;:8200}}">
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { branch: 'a', tab: 'hr', menu: null };
  }
  renderVals() {
    const brand = this.props.brandColours ?? false;
    const showNotes = this.props.showNotes ?? true;
    const c = brand ? {
      ink: '#0C274C', muted: '#44546A', dark: '#0C274C', footer: '#081B36', panel: '#F3F6FA', panel2: '#E3EAF3', line: '#C9D3E0',
      accent: '#F58634', accentText: '#0C274C', accentSoft: '#FDE7D4', accentOnDark: '#F58634', wordmark: '#F58634',
      chip: '#123B6D', chipText: '#FFFFFF', alert: '#F58634', alertText: '#0C274C', statColour: '#123B6D', imgFilter: 'none'
    } : {
      ink: '#1F1F1F', muted: '#595959', dark: '#2B2B2B', footer: '#1A1A1A', panel: '#F2F2F2', panel2: '#E2E2E2', line: '#C8C8C8',
      accent: '#E6E6E6', accentText: '#1F1F1F', accentSoft: '#E9E9E9', accentOnDark: '#FFFFFF', wordmark: '#FFFFFF',
      chip: '#DDDDDD', chipText: '#1F1F1F', alert: '#4A4A4A', alertText: '#FFFFFF', statColour: '#1F1F1F', imgFilter: 'grayscale(1)'
    };
    const branches = {
      a: { img: './assets/bc0e218d1af133071004f016055c5864.jpg', alt: 'Susan reacts defensively', quote: '“The new guy is workplace police.”', why: 'An accusation puts people on the defensive. When feedback feels like an attack, people justify their behaviour instead of reflecting on it.' },
      b: { img: './assets/70ef39c271ee8eb8d6ec109387bbe9bb.jpg', alt: 'Susan reflects on her behaviour', quote: '“Yeah, I hadn’t really thought about it like that.”', why: 'Focusing on the future rather than past blame turns it into a shared goal – and opens the door to change.' }
    };
    const pick = (k) => () => this.setState({ branch: k });
    const options = [
      { key: 'a', label: 'Option A – Call it out', line: 'Jack: “It’s not banter, Susan. That’s bullying.”' },
      { key: 'b', label: 'Option B – Reset it', line: 'Cathy: “Maybe we should try to reset things a bit.”' }
    ].map(o => ({ ...o, active: this.state.branch === o.key, inactive: this.state.branch !== o.key, pick: pick(o.key) }));
    const tabsData = {
      hr: { label: 'HR Teams', img: './assets/3fb20d2494dcadc7996755871dc4708f.jpg', alt: 'A team meeting led by a manager', head: 'Spend less time coaching the same conversation.', copy: 'You can’t be beside every manager, in every store, on every shift. We help build that capability across your organisation – and help your HR team investigate fairly when an issue does become formal.', bullets: ['More consistent conversations across sites', 'Fewer repeat coaching calls on the basics', 'More time for prevention and strategy'], cta: 'Explore what we do' },
      mgr: { label: 'Managers', img: './assets/374dd3b03bd2ab027059f4a8ff9815e2.jpg', alt: 'Jack raises a concern', head: 'HR support before you need to call HR.', copy: 'You don’t need to become an HR expert. You need to know what to say when a conversation gets difficult. See how real situations unfold, then go into yours better prepared.', bullets: ['Scenarios from the floor, not the classroom', 'Dip in the night before a difficult conversation', 'Short episodes, on your own schedule'], cta: 'Try an Episode' },
      emp: { label: 'Employees', img: './assets/b5ff351920f11bddcdc838c000e34665.jpg', alt: 'Simon talks with a colleague', head: 'Raise a concern without it becoming a confrontation.', copy: 'Employees see how to raise an issue clearly and calmly, and what a fair process looks like. The same training as their managers, so both sides start from the same place.', bullets: ['Raise concerns early and constructively', 'Know what to expect from a fair process', 'Rolled out to all staff, not just a hand-picked few'], cta: 'Explore what we do' }
    };
    const tabs = ['hr', 'mgr', 'emp'].map(k => ({ label: tabsData[k].label, active: this.state.tab === k, inactive: this.state.tab !== k, pick: () => this.setState({ tab: k }) }));
    return {
      c, showNotes, options, tabs,
      menuOpen: !!this.state.menu,
      menuWhatOpen: this.state.menu === 'what' ? 'true' : 'false',
      menuResOpen: this.state.menu === 'res' ? 'true' : 'false',
      whatArrow: this.state.menu === 'what' ? '▴' : '▾',
      resArrow: this.state.menu === 'res' ? '▴' : '▾',
      toggleWhat: () => this.setState({ menu: this.state.menu === 'what' ? null : 'what' }),
      toggleRes: () => this.setState({ menu: this.state.menu === 'res' ? null : 'res' }),
      closeMenu: () => this.setState({ menu: null }),
      menuTitle: this.state.menu === 'res' ? 'Resources' : 'What we do',
      menuIntro: this.state.menu === 'res' ? 'Case studies, research and videos to help you build the case.' : 'One page that explains the training, who it’s for and why it works.',
      menuItems: this.state.menu === 'res' ? [
        { t: 'Case studies', d: 'How organisations are investing in their managers.' },
        { t: 'Whitepaper', d: 'The challenge for HR in commercial roster-based businesses.' },
        { t: 'Videos & episodes', d: 'The explainer video and curated episode clips.' },
        { t: 'FAQs', d: 'Time, rollout, certification and more.' }
      ] : [
        { t: 'How it works', d: 'Watch the scene, choose what to say, see where it leads.' },
        { t: 'The episodes', d: 'Discipline, Dignity at Work, Grievance and Gross Misconduct.' },
        { t: 'Who it’s for', d: 'HR teams, managers and employees.' },
        { t: 'Why it’s different', d: 'How we compare with courses, e-learning and AI.' },
        { t: 'What learners say', d: 'Results and quotes from people who have tried it.' },
        { t: 'FAQs', d: 'Time, rollout, certification and more.' }
      ],
      outcome: branches[this.state.branch],
      isA: this.state.branch === 'a', isB: this.state.branch === 'b',
      tabHr: this.state.tab === 'hr', tabMgr: this.state.tab === 'mgr', tabEmp: this.state.tab === 'emp',
      tab: tabsData[this.state.tab],
      logos: ['Chadwicks', 'SuperValu', 'Musgrave', 'ESB Networks', 'Uisce Éireann'],
      proofLogos: ['Chadwicks', 'SuperValu', 'Musgrave', 'ESB Networks', 'Uisce Éireann'],
      series: [
        { name: 'Discipline', desc: 'Raising a performance or conduct concern early, fairly and without it turning into a fight.', img: '', noImg: true },
        { name: 'Dignity at Work', desc: 'Recognising behaviour that crosses the line, and what to do when someone says it has.', img: './assets/db3b83e43f260fcc13faa0a54e0e9464.jpg', noImg: false },
        { name: 'Grievance', desc: 'How an employee raises a complaint – and how the manager and HR respond to it.', img: '', noImg: true },
        { name: 'Gross Misconduct', desc: 'Staying calm, fair and by the book when something serious has happened.', img: '', noImg: true }
      ],
      steps: [
        { n: '1', title: 'See how it works', copy: 'A two-minute animated explainer showing how the training works across your sites and teams.', cta: 'Watch the explainer' },
        { n: '2', title: 'Try it free', copy: 'Experience one episode yourself, free. Choose a path and see how different choices lead to different outcomes.', cta: 'Try an Episode' },
        { n: '3', title: 'Talk to us', copy: 'A 30-minute call about how this would work across your sites and shifts. No pitch, no commitment.', cta: 'Book a call' }
      ],
      stats: [
        { n: '95%', label: 'would use what they learned in a real workplace situation' },
        { n: '95%', label: 'could clearly see how different communication choices led to different outcomes' },
        { n: '86%', label: 'said it’s training they need' },
        { n: '81%', label: 'rated it extremely or very engaging and impactful' }
      ],
      quotes: [
        { text: 'I particularly liked the non linear approach which allowed me to see different paths and outcomes I may not have considered', role: 'Team Lead' },
        { text: 'The alternative situational videos are brilliant to see how outcomes can play out differently', role: 'Senior Manager' },
        { text: 'Seeing things from different point of views, it really helped give a better understanding of how things can be perceived, how one word/reaction can change a whole interaction', role: 'Team Member' }
      ],
      objections: [
        { q: 'We already send managers on courses.', a: 'Courses teach the process. We focus on the conversation. And because it’s on demand, managers can refresh just before they need it – not months after a classroom day.' },
        { q: 'We already have an e-learning platform.', a: 'Generic platforms cover hundreds of topics. We focus on one: the difficult workplace conversation. Built from real HR situations by an HR practitioner – and gripping enough that people want to see what happens next.' },
        { q: 'Couldn’t AI do this?', a: 'AI is great for information – we use it too. But AI only answers what you think to ask, and tells you what you should have done. We show what actually happens: the tone, the look, the reaction. And everyone follows the same structured path, so you know your whole team is trained to the same standard.' },
        { q: 'Our managers don’t have time.', a: 'Short episodes. No classrooms, no travel, no rota changes. Dip in on a break or the night before a difficult conversation.' }
      ],
      news: ['[Date] · LinkedIn post', '[Date] · LinkedIn post', '[Date] · LinkedIn post']
    };
  }
}
</script>
</body>
</html>
