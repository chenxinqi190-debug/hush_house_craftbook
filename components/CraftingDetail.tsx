"use client";

import {Craftable, CraftableType,CATEGORY_ORDER,} from "@/types/crafting";
import { items } from "@/data/items";
import { skills } from "@/data/skills";
import { Language, translations } from "@/data/i18n";
import {useEffect, useState } from "react";
import FormulaSection from "@/components/FormulaSection"

interface CraftingDetailProps {
  craftable: Craftable | null;
  craftables: Craftable[];
  language: Language;
}
export default function CraftingDetail({
  craftable,
  craftables,
  language,
}: CraftingDetailProps) {
  const t = translations[language];

  if (!craftable) 
    {
    return (
      <div className="flex justify-center px-4 pt-20 md:h-full md:items-center md:pt-0">
        <p className="whitespace-pre-line text-3xl italic text-ink/80">
          {t.start}
        </p>
      </div>
    );
  }
  const [previewCraftableId, setPreviewCraftableId] =
  useState<string | null>(null);

const previewCraftable = previewCraftableId
  ? craftables.find(
      (craftable) => craftable.id === previewCraftableId
    )
  : null;
  useEffect(() => {
  setPreviewCraftableId(null);
}, [craftable.id]);
const romanNumerals = ["I", "II", "III", "IV", "V"];
   return (
    <article className="w-full max-w-[1700] px-8 pt-6 pb-14 md:ml-20">
      {/* Category */}
      <p className="text-lg uppercase tracking-[0.2em] text-ink/80">
        {craftable.type
          .map((type) => t.types[type])
          .join(" / ")}
      </p>

      {/* Title */}
      <h2 className="mt-2 text-4xl leading-snug text-ink">
        {craftable.displayName[language]}
      </h2>

      {/* Icon */}
      <div className="mt-6 flex h-[150px] w-[150px] items-center justify-center">
        <img
          src={`/icons/${craftable.icon}`}
          alt={craftable.displayName[language]}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Description */}
      <p className="mt-12 whitespace-pre-line text-lg leading-relaxed text-ink">
        {craftable.description[language]}
      </p>

      {/* Item principles */}
      <section className="mt-12">
        <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
          {t.principles}
        </h3>

        {craftable.principles.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-3">
            {[...craftable.principles]
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((principle) => (
                <div
                  key={principle.id}
                  className="flex items-center gap-1"
                >
                  <img
                    src={`/icons/principles/principle.${principle.id}.png`}
                    alt={principle.id}
                    className="max-h-6 max-w-6 object-contain"
                  />

                  {(principle.amount ?? 1) > 1 && (
                    <span className="text-base text-ink">
                      {principle.amount}
                    </span>
                  )}
                </div>
              ))}
          </div>
        ) : (
          <p className="mt-2 text-sm italic text-ink/40">None.</p>
        )}
      </section>

      {/* Methods */}
      <div className="mt-12 flex items-start gap-10">
<section className="w-[800px] min-w-0 shrink-0">
{craftable.methods.map((method, index) => (
    <FormulaSection
      key={method.id}
      method={method}
      index={index}
      language={language}
       onOpenPreview={(craftableId) => {
  setPreviewCraftableId((current) =>
    current === craftableId ? null : craftableId
  );
}}
    />
  ))}
</section>
{previewCraftable && (
    <aside className="sticky top-6 w-[440px] shrink-0 border-l border-ink/10 pl-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl text-ink">
          {previewCraftable.displayName[language]}
        </h2>

        <button
          type="button"
          onClick={() => setPreviewCraftableId(null)}
          className="text-2xl leading-none text-ink/50 hover:text-ink"
          aria-label="Close"
        >
          ×
        </button>
      </div>
      <section className="mt-6">
        {previewCraftable.methods.map((method, index) => (
          <FormulaSection
            key={method.id}
            method={method}
            index={index}
            language={language}
            compact
          />
        ))}
      </section>
    </aside>
  )}
</div>

{/* Note */}
{craftable.note && (
  <section className="mt-6">
    {craftable.note[language].map((line, index) => (
      <p
        key={index}
        className="text-base italic leading-relaxed text-ink/60"
      >
        {line}
      </p>
    ))}
  </section>
)}
    </article>
  );
}