



import React, { useRef } from "react";

const VolunteerForm = () => {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        const form = formRef.current;
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add("was-validated");
    };

    return (
        <div className='container'>
            <div className="top">
                <h1>Volunteer Form</h1>
                <p>Fill out the form below to start your journey as a Basti Ki Pathshala Foundation volunteer.</p>
            </div>
            <form
                ref={formRef}
                className="row g-3 needs-validation"
                noValidate
                onSubmit={handleSubmit}
            >
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please provide a first name.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please provide a last name.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose an email.
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationServer05" className="form-label">Contact</label>
                    <input type="text" className="form-control" id="validationServer05" aria-describedby="validationServer05Feedback" required />
                    <div id="validationServer05Feedback" className="invalid-feedback">
                        Please provide a phone number.
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustom04" className="form-label">Availability</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option value="">Choose...</option>
                        <option value="weekends">Weekends</option>
                        <option value="evenings">Evenings</option>
                        <option value="flexible">Flexible</option>
                        <option value="fulltimecommitment">Full-Time commitment</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                
                <div className="mb-3 skills">
                    <label htmlFor="skills" className="form-label">Skills & Expertise</label>
                    <textarea
                        className="form-control"
                        name="skills"
                        id="skills"
                        placeholder="Tell us about your professional skills, hobbies, or any special talents..."
                        rows={4}
                        required
                    />
                    <div className="invalid-feedback">
                        Please provide your skills.
                    </div>
                </div>
                <div className="mb-3 experience">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <textarea
                        className="form-control"
                        name="experience"
                        id="experience"
                        placeholder="Describe your previous volunteering or relevant experience..."
                        rows={4}
                        required
                    />
                    <div className="invalid-feedback">
                        Please provide your experience.
                    </div>
                </div>
                <div className="mb-3 motivation">
                    <label htmlFor="motivation" className="form-label">Why do you want to volunteer with us?</label>
                    <textarea
                        className="form-control"
                        name="motivation"
                        id="motivation"
                        placeholder="Share your motivation for volunteering with us..."
                        rows={4}
                        required
                    />
                    <div className="invalid-feedback">
                        Please share your motivation.
                    </div>
                </div>


                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
    );
};

export default VolunteerForm;



