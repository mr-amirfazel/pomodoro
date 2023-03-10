import React, {FunctionComponent, PropsWithChildren} from 'react';
import classes from './button.module.css';


interface buttonProps {
    onClick: () => void;
}

const Button: FunctionComponent<PropsWithChildren<buttonProps>> = (props) => {

    const onClick = (event : any) => {
        props.onClick();
    }

    return(<button onClick={onClick}
     className={classes.button}
     >
        {props.children}
    </button>)

}

export default Button;