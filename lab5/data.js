function Formdata(data) {
    var T = `a-zA-Zа-щА-ЩЬьЮюЯяЇїІіЄєҐґ`;

    var fmv_re = '^[' + T + ']+\\s[' + T + ']{1}\\.\\s[' + T + ']{1}\\.';
    var fnm_reg = new RegExp(fmv_re);

    if (data.fnm != null && data.fnm.value.length < 3) {
        alert('Заповніть поле "ПІБ"');
        return false;
    } else if (!fnm_reg.test(data.fnm.value)) {
        alert('Вкажіть прізвище та ініціали');
    }

    if (data.variant != null && data.variant.value == 0) {
        alert('Вкажіть номер варіанту');
        return false;
    } else if (data.variant.value > 16 || data.variant.value < 0) {
        alert('Номер варіанту повинен бути в межах від 1 до 15');
        return false;
    }

    var group_re = '^[' + T + ']{2}-[0-9]{2}';
    var group_reg = new RegExp(group_re);

    if (data.group != null && data.group.value.length < 5) {
        alert('Заповніть поле "Група"');
        return false;
    } else if (!group_reg.test(data.group.value)) {
        alert('Вкажіть повний код групи');
        return false;
    }

    var faculty_re = '^[' + T + ']{4}';
    var faculty_reg = new RegExp(faculty_re);

    if (data.faculty != null && data.faculty.value.length < 4) {
        alert('Заповніть поле "Факультет"');
        return false;
    } else if (!faculty_reg.test(data.faculty.value)) {
        alert('Код факультету може містити тільки буквенні значення');
        return false;
    }

    var birthday_re = '^[0-3][0-9]\\.[01][0-9]\\.19[2-9][0-9]';
    var birthday_reg = new RegExp(birthday_re);

    if (data.birthdate != null && data.birthdate.value.length < 10) {
        alert('Заповніть поле "Дата народження"');
        return false;
    } else if (!birthday_reg.test(data.birthdate.value)) {
        alert('Введіть правильну дату народження у форматі дд.мм.рррр');
        return false;
    }

}
