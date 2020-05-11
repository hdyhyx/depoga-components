import React, { FC } from 'react'
import classNames from 'classnames'

export enum AlertType {
    Primarty = 'primarty',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}

interface BaseAlertPorps{
    alertType?: AlertType;
    message?: string | React.ReactNode;
    closable?: boolean;
    description?: string,
    onClose?: Function
}

const Alert: FC< BaseAlertPorps > = (props) => {
    const {alertType,message,description,onClose} = props
    const classes= classNames('alert',{
        [`alter-${alertType}`]:alertType,
        
    })
    return(
        <div className={classes}>
            <span>{message}</span>
            <span>{description}</span>
            <div onClick={()=>onClose}>关闭</div>
        </div>
    )
}

Alert.defaultProps={
    alertType:AlertType.Default
}

export default Alert