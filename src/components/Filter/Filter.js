import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { Paragraph } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <Input type="text" value={value} onChange={onChange} required />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
