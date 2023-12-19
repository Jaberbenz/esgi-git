document.addEventListener('DOMContentLoaded', function () {
    var elementsMenu = document.querySelectorAll('.cv-rubrique li');
    var divsContenu = document.querySelectorAll('.info');

    divsContenu.forEach(function (div) {
        div.style.display = 'none';
    });

    var rubriquesSelectionnees = 0;

    elementsMenu.forEach(function (elementMenu, index) {
        elementMenu.addEventListener('click', function () {

            if (divsContenu[index].style.display === 'block') {
                divsContenu[index].style.display = 'none';
                rubriquesSelectionnees--;
            } else {

                divsContenu[index].style.display = 'block';
                rubriquesSelectionnees++;
            }


            if (rubriquesSelectionnees === elementsMenu.length) {
                divsContenu.forEach(function (div) {
                    div.style.display = 'block';
                });
            } else {
                rubriquesSelectionnees = 0;
            }

        });
    });
});
