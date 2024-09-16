import AddNote from "../components/Note/AddNote";
import Layout from "../ui/Layout";

const Note: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Layout>
        <div>
          <AddNote />
        </div>
      </Layout>
    </div>
  );
};

export default Note;
