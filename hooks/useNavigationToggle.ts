"use client"
import { useState } from "react";

export const useNavigationToggle = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () => {
        if (isOpen) {
            setIsOpen(!isOpen)
        } else {
            setIsOpen(true)
        }
    }
    return { isOpen, handleClick }
}

