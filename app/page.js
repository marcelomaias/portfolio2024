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
import ContactForm from "@/components/ContactForm";
import imgCooper from "@/app/images/coopernorte.coop.br.png";
import imgOcean from "@/app/images/ocean-travel.vercel.app.png";
import imgMueller from "@/app/images/shoppingmueller.com.br.png";
import imgMilitec from "@/app/images/militecbrasil.com.br.png";
import logo from "@/app/images/logo.svg";

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
            Hello, I am Marcelo Maia, a web developer with a passion for
            creating fast and user-friendly websites. With expertise in semantic{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong> and web technologies like{" "}
            <strong>React</strong>, <strong>NextJS</strong>,{" "}
            <strong>Tailwind</strong> and <strong>Wordpress</strong>, I have
            built a diverse range of projects.
          </p>

          <div className="techs">
            <FaHtml5 size={64} color="#999" title="HTML5" />{" "}
            <FaCss3Alt size={64} color="#999" title="CSS" />{" "}
            <IoLogoJavascript size={64} color="#999" title="JavaScript" />{" "}
            <FaReact size={64} color="#999" title="React" />{" "}
            <RiNextjsFill size={64} color="#999" title="NextJS" />{" "}
            <RiTailwindCssFill size={64} color="#999" title="Tailwind" />
            <FaWordpress size={64} color="#999" title="Wordpress" />
          </div>
        </section>

        <section className="block">
          <div className="container">
            <h2>Experience</h2>
            <div className="experiences">
              <div className="experience">
                <h3>Front-end web developer | Self-Employed</h3>
                <p>
                  Currently working as a free-lancer doing mostly front-end
                  development, but also with experience in backend using NodeJS,
                  PHP, and with some CMSs like Wordpress.
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
                  I was part of a team responsible for developing the front-end
                  part of dynamic websites built in PHP and Python.
                </p>
                <strong>December 2019 - February 2024</strong>
              </div>
              <div className="experience">
                <h3>Front-end web developer | Self-Employed</h3>
                <p>
                  Worked as a free-lancer doing mostly front-end development,
                  but also had some experience in backend using NodeJS, PHP, and
                  with some CMSs like Wordpress and Drupal.
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
                  I was part of a team responsible for developing the front-end
                  part of dynamic websites built in PHP.
                </p>
                <strong>July 2001 - November 2004</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Demo</h2>

          <div className="card">
            <div className="description">
              <div>
                <h3>
                  <Link target="_blank" href="https://ocean-travel.vercel.app/">
                    Ocean Travel <FaExternalLinkAlt color="#0075f2" size={16} />
                  </Link>
                </h3>
                <p>
                  This demo showcases headless Wordpress with the front-end
                  build with NextJS, for a very performant website.
                </p>
              </div>

              <div className="actions">
                <Link
                  target="_blank"
                  className="btn code"
                  href="https://github.com/marcelomaias/ocean-travel"
                >
                  <span>View code</span>{" "}
                  <FaExternalLinkAlt color="#fff" size={16} />
                </Link>
                <Link
                  target="_blank"
                  className="btn"
                  href="https://ocean-travel.vercel.app/"
                >
                  <span>View website</span>{" "}
                  <FaExternalLinkAlt color="#333" size={16} />
                </Link>
              </div>
            </div>
            <Image
              src={imgOcean}
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
              <div className="card">
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
                      Wordpress institutional website featuring a weather
                      forecast API call.
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
              </div>
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
                      Wordpress institutional website featuring accessibility,
                      custom filter and a full feature blog with social sharing.
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
                      Wordpress institutional website featuring accessibility
                      and custom content types like Stores and Movies.
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
      <footer className="container">marcelomaias.com © 2026</footer>
    </>
  );
}
