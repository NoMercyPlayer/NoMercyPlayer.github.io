document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('button[id^="downloadBtn"]');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var a = document.createElement('a');
            // Replace these example links with your actual file links
            switch (button.id) {
                case 'downloadBtn1':
                    a.href = 'https://drive.usercontent.google.com/download?id=1vDGFi2ODGYS8iIHno2rSfCpd7QeDLNqL&export=download&authuser=0';
                    break;
                case 'downloadBtn2':
                    a.href = 'https://drive.usercontent.google.com/download?id=1N3kK-dWDAE0sG67KPMrbCYany5Wg9REh&export=download&authuser=0';
                    break;
                case 'downloadBtn3':
                    a.href = '';
                    break;
            }
            a.setAttribute('target', '_blank');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });
});
