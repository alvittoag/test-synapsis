export const validationFields = ({ body }: any) => {
  const requiredFields = Object.keys(body).filter(
    (key) => body[key] === "" || body[key] === undefined || body[key] === null
  );

  return requiredFields;
};
