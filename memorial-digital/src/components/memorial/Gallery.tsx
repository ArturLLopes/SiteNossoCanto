"use client";
import { useState } from "react";
import { Camera } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { galleryItems } from "@/data/memorial";
import type { GalleryItem } from "@/types/memorial";

export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="scroll-mt-24">
      <SectionTitle
        eyebrow="Galeria"
        title="Fotografias que guardam momentos"
        description="Os espaços abaixo estão prontos para receber as fotografias reais do memorial."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {galleryItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="group rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2"
          >
            <Card className="overflow-hidden">
              <div className="placeholder-sheen flex aspect-[4/3] items-end justify-between p-3 text-xs text-[#6d716a]">
                <span>{item.title}</span>
                <Camera className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="p-3">
                <p className="text-xs text-[var(--warm-gray)]">{item.date}</p>
                <p className="mt-1 text-xs text-[#535950]">Ver detalhes</p>
              </div>
            </Card>
          </button>
        ))}
      </div>
      <Modal
        open={Boolean(selected)}
        title={selected?.title ?? ""}
        onClose={() => setSelected(null)}
      >
        <div className="placeholder-sheen flex aspect-[4/3] items-center justify-center rounded-2xl text-sm text-[#6d716a]">
          PLACEHOLDER DA FOTOGRAFIA
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--warm-gray)]">
          {selected?.description}
        </p>
        <p className="mt-2 text-xs text-[#777b73]">
          Legenda e créditos poderão ser adicionados aqui.
        </p>
      </Modal>
    </section>
  );
}
