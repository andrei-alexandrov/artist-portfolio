"use client";

import { usePathname, useRouter } from 'next/navigation';
import './Switcher.scss';

export default function LocaleSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const isBulgarian = pathname.startsWith('/bg');

    const handleToggle = () => {
        const newLocale = isBulgarian ? '/en' : '/bg';
        router.push(pathname.replace(/^\/(bg|en)/, newLocale));
    };

    return (
        <div className="toggle-wrapper">
            <input
                type="checkbox"
                id="flag-toggle"
                checked={isBulgarian}
                onChange={handleToggle}
                aria-label={isBulgarian ? "Switch to English" : "Превключи на български"}
            />
            <label
                htmlFor="flag-toggle"
                className={isBulgarian ? "uk-flag" : "bulgarian-flag"}
                aria-hidden="true"
            ></label>
        </div>
    );
}
