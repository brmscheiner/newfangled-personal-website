import React, { Component } from "react";
import ubnt from "../../public/images/networking.svg";
import mp from "../../public/images/robot1.svg";
import frb from "../../public/images/fed.svg";
import resumeIcon from "../../public/images/resume.svg";
import programmer from "../../public/images/programmer.svg";
import BreadCrumbs from "../../components/BreadCrumbs";
import resume from "../../public/files/ben_scheiner_resume.pdf";

const blockHeight = 600;

const items = [
  {
    name: "Ben works",
    lines: ["React machine", "Data viz guru", "Leadership experience"],
    href: "/ubiquiti",
    image: programmer,
    areaStyles: {
      background:
        "linear-gradient(90deg, rgba(88,72,126,1) 15%, rgba(198,0,155,1) 100%)"
    }
  },
  {
    name: "Ubiquiti Networks",
    title: "Software Engineer",
    lines: [
      "Product development for UniFi Network",
      "Czar of Ubiquiti's shared component library",
      "Now I know more about the internet"
    ],
    href: "/ubiquiti",
    image: ubnt,
    areaStyles: {
      background:
        "linear-gradient(90deg, rgba(0,114,255,1) 30%, rgba(94,199,255,1) 80%)"
    }
  },
  {
    name: "Motorized Precision",
    title: "Lead Software Engineer",
    lines: [
      "Product development for MP Studio",
      "Controlled robots on film sets and convention floors",
      "Occasionally operated the corporate forklift"
    ],
    href: "/motorized",
    image: mp,
    areaStyles: {
      background:
        "linear-gradient(90deg, rgba(93,93,93,1) 0%, rgba(0,0,0,1) 100%)"
    }
  },
  {
    name: "Federal Reserve Board",
    title: "Sr. Research Assistant",
    lines: [
      "Data analysis for economics papers",
      "Coerced to wear fancy clothes for no reason",
      "Very productive chartmonkey"
    ],
    href: "/fed",
    image: frb,
    areaStyles: {
      background:
        "linear-gradient(90deg, rgba(126,105,72,1) 15%, rgba(175,140,85,1) 89%)"
    }
  },
  {
    name: "Let's talk!",
    title: "",
    lines: [
      { text: "Check the resume", link: resume },
      { text: "LinkedIn", link: "https://www.linkedin.com/in/brmscheiner/" },
      { text: "Github", link: "https://github.com/brmscheiner" }
    ],
    href: "/fed",
    image: resumeIcon,
    areaStyles: {
      background:
        "linear-gradient(90deg, rgba(255,134,0,1) 15%, rgba(255,108,20,1) 36%, rgba(255,94,94,1) 89%)"
    },
    footer: BreadCrumbs
  }
];

function Block({ children, style }) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: blockHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style
      }}
    >
      {children}
    </div>
  );
}

class Work extends Component {
  render() {
    return (
      <>
        <div className="flex-spaced">
          {items.map(item => (
            <div style={{ width: "100%", ...item.areaStyles }}>
              <Block key={item.name}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    padding: 40
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      height: blockHeight * 0.7,
                      width: blockHeight * 0.7
                    }}
                  />
                  <div
                    style={{
                      paddingTop: 40,
                      paddingLeft: 80,
                      fontFamily: "futura",
                      display: "flex",
                      flexDirection: "column",
                      color: "white"
                    }}
                  >
                    <span style={{ fontSize: 50 }}>{item.name}</span>
                    <span style={{ marginTop: 16, fontSize: 20 }}>
                      {item.title}
                    </span>
                    <div
                      style={{
                        marginTop: 60,
                        fontSize: 20,
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 30,
                        borderLeft: "4px solid white",
                        lineHeight: "30px"
                      }}
                    >
                      {item.lines.map(line => {
                        if (typeof line === "object") {
                          return (
                            <a
                              style={{ textDecoration: "none", color: "white" }}
                              href={line.link}
                            >
                              <span>{line.text}</span>
                            </a>
                          );
                        } else {
                          return <span>{line}</span>;
                        }
                      })}
                    </div>
                  </div>
                </div>
              </Block>
              {item.footer && (
                <div
                  style={{
                    margin: 40,
                    display: "flex",
                    justifyContent: "center",
                    width: "100%"
                  }}
                >
                  <item.footer />
                </div>
              )}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Work;
