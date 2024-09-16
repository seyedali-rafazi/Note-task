import Dashboard from "../components/dashboard/Dashboard";
import Layout from "../ui/Layout";

const Home: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
};

export default Home;
