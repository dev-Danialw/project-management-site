import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
import ProjectComments from "./ProjectComments";
import ProjectSummary from "./ProjectSummary";

export default function Project() {
  let { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return <div>{error}</div>;
  }

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 ">
      <div className="col-span-2">
        <ProjectSummary project={document} />
      </div>
      <div className="md:col-span-1 col-span-2">
        <ProjectComments project={document} />
      </div>
    </div>
  );
}
