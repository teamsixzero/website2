import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";

import { toCamelCase } from "../../utils/helpers";

const ContactForm = ({ data }) => {
  const {
    additionalFields,
    content,
    emailPlaceholder,
    errorMessage,
    messagePlaceholder,
    namePlaceholder,
    submitText,
    successMessage,
  } = data;

  const defaultState = {
    name: "",
    email: "",
    message: "",
  };

  // state
  const [formData, setFormData] = useState(defaultState);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // methods
  const clearForm = () => {
    // swap all property values in the formData object with empty strings
    const cleared = Object.keys(formData).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});

    setFormData(cleared);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://submit-form.com/BAG878o6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      //   const response = await new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve({ ok: true });
      //       //   reject({ ok: false });
      //     }, 3000);
      //   });

      if (response.ok) {
        clearForm();
        setLoading(false);
        setSubmitted(true);
      } else {
        clearForm();
        setLoading(false);
      }
    } catch (error) {
      console.error(`error`, error);
      clearForm();
      setLoading(false);
      setSubmitted(false);
      setError(true);
    }
  };

  const renderAdditionalFields = () => {
    return additionalFields.map((field) => {
      const name = toCamelCase(field?.name);

      switch (field.__typename) {
        case "SanityFormFieldText":
          if (formData?.[name] === undefined) return null;

          return (
            <input
              key={field?._key}
              type="text"
              name={name}
              value={formData?.[name]}
              placeholder={field?.placeholder}
              onChange={onChange}
              disabled={loading}
            />
          );

        default:
          return null;
      }
    });
  };

  // lifecycle
  useEffect(() => {
    additionalFields.forEach((field) => {
      const name = toCamelCase(field?.name);

      setFormData((prev) => ({
        ...prev,
        [name]: "",
      }));
    });
  }, [additionalFields]);

  //render

  return (
    <div className="block-contact-form">
      {error && (
        <RichText
          content={errorMessage}
          className="block-contact-form__error"
        />
      )}
      {!error && submitted && (
        <RichText
          content={successMessage}
          className="block-contact-form__success"
        />
      )}

      {!error && !submitted && (
        <>
          <RichText content={content} />

          <form onSubmit={onSubmit} className="block-contact-form__form">
            <input
              type="text"
              name="name"
              value={formData?.name}
              placeholder={namePlaceholder}
              onChange={onChange}
              required
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              value={formData?.email}
              placeholder={emailPlaceholder}
              onChange={onChange}
              required
              disabled={loading}
            />
            <textarea
              name="message"
              value={formData?.message}
              placeholder={messagePlaceholder}
              onChange={onChange}
              required
              disabled={loading}
            />
            {additionalFields?.length > 0 && renderAdditionalFields()}
            <button
              type="submit"
              name="submit contact form"
              className="btn"
              disabled={loading}
            >
              {submitText}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;

export const query = graphql`
  fragment BlockContactForm on SanityContactForm {
    additionalFields {
      __typename
      ... on SanityFormFieldCheckbox {
        _key
        name
        label
      }
      ... on SanityFormFieldEmail {
        _key
        name
        placeholder
      }
      ... on SanityFormFieldRadio {
        _key
        name
        label
        options
      }
      ... on SanityFormFieldSelect {
        _key
        name
        label
        options
      }
      ... on SanityFormFieldText {
        _key
        name
        placeholder
      }
      ... on SanityFormFieldTextarea {
        _key
        name
        placeholder
      }
    }
    content: _rawContent
    emailPlaceholder
    errorMessage: _rawErrorMessage
    messagePlaceholder
    namePlaceholder
    submitText
    successMessage: _rawSuccessMessage
  }
`;
