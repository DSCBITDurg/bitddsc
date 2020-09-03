import React from 'react';



// import css file
import styles from './UserForm.module.css';
import {Formik} from 'formik';

import { Form, Button,InputGroup, FormControl } from 'react-bootstrap';
function UserForm(props) {
    const userProfile = {
        email: 'albert@gmail.com',
        password: '1234',
        username: 'albert',
        instituteName: 'Bhilai Institute of Technology Durg',
        year: 4,
        github: "fake@fake.com",
        linkedin: "fake@fake.com",
        checks: {
            webDevelopment:true,
            machineLearning: false,
            mobileDevelopment: true,
            uiux: false,
            
        }
    }
    return (
        <div className={styles.container}>
           
                
            <Formik
                initialValues={
                   {...userProfile}
                    }
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form onSubmit={handleSubmit} className={styles.form}>
                  
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                            type="email" name="email" placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback>{errors.email && touched.email && errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                    
                            <Form.Control.Feedback>{errors.username && touched.username && errors.username}</Form.Control.Feedback>
                        </Form.Group>
                    

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                    
                            <Form.Control.Feedback>{errors.password && touched.password && errors.password}</Form.Control.Feedback>
                        </Form.Group>

                        

                        <Form.Group controlId="github">
                            <Form.Label>Github Profile Url</Form.Label>
                            <Form.Control
                                type="text"
                                name="github"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.github}
                            />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                    
                            <Form.Control.Feedback>{errors.github && touched.github && errors.github}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="linkedin">
                            <Form.Label>Linkedin Profile Url</Form.Label>
                            <Form.Control
                                type="text"
                                name="linkedin"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.linkedin}
                            />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                    
                            <Form.Control.Feedback>{errors.linkedin && touched.linkedin && errors.linkedin}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="instituteName">
                            <Form.Label>Institute Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="instituteName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.instituteName}
                            />
                            <Form.Text className="text-muted">
                               
                            </Form.Text>
                    
                            <Form.Control.Feedback>{errors.instituteName && touched.instituteName && errors.instituteName}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="Year">
                            <Form.Label>Year</Form.Label>
                            <Form.Control as="select"
                                name="year"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.year}
                                custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </Form.Control>
                            <Form.Control.Feedback>{errors.year && touched.year && errors.year}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="branch">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control as="select"
                                name="branch"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.branch}
                                custom>
                            <option>Information Technology</option>
                            <option>Computer Science</option>
                            <option>Electrical Engg.</option>
                            <option>Chemical Engg.</option>
                            <option>Electronic and Telecomm</option>
                            <option>Mechanical Engg.</option>
                            </Form.Control>
                            <Form.Control.Feedback>{errors.branch && touched.branch && errors.branch}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="mostInterestedIn">
                            <Form.Label>Most Interested In</Form.Label>
                            <Form.Control as="select"
                                name="Interested In"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mostInterestedIn}
                                custom>
                            <option>Web Development</option>
                            <option>Computer Science</option>
                            <option>Electrical Engg.</option>
                            <option>Chemical Engg.</option>
                            <option>Electronic and Telecomm</option>
                            <option>Mechanical Engg.</option>
                            </Form.Control>
                            <Form.Control.Feedback>{errors.mostInterestedIn && touched.mostInterestedIn && errors.mostInterestedIn}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className={styles.checks} controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Web Development" name="webDevelopment"
                                onChange={handleChange}
                                onBlur={handleBlur} checked={values.checks.webDevelopment}
                            />

                            <Form.Check type="checkbox" label="Mobile Development" name="mobileDevelopment"
                                onChange={handleChange}
                                onBlur={handleBlur} checked={values.checks.mobileDevelopment}
                            />

                            <Form.Check type="checkbox" label="Machine Learning" name="machineLearning"
                                onChange={handleChange}
                                onBlur={handleBlur} checked={values.checks.machineLearning}
                            />
                            <Form.Check type="checkbox" label="Ui/Ux" name="uiux"
                                onChange={handleChange}
                                onBlur={handleBlur} checked={values.checks.uiux}
                            />
                        </Form.Group>
                        
                    <Button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                        Submit
                    </Button>
                    </Form>
                )}
        </Formik>
           
        </div>
    );
}

export default UserForm;
