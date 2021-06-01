import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { PrintWatermark } from "../govtech-demo-cert/common/print-watermark";
import { CertificateOfAward } from "../samples";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import moeLogo from "./moe-ministry-of-education-singapore.svg";
import cccLogo from "./citizens-consultative-committees.png";
import signature from "./signature.png";

const pageHeight = "29.7cm";
const header1Height = "3.5cm";
const footer1Height = "2cm";
const content1Height = `calc(${pageHeight} - ${header1Height} - ${footer1Height})`;

const Page = styled.div`
  background: rgb(255, 255, 255);
  width: 21cm;
  min-height: ${pageHeight};
  margin: 1cm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  @media print {
    margin: 3cm auto;
    page-break-after: always;
  }
`;

export const CertificateOfAwardTemplate: FunctionComponent<TemplateProps<CertificateOfAward>> = ({ document }) => (
  <div
    css={css`
      margin-left: auto;
      margin-right: auto;
    `}
  >
    <PrintWatermark />
    <Global
      styles={css`
        @page {
          size: A4;
          margin: 0;
        }
      `}
    />
    <Page>
      <div
        css={css`
          background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(180, 191, 245, 1) 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2cm;
          height: ${header1Height};
          border-bottom: 1px solid #999c97;
          img {
            height: 2.5cm;
          }
        `}
      >
        <img src={moeLogo} />
        <img src={cccLogo} />
      </div>
      <div
        className="text-center"
        css={css`
          height: ${content1Height};
          padding: 0 2cm;
          .certificate {
            font-size: 2rem;
            font-weight: bold;
            color: #000000;
            margin: 1.5cm 0;
          }
          .recipient {
            font-size: 1.5rem;
            font-weight: bold;
            color: #000000;
            margin: 0.5cm 0;
          }
          .achievement-area {
            margin-top: 0.5cm;
          }
          .institute {
            margin-bottom: 1.5cm;
          }
          .information {
            margin: 1.5cm 0;
          }
          .signature {
            line-height: 2rem;
          }
          .signature img {
            width: 6cm;
            border-bottom: 2px solid #b6b7b2;
            margin-bottom: 0.5cm;
          }
        `}
      >
        <div className="certificate text-uppercase">{document.name}</div>
        <div>is presented to</div>
        <div className="recipient text-uppercase">{document.recipient.name}</div>
        <div>of</div>
        <div className="achievement-area text-uppercase">
          {document.award.achievementArea}
          <br />
          in
          <br />
          {document.award.instituteName}
        </div>
        <div className="information">
          for demonstrating leadership qualities, service to community and schools,
          <br />
          excellence in non-academic activities, and
          <br />
          good conduct
        </div>
        <div className="signature">
          <img src={signature} />
          <div className="text-uppercase">
            {document.signature.name}
            <br />
            {document.signature.designation}
          </div>
        </div>
      </div>
      <div
        className="footer"
        css={css`
          height: ${footer1Height};
          padding: 0 2cm;
        `}
      >
        ABC123456
      </div>
    </Page>
  </div>
);
