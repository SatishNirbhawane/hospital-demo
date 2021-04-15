import React from "react";
import Card2 from "../components/Card2"
import Servicedata from "../components/Servicedata";

const Services = () => {
    return (<>
        <div className="my-5">
            <h1 className="text-center">Our Services </h1>
        </div>
        <div className="container-fluid mb-5 ">
            <div className='row'>
                <div className='col-12 mx-auto'>
                    <div className="row gy-4">
                        {
                            Servicedata.map((val, ind) => { return <Card2 key={ind} imgsrc={val.imgsrc} title={val.title} info={val.info} /> })
                        }
                    </div>

                </div>
            </div>
        </div>

    </>);
}
export default Services;