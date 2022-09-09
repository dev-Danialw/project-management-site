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
    <div className="grid grid-cols-3 gap-6 ">
      <div className="col-span-2">
        <ProjectSummary project={document} />
      </div>
      <div className="col-span-1">
        <ProjectComments project={document} />
      </div>
    </div>
  );
}
