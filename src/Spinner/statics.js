/**
 * Created by Programmer1 on 12/14/2017.
 */

export function getColor(props) {
  const {
    primary,
    secondary,
    info,
    warning,
    danger,
    success,
    inverse,
    foreColor,
    theme
  } = props;
  let ForeC = '#000';
  if (primary) {
    ForeC = theme.primaryColor;
  }
  else if (secondary) {
    ForeC = theme.secondaryColor;
  }
  else if (info) {
    ForeC = theme.infoColor;
  }
  else if (warning) {
    ForeC = theme.warningColor;
  }
  else if (danger) {
    ForeC = theme.dangerColor;
  }
  else if (success) {
    ForeC = theme.successColor;
  }
  else if (inverse) {
    ForeC = theme.inverseColor;
  }

  if (foreColor) {
    ForeC = foreColor;
  }
  return ForeC;

}

export function getSize(props) {
  const {
    xxsmall,
    xsmall,
    small,
    medium,
    larg,
    xlarg,
    xxlarg,
  } = props;

  let size = 16;
  if (xxsmall) size = 16;
  else if (xsmall) size = 24;
  else if (small) size = 32;
  else if (medium) size = 48;
  else if (larg) size = 64;
  else if (xlarg) size = 72;
  else if (xxlarg) size = 96;

  return size;
}
