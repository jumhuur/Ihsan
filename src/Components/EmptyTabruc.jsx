import Lottie from "lottie-react";
import animationData from "../static/Images/123723-search-empty.json";

function EmpatyTabaruc() {
  return (
    <div className="empaty">
      <div className="sawir">
        <img src="/Images/search.svg" alt="empaty" />
        {/* <Lottie animationData={animationData}  /> */}
      </div>
      <p className="not_foundmessage">Wali Laguma Tabarucin mashruucan</p>
      <br></br>
      <div className="ayad in_info">
        <div className="haye">
          <div className="nas_ayad">
            <img src="/Images/lntnalo-ayah2.svg" alt="ayad" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpatyTabaruc;
