import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
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
    <div>
      <ProjectSummary project={document} />
    </div>
  );
}
