import { ButtonFilled, ButtonUnfilled } from "./style";
import { Link, useNavigate } from "react-router-dom";

interface IButtonsProps {
  filled?: boolean;
  label: string;
  to: string;
}

export default function Buttons({ filled, label, to }: IButtonsProps) {
  const navigate = useNavigate();
  function handleOnClickButtonNavigateTo() {
    navigate(to);
  }
  return (
    <>
      {filled && <ButtonFilled onClick={handleOnClickButtonNavigateTo}>{label}</ButtonFilled>}
      {!filled && <ButtonUnfilled onClick={handleOnClickButtonNavigateTo}>{label}</ButtonUnfilled>}
    </>
  );
}
