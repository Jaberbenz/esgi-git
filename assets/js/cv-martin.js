function changeVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    console.log(section)
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
        } else {
            section.setAttribute('hidden', 'true');
        }
    }
}

