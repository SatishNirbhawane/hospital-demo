import React from "react";

const Patient = () => {
    return (<>
        <div className="my-5">
            <h1 className="text-center">Patient Registration </h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone No" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Date</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Date" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Disease</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Disease Name" />
                        </div>


                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Submit </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>);
}
export default Patient;