"use client";

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import './Switcher.scss';

export default function ToggleTheme() {
    const [isToggled, setIsToggled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const isBulgarian = pathname.startsWith('/bg');
        setIsToggled(isBulgarian);

        if (!pathname.startsWith('/bg') && !pathname.startsWith('/en')) {
            router.replace('/bg' + pathname);
        }
    }, [pathname, router]);

    const handleToggle = () => {
        const newLocale = isToggled ? '/en' : '/bg';
        const newPath = pathname.replace(/(\/bg|\/en)/, newLocale);
        router.push(newPath);
        setIsToggled(!isToggled);
    };

    return (
        <div className="toggle-wrapper">
            <input
                type="checkbox"
                id="flag-toggle"
                checked={isToggled}
                onChange={handleToggle}
            />
            <label htmlFor="flag-toggle" className={isToggled ? "bulgarian-flag" : "uk-flag"}>
                {/* <div className="toggle-button" />  */}
            </label>
        </div>
    );
}
