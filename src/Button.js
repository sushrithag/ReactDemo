import {useState} from 'react'

function Button() {
    
    const [click_count, setClickCount] = useState(0);
    
    function countClicks(){
        setClickCount(click_count + 1);
        // alert(click_count);
    }

    return (
      <button onClick={countClicks} className="button_color">No. of clicks are : {click_count}</button>
    );
  }

export default Button;