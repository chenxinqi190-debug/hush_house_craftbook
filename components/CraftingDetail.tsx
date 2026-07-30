"use client";

import { Craftable, TYPE_LABELS } from "@/types/crafting";
import { items } from "@/data/items";
import { skills } from "@/data/skills";
import { Language, translations } from "@/data/i18n";

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

  if (!craftable) {
    return (
      <div className="flex justify-center px-4 pt-20 md:h-full md:items-center md:pt-0">
        <p className="whitespace-pre-line text-3xl italic text-ink/80">
          {t.start}
        </p>
      </div>
    );
  }
const romanNumerals = ["I", "II", "III", "IV", "V"];
   return (
    <article className="w-full max-w-6xl px-8 pt-6 pb-14 md:ml-20">
      {/* Category */}
      <p className="text-lg uppercase tracking-[0.2em] text-ink/80">
        {craftable.type
          .map((type) => TYPE_LABELS[type] ?? type)
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
<section className="mt-12">
  {craftable.methods.map((method, index) => (
    <div
      key={method.id}
      className="mb-10 border-t border-ink/10 pt-6"
    >
      <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
        {t.formula} {romanNumerals[index]}
      </h3>

      <div className="mt-5 grid gap-8 md:grid-cols-[140px_360px_160px]">
        {/* Required Principle */}
        <div>
          <p className="text-lg uppercase tracking-[0.15em] text-ink/80">
            {t.requiredPrinciple}
          </p>

          <div className="mt-3 flex items-center gap-2">
            <img
              src={`/icons/principles/principle.${method.principle.id}.png`}
              alt={method.principle.id}
              className="h-9 w-9 object-contain"
            />

            <span className="text-lg text-ink">
              {method.principle.amount}
            </span>
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className="text-lg uppercase tracking-[0.15em] text-ink/80">
            {t.skills}
          </p>

          <div className="mt-3 grid grid-cols-2 gap-4">
            {method.skills.map((skillID) => {
              const skill = skills[skillID];

              return (
                <div key={skill.id} className="w-24">
                  <img
                    src={skill.image}
                    alt={skill.displayName[language]}
                    className="h-20 w-20 object-contain"
                  />

                  <p className="mt-2 text-sm leading-snug text-ink">
                    {skill.displayName[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Required Materials */}
        <div>
          <p className="text-lg uppercase tracking-[0.15em] text-ink/80">
            {t.requires}
          </p>

          <div className="mt-3 flex flex-wrap gap-4">
            {method.requires.map((itemId) => {
              const item = items[itemId];

              return (
                <div
                  key={item.id}
                  className="flex w-24 flex-col items-center text-center"
                >
                  <img
                    src={item.icon}
                    alt={item.displayName[language]}
                    className="h-14 w-14 object-contain"
                  />

                  <span className="mt-2 text-sm text-ink">
                    {item.displayName[language]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ))}
</section>

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