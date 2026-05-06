import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "InAmigos Foundation — Creating Awareness, Inspiring Change" },
      {
        name: "description",
        content:
          "InAmigos Foundation is a Section 8 NGO empowering communities through education, sustainability, women empowerment, and social impact across India.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "public/favicon.ico", // path to your favicon
      },
    ],
  }),
});

const styles = `
  /* RESET */
  .ngo * { margin: 0; padding: 0; box-sizing: border-box; }
  .ngo { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937; background: #fff; line-height: 1.6; scroll-behavior: smooth; }
  .ngo img { max-width: 100%; display: block; }
  .ngo a { text-decoration: none; color: inherit; }

  .ngo {
    --green: #2e8b57; --green-dark: #1f6b42;
    --blue: #1e3a8a; --blue-light: #2563eb;
    --bg-soft: #f1f5f9; --text-muted: #475569;
    --shadow: 0 6px 20px rgba(0,0,0,0.08); --radius: 14px;
  }

  .ngo .container { max-width: 1150px; margin: 0 auto; padding: 0 20px; }
  .ngo section { padding: 80px 0; }
  .ngo h2.section-title { font-size: 2rem; text-align: center; margin-bottom: 12px; color: var(--blue); }
  .ngo .section-subtitle { text-align: center; color: var(--text-muted); max-width: 720px; margin: 0 auto 50px; }

  /* NAVBAR */
  .ngo .navbar { position: sticky; top: 0; z-index: 50; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
  .ngo .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; max-width: 1150px; margin: 0 auto; }
  .ngo .logo { font-weight: 700; font-size: 1.3rem; color: var(--green); }
  .ngo .logo span { color: var(--blue); }
  .ngo .nav-links { display: flex; gap: 24px; list-style: none; flex-wrap: wrap; }
  .ngo .nav-links a { font-weight: 500; color: #334155; transition: color .2s; }
  .ngo .nav-links a:hover { color: var(--green); }
  .ngo .btn { display: inline-block; padding: 10px 22px; border-radius: 30px; font-weight: 600; cursor: pointer; border: none; transition: transform .2s, box-shadow .2s, background .2s; }
  .ngo .btn-primary { background: var(--green); color: #fff; }
  .ngo .btn-primary:hover { background: var(--green-dark); transform: translateY(-2px); box-shadow: var(--shadow); }
  .ngo .btn-outline { background: transparent; color: #fff; border: 2px solid #fff; }
  .ngo .btn-outline:hover { background: #fff; color: var(--green); }
  .ngo .btn-blue { background: var(--blue-light); color: #fff; }
  .ngo .btn-blue:hover { background: var(--blue); transform: translateY(-2px); }
  .ngo .menu-toggle { display: none; font-size: 1.6rem; background: none; border: none; cursor: pointer; }

  /* HERO */
  .ngo .hero {
    position: relative; color: #fff; text-align: center; padding: 130px 20px;
    background: linear-gradient(135deg, rgba(46,139,87,0.85) 0%, rgba(30,58,138,0.85) 100%),
      url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
  }
  .ngo .hero h1 { font-size: 3rem; margin-bottom: 14px; }
  .ngo .hero .tagline { font-size: 1.3rem; font-style: italic; margin-bottom: 18px; opacity: .95; }
  .ngo .hero p.intro { max-width: 720px; margin: 0 auto 32px; font-size: 1.05rem; opacity: .95; }
  .ngo .hero-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

  /* ABOUT */
  .ngo .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
  .ngo .about-text p { color: var(--text-muted); margin-bottom: 14px; }
  .ngo .about-info { background: var(--bg-soft); padding: 28px; border-radius: var(--radius); box-shadow: var(--shadow); }
  .ngo .about-info h3 { color: var(--green); margin-bottom: 14px; }
  .ngo .about-info ul { list-style: none; }
  .ngo .about-info li { padding: 8px 0; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 10px; }
  .ngo .about-info li::before { content: "✔"; color: var(--green); font-weight: bold; }
  .ngo .about-info li:last-child { border-bottom: none; }

  /* MVV */
  .ngo .mvv { background: var(--bg-soft); }
  .ngo .mvv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
  .ngo .mvv-card { background: #fff; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); text-align: center; transition: transform .25s; }
  .ngo .mvv-card:hover { transform: translateY(-5px); }
  .ngo .mvv-card .emoji { font-size: 2.4rem; margin-bottom: 10px; }
  .ngo .mvv-card h3 { color: var(--blue); margin-bottom: 10px; }
  .ngo .mvv-card p { color: var(--text-muted); }

  /* FOUNDER */
  .ngo .founder-grid { display: grid; grid-template-columns: 320px 1fr; gap: 40px; align-items: center; }
  .ngo .founder-photo { width: 100%; aspect-ratio: 1/1; border-radius: var(--radius); object-fit: cover; box-shadow: var(--shadow); border: 4px solid var(--green); }
  .ngo .founder-text h3 { color: var(--blue); font-size: 1.6rem; margin-bottom: 6px; }
  .ngo .founder-role { color: var(--green); font-weight: 600; margin-bottom: 14px; }
  .ngo .founder-text p { color: var(--text-muted); margin-bottom: 12px; }
  .ngo .founder-quote { border-left: 4px solid var(--green); padding: 10px 16px; background: var(--bg-soft); font-style: italic; color: #334155; border-radius: 6px; }

  /* INITIATIVES */
  .ngo .initiatives { background: var(--bg-soft); }
  .ngo .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 26px; }
  .ngo .card { background: #fff; border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; transition: transform .25s, box-shadow .25s; display: flex; flex-direction: column; }
  .ngo .card:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.14); }
  .ngo .card-img { width: 100%; height: 180px; object-fit: cover; }
  .ngo .card-body { padding: 22px; border-top: 4px solid var(--green); }
  .ngo .card:hover .card-body { border-top-color: var(--blue-light); }
  .ngo .card h3 { color: var(--blue); margin-bottom: 8px; }
  .ngo .card p { color: var(--text-muted); font-size: .97rem; }

  /* IMPACT */
  .ngo .impact { background: linear-gradient(135deg, #1e3a8a, #2e8b57); color: #fff; }
  .ngo .impact h2.section-title { color: #fff; }
  .ngo .impact .section-subtitle { color: rgba(255,255,255,0.9); }
  .ngo .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-bottom: 40px; }
  .ngo .stat { background: rgba(255,255,255,0.1); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.2); padding: 28px; border-radius: var(--radius); text-align: center; transition: transform .25s; }
  .ngo .stat:hover { transform: translateY(-4px); background: rgba(255,255,255,0.18); }
  .ngo .stat .num { font-size: 2.2rem; font-weight: 700; margin-bottom: 6px; }
  .ngo .stat .label { opacity: .9; }
  .ngo .impact-note { text-align: center; max-width: 720px; margin: 0 auto; opacity: .92; }

  /* TIMELINE */
  .ngo .timeline { position: relative; max-width: 800px; margin: 0 auto; padding-left: 30px; }
  .ngo .timeline::before { content: ""; position: absolute; left: 8px; top: 0; bottom: 0; width: 3px; background: var(--green); }
  .ngo .tl-item { position: relative; margin-bottom: 30px; }
  .ngo .tl-item::before { content: ""; position: absolute; left: -30px; top: 6px; width: 18px; height: 18px; border-radius: 50%; background: var(--blue-light); border: 3px solid #fff; box-shadow: 0 0 0 2px var(--green); }
  .ngo .tl-item h4 { color: var(--blue); margin-bottom: 4px; }
  .ngo .tl-item .year { color: var(--green); font-weight: 700; margin-right: 8px; }
  .ngo .tl-item p { color: var(--text-muted); }

  /* GALLERY */
  .ngo .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; }
  .ngo .gallery-item { position: relative; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); aspect-ratio: 4/3; cursor: pointer; background: #e2e8f0; }
  .ngo .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
  .ngo .gallery-item:hover img { transform: scale(1.08); }
  .ngo .gallery-item .caption { position: absolute; left: 0; right: 0; bottom: 0; background: linear-gradient(transparent, rgba(0,0,0,0.78)); color: #fff; padding: 32px 16px 14px; font-weight: 600; }

  /* TESTIMONIALS */
  .ngo .testimonials { background: var(--bg-soft); }
  .ngo .testi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
  .ngo .testi { background: #fff; padding: 26px; border-radius: var(--radius); box-shadow: var(--shadow); position: relative; }
  .ngo .testi::before { content: "\\201C"; position: absolute; top: -10px; left: 16px; font-size: 4rem; color: var(--green); line-height: 1; }
  .ngo .testi p { color: var(--text-muted); font-style: italic; margin-bottom: 16px; padding-top: 18px; }
  .ngo .testi .who { display: flex; align-items: center; gap: 12px; }
  .ngo .testi .who img { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; }
  .ngo .testi .who strong { color: var(--blue); display: block; }
  .ngo .testi .who span { color: var(--text-muted); font-size: .85rem; }

  /* INVOLVE */
  .ngo .involve-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
  .ngo .involve { background: #fff; padding: 28px; border-radius: var(--radius); box-shadow: var(--shadow); border-bottom: 4px solid var(--blue-light); transition: transform .25s; }
  .ngo .involve:hover { transform: translateY(-5px); border-bottom-color: var(--green); }
  .ngo .involve h3 { color: var(--blue); margin-bottom: 8px; }
  .ngo .involve p { color: var(--text-muted); margin-bottom: 14px; }

  /* FAQ */
  .ngo .faq { background: var(--bg-soft); }
  .ngo .faq-list { max-width: 820px; margin: 0 auto; }
  .ngo details { background: #fff; padding: 18px 22px; border-radius: var(--radius); box-shadow: var(--shadow); margin-bottom: 14px; cursor: pointer; }
  .ngo details[open] { border-left: 4px solid var(--green); }
  .ngo summary { font-weight: 600; color: var(--blue); list-style: none; }
  .ngo summary::after { content: "+"; float: right; color: var(--green); font-size: 1.4rem; line-height: 1; }
  .ngo details[open] summary::after { content: "\\2212"; }
  .ngo details p { color: var(--text-muted); margin-top: 10px; }

  /* PARTNERS */
  .ngo .partners-row { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 30px; }
  .ngo .partner { background: var(--bg-soft); padding: 18px 28px; border-radius: var(--radius); font-weight: 600; color: var(--blue); box-shadow: var(--shadow); }

  /* CTA */
  .ngo .cta { background: linear-gradient(135deg, var(--green), var(--blue-light)); color: #fff; text-align: center; }
  .ngo .cta h2 { color: #fff; font-size: 2rem; margin-bottom: 12px; }
  .ngo .cta p { color: rgba(255,255,255,0.95); max-width: 620px; margin: 0 auto 30px; }
  .ngo .cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .ngo .cta .btn-primary { background: #fff; color: var(--green); }
  .ngo .cta .btn-primary:hover { background: #f1f5f9; color: var(--green-dark); }

  /* CONTACT */
  .ngo .contact { text-align: center; }
  .ngo .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; max-width: 900px; margin: 0 auto; }
  .ngo .contact-card { background: #fff; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow); border-top: 4px solid var(--green); text-align: left; }
  .ngo .contact-card h3 { color: var(--blue); margin-bottom: 12px; }
  .ngo .contact-card a { color: var(--green); font-weight: 600; word-break: break-all; }
  .ngo .contact-card a:hover { text-decoration: underline; }
  .ngo .socials { display: flex; gap: 14px; margin-top: 14px; }
  .ngo .socials a { width: 38px; height: 38px; border-radius: 50%; background: var(--green); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; transition: background .2s, transform .2s; }
  .ngo .socials a:hover { background: var(--blue); transform: translateY(-2px); }

  /* FOOTER */
  .ngo footer { background: #0f172a; color: #cbd5e1; text-align: center; padding: 30px 20px; font-size: .9rem; }
  .ngo footer span { color: var(--green); }
  .ngo .foot-links { margin-bottom: 10px; }
  .ngo .foot-links a { margin: 0 10px; color: #94a3b8; }
  .ngo .foot-links a:hover { color: #fff; }

  /* RESPONSIVE */
  @media (max-width: 820px) {
    .ngo .hero h1 { font-size: 2.2rem; }
    .ngo .hero .tagline { font-size: 1.05rem; }
    .ngo .about-grid, .ngo .founder-grid { grid-template-columns: 1fr; }
    .ngo .founder-photo { max-width: 280px; margin: 0 auto; }
    .ngo .nav-links { display: none; position: absolute; top: 64px; left: 0; right: 0; background: #fff; flex-direction: column; gap: 0; padding: 10px 20px; box-shadow: 0 6px 12px rgba(0,0,0,0.08); }
    .ngo .nav-links.open { display: flex; }
    .ngo .nav-links li { padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
    .ngo .menu-toggle { display: block; }
    .ngo .nav-cta { display: none; }
    .ngo section { padding: 60px 0; }
  }
`;

const initiatives = [
  { img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80", alt: "Project SEVA - food distribution", title: "Project SEVA", desc: <>Distributed <strong>50,000+ meals</strong> and clothing to underprivileged communities — bringing nourishment and dignity to those in need.</> },
  { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", alt: "Project BACHPANSHALA - children education", title: "Project BACHPANSHALA", desc: <>Education, digital literacy, and life-skills training for underprivileged children — building a confident, capable next generation.</> },
  { img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80", alt: "Project JEEV - animal welfare", title: "Project JEEV", desc: <>Feeding, sheltering and providing medical care for <strong>50+ stray animals daily</strong> — kindness in action, every single day.</> },
  { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", alt: "Project UDAAN - women empowerment", title: "Project UDAAN", desc: <>Empowering women through <strong>skill development, financial literacy,</strong> and menstrual hygiene awareness across rural India.</> },
  { img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80", alt: "Project PRAKRITI - tree plantation", title: "Project PRAKRITI", desc: <>Planted <strong>20,000+ saplings</strong> and championing eco-friendly agriculture, water conservation, and green awareness drives.</> },
  { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", alt: "Project VIKAS - skill development", title: "Project VIKAS", desc: <>Trained <strong>30,000+ interns</strong> in data operations, finance, research, digital marketing, HR and more — opening real career pathways.</> },
];

const stats = [
  ["50,000+", "Meals Distributed"],
  ["20,000+", "Trees Planted"],
  ["30,000+", "Interns Trained"],
  ["50+", "Animals Fed Daily"],
  ["15+", "States Reached"],
  ["5,000+", "Volunteers Engaged"],
];

const timeline = [
  ["2020", "Foundation Established", "InAmigos Foundation registered as a Section 8 non-profit on September 23, 2020 in Chhattisgarh."],
  ["2021", "Launch of SEVA & JEEV", "Started food distribution drives and stray animal welfare programs in our home state."],
  ["2022", "80G, 12A & CSR-1 Certifications", "Received key government certifications enabling tax-deductible donations and CSR partnerships."],
  ["2023", "BACHPANSHALA & UDAAN Scale-Up", "Education and women-empowerment programs expanded across multiple states."],
  ["2024", "ISO 9001:2015 Certified", "Achieved international quality-management certification for our operations."],
  ["2025", "30,000+ Interns Trained", "Project VIKAS crossed 30,000 trained interns nationwide via skill-development pathways."],
];

const gallery = [
  ["https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80", "Volunteers distributing food packets", "Food Distribution"],
  ["https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80", "Children studying in classroom", "Children's Education"],
  ["https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80", "Tree plantation drive", "Tree Plantation"],
  ["https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80", "Stray dog being cared for", "Animal Welfare"],
  ["https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80", "Women empowerment workshop", "Women Empowerment"],
  ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80", "Interns in skill development training", "Skill Development"],
  ["https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=900&q=80", "Health awareness camp", "Health & Hygiene Camps"],
  ["https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80", "Volunteers in community drive", "Community Outreach"],
];

const testimonials = [
  { quote: "InAmigos changed my life. Through Project UDAAN I learned tailoring and now I run my own small shop in our village.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80", name: "Sunita Devi", role: "Beneficiary, Project UDAAN" },
  { quote: "Volunteering with InAmigos was the most meaningful experience of my college life. The team truly cares about impact.", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80", name: "Rahul Sharma", role: "Volunteer & Intern, Project VIKAS" },
  { quote: "A transparent, action-driven NGO. Their reporting and on-ground execution made our CSR partnership genuinely effective.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80", name: "Anjali Mehta", role: "CSR Lead, Partner Company" },
];

const faqs = [
  ["Are donations to InAmigos Foundation tax-deductible?", "Yes. We are 80G and 12A certified, so Indian taxpayers receive tax benefits on contributions. A digital donation receipt is issued for every contribution."],
  ["How can companies partner with InAmigos Foundation?", "We are CSR-1 registered, enabling formal CSR partnerships. Corporate partners can fund specific projects, sponsor events, or engage employees in volunteering."],
  ["Can students apply for internships?", "Absolutely. Project VIKAS offers structured internships across digital marketing, HR, finance, research, content, and operations — with certificates and mentorship."],
  ["Where do my donations actually go?", "Funds are transparently allocated across food, education, women empowerment, animal welfare, and environment programs. Impact reports are shared regularly."],
  ["How can I volunteer if I'm in another state?", "Our volunteer network spans 15+ states. Reach out via our contact section and we'll connect you with the nearest active chapter or remote project."],
];

function Index() {
  const toggleMenu = () => {
    const el = document.getElementById("navLinks");
    if (el) el.classList.toggle("open");
  };

  return (
    <div className="ngo">
      <style>{styles}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <div className="logo">In<span>Amigos</span> Foundation</div>
          <ul className="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#initiatives">Initiatives</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#involve">Get Involved</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#cta" className="btn btn-primary nav-cta">Donate</a>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">☰</button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="home">
        <div className="container">
          <h1>InAmigos Foundation</h1>
          <p className="tagline">"Creating Awareness, Inspiring Change"</p>
          <p className="intro">
            InAmigos Foundation is a dedicated non-profit organization committed to bringing positive change in society through impactful initiatives in education, sustainability, women empowerment, and social welfare. Founded on September 23, 2020, our mission is to uplift underprivileged communities and create equal opportunities for all. With a strong network of volunteers and partners, we strive to make a meaningful difference across India.
          </p>
          <div className="hero-buttons">
            <a href="#cta" className="btn btn-primary">Donate Now</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">A Section 8 registered non-profit organization committed to building a better tomorrow.</p>
          <div className="about-grid">
            <div className="about-text">
              <p><strong>InAmigos Foundation</strong> was founded on <strong>September 23, 2020</strong> by <strong>Mr. Govind Shukla</strong> (Founder &amp; CEO) and is headquartered in <strong>Chhattisgarh, India</strong>.</p>
              <p>We work across <strong>education, food distribution, women empowerment, animal welfare, environmental sustainability,</strong> and <strong>skill development</strong> — uplifting underprivileged communities throughout India through purpose-driven projects and measurable impact.</p>
              <p>With a strong belief in compassion and collaboration, we aim to create a more inclusive society where every individual — regardless of background — has the opportunity to learn, earn, and thrive with dignity.</p>
              <p>Our work is powered by a nationwide network of volunteers, interns, corporate partners, and citizens who believe that small actions, done together, create extraordinary change.</p>
            </div>
            <div className="about-info">
              <h3>Our Credentials</h3>
              <ul>
                <li>Section 8 Registered NGO</li>
                <li>80G &amp; 12A Certified (Tax Benefits)</li>
                <li>CSR-1 Registered (Corporate Partnerships)</li>
                <li>NITI Aayog Registered (Darpan ID)</li>
                <li>ISO 9001:2015 Certified</li>
                <li>Pan-India Volunteer Network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="mvv">
        <div className="container">
          <h2 className="section-title">Mission, Vision &amp; Values</h2>
          <p className="section-subtitle">The principles that guide every project and every partnership.</p>
          <div className="mvv-grid">
            <div className="mvv-card"><div className="emoji">🎯</div><h3>Our Mission</h3><p>To uplift underprivileged communities through sustainable programs in education, livelihood, health, and environment — driven by transparency and measurable impact.</p></div>
            <div className="mvv-card"><div className="emoji">🌍</div><h3>Our Vision</h3><p>An inclusive, compassionate, and self-reliant India where every individual has the dignity, opportunity, and resources to shape a better future.</p></div>
            <div className="mvv-card"><div className="emoji">💚</div><h3>Our Values</h3><p>Compassion, integrity, accountability, collaboration, and lasting impact — these values shape how we serve, partner, and grow as a foundation.</p></div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder">
        <div className="container">
          <h2 className="section-title">Meet Our Founder</h2>
          <p className="section-subtitle">A visionary leader committed to driving social change at the grassroots.</p>
          <div className="founder-grid">
            <img className="founder-photo" src="src\assets\founder.png" alt="Mr. Govind Shukla, Founder & CEO of InAmigos Foundation" />
            <div className="founder-text">
              <h3>Mr. Govind Shukla</h3>
              <div className="founder-role">Founder &amp; CEO — InAmigos Foundation</div>
              <p>A passionate social entrepreneur from Chhattisgarh, Mr. Govind Shukla founded InAmigos Foundation in 2020 with a clear mission — to build a compassionate ecosystem where underprivileged communities receive the education, opportunities, and support they deserve.</p>
              <p>Under his leadership, the foundation has scaled into a pan-India movement, training over 30,000 interns, distributing 50,000+ meals, and planting 20,000+ trees — all while maintaining strict transparency and accountability.</p>
              <div className="founder-quote">"Real change begins when compassion meets consistent action. Every life uplifted is a step toward the India we all dream of."</div>
            </div>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section id="initiatives" className="initiatives">
        <div className="container">
          <h2 className="section-title">Key Initiatives</h2>
          <p className="section-subtitle">Six flagship projects creating measurable change across communities.</p>
          <div className="cards-grid">
            {initiatives.map((it) => (
              <div className="card" key={it.title}>
                <img className="card-img" src={it.img} alt={it.alt} loading="lazy" />
                <div className="card-body"><h3>{it.title}</h3><p>{it.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="impact">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">Real numbers. Real lives. Real change.</p>
          <div className="stats-grid">
            {stats.map(([num, label]) => (
              <div className="stat" key={label}><div className="num">{num}</div><div className="label">{label}</div></div>
            ))}
          </div>
          <p className="impact-note">We believe in <strong>transparency, accountability,</strong> and <strong>measurable impact</strong>. Every initiative is tracked, documented, and reported — ensuring that your trust translates into tangible outcomes for communities in need.</p>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">From a small idea to a pan-India movement.</p>
          <div className="timeline">
            {timeline.map(([year, title, desc]) => (
              <div className="tl-item" key={year}>
                <h4><span className="year">{year}</span> {title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="initiatives">
        <div className="container">
          <h2 className="section-title">Glimpses of Our Work</h2>
          <p className="section-subtitle">A look at the change we are creating on the ground — one community at a time.</p>
          <div className="gallery-grid">
            {gallery.map(([src, alt, cap]) => (
              <div className="gallery-item" key={cap}>
                <img loading="lazy" src={src} alt={alt} />
                <div className="caption">{cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Voices of Change</h2>
          <p className="section-subtitle">What our beneficiaries, volunteers, and partners say about us.</p>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <div className="testi" key={t.name}>
                <p>{t.quote}</p>
                <div className="who">
                  <img src={t.img} alt={t.name} />
                  <div><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVOLVE */}
      <section id="involve">
        <div className="container">
          <h2 className="section-title">Get Involved</h2>
          <p className="section-subtitle">Whether you have time, skills, or resources — there is a place for you in our mission.</p>
          <div className="involve-grid">
            <div className="involve"><h3>🤝 Volunteer</h3><p>Join our nationwide volunteer network and contribute to on-ground initiatives in your city.</p><a href="#contact" className="btn btn-primary">Become a Volunteer</a></div>
            <div className="involve"><h3>💼 Internships</h3><p>Gain real experience through Project VIKAS — internships in marketing, finance, HR, research, and more.</p><a href="#contact" className="btn btn-blue">Apply for Internship</a></div>
            <div className="involve"><h3>❤️ Donate</h3><p>Every contribution funds meals, education, saplings, and skill training. 80G tax benefits available.</p><a href="#cta" className="btn btn-primary">Donate Now</a></div>
            <div className="involve"><h3>🏢 Partner with Us</h3><p>CSR-1 registered. Collaborate with us on impact-driven corporate social responsibility programs.</p><a href="#contact" className="btn btn-blue">Become a Partner</a></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you may want to know before you join, donate, or partner with us.</p>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners">
        <div className="container">
          <h2 className="section-title">Our Partners &amp; Recognitions</h2>
          <p className="section-subtitle">Proudly recognized by government bodies and supported by impact-driven partners.</p>
          <div className="partners-row">
            {["NITI Aayog", "Ministry of Corporate Affairs", "Income Tax Dept. (80G & 12A)", "ISO 9001:2015", "CSR Partners", "Educational Institutions"].map((p) => (
              <div className="partner" key={p}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta">
        <div className="container">
          <h2>Be a Part of the Change</h2>
          <p>"Together, we can build a more inclusive and compassionate society." Your support — small or big — keeps the change moving forward.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Donate Now</a>
            <a href="#involve" className="btn btn-outline">Volunteer</a>
            <a href="#contact" className="btn btn-primary">Partner with Us</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We'd love to hear from you. Reach out to collaborate, volunteer, or support our mission.</p>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>📧 Email Us</h3>
              <p>For partnerships, volunteering, or general inquiries:</p>
              <p style={{ marginTop: 8 }}><a href="mailto:hr@inamigosfoundation.org.in">hr@inamigosfoundation.org.in</a></p>
            </div>
            <div className="contact-card">
              <h3>📍 Head Office</h3>
              <p>InAmigos Foundation</p>
              <p>Chhattisgarh, India</p>
              <p style={{ marginTop: 8, color: "var(--text-muted)" }}>Section 8 Registered NGO</p>
            </div>
            <div className="contact-card">
              <h3>🌐 Connect With Us</h3>
              <p>Follow our journey and join the movement on social media.</p>
              <div className="socials">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="Twitter">X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-links">
          <a href="#about">About</a> ·{" "}
          <a href="#initiatives">Initiatives</a> ·{" "}
          <a href="#impact">Impact</a> ·{" "}
          <a href="#involve">Get Involved</a> ·{" "}
          <a href="#contact">Contact</a>
        </div>
        © 2026 <span>InAmigos Foundation</span> — Creating Awareness, Inspiring Change.
      </footer>
    </div>
  );
}
