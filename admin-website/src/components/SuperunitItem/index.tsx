import React, {
  ButtonHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import useOnClickOutside from 'use-onclickoutside';
import { useSuperunit } from '../../hooks/superunit';
import { Container, ContainerButton } from './styles';

interface SuperunitItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  defaultSuperUnit: string;
}

const SuperunitItem: React.FC<SuperunitItemProps> = ({
  icon: Icon,
  children,
  defaultSuperUnit,
}) => {
  const { selected } = useSuperunit();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsMenuOpen(false));

  const handleClick = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [selected]);

  return (
    <Container onClick={handleClick} ref={ref}>
      <ContainerButton
        className="superunit-item"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {Icon && <Icon size={20} />}
        {defaultSuperUnit}
      </ContainerButton>
      {isMenuOpen && children}
    </Container>
  );
};

export default SuperunitItem;
