'use client'

import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [lightMode, setLightMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") !== "dark";
        }
        return true;
    });

    useEffect(() => {
        if (lightMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }, [lightMode]);

    const handleClick = () => {
        setLightMode(prev => !prev);
    };

    return (
        <Switch
            isSelected={lightMode}
            onClick={handleClick}
            size="lg"
        >
            {lightMode ? (
                <Sun className="size-5" />
            ) : (
                <Moon className="size-5" />
            )}
        </Switch>
    );
};

export default ThemeToggle;