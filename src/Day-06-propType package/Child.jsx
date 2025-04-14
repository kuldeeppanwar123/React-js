import { memo } from "react";
import PropTypes from "prop-types"; // also remove the curly braces here

const Child =({ name }) => {
  console.log('child re-renders ', typeof name)
  return (
    <>
      <p>your name : {name}</p>
    </>
  );
};

Child.propTypes = {
  name: PropTypes.object,
};

export default Child;
