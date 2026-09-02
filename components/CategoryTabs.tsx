"use client";

type CategoryTabsProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export default function CategoryTabs({ categories, activeCategory, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Menu categories">
      {categories.map((category) => (
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === category}
          key={category}
          onClick={() => onChange(category)}
          className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
            activeCategory === category
              ? "bg-[#2c1b13] text-[#fffaf4]"
              : "border border-[#dacabc] bg-[#fffdf9] text-[#806f63] hover:border-[#6d3f27] hover:text-[#6d3f27]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
