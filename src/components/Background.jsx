import "./Background.css";
import StarCanvas from "./StarCanvas";

export default function Background() {
  return (
    <div className="background">

      <StarCanvas />

      <div className="aurora aurora-1"></div>

      <div className="aurora aurora-2"></div>

      <div className="aurora aurora-3"></div>

    </div>
  );
}