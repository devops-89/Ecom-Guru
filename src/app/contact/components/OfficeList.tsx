import type { Office } from "../types/contact.types";

import OfficeCard from "./OfficeCard";

interface OfficeListProps {
  offices: Office[];
}

export default function OfficeList({
  offices,
}: OfficeListProps) {
  return (
    <aside className="flex flex-col gap-14 self-start lg:sticky lg:top-28">
      {offices.map((office) => (
        <OfficeCard
          key={office.country}
          office={office}
        />
      ))}
    </aside>
  );
}