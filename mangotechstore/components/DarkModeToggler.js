import { useState, useEffect } from "react";
import { useTheme as useNextTheme } from 'next-themes';
import { Button, Switch } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@nextui-org/react';

export default function DarkModeToggler() {
    const { setTheme } = useNextTheme();
    const [mounted, setMounted] = useState(false);
    const { isDark, type } = useTheme();
    const  { theme } = useTheme();
    useEffect(() => { setMounted(true) }, []);

    if (!mounted) return <></>;
    console.log('checking theme', isDark, type, setTheme);

    return (
        <Switch
            checked={isDark}
            shadow
            size='lg'
            iconOn={<FontAwesomeIcon icon={faMoon} />}
            iconOff={<FontAwesomeIcon icon={faSun} />}
            color={isDark ? 'secondary' : '$white600'}
            onChange={(e) => {
                    console.log('checking e', e)
                    setTheme(e.target.checked === true ? 'dark' : 'light')
                }
            }
            css={{
            marginRight: '20px',
            marginLeft: '-130px',
            color: isDark ? theme.colors.secondary.value : '$white600'
            }}
        />
    );
}