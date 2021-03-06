export function CoordinatorSwitch(props) {
  const {currentScreen, children} = props;
  return children.find(screen =>  screen.props.id === currentScreen);
}
