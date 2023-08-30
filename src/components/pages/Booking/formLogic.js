import { useState } from "react";
import { fetchAPI, submitAPI } from "./APIlogic";

const useFormLogic = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [errors, setErrors] = useState({});

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const times = fetchAPI(selectedDate);
    setAvailableTimes(times);
  };
  const resetForm = () => {
    setDate('');
    setTime('');
    setNumGuests('');
    setName('');
    setEmail('');
    setAvailableTimes([]);
    setErrors({});
  };

  const validationRules = {
    date: {
      required: "Please select a date",
    },
    time: {
      required: "Please select a time",
    },
    numGuests: {
      required: "Please enter the number of guests",
      min: {
        value: 1,
        message: "Please enter the number of guests",
      },
      max: {
        value: 30,
        message: "Maximum number of guests is 30",
      },
    },
    name: {
      required: "Please enter your name",
      minLength: {
        value: 2,
        message: "Please enter your name",
      },
      maxLength: {
        value: 50,
        message: "Name cannot exceed 50 characters",
      },
    },
    email: {
      required: "Please enter a valid email address",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Please enter a valid email address",
      },
    },
  };

  const validateForm = () => {
    const newErrors = {};

    for (const field in validationRules) {
      const rules = validationRules[field];

      if (rules.required && !eval(field)) {
        newErrors[field] = rules.required;
      }

      if (rules.minLength && eval(field).length < rules.minLength.value) {
        newErrors[field] = rules.minLength.message;
      }

      if (rules.maxLength && eval(field).length > rules.maxLength.value) {
        newErrors[field] = rules.maxLength.message;
      }

      if (rules.min && Number(eval(field)) < rules.min.value) {
        newErrors[field] = rules.min.message;
      }

      if (rules.max && Number(eval(field)) > rules.max.value) {
        newErrors[field] = rules.max.message;
      }

      if (rules.pattern && rules.pattern.value) {
        if (!rules.pattern.value.test(eval(field))) {
          newErrors[field] = rules.pattern.message;
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      const formData = {
        date,
        time,
        numGuests,
        name,
        email,
      };

      const submissionResult = submitAPI(formData);
      return submissionResult;
    }

    return false;
  };

  return {
    date,
    time,
    numGuests,
    name,
    email,
    availableTimes,
    errors,
    handleDateChange,
    handleSubmit,
    setTime,
    setNumGuests,
    setName,
    setEmail,
    resetForm,
  };
};

export default useFormLogic;
