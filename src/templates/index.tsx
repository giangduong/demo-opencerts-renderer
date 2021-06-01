import { templates as govtechDemoTemplates } from "./govtech-demo-cert";
import { templates as testimonialsTemplates } from "./testimonials";
import { templates as certificateOfAwardTemplates } from "./certificate-of-award";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
  TESTIMONIALS: testimonialsTemplates,
  CERTIFICATE_OF_AWARD: certificateOfAwardTemplates
};
