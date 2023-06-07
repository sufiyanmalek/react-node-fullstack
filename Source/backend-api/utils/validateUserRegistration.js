import Joi from "joi";

// validate format of user details by joi
export const userValidator = (user) => {
  const userObject = Joi.object({
    fullName: {
      firstName: Joi.string().required().min(3),
      middleName: Joi.string().required().min(3),
      lastName: Joi.string().required().min(3),
    },
    photo: Joi.string().required(),
    address: {
      flatNumber: Joi.number().required(),
      area: Joi.string().required(),
      city: Joi.string().required(),
      pincode: Joi.number().required(),
    },
    emailId: Joi.string().email().required(),
    initiationDate: Joi.date().required(),
  });
  const validation = userObject.validate(user);
  return validation;
};
