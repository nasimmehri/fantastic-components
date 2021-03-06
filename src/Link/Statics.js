import defaultTheme from '../defaultTheme';

function getColor(props) {
  const {
    foreColor,
    theme,
  } = props;

  let ForeC;
  if (foreColor) {
    ForeC = foreColor;
  } else if (props.theme) {
    ForeC = theme.defaultColorForeColor;
  } else {
    ForeC = defaultTheme.primary.foreColor;
  }
  return ForeC;

};

function getBgColor(props) {
  const {
    bgColor,
    theme
  } = props;

  let bgC;
  if (bgColor) {
    bgC = bgColor;
  } else if (props.theme) {
    bgC = theme.primaryForeColor;
  } else {
    ForeC = defaultTheme.primaryColor;
  }
  return bgC;
};

export {getColor, getBgColor};
