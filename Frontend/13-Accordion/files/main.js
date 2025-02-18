document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
        item.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const plus = this.querySelector('.plus');
            const minus = this.querySelector('.minus');

            document.querySelectorAll('.accordion-content').forEach((e) => {
                if (e !== content) {
                    e.style.height = '0';
                    e.style.padding = '0 15px';
                    e.style.opacity = '0';
                    e.classList.remove('active');
                }
            });

            document.querySelectorAll('.plus').forEach((e) => {
                e.style.display = 'inline';
            });

            document.querySelectorAll('.minus').forEach((e) => {
                e.style.display = 'none';
            });

            // Toggle visibility
            if (content.style.height === '0px' || content.style.height === '') {
                content.style.height = 'auto';
                content.style.padding = '15px';
                content.style.opacity = '1';
                content.classList.add('active');
                plus.style.display = 'none';
                minus.style.display = 'inline';
            } else {
                content.style.height = '0';
                content.style.padding = '0 15px';
                content.style.opacity = '0';
                setTimeout(() => {
                    content.classList.remove('active');
                }, 300);
                plus.style.display = 'inline';
                minus.style.display = 'none';
            }
        });
    });
});