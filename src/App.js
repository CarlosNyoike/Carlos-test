import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center position-relative">

        <a href="../index.html" rel="home" title="Free Bootstrap Themes and Website Templates" class="logo d-flex me-auto align-items-center">
          <img alt="BootstrapMade" src="../theme/img/logo.png" width="31" height="30"/>
          <p>Bootstrap<span>Made</span></p>
        </a>

        <nav class="nav-menu">
          <ul>
            <li><a href="../index.html">Home</a></li>
            <li class="nav-categories "><a href="../index.html"><span>Templates</span><svg class="icon icon-chevron-down" fill="currentColor">
                  <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-down" />
                </svg></a>
              <ul>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-4-templates/index.html">Bootstrap 4</a> <span>(80)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-5-templates/index.html">Bootstrap 5</a> <span>(81)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-business-templates/index.html">Business</a> <span>(55)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-education-templates/index.html">Education</a> <span>(1)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-admin-templates/index.html">Аdmin</a> <span>(1)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-coming-soon-templates/index.html">Coming Soon</a> <span>(3)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-one-page-templates/index.html">One Page</a> <span>(55)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-landing-page-templates/index.html">Landing Page</a> <span>(15)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-corporate-templates/index.html">Corporate</a> <span>(55)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-agency-templates/index.html">Agency</a> <span>(55)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-portfolio-templates/index.html">Portfolio</a> <span>(9)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-personal-templates/index.html">Personal</a> <span>(10)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-resume-cv-templates/index.html">Resume / CV</a> <span>(9)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-real-estate-templates/index.html">Real Estate</a> <span>(1)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-restaurant-templates/index.html">Restaurant</a> <span>(2)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../website-templates/index.html">Website Templates</a> <span>(24)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../free-website-templates/index.html">Free Website Templates</a> <span>(26)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-health-templates/index.html">Health</a> <span>(2)</span></li>
                <li><svg class="icon icon-chevron-right" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                  </svg><a href="../bootstrap-medical-templates/index.html">Medical</a> <span>(2)</span></li>
              </ul>
            </li>
            <li><a href="../license/index.html">License/Pricing</a></li>
            <li><a href="../support/index.html">Support</a></li>
            <li><a href="../contact/index.html">Contact</a></li>
            <li class="memberarea "><a href="../members/index.html"><svg class="icon icon-user2" fill="currentColor">
                  <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#user2" />
                </svg><span>Members</span></a></li>
          </ul>
        </nav>

        <div class="d-none d-xl-flex">
          <form class="search-form d-flex align-items-center" method="POST" action="https://bootstrapmade.com/search/">
            <input type="text" value="" name="q" placeholder="Search" title="Enter search keyword"/>
            <button type="submit" title="Search">
              <svg class="icon icon-search" fill="currentColor">
                <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#search" />
              </svg>
            </button>
          </form>
        </div>

        <a href="index.html#" class="mobile-nav-toggle mobile-nav-show d-lg-none" title="Toggle Menu">
          <svg class="icon icon-menu" fill="currentColor">
            <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#menu" />
          </svg>
        </a>

        <a href="index.html#" class="mobile-nav-toggle mobile-nav-hide" title="Close Menu">
          <svg class="icon icon-close" fill="currentColor">
            <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
          </svg>
        </a>

        <svg class="icon icon-search search-bar-toggle d-block d-xl-none" fill="currentColor">
        <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#search" />
        </svg>
      </div>
    </header>
    <main id="main">

      <div class="container single-template">

        <div class="page-header">
          <h1 class="page-title">Laura - Free Creative Bootstrap Template</h1>
        </div>

        <div class="row">

          <div class="col-lg-8">

            <a href="../demo/Laura/index.html" target="_blank">
              <picture>
                <source type="image/avif" media="(min-width: 992px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template.avif"/>
                <source type="image/avif" media="(min-width: 480px) and (max-width: 991px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template-md.avif"/>
                <source type="image/avif" media="(max-width: 479px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template-sm.avif"/>
                <source media="(min-width: 992px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template.png"/>
                <source media="(min-width: 480px) and (max-width: 991px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template-md.png"/>
                <source media="(max-width: 479px)" srcset="https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template-sm.png"/>
                 <img src="../content/templatefiles/Laura/Laura-bootstrap-website-template.png" class="img-fluid"
                  alt="Laura - Free Creative Bootstrap Template" width="1320" height="990"/>
              </picture>
            </a>

            <div class="single-contnet pt-4">
              <p>Laura is a clean and responsive free portfolio website template. Laura is mobile friendly, clean code, modern layout and ready for easy customization. You can use this template for many purposes like portfolio, resume, photography
                portfolio etc.</p>
              <p>Laura free portfolio template is designed for startups businesses, new agencies, photography studios or web developers. It’s a one-page template, rich in all colors and options. This free template will make your website compatible with
                any device such as phones, tablets, laptops and desktop computers.</p>
              <p><strong>Key Features:</strong></p>
              <ul>
                <li>Clean and modern design</li>
                <li>NodeJS/NPM and Gulp version available (pro unlimited and membership users only)</li>
                <li>PHP/Ajax contact form script (pro version only)</li>
                <li>Clean code and easy to customize</li>
                <li>Latest Bootstrap version</li>
                <li>Off-canvas mobile menu</li>
                <li>Testimonials carousel</li>
                <li>Portfolio with lightbox support</li>
                <li>Responsive Layout</li>
                <li>Pricing Section</li>
                <li>Testimonials Section</li>
                <li>Smooth Scroll</li>
                <li>SEO Optimized</li>
                <li>Cross Browser compatible</li>
              </ul>
            </div>
          </div>


          <div class="col-lg-4">

            <div class="single-sidebar">

              <div class="single-buttons">
                 <a href="../demo/Laura/index.html" rel="nofollow" target="_blank" class="template-demo">
                   <svg class="icon icon-preview" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#preview" />
                  </svg>
                  Live Demo
                </a>
                  <a href="index.html#download-template" class="scroll-download"><svg class="icon icon-download" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#download" />
                  </svg>Free Download
                </a>
                </div>

              <div class="template-details">
                <h2>Laura Template Details</h2>
                <ul>
                  <li><strong>Template Version</strong><span>4.1.0</span></li>
                  <li><strong>Bootstrap Version</strong><span> 4.6 and 5.0.0-beta3</span></li>
                  <li><strong>Downloads</strong><span>42,901</span></li>
                  <li><strong>Last Update</strong><span>Mar 25, 2021</span></li>
                  <li><strong>Created</strong><span>Nov 15, 2016</span></li>
                  <li><strong>Changelog</strong><span><a href="../demo/templates/Laura/changelog.txt" target="_blank" rel="nofollow">View changelog</a></span></li>
                  <li><strong>License</strong><span><a href="../license/index.html">Licensing information</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="download-template" class="pt-4">
          <div class="row gx-1 download-template">
            <div class="col-xl-4 d-none d-xl-block features-list">
              <ul>
                <li> <span>Use in personal &amp; commercial projects</span> <span class="position-relative d-block"> <svg class="icon icon-help" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#help" />
                    </svg> <span class="help">Allows you to use the template(s) to create personal or commerical websites for yourself</span> </span></li>
                <li> <span>Number of websites/domains</span> <span class="position-relative d-block"> <svg class="icon icon-help" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#help" />
                    </svg> <span class="help">On how many domains/websites you can use use the template(s)</span> </span></li>
                <li> <span>Create websites for clients</span> <span class="position-relative d-block"> <svg class="icon icon-help" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#help" />
                    </svg> <span class="help">Allows you to use the template(s) to create websites for your clients and charge them as much as you want for your work</span> </span></li>
                <li> <span>Remove footer credit link</span> <span class="position-relative d-block"> <svg class="icon icon-help" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#help" />
                    </svg> <span class="help">Allows you to remove the footer credit link and any other reference to BootstrapMade</span> </span></li>
                <li> <span>Working <a href="../php-email-form/index.html"><strong>PHP/AJAX contact form</strong></a></span> <span class="position-relative d-block"> <svg class="icon icon-help" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#help" />
                    </svg> <span class="help">A working PHP/Ajax contact form script that allows you to receive messages submitted from the contact form to your Email inbox</span> </span></li>
                <li> <span>Premium support via Email</span> <span class="position-relative d-block"> <svg class="icon icon-help" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#help" />
                    </svg> <span class="help">Premium support via Email</span> </span></li>
                <li> <span>Access to <a href="../help/dev-versions/index.html"><strong>Dev Version</strong></a></span> <span class="position-relative d-block"> <svg class="icon icon-help" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#help" />
                    </svg> <span class="help">Allows you to download the NodeJS/Gulp develoment version of the template</span> </span></li>
                <li> <span>Access to all our <strong>82</strong> pro templates</span> <span class="position-relative d-block"> <svg class="icon icon-help" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#help" />
                    </svg> <span class="help">Access to all our currently avilable <strong>82</strong> pro templates + new templates released during your membership</span> </span></li>
              </ul>
            </div>
            <div class="col-xl-8 licenses">
              <div class="row gx-1">
                <div class="col-lg-4 mt-4 mt-lg-0 free">
                  <div class="title">
                    <h2>Laura Free</h2> <span>Limited</span>
                  </div>
                  <div class="price">
                    <h3> <sup>€</sup> 0</h3> <span>Free</span> <span>( <strong>42,901</strong> Downloads )</span>
                  </div>
                  <div class="features">
                    <ul>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Use in personal &amp; commercial projects</span></li>
                      <li>Unlimited<span class="d-block d-xl-none feature-title">Number of websites/domains</span></li>
                      <li><svg class="icon icon-close" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
                        </svg><span class="d-block d-xl-none feature-title"><s>Create websites for clients</s></span></li>
                      <li><svg class="icon icon-close" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
                        </svg><span class="d-block d-xl-none feature-title"><s>Remove footer credit link</s></span></li>
                      <li><svg class="icon icon-close" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
                        </svg><span class="d-block d-xl-none feature-title"><s>Working <a href="../php-email-form/index.html"><strong>PHP/AJAX contact form</strong></a></s></span></li>
                      <li><svg class="icon icon-close" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
                        </svg><span class="d-block d-xl-none feature-title"><s>Premium support via Email</s></span></li>
                      <li><svg class="icon icon-close" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
                        </svg><span class="d-block d-xl-none feature-title"><s>Access to <a href="../help/dev-versions/index.html"><strong>Dev Version</strong></a></s></span></li>
                      <li><svg class="icon icon-close" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
                        </svg><span class="d-block d-xl-none feature-title"><s>Access to all our <strong>82</strong> pro templates</s></span></li>
                    </ul>
                  </div>
                  <div class="action"> <strong>Select Version</strong> <a class="download-template-subscribe" href="download/index.html" rel="nofollow" title="Laura template created with Bootstrap version v5.0.0 Beta"><svg class="icon icon-download"
                        fill="currentColor">
                        <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#download" />
                      </svg><span>Bootstrap v5</span></a> <a class="download-template-subscribe" href="download-bootstrap-4/index.html" rel="nofollow" title="Laura template created with Bootstrap version v4.6.x"><svg class="icon icon-download"
                        fill="currentColor">
                        <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#download" />
                      </svg><span>Bootstrap v4</span></a></div>
                </div>
                <div class="col-lg-4 mt-5 mt-lg-0 pro">
                  <div class="title">
                    <h2>Laura Pro</h2> <span>Extra Features</span>
                  </div>
                  <div class="price">
                    <div class="d-flex justify-content-center align-items-center">
                      <h3> <sup>€</sup> 19</h3>
                    </div> <span>One time payment</span> <span>Lifetime access</span>
                  </div>
                  <div class="features">
                    <ul>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Use in personal &amp; commercial projects</span></li>
                      <li>1<span class="d-block d-xl-none feature-title">Number of websites/domains</span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Create websites for clients</span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Remove footer credit link</span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Working <a href="../php-email-form/index.html"><strong>PHP/AJAX contact form</strong></a></span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Premium support via Email</span></li>
                      <li><svg class="icon icon-close" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
                        </svg><span class="d-block d-xl-none feature-title"><s>Access to <a href="../help/dev-versions/index.html"><strong>Dev Version</strong></a></s></span></li>
                      <li><svg class="icon icon-close" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
                        </svg><span class="d-block d-xl-none feature-title"><s>Access to all our <strong>82</strong> pro templates</s></span></li>
                    </ul>
                  </div>
                  <div class="action"> <a href="../buy/index.html@template=Laura&amp;license=single.html" rel="nofollow" class="buy"><svg class="icon icon-cart" fill="currentColor">
                        <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#cart" />
                      </svg><span>Buy Now</span></a></div>
                </div>
                <div class="col-lg-4 mt-5 mt-lg-0 membership">
                  <div class="title">
                    <h2>Membership</h2> <span>Get <strong>82</strong> templates</span>
                  </div>
                  <div class="price">
                    <div class="d-flex justify-content-center align-items-center">
                      <h3> <sup>€</sup> 49</h3>
                    </div> <span>One time payment</span> <span>No auto renewal</span>
                  </div>
                  <div class="features">
                    <ul>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Use in personal &amp; commercial projects</span></li>
                      <li>Unlimited<span class="d-block d-xl-none feature-title">Number of websites/domains</span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Create websites for clients</span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Remove footer credit link</span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Working <a href="../php-email-form/index.html"><strong>PHP/AJAX contact form</strong></a></span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Premium support via Email</span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Access to <a href="../help/dev-versions/index.html"><strong>Dev Version</strong></a></span></li>
                      <li><svg class="icon icon-check" fill="currentColor">
                          <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#check" />
                        </svg><span class="d-block d-xl-none feature-title">Access to all our <strong>82</strong> pro templates</span></li>
                    </ul>
                  </div>
                  <div class="action"> <a href="../buy/index.html@template=membership.html" rel="nofollow" class="buy"><svg class="icon icon-cart" fill="currentColor">
                        <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#cart" />
                      </svg><span>Buy Now</span></a></div>
                </div>
              </div>
              <div class="pt-4">Our pricing currency is in <a href="https://en.wikipedia.org/wiki/Euro" target="_blank" rel="nofollow external noopener noreferrer"><strong>EURO</strong></a>. The base currency of your Card/PayPal can be any. The issuer
                of your Card/PayPal will automatically convert the amount paid into your base currency.</div>
            </div>
          </div>
        </div>
      </div>
      <div id="download-subscribe" class="download-subscribe align-items-center justify-content-center">
        <div class="download-subscribe-form position-relative"> <a href="index.html#" class="close-subscribe-form" title="Close"><svg class="icon icon-close" fill="currentColor">
              <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#close" />
            </svg></a>
          <div class="page-header mt-0 pt-0 mb-3">
            <h5 class="page-title" style={{fontSize:'20px'}}>Subscribe to our newsletter</h5>
          </div>
          <p style={{fontSize:'14px'}}> Subscribe to our newsletter to receive notifications of new templates and updates, or click "Just Download" to download the template directly!</p>
          <form action="https://bootstrapmade.com/newsletter/subscribe/" method="POST" class="text-center" id="download-newsletter-form">
          <input type="hidden" name="source" value="download"/>
          <input type="hidden" name="name" value=""/>
          <input type="email" class="mb-3" name="email" title="Enter your Email address" placeholder="Enter your Email address" required/>
            <div class="row">
              <div class="col-md-6">
              <input type="submit" value="Subscribe &amp; Download" title="Subscribe and download the template immediately!"/></div>
              <div class="col-md-6 mt-4 mt-md-0"> <a href="index.html" class="just-download btn-primary">Just Download</a></div>
            </div>
            <div class="loading mt-3"></div>
            <div class="error-message"></div>
            <div class="sent-message">Your subscription request has been sent. Please click on the confirmation link that we sent to your Email! Downloading the template...</div>
          </form>
        </div>
      </div>
    </main>
    <footer id="footer">
      <div class="footer-newsletter">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <h3>Join Our Newsletter</h3>
              <p>Subscribe to our newsletter to receive emails about new template releases and updates</p>
              <form action="https://bootstrapmade.com/newsletter/subscribe/" method="POST" class="php-email-form" id="newsletter-form">
              <input type="hidden" name="source" value="form"/>
              <input type="hidden" name="name" value=""/>
              <input type="email" class="mb-3" name="email" title="Enter your Email address" placeholder="Enter your Email address" required/>
              <input type="submit" value="Subscribe" title="Subscribe"/>
                <div class="loading mt-3"></div>
                <div class="error-message"></div>
                <div class="sent-message">Your subscription request has been sent. Please click on the confirmation link that we sent to your Email.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-xxl-4 col-xl-3 col-lg-4 col-md-6 footer-about"> <a href="../index.html" rel="home" title="Free Bootstrap Themes and Website Templates" class="logo d-flex align-items-center"> <img alt="BootstrapMade"
                  src="../theme/img/logo.png" width="31" height="30"/>
                <p>Bootstrap<span>Made</span></p>
              </a>
              <p class="description"> High quality free Bootstrap website templates. Build your next website with our modern and fully responsive web templates!</p>
              <div class="social-links d-flex mt-3"> <a href="https://twitter.com/BootstrapMade" target="_blank" title="Follow us on Twitter" rel="nofollow external noopener noreferrer"><svg class="icon icon-twitter" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#twitter" />
                  </svg></a> <a href="https://facebook.com/BootstrapMade" target="_blank" title="Follow us on Facebook" rel="nofollow external noopener noreferrer"><svg class="icon icon-facebook" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#facebook" />
                  </svg></a> <a href="https://feeds.feedburner.com/BootstrapMade" target="_blank" title="Subscribe to our RSS feed" rel="nofollow external noopener noreferrer"><svg class="icon icon-rss" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#rss" />
                  </svg></a> <a href="../newsletter/index.html" title="Subscribe to our newsletter"><svg class="icon icon-mail" fill="currentColor">
                    <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#mail" />
                  </svg></a></div>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6">
              <h3>Company</h3>
              <nav class="footer-nav">
                <ul>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../about/index.html">About</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../license/index.html">License</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../newsletter/index.html">Newsletter</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../terms/index.html">Terms of service</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../privacy/index.html">Privacy policy</a></li>
                </ul>
              </nav>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6">
              <h3>Help &amp Resources</h3>
              <nav class="footer-nav">
                <ul>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../support/index.html">Support Center</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../php-email-form/index.html">PHP Email Form</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../help/dev-versions/index.html">Development Versions</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../help/legacy-versions/index.html">Legacy Versions</a></li>
                </ul>
              </nav>
            </div>
            <div class="col-xl-2 col-lg-4 col-md-6">
              <h3>Popular Templates</h3>
              <nav class="footer-nav">
                <ul>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../arsha-free-bootstrap-html-template-corporate/index.html">Arsha</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../onepage-multipurpose-bootstrap-template/index.html">OnePage</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../mamba-one-page-bootstrap-template-free/index.html">Mamba</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../company-free-html-bootstrap-template/index.html">Company</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../free-html-bootstrap-template-my-resume/index.html">MyResume</a></li>
                </ul>
              </nav>
            </div>
            <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
              <h3>Popular Categories</h3>
              <nav class="footer-nav">
                <ul>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../bootstrap-5-templates/index.html">Bootstrap 5 Templates</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../website-templates/index.html">Website Templates</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../bootstrap-portfolio-templates/index.html">Portfolio Templates</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../free-website-templates/index.html">Free Website Templates</a></li>
                  <li><svg class="icon icon-chevron-right" fill="currentColor">
                      <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#chevron-right" />
                    </svg><a href="../bootstrap-4-templates/index.html">Bootstrap 4 Templates</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright text-center"> Copyright &copy; 2021 <a href="../index.html">BootstrapMade</a></div>
      </div>
    </footer>
    <div title="Search" class="search-bar">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <form class="search-form d-flex align-items-center" method="POST" action="https://bootstrapmade.com/search/">
             <input type="text" value="" name="q" placeholder="Search" title="Enter search keyword"/> <button type="submit" title="Search"><svg
                  class="icon icon-search" fill="currentColor">
                  <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#search" />
                </svg></button></form>
          </div>
        </div>
      </div>
    </div> <a href="index.html#" class="back-to-top" title="Back to top"><svg class="icon icon-arrow-up" fill="currentColor">
        <use xlinkHref="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#arrow-up" />
      </svg></a>
    <script src="../theme/js/main-2.6.0.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-55234356-4"></script>
    </div>
  );
}

export default App;
