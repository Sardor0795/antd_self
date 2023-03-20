import styled from "styled-components";

const getSize = ({ size }) => {
  switch (size) {
    case "small":
      return {
        padding: "8px",
        fontSize: "12px",
      };
    case "medium":
      return {
        padding: "10px",
        fontSize: "14px",
      };
    case "large":
      return {
        padding: "12px",
        fontSize: "16px",
      };

    default: {
    }
  }
};

export const ToolTipButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  border: ${({ border }) => (border ? "var(--border)" : null)};
  width: ${({ block }) => (block ? "250px" : null)};
  margin: ${({ block }) => (block ? "10px" : null)};
  ${getSize}
  transition: color 0.3s ease, backgroundColor 0.3s ease;
  :hover {
    border-color: var(--info);
    color: var(--info);
  }
  :hover div {
    display: block;
  }
`;

export const ToolTipContent = styled.div`
  display: none;
  white-space: nowrap;
  padding: 5px 5px;
  background-color: #000;
  border-radius: 4px;
  color: #fff;
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  ::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #000;
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%) rotate(45deg);
    z-index: -1;
  }
`;
