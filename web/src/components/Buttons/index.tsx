import { ButtonFilled, ButtonUnfilled } from "./style";

interface IButtonsProps {
  filled?: boolean;
  label: string;
}

export default function Buttons({ filled, label }: IButtonsProps) {
  return (
    <>
      {filled && <ButtonFilled>{label}</ButtonFilled>}
      {!filled && <ButtonUnfilled>{label}</ButtonUnfilled>}
    </>
  );
}
