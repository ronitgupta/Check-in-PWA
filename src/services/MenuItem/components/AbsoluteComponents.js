import React from 'react'
import RoundedButton from '../../../shared/components/Button/Rounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default function AbsoluteItems(){
    return(
    <div>
         {/* <div style={{float:'right',}}> */}
              {/* <RoundedButton style={{ backgroundColor: "#0295aa" }}>BROWSE MENU</RoundedButton> */}
        {/* </div> */}
      <div style={{margin:'8px',display:'flex'}}> <div> <ShoppingCartOutlinedIcon/></div><div style={{justifyContent:'space-between',display:'flex'}}><div style={{ marginLeft:'5px',marginTop:'5px'}}>4 Items&nbsp;|&nbsp; &#8377;180.89</div><div></div></div></div>
      
    </div>)
}