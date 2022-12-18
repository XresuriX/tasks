import PropTypes from "prop-types";
import Button from "./button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="blue" text="All will be well" onClick={onclick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

//style={headingStyle}
//const headingStyle = {
//color: 'blue',
//backgroundColor: 'green',
//}

export default Header;
