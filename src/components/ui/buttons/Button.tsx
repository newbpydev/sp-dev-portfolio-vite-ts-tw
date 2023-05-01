// * TYPES
interface Props {
  type?: "button" | "submit" | "reset";
}

// * COMPONENT: Button
function Button({ type = "button" }: Props) {
  // @ Output
  return <button type={type}>Button</button>;
}

export default Button;
