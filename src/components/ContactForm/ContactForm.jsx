import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { addContact } from "../../redux/contactsSlice";


const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name must contain only letters")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]+$/, "Phone number must contain only digits and hyphens")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = () => {
     const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
    const numberFieldId = useId();
    

     const handleSubmit = (values, { resetForm }) => {
       dispatch(addContact(values));
       resetForm();
     };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <div>
            <label>Name</label>
            <Field
              name="name"
              type="text"
              id={nameFieldId}
            />
            <div >
              <ErrorMessage name="name" component="div" />
            </div>
          </div>
          <div >
            <label >Number</label>
            <Field
              name="number"
              type="text"
              id={numberFieldId}
            />
            <div>
              <ErrorMessage name="number" component="div" />
            </div>
          </div>
        </div>
        <div>
          <Button type="submit">
            Add contact
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
