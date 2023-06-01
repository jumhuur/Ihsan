import SklElements from "./SkeletonElm";
import Dhexmare from "./Dhexmare" 

function ProInfoSkl(){
    return (
        <>
        <div className="Info">
            <div className="haye">
                <div className="laba_qaybood sklt">
                    <div className="qayb muuqaal">
                        <Dhexmare />
                        <SklElements Type="image" />
                        <div className="macluumaad_bidix">
                            <div className="qoraal">
                                <SklElements Type="title" />
                                <SklElements Type="text" />
                                <SklElements Type="text" />
                                <SklElements Type="text" />
                            </div>
                        </div>
                        <div className="trakoobyo">
                            <div className="tiro">
                                <div className="lahayo">
                                    <div className="icon">
                                    </div>
                                    <div className="qoraal">
                                        <SklElements Type="text" />
                                    </div>
                                </div>
                                <div className="lahayo">
                                    <div className="icon">
                                    </div>
                                    <div className="qoraal">
                                      <SklElements Type="text" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="progress">
                            <SklElements Type="title" />
                        </div>
                    </div>
                    <div className="qayb Pyments">
                        <div className="last_donote">
                           <SklElements Type="title" />
                            <SklElements Type="text" />     
                             <SklElements Type="text" />   
                              <SklElements Type="text" />           
                            <SklElements Type="div" />
                            <SklElements Type="div" />
                            <SklElements Type="div" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default ProInfoSkl