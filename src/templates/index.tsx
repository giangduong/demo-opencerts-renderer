import { templates as govtechDemoTemplates } from "./govtech-demo-cert";
import { templates as testimonialsTemplates } from "./testimonials";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
  TESTIMONIALS: testimonialsTemplates
};
