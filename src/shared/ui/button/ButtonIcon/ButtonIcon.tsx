import { Button } from 'antd';
import type { ReactNode } from 'react';

interface ButtonIconsProps {
  icon: ReactNode;
  shape?: 'default' | 'circle' | 'round';
  size?: 'large' | 'middle' | 'small';
  loading?: boolean;
  color?: 'default' | 'primary' | 'danger' | 'blue';
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonIcon = ({
  size,
  icon,
  shape,
  color,
  loading,
  disabled,
  onClick,
}: ButtonIconsProps) => {
  return (
    <Button
      variant="filled"
      color={color}
      size={size}
      shape={shape}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      icon={icon}
    ></Button>
  );
};
