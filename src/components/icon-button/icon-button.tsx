import { IconImage, IconText, IconWrapper } from "./styled";

interface IconButtonProps {
  img: string;
  text: React.ReactElement;
  margin?: string;
  isSelected?: boolean;
}

const IconButton = ({ img, text, margin, isSelected }: IconButtonProps) => {
  return (
    <IconWrapper margin={margin} isSelected={isSelected}>
      <IconImage src={img} />
      <IconText>{text}</IconText>
    </IconWrapper>
  );
};

export default IconButton;
