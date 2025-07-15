import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiJavascript,
  SiExpo,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

export const skillIconMap: Record<string, IconType> = {
  "React.js": SiReact,
  "React Native": SiReact,
  Expo: SiExpo,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  "AWS EC2": FaAws,
  S3: FaAws,
  CloudFront: FaAws,
  GraphQL: SiGraphql,
  JavaScript: SiJavascript,
};
