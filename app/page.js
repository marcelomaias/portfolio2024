import Image from "next/image";
import imageplaceholder from "@/app/images/image.svg"
import Link from "next/link";
import { FaExternalLinkAlt, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaWordpress, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

export default function Home() {
  return (

    <>
      <div className="social">
        <Link href="#" target="_blank">
          <FaLinkedin size={32} color="#000" title="Open on new tab/window" />
        </Link>
        <Link href="#" target="_blank">
          <FaGithub size={32} color="#000" title="Open on new tab/window" />
        </Link>
      </div>
      <div className="container">
        <main >
          {/* <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

          <h1>marcelomaias.com</h1>
          <section className="text">
            <p>Hello, I am Marcelo Maia, a web developer with a passion for creating fast and user-friendly websites. With expertise in semantic <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and web tecnologies like <strong>React</strong>, <strong>NextJS</strong>, and <strong>Wordpress</strong>, I have built a diverse range of projects.</p>

            <div className="techs">
              <FaHtml5 size={64} color="#999" title="HTML5" /> <FaCss3Alt size={64} color="#999" title="CSS" /> <IoLogoJavascript size={64} color="#999" title="JavaScript" /> <FaReact size={64} color="#999" title="React" /> <RiNextjsFill size={64} color="#999" title="NextJS" /> <FaWordpress size={64} color="#999" title="Wordpress" />
            </div>

          </section>

          <section>
            <h2>Demo</h2>

            <div className="card">
              <Image
                src={imageplaceholder}
                alt="Image placeholder"
              />
              <div className="description">
                This demo showcases headless Wordpress  with the front-end build with NextJS, for a very performant website.
              </div>
            </div>
          </section>

          <section>
            <h2>Projects<span>(Standard Wordpress implementations while working full time at <Link href="#" target="_blank">House Cricket Digital Direct <FaExternalLinkAlt /></Link>)</span></h2>

            <div className="cards">
              <div className="card">
                <Image
                  src={imageplaceholder}
                  alt="Image placeholder"
                />
                <div className="description">
                  This demo showcases headless Wordpress  with the front-end build with NextJS, for a very performant website.
                </div>
              </div>
              <div className="card">
                <Image
                  src={imageplaceholder}
                  alt="Image placeholder"
                />
                <div className="description">
                  This demo showcases headless Wordpress  with the front-end build with NextJS, for a very performant website.
                </div>
              </div>
              <div className="card">
                <Image
                  src={imageplaceholder}
                  alt="Image placeholder"
                />
                <div className="description">
                  This demo showcases headless Wordpress  with the front-end build with NextJS, for a very performant website.
                </div>
              </div>

            </div>


          </section>


        </main>


      </div>
    </>

  );
}
