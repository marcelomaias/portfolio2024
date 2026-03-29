import styles from './valemount.module.css'
import Link from 'next/link'
import home from './images/Home.jpg'
import Image from 'next/image'
import desktop from './images/Horse.jpg'
import mobile from './images/Mobile.jpg'
import admin from './images/Admin.jpg'


export default function Valemount() {
  return (
    <main className={styles.page}>
      <nav>
        <a href="#" className={styles['nav-logo']}>
          Marcelo Maia <em>Studio</em>
        </a>
        <div className={styles['nav-links']}>
          <a href="#challenges">Challenge</a>
          <a href="#features">Features</a>
          <a href="#how">Process</a>
          <a target="_blank" href="https://valemountequestrian.com/" className={styles['nav-cta']}>
            View Demo &rarr;
          </a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles['hero-text']}>
          <div className={styles['hero-badge']}>Built for European Sport Horse Stables</div>
          <h1>
            Your stable, presented
            <br />
            with true <em>refinement.</em>
          </h1>
          <p className={styles['hero-sub']}>
            A complete website system crafted exclusively for private sport horse stables. Elegant, fast, multilingual — and
            entirely yours.
          </p>
          <div className={styles['hero-actions']}>
            <a target="_blank" href="https://valemountequestrian.com/" className={styles['btn-dark']}>
              View Demo &rarr;
            </a>
            <a href="#features" className={styles['btn-line']}>
              Features
            </a>
          </div>
          <p className={styles['hero-note']}>No marketplace &middot; No shared listings &middot; Fully yours</p>
        </div>

        <div className={styles['hero-ss']}>
          <div className={styles['ss-frame']}>
            <Image
              src={home}
              alt="Home"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>

      <div className={styles['sp-bar']}>
        <div className={styles['sp-item']}>
          <div className={styles['sp-dot']}></div>
          Built for European stables
        </div>
        <div className={styles['sp-div']}></div>
        <div className={styles['sp-item']}>
          <div className={styles['sp-dot']}></div>
          EN &middot; DE &middot; and more
        </div>
        <div className={styles['sp-div']}></div>
        <div className={styles['sp-item']}>
          <div className={styles['sp-dot']}></div>
          Fast &amp; SEO-ready
        </div>
        <div className={styles['sp-div']}></div>
        {/* <div className={styles['sp-item']}>
          <div className={styles['sp-dot']}></div>
          No technical knowledge required
        </div> */}
        <div className={styles['sp-div']}></div>

      </div>

      <section className={`${styles.problem} ${styles.sw}`} id="challenges">
        <div className={styles.si}>
          <div className={styles['prob-grid']}>
            <div>
              <span className={styles.lbl}>The challenge</span>
              <h2>
                Your horses are exceptional.
                <br />
                <em>Your website should be too.</em>
              </h2>
              <p className={styles.sub}>
                International buyers judge a stable before they ever make contact. Most websites work against the stables they
                represent.
              </p>
            </div>
            <div>
              <div className={styles['prob-item']}>
                <div className={styles.pnum}>01</div>
                <div>
                  <div className={styles.ptitle}>Outdated design</div>
                  <p className={styles.pdesc}>
                    An old website signals an old stable. First impressions happen before a buyer has seen a single horse.
                  </p>
                </div>
              </div>
              <div className={styles['prob-item']}>
                <div className={styles.pnum}>02</div>
                <div>
                  <div className={styles.ptitle}>Slow performance</div>
                  <p className={styles.pdesc}>Buyers leave in seconds. A slow website quietly costs you enquiries every day.</p>
                </div>
              </div>
              <div className={styles['prob-item']}>
                <div className={styles.pnum}>03</div>
                <div>
                  <div className={styles.ptitle}>Hard to keep updated</div>
                  <p className={styles.pdesc}>
                    Sold a horse? Added a new one? You shouldn't need a developer to keep your listings current.
                  </p>
                </div>
              </div>
              <div className={styles['prob-item']}>
                <div className={styles.pnum}>04</div>
                <div>
                  <div className={styles.ptitle}>Poor horse presentation</div>
                  <p className={styles.pdesc}>
                    Your horses deserve rich profiles with video, pedigree and results — not a row in a table.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['features-sec']} ${styles.sw}`} id="features">
        <div className={styles.si}>
          <div className={styles['feat-intro']}>
            <span className={styles.lbl}>What you get</span>
            <h2>
              Everything your stable needs
              <br />
              to <em>convert buyers.</em>
            </h2>
            <p className={styles.sub}>Every feature chosen to reflect the quality of your horses — not to impress developers.</p>
          </div>
          <div className={styles['feat-grid']}>
            <div className={styles.feat}>
              <div className={styles['feat-ico']}>✦</div>
              <div className={styles['feat-title']}>Easy Content Management</div>
              <p className={styles['feat-desc']}>
                Add or update horses, trainers and pages without touching a single line of code. Built for stable managers, not
                developers.
              </p>
            </div>
            <div className={styles.feat}>
              <div className={styles['feat-ico']}>◎</div>
              <div className={styles['feat-title']}>Multilingual</div>
              <p className={styles['feat-desc']}>
                English and German included as standard. Additional languages available. Reach buyers across Europe effortlessly.
              </p>
            </div>
            <div className={styles.feat}>
              <div className={styles['feat-ico']}>⟡</div>
              <div className={styles['feat-title']}>Fast Performance</div>
              <p className={styles['feat-desc']}>
                Optimised for speed on every device. Buyers get an instant, seamless experience wherever they are in the world.
              </p>
            </div>
            <div className={styles.feat}>
              <div className={styles['feat-ico']}>◈</div>
              <div className={styles['feat-title']}>Customisable Design</div>
              <p className={styles['feat-desc']}>
                Your colours, your photography, your identity. The system adapts fully to your stable's brand and aesthetic.
              </p>
            </div>
            <div className={styles.feat}>
              <div className={styles['feat-ico']}>⌖</div>
              <div className={styles['feat-title']}>SEO-Ready</div>
              <p className={styles['feat-desc']}>
                Structured so international buyers find your horses when searching online. Built in from day one, no extras
                needed.
              </p>
            </div>
            <div className={styles.feat}>
              <div className={styles['feat-ico']}>❋</div>
              <div className={styles['feat-title']}>Rich Horse Profiles</div>
              <p className={styles['feat-desc']}>
                Video, pedigree, competition results, photo galleries — everything a serious buyer needs to make a confident
                decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['showcase-sec']} ${styles.sw}`} id="showcase">
        <div className={styles.si}>
          <div className={styles['sc-grid']}>
            <div className={styles['sc-screens']} style={{ position: 'relative' }}>
  <div className={styles['sc-frame']}>
    <Image src={desktop} alt="Horse Listing" width={800} height={600} />
  </div>
  <div className={styles['sc-mob']}>
    <Image src={mobile} alt="Mobile" width={320} height={580} />
  </div>
</div>
            <div>
              <span className={styles.lbl}>The product</span>
              <h2>
                Designed to make buyers say <em>&quot;this is the one.&quot;</em>
              </h2>
              <div className={styles['sc-list']}>
                <div className={styles['sc-item']}>
                  <div className={styles['sc-bul']}></div>
                  <div>
                    <h5>Homepage</h5>
                    <p>Premium hero, curated horse selection, trainer profiles — all immersive.</p>
                  </div>
                </div>
                <div className={styles['sc-item']}>
                  <div className={styles['sc-bul']}></div>
                  <div>
                    <h5>Horse Listing</h5>
                    <p>Filterable by discipline, price and level. Clean, fast and easy to browse from any device.</p>
                  </div>
                </div>
                <div className={styles['sc-item']}>
                  <div className={styles['sc-bul']}></div>
                  <div>
                    <h5>Individual Horse Page</h5>
                    <p>Full profile with gallery, video, stats, results and a direct enquiry button.</p>
                  </div>
                </div>
                <div className={styles['sc-item']}>
                  <div className={styles['sc-bul']}></div>
                  <div>
                    <h5>Mobile-Ready</h5>
                    <p>Pixel-perfect on every screen. International buyers shop on their phones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['how-sec']} ${styles.sw}`} id="how">
        <div className={styles.si}>
          <div className={styles['how-intro']}>
            <span className={styles.lbl}>The process</span>
            <h2>
              Live in <em>three steps.</em>
            </h2>
            <p className={styles.sub}>
              No lengthy agency processes. No technical headaches. A clear path from first conversation to published website.
            </p>
          </div>
          <div className={styles['how-grid']}>
            <div className={styles['how-step']}>
              <div className={styles['how-num']}>01</div>
              <div className={styles['how-title']}>Setup &amp; Customisation</div>
              <p className={styles['how-desc']}>
                We configure the system around your stable’s identity — brand colours, fonts, domain, and language settings.
              </p>
            </div>
            <div className={styles['how-step']}>
              <div className={styles['how-num']}>02</div>
              <div className={styles['how-title']}>Content Upload</div>
              <p className={styles['how-desc']}>
                You provide photos, horse descriptions, and trainer bios. We structure and publish everything for you.
              </p>
            </div>
            <div className={styles['how-step']}>
              <div className={styles['how-num']}>03</div>
              <div className={styles['how-title']}>Go Live</div>
              <p className={styles['how-desc']}>
                Your website launches. You can manage and update everything independently from day one, with support always a message away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['admin-sec']} ${styles.sw}`}>
        <div className={styles.si}>
          <div className={styles['admin-grid']}>
            <div className={styles['admin-frame']}>
              <Image src={admin} alt="Admin" width={500} height={500} />
            </div>
            <div>
              <span className={styles.lbl}>Content management</span>
              <h2>
                Simple to manage.
                <br />
                <em>No technical knowledge</em>
                <br />
                required.
              </h2>
              <p className={styles.sub}>
                Update a horse's price, mark it as sold, upload new photos — all from a clean intuitive dashboard. No developers.
                No waiting.
              </p>
              <div className={styles['admin-tags']}>
                <span className={styles.tag}>Add horses</span>
                <span className={styles.tag}>Update prices</span>
                <span className={styles.tag}>Mark as sold</span>
                <span className={styles.tag}>Upload media</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['cta-sec']} id="contact">
        <div className={styles['cta-inner']}>
          <div className={styles['cta-badge']}>Ready when you are</div>
          <p className={styles['cta-h2']}>
            Your stable deserves a website as <em>refined as your horses.</em>
          </p>
          <p className={styles['cta-sub']}>Tailored to your brand. Built for international buyers. Managed by you.</p>
          <div className={styles['cta-actions']}>
            <a target="_blank" href="https://valemountequestrian.com/" className={styles['btn-gold']}>
              View Demo &rarr;
            </a>
            {/* <a href="#" className={styles['btn-ghost']}>
              Get Your Website
            </a> */}
          </div>
        </div>
      </section>

      <footer>
        <div className={styles['footer-inner']}>
          <div className={styles['footer-bottom']}>
            <span>&copy; 2026 Marcelo Maia Studio. All rights reserved.</span>
            <Link href="/" className={styles['footer-link']}>&larr; Back to portfolio</Link>
           
          </div>
        </div>
      </footer>
    </main>
  )
}
