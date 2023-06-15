import Slider from "infinite-react-carousel";
function SlideCompany() {
  return (
    <>
      <div className="slide computer">
        <div className="haye">
          <div className="slideshowcom">
            <Slider slidesToShow={5} arrowsScroll={5}>
              <div className="comp">
                <div className="shay">
                  <img className="yar" src="Images/02.png" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img
                    className="wayn"
                    src="Images/ehsan-logo-slogan.svg"
                    alt="logo_shirkad"
                  />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/DGA.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img
                    className="wayn"
                    src="Images/Qalbi.png"
                    alt="logo_shirkad"
                  />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img className="yar" src="Images/14.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/12.png" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img
                    className="wayn"
                    src="Images/mci.svg"
                    alt="logo_shirkad"
                  />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img className="yar" src="Images/04.png" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/MOH.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/05.png" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/MOJ.svg" alt="logo_shirkad" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* mobile slide  */}
      <div className="slide Mobile">
        <div className="haye">
          <div className="slideshowcom">
            <Slider slidesToShow={2} arrowsScroll={2}>
              <div className="comp">
                <div className="shay">
                  <img
                    className="wayn"
                    src="Images/ehsan-logo-slogan.svg"
                    alt="logo_shirkad"
                  />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/DGA.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img
                    className="wayn"
                    src="Images/Qalbi.png"
                    alt="logo_shirkad"
                  />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/sdaia.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/MOMRA.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img
                    className="wayn"
                    src="Images/mci.svg"
                    alt="logo_shirkad"
                  />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/MOF.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/MOH.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/MOI.svg" alt="logo_shirkad" />
                </div>
              </div>
              <div className="comp">
                <div className="shay">
                  <img src="Images/MOJ.svg" alt="logo_shirkad" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideCompany;
