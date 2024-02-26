import styles from './styles.module.css';
import OverviewCard from "@components/OverviewCard";
import {DispensingsGraph} from "@components/DispensingsGraph";
import useFetchData from "@/hooks/useFetchData.ts";
import {CleaningsGraph} from "@components/CleaningsGraph";
import {DispensingsByHierarchyGraph} from "@components/DispensingsByHierarchyGraph";
import {ConsumprionsStats} from "@components/ConsumprionsStats";
import {ConsumptionsHeaderBtns} from "@components/OverviewCard/ui/ConsumptionsHeaderBtns";
import {useState} from "react";

const OverviewPage = () => {
  const [active, setActive] = useState<"METRIC" | "US">("METRIC")
  const data = useFetchData();

  if (!data.data.length) return;

  return (
    <main className={`${styles.main} container`}>
      <OverviewCard title="Discensings by Date">
        <DispensingsGraph {...data}/>
      </OverviewCard>
      <OverviewCard
        title="Consumptions"
        control={<ConsumptionsHeaderBtns active={active} setActive={setActive}/>}
      >
        <ConsumprionsStats {...data}/>
      </OverviewCard>
      <OverviewCard title="Cleanings">
        <CleaningsGraph/>
      </OverviewCard>
      <OverviewCard title="Discensings by hierarchy level (average per machine)">
        <DispensingsByHierarchyGraph {...data}/>
      </OverviewCard>
    </main>
  );
};

export default OverviewPage;


