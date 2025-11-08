import React from "react";
import { motion } from "motion/react";
import { Timeline } from "@/components/ui/timeline";
import timelineData from "@/data/linetime.json";

// Interfaz para definir la estructura de cada elemento del timeline
interface TimelineItem {
  titulo: string;
  año: string;
  parrafo: string;
  imagenes: string[];
}

// Props del componente
interface TimelineDemoProps {
  data?: TimelineItem[];
}

export function TimelineDemo({ data = timelineData }: TimelineDemoProps) {
  // Transformar los datos del JSON al formato que espera el componente Timeline
  const formattedData = data.map((item) => ({
    title: item.año,
    content: (
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-4 text-lg font-semibold text-neutral-100 md:text-3xl">
          {item.titulo}
        </h3>
        <p className="mb-8 text-xs font-normal md:text-base text-neutral-200">
          {item.parrafo}
        </p>
        {/* Mostrar imágenes solo si existen */}
        {item.imagenes && item.imagenes.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {item.imagenes.map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt={`${item.titulo} - imagen ${index + 1}`}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        )}
      </motion.div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={formattedData} />
    </div>
  );
}
