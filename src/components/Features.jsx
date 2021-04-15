import React from 'react';
import doctor from "../doc_ico.png"
import FeaturesData from "../components/FeaturesData";
import Card from "../components/Card"

// import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
const Features = () => {
    return (
        <>
            <div className="my-5">
                <h2 className="text-center" style={{ color: 'bule' }}>Features<span><img src={doctor} alt="" /></span> <hr /></h2>

            </div>
            <div className="container-fluid mb-5 ">
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className="row gy-4">
                            {
                                FeaturesData.map((val, ind) => { return <Card key={ind} title={val.title} info={val.info} /> })
                            }
                        </div>
                        <div><hr /></div>

                    </div>
                </div>
            </div>


        </>

    );
};
export default Features;