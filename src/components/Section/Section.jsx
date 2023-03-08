import PropTypes from 'prop-types';
import { Title, Section } from './Section.styled';

const SectionTitle = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SectionTitle;
