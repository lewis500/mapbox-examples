import React, {
  Component
} from 'react';

export default ({
  pickColor,
  colors
}) => {
  return (
    <div className='color-picker'>
        <div className='color-title'>
          SELECT A COLOR
        </div>
        <div className='color-row'> 
        {
          colors.map(color=>{
            let style = {backgroundColor: color};
            return (
              <div 
                onMouseOver={()=> pickColor(color)}
                className='color-bar'
                key={color}
                style={style}>
              </div>
            );
          })
        }
        </div>
      </div>
  );
};
