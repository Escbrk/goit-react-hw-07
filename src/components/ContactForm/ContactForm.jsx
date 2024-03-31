import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("This field is required"),
    phone: Yup.string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("This field is required"),
  });

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form className={css.container}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field id={nameFieldId} name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field id={numberFieldId} name="phone" />
        <ErrorMessage name="phone" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
