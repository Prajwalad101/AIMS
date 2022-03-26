export const checkDisabled = (status) => {
  console.log(status);
  if (status === "not-verified") {
    return false;
  } else if (
    status === "pending" ||
    status === "blocked" ||
    status === "verified" ||
    status === undefined
  ) {
    return true;
  }
};
