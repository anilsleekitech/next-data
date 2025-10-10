import React from 'react';
import { getImagePath } from '../../utils/imageUtils';

const CapabilityFrameworkSection = ({
  title = "Capability Framework",
  className = ""
}) => {
  return (
    <section className={className}>
      <div className="container">
        <h2 className="text-center pb-4 f-40 f-600 black wow fadeInUp">
          {title.split(/(Framework)/).map((part, index) =>
            part === "Framework" ? (
              <span key={index} className="blue">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h2>
        <section className="cpblts-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 coidi-wrap">
                <div className="outer-linesimg">
                  <img
                    className="img-fluid"
                    src={getImagePath("outer-lines.svg")}
                    alt=""
                  />
                </div>

                <div className="content-box">
                  {/* Box 1 - Capabilities */}
                  <div className="coidi-box first">
                    <div className="coidi-box-cntnt">
                      <div className="text-center pt-3 mb-3">
                        <img
                          style={{ maxHeight: "84px" }}
                          src={getImagePath("menu-icon/capabilties-icon.png")}
                          alt=""
                        />
                      </div>
                      <h4 className="text-center">CAPABILITES</h4>
                      <div className="text-center">
                        <img
                          src={getImagePath("arrow-down-big.svg")}
                          alt=""
                        />
                      </div>
                      <div className="text-start px-5">
                        <ul className="ps-0">
                          <li>Multilingual Translation</li>
                          <li>Multilingual Conversational Bot</li>
                          <li>Workflow Integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Box 2 - Offerings */}
                  <div className="coidi-box second white">
                    <div className="coidi-box-cntnt ps-4 pe-4 pt-0">
                      <div className="text-center pt-3 mb-3">
                        <img
                          style={{ maxHeight: "84px" }}
                          src={getImagePath("menu-icon/offerings-icon.png")}
                          alt=""
                        />
                      </div>
                      <h4 className="text-center">OFFERINGS</h4>
                      <div className="text-center">
                        <img
                          src={getImagePath("arrow-down-big.svg")}
                          alt=""
                        />
                      </div>

                      <ul className="ps-4 pe-1">
                        <li className="mb-0">Text to Text</li>
                        <li className="mb-0">Text to Speech</li>
                        <li className="mb-0">Speech to Text</li>
                      </ul>
                      <ul className="ps-4 pe-1">
                        <li className="mb-0">
                          Conversational Voice & Chatbots
                        </li>
                        <li className="mb-0">IVR Automation</li>
                        <li className="mb-0">Inbound & Outbound Process</li>
                      </ul>
                      <ul className="ps-4 pe-1">
                        <li className="mb-0">OCR Vision Model</li>
                        <li className="mb-0">Customer Onboarding Journeys</li>
                        <li className="mb-0">KYC & Document Verification</li>
                      </ul>
                    </div>
                  </div>

                  {/* Box 3 - Industries */}
                  <div className="coidi-box third">
                    <div className="coidi-box-cntnt">
                      <div className="text-center pt-3 mb-3">
                        <img
                          style={{ maxHeight: "84px" }}
                          src={getImagePath("menu-icon/industry-icon.png")}
                          alt=""
                        />
                      </div>
                      <h4 className="text-center">INDUSTRIES </h4>
                      <div className="text-center">
                        <img
                          src={getImagePath("arrow-down-big.svg")}
                          alt=""
                        />
                      </div>
                      <div className="text-start ps-5">
                        <ul className="ps-0">
                          <li>BFSI</li>
                          <li>D2C</li>
                          <li>Legal</li>
                          <li>E-Commerce</li>
                          <li>Government Tech</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Box 4 - Platform */}
                  <div className="coidi-box fourth white">
                    <div className="coidi-box-cntnt">
                      <div className="text-center pt-3 mb-3">
                        <img
                          style={{ maxHeight: "84px" }}
                          src={getImagePath("menu-icon/devnagri-platform.png")}
                          alt=""
                        />
                      </div>
                      <h4 className="text-center">DEVNAGRI'S PLATFORM</h4>
                      <div className="text-center">
                        <img
                          src={getImagePath("arrow-down-big.svg")}
                          alt=""
                        />
                      </div>
                      <ul className="ps-4 pe-2">
                        <li>Core Translation Engine (NLP & ML)</li>
                        <li>LLM & SLM Models</li>
                        <li>BRAIN</li>
                        <li>Agents</li>
                      </ul>
                    </div>
                  </div>

                  {/* Box 5 - Infra & Delivery */}
                  <div className="coidi-box fifth">
                    <div className="coidi-box-cntnt">
                      <div className="text-center pt-3 mb-3">
                        <img
                          style={{ maxHeight: "84px" }}
                          src={getImagePath("menu-icon/infra-delivery.png")}
                          alt=""
                        />
                      </div>
                      <h4 className="text-center">INFRA & DELIVERY</h4>
                      <div className="text-center">
                        <img
                          src={getImagePath("arrow-down-big.svg")}
                          alt=""
                        />
                      </div>
                      <ul className="ps-4 pe-2 pb-2 mb-2">
                        <li>Enterprise-grade security</li>
                        <li>On Prem & Cloud Delivery</li>
                        <li>Integrations CRM, CMS</li>
                        <li>APIs & Hooks</li>
                        <li>Operational Dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CapabilityFrameworkSection;
