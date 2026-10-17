import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown, ArrowUp, ArrowUpRight, List, X, BookOpen, UsersThree, Leaf, Handshake } from "@phosphor-icons/react";
const assets = `${import.meta.env.BASE_URL}assets/`;
const navigation = [[`about`, `About`], [`services`, `Services`], [`experience`, `Experience`], [`contact`, `Contact`]];
const services = [
  { title: `Future-ready education`, text: `School improvement, curriculum innovation and learning experiences that prepare students for a changing world.`, Icon: BookOpen },
  { title: `Professional learning`, text: `Practical workshops, Training of Trainers programmes and capacity-building for educators and leadership teams.`, Icon: UsersThree },
  { title: `Smart city & sustainability`, text: `Learning programmes connecting STEM, data, sustainability, urban thinking and real-world problem solving.`, Icon: Leaf },
  { title: `Strategy & partnerships`, text: `Consulting support that turns ambitious educational and community ideas into focused, measurable initiatives.`, Icon: Handshake },
];
const roles = [
  { period: `2026 — Present`, title: `Founder & Lead Consultant`, points: [`Lead a future-ready education institute connecting innovation, sustainability and smart-city thinking.`, `Design training, consulting and partnership solutions for schools, universities, NGOs and organisations.`] },
  { period: `Recent leadership experience`, title: `Science Department Leader & Environmental Science Educator`, points: [`Led curriculum quality, teacher mentoring and professional learning across multiple academic pathways.`, `Guided student research, science fairs, SDG initiatives and project-based learning.`] },
  { period: `Consulting experience`, title: `Educational Advisor, Trainer & Consultant`, points: [`Supported curriculum design, teacher development, school improvement and data-informed decision-making.`, `Delivered workshops in sustainability, smart education, data literacy and teaching innovation.`] },
  { period: `20+ years of experience`, title: `School & Programme Leadership`, points: [`Led academic priorities, programme implementation, staff performance support and improvement planning.`, `Coordinated science departments and taught Chemistry, Physics and Biology for Grades 6–12.`] },
];
const credentials = [`MBA`, `PMP`, `Educational Quality Assurance`, `Data Analysis & Power BI`, `Advanced Excel 365`, `QRTA ToT`, `Cambridge & IB Science`, `Apple Teacher`];
const impact = [`Founder of Edu4SmartCity, an institute connecting education, smart cities and sustainability.`, `First-place recognition for a smart-city project in Global Smart City Management.`, `Mentor for JoYS and ISEF student research and innovation competitions.`, `Speaker and contributor to education, research and future-learning conversations.`];
const instagram = `https://www.instagram.com/edu4smartcity?stkn=MTkzcDdtcDljbzNyMg==`;
const pageLink = page => `?page=${page}`;
const whatsapp = title => `https://wa.me/962778236673?text=${encodeURIComponent(`Hello Sawsan, I would like to learn more about ${title}.`)}`;
const workshops = [
  [`AI for Teachers`, `3 hrs`, `Lesson planning, differentiation, prompts, feedback and ethical use.`, `Immediate teacher needs`],
  [`Student Engagement`, `3 hrs`, `Active learning, questioning, participation and student-centred strategies.`, `Immediate teacher needs`],
  [`Assessment for Learning`, `3 hrs`, `Formative assessment, success criteria, feedback and identifying learning gaps.`, `Immediate teacher needs`],
  [`Differentiation Made Practical`, `3 hrs`, `Mixed abilities, scaffolding, flexible support and classroom adaptation.`, `Immediate teacher needs`],
  [`Data-Informed Teaching`, `3 hrs`, `Interpret student data, identify patterns and plan interventions.`, `Improving teaching practice`],
  [`Project-Based Learning`, `4 hrs`, `Real-world projects, driving questions and authentic assessment.`, `Improving teaching practice`],
  [`Future-Ready Skills`, `3 hrs`, `Critical thinking, collaboration, creativity, digital literacy and adaptability.`, `Improving teaching practice`],
  [`Sustainability in the Classroom`, `3 hrs`, `SDGs, environmental challenges and responsible citizenship.`, `Signature programmes`],
  [`Smart City Education`, `4 hrs`, `Mobility, energy, environment, data and smart-city thinking.`, `Signature programmes`],
  [`Teacher as Innovator`, `3 hrs`, `Design thinking, innovation mindset, testing ideas and change agency.`, `Signature programmes`],
];
const pageData = {
  sawsan: { title: `Meet Sawsan Rabi`, intro: `Educational leader · Smart city specialist · Founder, Edu4SmartCity`, images: [[`sawsan-journey`, `Sawsan Rabi — professional journey`]] },
  student: { title: `Student-Track`, intro: `Smart Citizens → City Makers. Explore. Investigate. Create. Make a difference.`, images: [[`student-track`, `Student Track`], [`program-roadmap`, `Program Roadmap`]] },
  teacher: { title: `Teacher-Track`, intro: `Future-Ready Educators → Change Leaders. Learn. Apply. Inspire. Transform.`, images: [[`teacher-track`, `Teacher Track`], [`teacher-roadmap`, `Teacher Development Roadmap — Phase 1`]] },
  sustainability: { title: `Smart city & sustainability`, intro: services[2].text, images: [[`program-roadmap`, `Program Roadmap`]] },
  partnerships: { title: `Strategy & partnerships`, intro: services[3].text, images: [[`program-roadmap`, `Program Roadmap`]] },
  workshops: { title: `Our workshops`, intro: `Practical learning for teachers. Choose a workshop to enquire and register through WhatsApp.`, images: [] },
};
function DetailPage({ page }) {
  const data = pageData[page];
  useEffect(() => { document.title = `${data.title} | Edu4SmartCity`; }, [data.title]);
  return <><header className="site-header"><a className="brand" href="./" aria-label="Edu4SmartCity home"><img src={`${assets}edu4smartcity-logo.webp`} alt="Edu4SmartCity" width="80" height="80" /></a><a className="text-link" href="./#services">Back to services <ArrowRight size={19} /></a></header>
  <main id="main" className="detail-page section-wrap"><a className="detail-back" href="./">← Back to home</a><p className="eyebrow teal">Edu4SmartCity</p><h1>{data.title}</h1><p className="detail-intro">{data.intro}</p>
  {page === `sawsan` && <a className="button primary" href={instagram} target="_blank" rel="noopener noreferrer">Follow Sawsan on Instagram <ArrowUpRight size={20} /></a>}
  <div className="detail-images">{data.images.map(([name,title]) => <figure key={name}><figcaption>{title}<a href={`${assets}${name}.webp`} target="_blank" rel="noopener noreferrer">View full image ↗</a></figcaption><a href={`${assets}${name}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`View full ${title}`}><img src={`${assets}${name}.webp`} alt={title} loading="lazy" /></a></figure>)}</div>
  {page !== `sawsan` && page !== `workshops` && <a className="button primary" href={pageLink(`workshops`)}>Learn more about our workshops <ArrowRight size={20} /></a>}
  {page === `workshops` && <><details className="payment-details"><summary>Click for payment details</summary><div><p>Cliq alias</p><strong>Sawsanrabi</strong><p>For account details and payment confirmation, contact Sawsan.</p><a className="text-link" href={whatsapp(`payment details`)} target="_blank" rel="noopener noreferrer">Ask about payment ↗</a></div></details><div className="workshop-grid">{workshops.map(([title,duration,text,stage],index) => <a className="workshop-card" key={title} href={whatsapp(title)} target="_blank" rel="noopener noreferrer"><span className="eyebrow teal">{stage}</span><div className="workshop-meta"><span>{`${index+1}`.padStart(2,`0`)}</span><span>{duration}</span></div><h2>{title}</h2><p>{text}</p><span className="text-link">Enquire on WhatsApp <ArrowUpRight size={20} /></span></a>)}</div></>}
  </main><footer className="detail-footer"><a href="./">Edu4SmartCity</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={whatsapp(data.title)} target="_blank" rel="noopener noreferrer">WhatsApp · +962 7 7823 6673 ↗</a></footer></>;
}
export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(`home`);
  const menuButton = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); }), { rootMargin: `-18% 0px -55% 0px` });
    document.querySelectorAll(`section[id]`).forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const key = event => { if (event.key === `Escape`) { setMenuOpen(false); menuButton.current?.focus(); } };
    const outside = event => { if (!event.target.closest(`.site-header`)) setMenuOpen(false); };
    document.addEventListener(`keydown`, key); document.addEventListener(`pointerdown`, outside);
    return () => { document.removeEventListener(`keydown`, key); document.removeEventListener(`pointerdown`, outside); };
  }, [menuOpen]);
  const close = () => setMenuOpen(false);
  const page = new URLSearchParams(window.location.search).get(`page`);
  if (pageData[page]) return <DetailPage page={page} />;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="brand" href="#home" aria-label="Edu4SmartCity home" onClick={close}><img src={`${assets}edu4smartcity-logo.webp`} alt="Edu4SmartCity" width="80" height="80" /></a><nav id="main-navigation" className={menuOpen ? `main-nav is-open` : `main-nav`} aria-label="Main navigation">{navigation.map(([id,title]) => <a key={id} href={`#${id}`} onClick={close} aria-current={activeSection === id ? `location` : undefined}>{title}</a>)}</nav><a className="header-cta" href="#contact" onClick={close}>Work with us <ArrowRight size={19} aria-hidden="true" /></a><button ref={menuButton} className="menu-toggle" type="button" aria-label={menuOpen ? `Close navigation` : `Open navigation`} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X size={26} /> : <List size={26} />}</button></header>
    <main id="main">
      <section id="home" className="hero"><img className="hero-background" src={`${assets}hero-background.webp`} alt="" width="1672" height="941" fetchPriority="high" /><div className="hero-copy"><p className="eyebrow">Education · Innovation · Sustainability</p><h1>Building the<br /><em>future</em> through<br />learning.</h1><p className="hero-intro">Edu4SmartCity helps education leaders, organisations and communities turn future-ready ideas into meaningful learning and lasting impact.</p><div className="hero-actions"><a className="button primary" href="#services">Explore services <ArrowRight size={20} aria-hidden="true" /></a><a className="text-link" href="#about">Meet Sawsan <ArrowDown size={19} aria-hidden="true" /></a></div></div></section>
      <section id="about" className="about section-wrap"><div className="portrait-wrap"><img src={`${assets}sawsan-portrait.webp`} alt="Sawsan Rabi working on her laptop" width="1600" height="1600" loading="lazy" /></div><div className="about-copy"><p className="eyebrow teal">About Sawsan Rabi</p><h2>Education for<br />brighter, more sustainable<br />tomorrows.</h2><p className="about-lead">With over 20 years of experience, Sawsan Rabi works at the intersection of education, innovation and sustainability, helping individuals, organisations and communities design learning that creates real and lasting impact.</p><a className="text-link about-more" href={pageLink(`sawsan`)}>Learn more about Sawsan <ArrowRight size={20} aria-hidden="true" /></a></div></section>
      <section id="about-detail" className="about-detail section-wrap"><div><p className="eyebrow teal">People first. Evidence led. Future ready.</p><h2>Education is where<br /><em>possibility</em> begins.</h2></div><div className="body-copy"><p>I am an educational leader, trainer, consultant and entrepreneur with more than 20 years of experience across school leadership, curriculum, teacher development, quality assurance and science education.</p><p>Through Edu4SmartCity, I bring together education, innovation, smart-city thinking and sustainability to equip people and institutions for a better future.</p><div className="signature">Sawsan Rabi<span>Founder, Edu4SmartCity</span></div></div></section>
      <section className="statement"><blockquote>“The smartest cities start with <em>empowered people.</em>”</blockquote><p className="eyebrow">Edu4SmartCity principle</p></section>
      <section id="services" className="services section-wrap"><div className="section-heading"><div><p className="eyebrow teal">What we do</p><h2>From ideas to <em>impact.</em></h2></div><p>Thoughtful, practical services designed for education systems that want to move forward with confidence.</p></div><div className="service-grid">{services.map(({title,text,Icon},index) => <article className="service-card" key={title}><span className="item-number">{`${index+1}`.padStart(2,`0`)}</span><Icon className="service-icon" size={37} weight="light" aria-hidden="true" /><h3>{title}</h3><p>{text}</p><div className="service-actions"><a className="button track-button" href={pageLink([`student`,`teacher`,`sustainability`,`partnerships`][index])}>{[`Student-Track`,`Teacher-Track`,`Explore programmes`,`Explore partnerships`][index]} <ArrowRight size={17} /></a>{index < 2 && <a className="workshops-link" href={pageLink(`workshops`)}>Learn more about our workshops <ArrowRight size={16} /></a>}</div><a className="service-link" href="#contact" aria-label={`Enquire about ${title}`}>Let’s talk <ArrowUpRight size={21} aria-hidden="true" /></a></article>)}</div></section>
      <section id="experience" className="experience section-wrap"><div className="section-heading"><div><p className="eyebrow teal">Professional journey</p><h2>Leadership that<br /><em>makes learning move.</em></h2></div><p>Selected roles and responsibilities. Previous employers are intentionally not listed.</p></div><div className="roles">{roles.map(role => <article className="role" key={role.title}><div><p className="role-period">{role.period}</p><h3>{role.title}</h3></div><ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div></section>
      <section className="credentials section-wrap"><p className="eyebrow teal">Expertise & credentials</p><div className="credentials-inner"><h2>A multidisciplinary<br /><em>perspective.</em></h2><div className="tags">{credentials.map(tag => <span key={tag}>{tag}</span>)}</div></div></section>
      <section className="impact section-wrap"><div><p className="eyebrow">Selected impact</p><h2>Ideas with a<br /><em>real-world</em> edge.</h2></div><div className="impact-list">{impact.map((text,index) => <article key={text}><span>{`${index+1}`.padStart(2,`0`)}</span><p>{text}</p></article>)}</div></section>
      <section id="contact" className="contact section-wrap"><div><p className="eyebrow teal">Let’s create what’s next</p><h2>Ready to build a<br /><em>smarter future?</em></h2></div><div className="contact-actions"><a className="button primary" href="mailto:Sawsan@aip-jordan.com">Start a conversation <ArrowUpRight size={22} aria-hidden="true" /></a><a className="text-link" href={whatsapp(`Edu4SmartCity`)} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={20} /></a><a className="email-link" href="mailto:Sawsan@aip-jordan.com">Sawsan@aip-jordan.com</a></div></section>
    </main><footer className="site-footer"><a href="#home" aria-label="Edu4SmartCity home"><img src={`${assets}edu4smartcity-logo.webp`} width="82" height="82" alt="Edu4SmartCity" loading="lazy" /></a><p>© 2026 Edu4SmartCity Innovation Institute</p><a className="text-link" href="#home">Back to top <ArrowUp size={18} aria-hidden="true" /></a></footer>
  </>;
}
