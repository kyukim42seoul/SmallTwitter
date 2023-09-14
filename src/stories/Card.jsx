import PropTypes from 'prop-types';
import 'card.css';

/**
 * Default Card component for wrapping contents
 */
export const Card = ({primary, backgroundColor, size, text, ...props}) => {
  const mode = primary ? 'storybook-card--primary' : 'storybook-card--secondary';
  return <div>

  </div>
}