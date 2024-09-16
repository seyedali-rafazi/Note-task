import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <DashboardHeader />
      <Stats />
    </div>
  );
};

export default Dashboard;
