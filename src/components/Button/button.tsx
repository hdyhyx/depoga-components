import React,{FC} from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primarty = 'primarty',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    href?: string;
    size?: ButtonSize;
    children: React.ReactNode;
    btnType?:ButtonType;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = (props) => {
    const { 
        btnType, 
        disabled, 
        size, 
        children, 
        href,
        className,
        ...restProps
     } = props
     // btn , btn-lg , btn-primarty
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === ButtonType.Link) && disabled
    })
    if (btnType === ButtonType.Link && href ) {
        return (
            <a 
                {...restProps}
                href={href}
                className={classes}
            >
            {children}
            </a>
        )
    } else {
        return (
            <button
                {...restProps}
                className={classes}
                disabled={disabled}
            >
            {children}
            </button>
    )
  }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
  

export default Button