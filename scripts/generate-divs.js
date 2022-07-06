$(document).ready(function () {
    fetch('../scripts/data.json')
        .then(results => results.json())
        .then(data => {
            var tmp = '';
            $.each(data, function (key, value) {
                tmp += '                <div class="position-container">\n' +
                    '                    <div class="first-row">\n' +
                    '                        <div class="name">' + value.name + '</div>\n' +
                    '                        <div class="price">' + value.price + '</div>\n' +
                    '                    </div>\n' +
                    '                    <div class="second-row">' + value.elements + '</div>\n' +
                    '                </div>'
            });

            $('#positionss').prepend(tmp);
        });


});
