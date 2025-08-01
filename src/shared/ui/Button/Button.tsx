import AnimatedFillingButton from "./AnimatedFillingButton/AnimatedFillingButton";
import BaseButton from "./BaseButton/BaseButton";

interface IProps extends React.ComponentProps<typeof BaseButton> {
  animation?: "none" | "filling";
}

export default function Button({ animation = "none", ...rest }: IProps) {
  if (animation === "filling") {
    return <AnimatedFillingButton {...rest} />;
  }

  return <BaseButton {...rest} />;
}
