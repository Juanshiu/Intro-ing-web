
import { HeroParallax } from "../hero-parallax";
import inventosData from "@/data/inventos.json";

// Interfaz para definir la estructura de cada invento
interface Invento {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

// Props del componente
interface HeroParallaxDemoProps {
  data?: Invento[];
}

export function HeroParallaxDemo({ data = inventosData }: HeroParallaxDemoProps) {
  return <HeroParallax products={data} />;
}
