import React from 'react';
import { useSelector } from 'react-redux';


function SignUp(props) {

  const foodlist = useSelector(state=>state.food.foods)
  const id = foodlist.indexOf("Bánh ngọt") + 1
  return (
    <div>
      
    </div>
  );
}

export default SignUp;