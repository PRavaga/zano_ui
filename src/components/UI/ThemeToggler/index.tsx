import React from 'react';
import Button from '@/components/UI/Button';
import { useAppContext } from '@/context';
import DarkIcon from "@/assets/dark.svg";
import LightIcon from "@/assets/light.svg";

const ThemeToggler = () => {
    const {toggleTheme, theme} = useAppContext();

    return (
        <Button onClick={toggleTheme} type="icon">
            {theme == "dark" ?  <LightIcon /> :  <DarkIcon />}
        </Button>
    );
};

export default ThemeToggler;