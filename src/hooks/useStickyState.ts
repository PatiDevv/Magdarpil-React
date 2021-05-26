import { useEffect, useRef, useState } from "react";

export default function useStickyState() {
    const componentRef = useRef<HTMLElement>(null)
    const [isNavSticky, setNavSticky] = useState(false)

    useEffect(() => {
        function handleScroll(this: Window) {
            const headerHeight = componentRef.current?.clientHeight
            if (headerHeight) {
                if (headerHeight < this.scrollY + 40) {
                    if (!isNavSticky) setNavSticky(true)
                }
                else {
                    if (isNavSticky == true) setNavSticky(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, [isNavSticky]);

    return { componentRef, isNavSticky }
}