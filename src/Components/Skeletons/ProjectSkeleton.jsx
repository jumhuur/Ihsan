import SklElements from "./SkeletonElm";
import Dhexmare from "./Dhexmare";

function ProjectSkl() {
  return (
    <div className="card_mashruuc sklt">
      <Dhexmare />
      <SklElements Type="image" />
      <SklElements Type="title" />
      <SklElements Type="price" />
      <SklElements Type="btn" />
    </div>
  );
}

export default ProjectSkl;
