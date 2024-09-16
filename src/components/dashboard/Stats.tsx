import React from "react";
import Stat from "./Stat";
import { useNote } from "../../context/NoteContex";
import { LengthButton } from "../../icons/Icon";
import limitDay from "../../utils/limitDay";

const Stats: React.FC = () => {
  const notes = useNote();
  const numOfProposals = notes?.length || 0;
  const acceptedProposals = notes?.filter(
    (p) => limitDay(p.date).daysRemain <= 7
  ).length;

  console.log(notes.filter((p) => limitDay(p.date).daysRemain <= 7));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-8 gap-y-8">
      <Stat
        color="primary"
        title="یادداشت ها"
        value={numOfProposals}
        icon={<LengthButton />}
      />
      <Stat
        color="green"
        title="ددلاین های نزدیک"
        value={acceptedProposals}
        icon={<LengthButton />}
      />
    </div>
  );
};

export default Stats;
