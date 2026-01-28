import Image from "next/image";
import imageplaceholder from "@/app/images/image.svg";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPayloadcms } from "react-icons/si";
import imgMueller from "@/app/images/shoppingmueller.com.br.png";
import imgMilitec from "@/app/images/militecbrasil.com.br.png";
import logo from "@/app/images/logo.svg";
import imgDestinations from "@/app/images/destinations.jpg";
import imgLandingPage from "@/app/images/payload-lp.jpg";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <>
      <div className="social">
        <Link href="https://www.linkedin.com/in/marcelomaia/" target="_blank">
          <FaLinkedin size={32} color="#000" title="Open on new tab/window" />
        </Link>
        <Link href="https://github.com/marcelomaias" target="_blank">
          <FaGithub size={32} color="#000" title="Open on new tab/window" />
        </Link>
      </div>

      <main>
        <section className="container">
          {/* <h1>marcelomaias.com</h1> */}
          <Image
            src={logo}
            alt="Marcelo Maia Logo"
            className="logo"
            width={64}
            height={64}
          />
          <p>
            Hi, I’m Marcelo Maia, a web developer focused on creating fast,
            intuitive, and well-crafted websites. I work with semantic{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, and tools like <strong>React</strong>,{" "}
            <strong>Next.js</strong>, <strong>Tailwind</strong>, and{" "}
            <strong>Payload CMS</strong> to bring ideas to life.
          </p>

          <div className="techs">
            <FaHtml5 size={64} color="#333" title="HTML5" />{" "}
            <FaCss3Alt size={64} color="#333" title="CSS" />{" "}
            <IoLogoJavascript size={64} color="#333" title="JavaScript" />{" "}
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
                <h3>Front-end web developer | Self-Employed</h3>
                <p>
                  I currently work as a freelancer, focusing mainly on front-end
                  development, while also having experience with back-end work
                  using Payload CMS.
                </p>
                <strong>March 2024 - Present</strong>
              </div>
              <div className="experience">
                <h3>
                  Front-end web developer |{" "}
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/housecricket/posts/?feedView=all"
                  >
                    HouseCricket Digital & Direct <FaExternalLinkAlt />
                  </Link>
                </h3>
                <p>
                  I was part of a team responsible for developing the front end
                  of dynamic websites built with PHP and Python.
                </p>
                <strong>December 2019 - February 2024</strong>
              </div>
              <div className="experience">
                <h3>Front-end web developer | Self-Employed</h3>
                <p>
                  Worked as a freelancer, primarily focusing on front-end
                  development, with additional experience in back-end
                  development using Node.js and PHP, as well as CMS platforms
                  such as WordPress and Drupal.
                </p>
                <strong>November 2006 - December 2018</strong>
              </div>
              <div className="experience">
                <h3>
                  Front-end web developer |{" "}
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/pontocom-agencia/"
                  >
                    PontoCom Digital <FaExternalLinkAlt />
                  </Link>
                </h3>
                <p>
                  I was part of a team responsible for developing the front end
                  of dynamic websites built with PHP.
                </p>
                <strong>July 2001 - November 2004</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="container demos">
          <h2>Demos</h2>

          <div className="card">
            <div className="description">
              <div>
                <h3>
                  <Link
                    target="_blank"
                    href="https://destinations-three.vercel.app/"
                  >
                    Destinations <FaExternalLinkAlt color="#0075f2" size={16} />
                  </Link>
                </h3>
                <p>
                  A website built with Payload showcasing some of the most
                  common features of a modern website. Very performant, hosted
                  serverless at Vercel.
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
                  href="https://destinations-three.vercel.app/"
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
          </div>

          <div className="card">
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
                  A simple landing page featuring a very performant front and
                  back-end, built with Payload.
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
          </div>
        </section>

        <section className="block">
          <div className="container">
            <h2>
              Projects{" "}
              <span>
                (Wordpress implementations while working full time at{" "}
                <Link
                  href="https://www.linkedin.com/company/housecricket/posts/?feedView=all"
                  target="_blank"
                >
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
                    <span>
                      Institutional WordPress website featuring accessibility
                      support and a fully featured blog with social sharing.
                    </span>
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
                    <span>
                      Institutional WordPress website featuring accessibility
                      support and custom content types such as Stores and
                      Movies.
                    </span>
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
          <p>
            You can send me an email to{" "}
            <Link href="mailto:marcelomaias@gmail.com">
              marcelomaias@gmail.com
            </Link>{" "}
            or send me a message in{" "}
            <Link
              className="inLineLink"
              href="https://www.linkedin.com/in/marcelomaia/"
              target="_blank"
            >
              LinkedIn
              <FaLinkedin
                size={32}
                color="#000"
                title="Open on new tab/window"
              />
            </Link>
            .
          </p>
          {/* <ContactForm /> */}
        </section>
      </main>
      <footer className="container">
        Marcelo Maia © {currentYear} | Built with{" "}
        <a href="https://nextjs.org" className="hover:underline">
          Next.js
        </a>{" "}
        &{" "}
        <a href="https://vercel.com" className="hover:underline">
          Vercel
        </a>
        .
      </footer>
    </>
  );
}
