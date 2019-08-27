import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface LogoProps
  extends React.HTMLAttributes<HTMLOrSVGElement>,
    RouteComponentProps {}

function Logo(props: LogoProps) {
  const { className, history } = props;
  return (
    <svg
      {...props}
      className={`logo ${className}`}
      onClick={() => history.push("/")}
      xmlns="http://www.w3.org/2000/svg"
      width="382"
      height="376"
      viewBox="0 0 382 376"
    >
      <g fill="white" transform="translate(-17 -18)">
        <text
          fontFamily="Impact"
          fontSize="165"
          fontStyle="condensed"
          fontWeight="700"
          letterSpacing="8.25"
        >
          <tspan x="11" y="238.647">
            BOCK
          </tspan>
        </text>
        <text
          fontFamily="Impact"
          fontSize="92.5"
          fontStyle="condensed"
          fontWeight="700"
          letterSpacing="4.625"
        >
          <tspan x="15.706" y="93">
            SCHEINER
          </tspan>
        </text>
        <g transform="translate(80 0)">
          <text
            fontFamily="Impact"
            fontSize="171.176"
            fontStyle="condensed"
            fontWeight="700"
            letterSpacing="8.559"
          >
            <tspan x="0" y="391">
              COM
            </tspan>
          </text>
        </g>
        <circle cx="45" cy="367" r="27" />
      </g>
    </svg>
  );
}

export default withRouter(Logo);
