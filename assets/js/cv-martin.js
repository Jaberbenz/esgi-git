function changeVisibility(sectionId, element) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.hasAttribute('hidden')) {
            section.removeAttribute('hidden');

            // Cacher les autres sections (a voir si je laisse)
            // const allSections = document.querySelectorAll('.cv-content > div:not([hidden])');
            // allSections.forEach(s => {
            //     if (s !== section) {
            //         s.setAttribute('hidden', 'true');
            //     }
            // });
            element.style.color = 'blue'
        } else {
            section.setAttribute('hidden', 'true');
            element.style.color = 'black'
        }
    }
}

