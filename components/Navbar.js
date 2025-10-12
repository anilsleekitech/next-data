import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { getImagePath } from "../utils/imageUtils";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown states
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Language state
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "en",
    flag: "https://flagcdn.com/us.svg",
    displayCode: "EN",
    displayName: "English",
  });

  // Language data
  const indianLanguages = {
    as: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "AS",
      name: "Assamese",
    },
    bn: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "BN",
      name: "Bengali",
    },
    brx: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "BRX",
      name: "Bodo",
    },
    doi: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "DOI",
      name: "Dogri",
    },
    gu: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "GU",
      name: "Gujarati",
    },
    hi: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "HI",
      name: "Hindi",
    },
    kn: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "KN",
      name: "Kannada",
    },
    ksm: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "KSM",
      name: "Kashmiri",
    },
    // gom: {
    //   flag: "https://flagcdn.com/in.svg",
    //   displayCode: "GOM",
    //   name: "Konkani",
    // },
    // mai: {
    //   flag: "https://flagcdn.com/in.svg",
    //   displayCode: "MAI",
    //   name: "Maithili",
    // },
    ml: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "ML",
      name: "Malayalam",
    },
    mni: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "MN",
      name: "Manipuri",
    },
    mr: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "MR",
      name: "Marathi",
    },
    ne: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "NE",
      name: "Nepali",
    },
    or: { flag: "https://flagcdn.com/in.svg", displayCode: "OR", name: "Odia" },
    pa: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "PA",
      name: "Punjabi",
    },
    sa: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "SA",
      name: "Sanskrit",
    },
    snthl: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "SNTHL",
      name: "Santali",
    },
    sd: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "SD",
      name: "Sindhi",
    },
    ta: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "TA",
      name: "Tamil",
    },
    te: {
      flag: "https://flagcdn.com/in.svg",
      displayCode: "TE",
      name: "Telugu",
    },
    ur: { flag: "https://flagcdn.com/in.svg", displayCode: "UR", name: "Urdu" },
  };

  const internationalLanguages = {
    en: {
      flag: "https://flagcdn.com/us.svg",
      displayCode: "EN",
      name: "English",
    },
    zh: {
      flag: "https://flagcdn.com/cn.svg",
      displayCode: "ZH",
      name: "Chinese",
    },
    ja: {
      flag: "https://flagcdn.com/jp.svg",
      displayCode: "JA",
      name: "Japanese",
    },
    ar: {
      flag: "https://flagcdn.com/sa.svg",
      displayCode: "AR",
      name: "Arabic",
    },
    th: { flag: "https://flagcdn.com/th.svg", displayCode: "TH", name: "Thai" },
    es: {
      flag: "https://flagcdn.com/es.svg",
      displayCode: "ES",
      name: "Spanish",
    },
    fr: {
      flag: "https://flagcdn.com/fr.svg",
      displayCode: "FR",
      name: "French",
    },
    it: {
      flag: "https://flagcdn.com/it.svg",
      displayCode: "IT",
      name: "Italian",
    },
    de: {
      flag: "https://flagcdn.com/de.svg",
      displayCode: "DE",
      name: "German",
    },
  };

  // Refs
  const productsRef = useRef(null);
  const industriesRef = useRef(null);
  const resourcesRef = useRef(null);
  const languageRef = useRef(null);
  const navbarRef = useRef(null);

  // Function to get language code from hostname
  const getLangFromHostname = () => {
    const hostname = window.location.hostname;
    if (hostname === 'devnagri.com' || hostname === 'www.devnagri.com') return 'en';
    const parts = hostname.split('.');
    if (parts.length >= 3 && parts[1] === 'devnagri' && parts[2] === 'com') {
      return parts[0];
    }
    return 'en';
  };

  // const isMobileView = () => window.innerWidth < 992;

  useEffect(() => {
    // Prioritize language from hostname
    let langCode = getLangFromHostname();
    let langData = indianLanguages[langCode] || internationalLanguages[langCode];

    // Final fallback to English if still no data
    if (!langData) {
      langData = {
        flag: "https://flagcdn.com/us.svg",
        displayCode: "EN",
        name: "English",
      };
      langCode = "en";
    }

    const newLanguage = {
      code: langCode,
      flag: langData.flag,
      displayCode: langData.displayCode ?? langCode.toUpperCase(),
      displayName: langData.name,
    };

    setCurrentLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", JSON.stringify(newLanguage));
    localStorage.setItem("selectedLangCode", langCode);
    document.documentElement.setAttribute("lang", langCode);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Close dropdowns on route change
    setIsProductsOpen(false);
    setIsIndustriesOpen(false);
    setIsResourcesOpen(false);
    setIsLanguageOpen(false);
    setIsMobileMenuOpen(false);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      const refsToCheck = [
        productsRef,
        industriesRef,
        resourcesRef,
        languageRef,
        navbarRef,
      ];
      if (!refsToCheck.some((ref) => ref.current?.contains(event.target))) {
        setIsProductsOpen(false);
        setIsIndustriesOpen(false);
        setIsResourcesOpen(false);
        setIsLanguageOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageOpen(false);
    setActiveSubmenu(null);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    setIsIndustriesOpen(false);
    setIsResourcesOpen(false);
    setIsLanguageOpen(false);
  };

  const handleSubmenuToggle = (menuKey) => {
    setActiveSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  // Language select handler (redirect + persist)
  const handleLanguageSelect = (langCode) => {
    let langData = indianLanguages[langCode] || internationalLanguages[langCode];
    
    // Fallback to English if language not found
    if (!langData) {
      langData = {
        flag: "https://flagcdn.com/us.svg",
        displayCode: "EN",
        name: "English",
      };
      langCode = "en"; // Ensure code is set to English
    }
  
    const newLanguage = {
      code: langCode,
      flag: langData.flag,
      displayCode: langData.displayCode ?? langCode.toUpperCase(),
      displayName: langData.name,
    };
  
    setCurrentLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", JSON.stringify(newLanguage));
    localStorage.setItem("selectedLangCode", langCode);
    document.documentElement.setAttribute("lang", langCode);
  
    setIsLanguageOpen(false);
    setActiveSubmenu(null);
  };

  // Determine redirect URL function (you can call this elsewhere if needed)
  const getLanguageUrl = (langCode) => {
    let url = "https://devnagri.com/";
    if (indianLanguages[langCode]) {
      if (langCode === "ta") url = "https://ta.devnagri.com/";
      else if (langCode === "kn") url = "https://kn.devnagri.com/";
      else url = `https://${langCode}.devnagri.com/`;
    } else if (internationalLanguages[langCode]) {
      url =
        langCode === "en"
          ? "https://devnagri.com/"
          : `https://${langCode}.devnagri.com/`;
    } else if (langCode === "en") {
      url = "https://devnagri.com/";
    }
    return url;
  };

  return (
    <header ref={navbarRef}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img
              src={getImagePath("Devnagri-Logo-Blue.svg")}
              alt="Devnagri Logo"
            />
          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={handleMobileMenuToggle}
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={`mobile-menu-overlay navbar-collapse ${
              isMobileMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              {/* Products Dropdown */}
              <li className="nav-item dropdown" ref={productsRef}>
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${
                    isProductsOpen ? "show" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsProductsOpen(!isProductsOpen);
                    // close others
                    setIsIndustriesOpen(false);
                    setIsResourcesOpen(false);
                    setIsLanguageOpen(false);
                  }}
                  aria-expanded={isProductsOpen}
                >
                  Products <i className="dropdown-icon fas fa-chevron-down" />
                </a>

                <div
                  className={`mega-menu dropdown-menu ${
                    isProductsOpen ? "show" : "hide"
                  }`}
                >
                  {/* === START Products mega menu content (kept unchanged) === */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="row">
                        <div className="sub-menu-nested-heading mb-3">
                          <h6 className="f-20 f-600 blue m-0">
                            Machine Translation
                          </h6>
                          <p className="f-12 f-400 black m-0">
                            Language converted automatically
                            <br />
                            by machines
                          </p>
                        </div>
                        <div className="col-md-6 p-0">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/translation-api"
                                onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/translation-api.png"
                                    )}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    Translation API
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Powerful API for seamless multilingual
                                    translations
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/transliteration-api"
                                onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/transliteration-api-icon.png"
                                    )}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    Transliteration API
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Convert Text Across Scripts Accurately
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/document-translation"
                                onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/document-translation-icon.png"
                                    )}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    Document Engine
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Automated document translation for
                                    businesses
                                  </p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 p-0">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/website-translation"
                                onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/dota-web-icon.png"
                                    )}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    DOTA (Web)
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    AI-Powered Website Translation
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/app-localization"
                                onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/dota-app-icon.png"
                                    )}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    DOTA (APP)
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Effortless app translation and localization
                                    solution
                                  </p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="sub-menu-nested-heading mb-3">
                        <h6 className="f-20 f-600 blue m-0">
                          Conversational Bots
                        </h6>
                        <p className="f-12 f-400 black m-0">
                          Emotionally Intelligent Multilingual Conversations
                        </p>
                      </div>
                      <ul className="list-unstyled">
                        <li>
                          <Link className="dropdown-item" href="/chatbot" onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}>
                            <div className="tab_innerimg_icon">
                              <img
                                src={getImagePath(
                                  "menu-icon/chat-bot-icon.png"
                                )}
                                alt="machine-translation"
                              />
                            </div>
                            <div className="sub-menu-nested">
                              <h5 className="f-14 f-600 black">Chat Bot</h5>
                              <p className="f-12 f-400 para-color">
                                AI chatbot for seamless global interactions
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/voice-bot" onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}>
                            <div className="tab_innerimg_icon">
                              <img
                                src={getImagePath(
                                  "menu-icon/conversational-ai-bot-icon.png"
                                )}
                                alt="machine-translation"
                              />
                            </div>
                            <div className="sub-menu-nested">
                              <h5 className="f-14 f-600 black">Voice Bot</h5>
                              <p className="f-12 f-400 para-color">
                                Smart voice bot for automated business workflow
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 col-md-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="sub-menu-nested-heading mb-3">
                            <Link href="/ocr" onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}>
                              <h6 className="f-20 f-600 blue m-0">OCR</h6>
                              <p className="f-12 f-400 black m-0">
                                AI-powered text recognition for accurate
                                document digitization
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="sub-menu-nested-heading mb-3">
                            <div>
                              <h6 className="f-20 f-600 blue m-0">
                                Brain SLM's
                              </h6>
                              <p className="f-12 f-400 black m-0">
                                Next-gen AI-powered language models for smarter,
                                context-aware solutions
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <Link href="/english-to-hindi-translation" onClick={() => { setIsProductsOpen(false); handleMobileMenuClose(); }}>
                            <img
                              src={getImagePath("Nav-bar_banner.png")}
                              className="w-100 rounded-4"
                              alt="Navbar banner"
                            ></img>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* === END Products mega menu content === */}
                </div>
              </li>

              {/* Industries Dropdown */}
              <li className="nav-item dropdown" ref={industriesRef}>
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${
                    isIndustriesOpen ? "show" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsIndustriesOpen(!isIndustriesOpen);
                    setIsProductsOpen(false);
                    setIsResourcesOpen(false);
                    setIsLanguageOpen(false);
                  }}
                  aria-expanded={isIndustriesOpen}
                >
                  Industries <i className="dropdown-icon fas fa-chevron-down" />
                </a>

                <div
                  className={`mega-menu cust-mega-menu-width dropdown-menu ${
                    isIndustriesOpen ? "show" : "hide"
                  }`}
                >
                  {/* === START Industries mega menu content (kept unchanged) === */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="sub-menu-nested-heading mb-3">
                          <h6 className="f-20 f-600 blue m-0">Industries</h6>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/banking-finance-translation"
                                onClick={() => { setIsIndustriesOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/banking-icon.png"
                                    )}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">BFSI</h5>
                                  <p className="f-12 f-400 para-color">
                                    Banking, Financial Services &amp; Insurance
                                    trust.
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/direct-to-consumer-translation"
                                onClick={() => { setIsIndustriesOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath("menu-icon/d2c-icon.png")}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">D2C</h5>
                                  <p className="f-12 f-400 para-color">
                                    D2C Brands for Every Language clarity.
                                  </p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/ecommerce-translation"
                                onClick={() => { setIsIndustriesOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/ecoomrce-icon.png"
                                    )}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    E-Commerce
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    E-Commerce in Every Language clients.
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/government-translation"
                                onClick={() => { setIsIndustriesOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/govt-icon.png"
                                    )}
                                    alt="machine-translation"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    Government
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Connecting Citizens in Every Language
                                  </p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* === END Industries mega menu content === */}
                </div>
              </li>

              {/* Resources Dropdown */}
              <li className="nav-item dropdown" ref={resourcesRef}>
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${
                    isResourcesOpen ? "show" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsResourcesOpen(!isResourcesOpen);
                    setIsProductsOpen(false);
                    setIsIndustriesOpen(false);
                    setIsLanguageOpen(false);
                  }}
                  aria-expanded={isResourcesOpen}
                >
                  Resources <i className="dropdown-icon fas fa-chevron-down" />
                </a>

                <div
                  className={`mega-menu cust-mega-menu-width dropdown-menu ${
                    isResourcesOpen ? "show" : "hide"
                  }`}
                >
                  {/* === START Resources mega menu content (kept unchanged) === */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="sub-menu-nested-heading mb-3">
                          <h6 className="f-20 f-600 blue m-0">Resources</h6>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="https://docs.devnagri.com/"
                                onClick={() => { setIsResourcesOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/developer-hub-menu.svg"
                                    )}
                                    alt="developer-hub-menu"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    Developer Hub
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Translate at the speed of development.
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/blogs?tab=announcements"
                                onClick={() => { setIsResourcesOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/annocument.svg"
                                    )}
                                    alt="announcement"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    News &amp; Announcements
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Catch up on the latest updates, product
                                    launches, and company milestones.
                                  </p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/blogs?tab=case-studies"
                                onClick={() => { setIsResourcesOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath(
                                      "menu-icon/case-study.svg"
                                    )}
                                    alt="case-study"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">
                                    Case Studies
                                  </h5>
                                  <p className="f-12 f-400 para-color">
                                    Explore how businesses thrive with Devnagri
                                    translation solutions.
                                  </p>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="/blogs?tab=blogs"
                                onClick={() => { setIsResourcesOpen(false); handleMobileMenuClose(); }}
                              >
                                <div className="tab_innerimg_icon">
                                  <img
                                    src={getImagePath("menu-icon/blog.svg")}
                                    alt="blog"
                                  />
                                </div>
                                <div className="sub-menu-nested">
                                  <h5 className="f-14 f-600 black">Blogs</h5>
                                  <p className="f-12 f-400 para-color">
                                    Stay updated with tips, trends, and insights
                                    in localization and translation.
                                  </p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* === END Resources mega menu content === */}
                </div>
              </li>

              {/* Get Started Button */}
              <li className="nav-item">
                <Link
                  className="mx-2 white"
                  href="https://account.devnagri.com/register"
                >
                  <button
                    type="button"
                    className="devnagri-btn"
                    style={{ padding: "10px 20px" }}
                  >
                    Get Started
                  </button>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="mx-2 white"
                  href="https://app.devnagri.com/voicebot/experience-center"
                >
                  <button
                    type="button"
                    className="devnagri-btn"
                    style={{
                      padding: "10px 20px",
                      background: "transparent",
                      color: "#05a1f4",
                    }}
                  >
                    Experience Center
                  </button>
                </Link>
              </li>

              {/* Language Selector */}
              <li
                className="nav-item dropdown position-relative nodtranslate"
                ref={languageRef}
              >
                <button
                  className="btn nav-link dropdown-toggle"
                  type="button"
                  aria-expanded={isLanguageOpen}
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  style={{ padding: "10px 18px" }}
                >
                  <img
                    src={currentLanguage.flag}
                    width={18}
                    alt={`${currentLanguage.displayCode} Flag`}
                    style={{ marginRight: "5px" }}
                  />
                  {currentLanguage.displayCode}
                  <i
                    className="dropdown-icon fas fa-chevron-down"
                    style={{ marginLeft: "5px" }}
                  />
                </button>

                <ul
                  className={`dropdown-menu language-menu ${
                    isLanguageOpen ? "show" : ""
                  } nodtranslate`}
                >
                  {/* Indian Languages */}
                  <li
                    className={`dropdown-submenu ${
                      activeSubmenu === "indian" ? "show" : ""
                    } nodtranslate`}
                  >
                    <button
                      className="dropdown-item dropdown-toggle nodtranslate"
                      onClick={() => handleSubmenuToggle("indian")}
                    >
                      <img
                        src="https://flagcdn.com/in.svg"
                        width={18}
                        alt="Indian Flag"
                      />{" "}
                      Indian Languages
                      <i className="dropdown-icon fas fa-angle-right" />
                    </button>
                    <ul
                      className={`dropdown-menu scrollable-menu ${
                        activeSubmenu === "indian" ? "show" : ""
                      } nodtranslate`}
                    >
                      {Object.entries(indianLanguages).map(([code, lang]) => {
                        const url = getLanguageUrl(code);
                        return (
                          <li key={code}>
                            <Link
                              href={url}
                              className="dropdown-item nodtranslate d-flex align-items-center"
                              onClick={(e) => {
                                // Optional: if you still want to handle the language selection logic
                                handleLanguageSelect(code);
                                // The page will navigate due to href, but you could prevent default
                                // and use window.location if you need more control
                              }}
                            >
                              <img
                                src={lang.flag}
                                width={18}
                                alt={`${lang.name} Flag`}
                              />{" "}
                              {lang.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>

                  {/* International Languages */}
                  <li
                    className={`dropdown-submenu ${
                      activeSubmenu === "intl" ? "show" : ""
                    } nodtranslate`}
                  >
                    <button
                      className="dropdown-item dropdown-toggle nodtranslate"
                      onClick={() => handleSubmenuToggle("intl")}
                    >
                      <img
                        src="https://flagcdn.com/gb.svg"
                        width={18}
                        alt="International Flag"
                      />{" "}
                      International Languages
                      <i className="dropdown-icon fas fa-angle-right" />
                    </button>
                    <ul
                      className={`dropdown-menu scrollable-menu ${
                        activeSubmenu === "intl" ? "show" : ""
                      } nodtranslate`}
                    >
                      {Object.entries(internationalLanguages).map(([code, lang]) => {
                          const url = getLanguageUrl(code);
                          return (
                            <li key={code}>
                              <Link
                                href={url}
                                className="dropdown-item nodtranslate d-flex align-items-center"
                                onClick={() => {
                                  handleLanguageSelect(code);
                                }}
                              >
                                <img
                                  src={lang.flag}
                                  width={18}
                                  alt={`${lang.name} Flag`}
                                />{" "}
                                {lang.name}
                              </Link>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
