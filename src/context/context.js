import React, { useState, useEffect } from "react"
import moment from "moment"

const GatsbyContext = React.createContext();

const GatsbyProvider = ({children}) => {
    const format = 'HH:mm:ss'
    const time = moment().format(format);
    const open = moment("17:00:00", format);
    const close = moment("23:00:00", format);

    const [isOpen, setIsOpen] = useState("closed");

    const isOpenEffect = useEffect(() => {
        if (moment(time, format).isBetween(open, close)) {
          setIsOpen("open");
        } else {
          setIsOpen("closed");
        }
      }, [isOpen, time, close, open, format]);
    return <GatsbyContext.Provider value={{isOpen, isOpenEffect}}>
    {children}
    </GatsbyContext.Provider>
}

export {GatsbyContext, GatsbyProvider}