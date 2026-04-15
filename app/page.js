import Image from "next/image";
import imageplaceholder from "@/app/images/image.svg";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPayloadcms, SiTypescript } from "react-icons/si";
import imgMueller from "@/app/images/shoppingmueller.com.br.png";
import imgMilitec from "@/app/images/militecbrasil.com.br.png";
import logo from "@/app/images/logo.svg";
import imgLinkSpace from "@/app/images/linkspace2.png";
import imgMoovee from "@/app/images/moovee.png";
import imgHorizon from "@/app/images/horizon.png";
import imgValemount from "@/app/images/Valemount.jpg";
import MarceloMaia from "@/app/images/MarceloMaia.jpg";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <>


      <main>
        <section className="container hero">
          {/* <h1>marcelomaias.com</h1> */}
          <Image src={MarceloMaia} alt="Marcelo Maia" className="logoPicture" width={128} height={128} />
          <div className="social">
            <Link href="https://www.linkedin.com/in/marcelomaia/" target="_blank">
              <FaLinkedin size={24} color="#000" title="Open on new tab/window" />
            </Link>
            <Link href="https://github.com/marcelomaias" target="_blank">
              <FaGithub size={24} color="#000" title="Open on new tab/window" />
            </Link>
          </div>
          {/* <Image
            src={logo}
            alt="Marcelo Maia Logo"
            className="logo"
            width={64}
            height={64}
          /> */}
          <p>
            Hi, I’m <strong>Marcelo Maia</strong> — a front-end developer focused on building <strong>fast, accessible, and well-structured websites</strong>, with an emphasis on <strong>semantic HTML, CSS, and performance</strong>.
          </p>

          <p>
            I focus on building web interfaces grounded in strong fundamentals — prioritizing <strong>semantic HTML</strong>, <strong>performance</strong>, and long-term maintainability, while choosing the right tools and rendering strategies for each problem.
          </p>

          <div className="techs">
            {/* <FaHtml5 size={64} color="#333" title="HTML5" />{" "}
            <FaCss3Alt size={64} color="#333" title="CSS" />{" "} */}
            {/* <IoLogoJavascript size={64} color="#333" title="JavaScript" />{" "} */}
            <SiTypescript size={64} color="#333" title="TypeScript" />
            <FaReact size={64} color="#333" title="React" />{" "}
            <RiNextjsFill size={64} color="#333" title="NextJS" />{" "}
            <SiPayloadcms size={64} color="#333" title="Payload CMS" />
            <RiTailwindCssFill size={64} color="#333" title="Tailwind" />
          </div>
        </section>

        <section className="block">
          <div className="container">
            <h2>Experience</h2>
            <div className="experiences">
              <div className="experience">
                <h3>Independent Web Developer</h3>
                <p>
                  Developing <strong>high-performance, content-driven websites</strong> using static site generation with Next.js and a headless CMS architecture. Focused on <strong>semantic HTML, modular CSS, and performance optimization</strong>, building fast, SEO-friendly interfaces with clean, maintainable code.
                </p>
                <p>
                  Currently building a <strong>multilingual platform for showcasing sport horses and equestrian stables</strong>, with emphasis on <strong>structured content, accessibility, and precise UI implementation</strong>, alongside freelance maintenance and consulting work.
                </p>
                <strong>March 2024 — Present</strong>
              </div>
              <div className="experience">
                <h3>
                  Front-end web developer |{" "}
                  <Link target="_blank" href="https://housecricket.com.br/en/">
                    HouseCricket Digital & Direct <FaExternalLinkAlt />
                  </Link>
                </h3>
                <p>
                  Built and maintained{" "}
                  <strong>production websites for institutional clients</strong>
                  , implementing responsive interfaces and CMS-driven features.
                  Worked closely with designers and backend developers to
                  deliver reliable, high-quality websites.
                </p>
                <strong>December 2019 - February 2024</strong>
              </div>
              <div className="experience">
                <h3>Front-end web developer | Self-Employed</h3>
                <p>
                  Delivered front-end development for client projects, building
                  responsive websites and integrating with CMS and backend
                  systems.
                </p>
                <strong>November 2006 - December 2018</strong>
              </div>
              <div className="experience">
                <h3>
                  Front-end web developer |{" "}
                  <Link target="_blank" href="https://www.pontocom.ag/">
                    PontoCom Digital <FaExternalLinkAlt />
                  </Link>
                </h3>
                <p>
                  Contributed to the development of front-end interfaces for
                  dynamic, CMS-driven websites.
                </p>
                <strong>July 2001 - November 2004</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="container demos">
          <h2>Projects</h2>

          <div className="card">
            <div className="description">
              <div>
                <h3>
                  <Link
                    href="/valemount/"
                  >
                    Valemount Equestrian
                  </Link>
                </h3>
                <p>
                  High-performance, multilingual website system for showcasing sport horses and stables, built with a static-first architecture. Focused on semantic HTML, SEO, and fast loading times, with CMS-driven content and optimized delivery.
                </p>

                <p>
                  <strong>Tech stack:</strong> Next.js 15 · Payload CMS ·
                  TypeScript
                </p>
              </div>

              <div className="actions">
                <Link
                  className="btn code"
                  href="/valemount"
                >
                  <span>View Project</span>
                </Link>
                <Link
                  target="_blank"
                  className="btn"
                  href="https://valemountequestrian.com/"
                >
                  <span>Live Demo</span>{" "}
                  <FaExternalLinkAlt color="#333" size={16} />
                </Link>
              </div>
            </div>
            <Image
              src={imgValemount}
              alt="Valemount thumbnail"
              height="auto"
              className="thumbnail"
            />
          </div>



          <div className="card">
            <div className="description">
              <div>
                <h3>
                  <Link target="_blank" href="https://linkspaceone.vercel.app">
                    LinkSpace <FaExternalLinkAlt color="#0075f2" size={16} />
                  </Link>
                </h3>
                <p>
                  Link-in-bio platform with customizable profiles,
                  authentication, and media uploads.
                </p>

                <p>
                  <strong>Tech stack:</strong> Next.js 15 · TypeScript ·
                  Tailwind · Vercel
                </p>
              </div>

              <div className="actions">
                <Link
                  target="_blank"
                  className="btn code"
                  href="https://github.com/marcelomaias/linkspace"
                >
                  <span>View code</span>{" "}
                  <FaExternalLinkAlt color="#fff" size={16} />
                </Link>
                <Link
                  target="_blank"
                  className="btn"
                  href="https://linkspaceone.vercel.app"
                >
                  <span>View website</span>{" "}
                  <FaExternalLinkAlt color="#333" size={16} />
                </Link>
              </div>
            </div>
            <Image
              src={imgLinkSpace}
              alt="LinkSpace thumbnail"
              height="auto"
              className="thumbnail"
            />
          </div>

          <div className="card">
            <div className="description">
              <div>
                <h3>
                  <Link
                    target="_blank"
                    href="https://horizoncontent.vercel.app/"
                  >
                    Horizon Content{" "}
                    <FaExternalLinkAlt color="#0075f2" size={16} />
                  </Link>
                </h3>
                <p>
                  Content platform built for fast, scalable marketing websites with structured content and media management.
                </p>

                <p>
                  <strong>Tech stack:</strong> Next.js 15 · Payload CMS ·
                  TypeScript · Tailwind · Vercel
                </p>
              </div>

              <div className="actions">
                <Link
                  target="_blank"
                  className="btn code"
                  href="https://github.com/marcelomaias/horizon"
                >
                  <span>View code</span>{" "}
                  <FaExternalLinkAlt color="#fff" size={16} />
                </Link>
                <Link
                  target="_blank"
                  className="btn"
                  href="https://horizoncontent.vercel.app/"
                >
                  <span>View website</span>{" "}
                  <FaExternalLinkAlt color="#333" size={16} />
                </Link>
              </div>
            </div>
            <Image
              src={imgHorizon}
              alt="Horizon thumbnail"
              height="auto"
              className="thumbnail"
            />
          </div>

          <div className="card">
            <div className="description">
              <div>
                <h3>
                  <Link target="_blank" href="https://moovee-one.vercel.app/">
                    Moovee <FaExternalLinkAlt color="#0075f2" size={16} />
                  </Link>
                </h3>
                <p>
                  Movie browsing application with search, detailed pages, and
                  personal favorites.
                </p>

                <p>
                  <strong>Tech stack:</strong> Next.js · TypeScript · Tailwind ·
                  TMDB API · Vercel
                </p>
              </div>

              <div className="actions">
                <Link
                  target="_blank"
                  className="btn code"
                  href="https://github.com/marcelomaias/moovee"
                >
                  <span>View code</span>{" "}
                  <FaExternalLinkAlt color="#fff" size={16} />
                </Link>
                <Link
                  target="_blank"
                  className="btn"
                  href="https://moovee-one.vercel.app/"
                >
                  <span>View website</span>{" "}
                  <FaExternalLinkAlt color="#333" size={16} />
                </Link>
              </div>
            </div>
            <Image
              src={imgMoovee}
              alt="Moovee thumbnail"
              className="thumbnail"
            />
          </div>

          {/* <div className="card">
            <div className="description">
              <div>
                <h3>
                  <Link
                    target="_blank"
                    href="https://destinations-now.vercel.app"
                  >
                    Destinations <FaExternalLinkAlt color="#0075f2" size={16} />
                  </Link>
                </h3>

                <p>
                  CMS-driven website demonstrating flexible content modeling and
                  dynamic page composition.
                </p>

                <p>
                  <strong>Tech stack:</strong> Next.js · Payload CMS ·
                  TypeScript · Tailwind · Vercel
                </p>
              </div>

              <div className="actions">
                <Link
                  target="_blank"
                  className="btn code"
                  href="https://github.com/marcelomaias/destinations"
                >
                  <span>View code</span>{" "}
                  <FaExternalLinkAlt color="#fff" size={16} />
                </Link>
                <Link
                  target="_blank"
                  className="btn"
                  href="https://destinations-now.vercel.app"
                >
                  <span>View website</span>{" "}
                  <FaExternalLinkAlt color="#333" size={16} />
                </Link>
              </div>
            </div>
            <Image
              src={imgDestinations}
              alt="Ocean Travel thumbnail"
              className="thumbnail"
            />
          </div> */}

          {/* <div className="card">
            <div className="description">
              <div>
                <h3>
                  <Link
                    target="_blank"
                    href="https://landingpage-payload.vercel.app/"
                  >
                    Landing page <FaExternalLinkAlt color="#0075f2" size={16} />
                  </Link>
                </h3>
                <p>
                  A lightweight landing page built with Payload CMS, focused on
                  performance, simplicity, and efficient content delivery.
                </p>
              </div>

              <div className="actions">
                <Link
                  target="_blank"
                  className="btn code"
                  href="https://github.com/marcelomaias/landingpage-payload"
                >
                  <span>View code</span>{" "}
                  <FaExternalLinkAlt color="#fff" size={16} />
                </Link>
                <Link
                  target="_blank"
                  className="btn"
                  href="https://landingpage-payload.vercel.app/"
                >
                  <span>View website</span>{" "}
                  <FaExternalLinkAlt color="#333" size={16} />
                </Link>
              </div>
            </div>
            <Image
              src={imgLandingPage}
              alt="Ocean Travel thumbnail"
              className="thumbnail"
            />
          </div> */}
        </section>

        <section className="block projects">
          <div className="container">
            <h2>
              Client work{" "}
              <span>
                (
                <Link href="https://housecricket.com.br/en/" target="_blank">
                  House Cricket Digital Direct <FaExternalLinkAlt />
                </Link>
                )
              </span>
            </h2>

            <div className="cards">
              {/* <div className="card">
                <Image
                  src={imgCooper}
                  alt="Coopernorte thumbnail"
                  className="thumbnail"
                />
                <div className="description">
                  <div>
                    <h3>
                      <Link target="_blank" href="https://coopernorte.coop.br/">
                        Coopernorte{" "}
                        <FaExternalLinkAlt color="#0075f2" size={16} />
                      </Link>
                    </h3>
                    <span>
                      WordPress institutional website featuring a weather
                      forecast API integration.
                    </span>
                  </div>
                  <div className="actions">
                    <Link
                      target="_blank"
                      className="btn"
                      href="https://coopernorte.coop.br/"
                    >
                      <span>View website</span>{" "}
                      <FaExternalLinkAlt color="#333" size={16} />
                    </Link>
                  </div>
                </div>
              </div> */}
              <div className="card">
                <Image
                  src={imgMilitec}
                  alt="Militec Brasil thumbnail"
                  className="thumbnail"
                />
                <div className="description">
                  <div>
                    <h3>
                      <Link
                        target="_blank"
                        href="https://militecbrasil.com.br/"
                      >
                        Militec Brasil{" "}
                        <FaExternalLinkAlt color="#0075f2" size={16} />
                      </Link>
                    </h3>
                    <p>
                      Institutional website with structured content, blog, and
                      responsive design.
                    </p>

                    <p>
                      <strong>Tech stack:</strong> WordPress · PHP · JavaScript
                      · CSS
                    </p>
                  </div>
                  <div className="actions">
                    <Link
                      target="_blank"
                      className="btn"
                      href="https://militecbrasil.com.br/"
                    >
                      <span>View website</span>{" "}
                      <FaExternalLinkAlt color="#333" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card">
                <Image
                  src={imgMueller}
                  alt="Shopping Mueller thumbnail"
                  className="thumbnail"
                />
                <div className="description">
                  <div>
                    <h3>
                      <Link
                        target="_blank"
                        href="https://shoppingmueller.com.br/"
                      >
                        Shopping Mueller{" "}
                        <FaExternalLinkAlt color="#0075f2" size={16} />
                      </Link>
                    </h3>
                    <p>
                      Institutional website with custom content structure and
                      accessibility considerations.
                    </p>

                    <p>
                      <strong>Tech stack:</strong> WordPress · PHP · JavaScript
                      · CSS
                    </p>
                  </div>
                  <div className="actions">
                    <Link
                      target="_blank"
                      className="btn"
                      href="https://shoppingmueller.com.br/"
                    >
                      <span>View website</span>{" "}
                      <FaExternalLinkAlt color="#333" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Contact</h2>

          <p>I’m currently available for <strong>select web projects and collaborations</strong>.</p>
          <p>
            Email:{" "}
            <a href="mailto:marcelomaias@gmail.com">marcelomaias@gmail.com</a> |{" "}
            <span className="inLineLink">
              <Link
                href="https://www.linkedin.com/in/marcelomaia/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <FaLinkedin
                size={32}
                color="#000"
                title="Open on new tab/window"
              />
            </span>
          </p>

          {/* <ContactForm /> */}
        </section>
      </main>
      <footer className="container">
        <Link href="/">Marcelo Maia</Link> © 2026 | Web Developer · Bass Player
      </footer>
    </>
  );
}
