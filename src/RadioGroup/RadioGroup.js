import React from 'react';

import Radio from '../Radio/Radio';
import H5 from '../Headings/H5';

import Wrapper from './WrapperStyled';

export class RadioGroup extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onItemChecked=this.onItemChecked.bind(this);

    let temp = [];
    for (let i = 0; i < props.items.length; i++) {

      if (props.selectedValue!==null && props.selectedValue === props.items[i].value)
        temp.push(true);
      else
        temp.push(false);
    }
    this.state = {
      itemCheckStates: temp
    };
  }


  onItemChecked(index,id,value,name){

    let temp = [];
    for (let i = 0; i < this.props.items.length; i++) {
      if (i===index)
        temp.push(true);
      else
        temp.push(false);
    }
    this.setState ({
      itemCheckStates: temp
    });
    if(this.props.onItemSelected)
      this.props.onItemSelected(index,id,value,name);
  }

  render() {
    const {
      label,
      name,
      inline,
      children,
      items,
      primary,
      secondary,
      info,
      warning,
      danger,
      success,
      inverse,
    } = this.props;

    return (
      <Wrapper
        primary={primary}
        secondary={secondary}
        info={info}
        warning={warning}
        danger={danger}
        success={success}
        inverse={inverse}
      >
        <H5
          primary={primary}
          secondary={secondary}
          info={info}
          warning={warning}
          danger={danger}
          success={success}
          inverse={inverse}
        >
          {label}
        </H5>
        {children ? <div>{children}</div>:null}
        {
          items.map((item,i) => {
            return(

              <Radio
                name={name}
                inline={inline}
                index={i}
                key={i}
                id={item.id}
                value={item.value}
                label={item.label}
                checked={!!this.state.itemCheckStates[i]}
                onSelected={this.onItemChecked}
                primary={primary}
                secondary={secondary}
                info={info}
                warning={warning}
                danger={danger}
                success={success}
                inverse={inverse}
              />

            )
          })
        }
      </Wrapper>
    );
  }
}



export default RadioGroup;
