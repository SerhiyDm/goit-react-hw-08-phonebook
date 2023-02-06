import PropTypes from 'prop-types';

import { Container, Text } from './ServicePage.styled';

export const ServicePage = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

ServicePage.propTypes = {
  text: PropTypes.string.isRequired,
};
