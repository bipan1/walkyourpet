const Robot = ({ direction }) => {
  const rotations = {
    NORTH: "rotate(0deg)",
    EAST: "rotate(90deg)",
    SOUTH: "rotate(180deg)",
    WEST: "rotate(270deg)",
  };

  return (
    <div className="robot-icon" style={{ transform: rotations[direction] }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="40px"
        height="40px"
      >
        <path d="M12 2L15 8H9L12 2Z" fill="currentColor" />
      </svg>
    </div>
  );
};

export default Robot;
