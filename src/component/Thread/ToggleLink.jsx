const ToggleLink = ({state, handler, onIcon, offIcon, label}) => {
  return (
    <StyledToggleLink onClick={handler}>
      {state ? onIcon : offIcon}
      {label}
    </StyledToggleLink>
  );
}

export default ToggleLink;