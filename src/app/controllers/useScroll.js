import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

var standbyElements;
var animationi = 0;

function useScroll() {
	let { pathname } = useLocation();

    function pageScroll() {
        if (animationi >= standbyElements.length) {
            window.removeEventListener('scroll', pageScroll);
            return;
        }
        while (true) {
            if (animationi >= standbyElements.length) {
                break;
            }
            let element = standbyElements[animationi];
            if (
                element.getBoundingClientRect().top <
                window.innerHeight - window.innerHeight * 0.16
            ) {
                element.classList.add('show');
                animationi += 1;
            } else {
                break;
            }
        }
    }

	useEffect(() => {
		animationi = 0;
		window.scrollTo(0, 0);
		standbyElements = document.getElementsByClassName('wait');
		window.addEventListener('scroll', pageScroll);
		pageScroll();
        
        return () => window.removeEventListener('scroll', pageScroll);

	}, [pathname]);
}


export default useScroll;