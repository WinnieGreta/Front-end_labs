<!DOCTYPE html>
<html>

<head>
    <title>Lab5 Trushchak</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Trushchak Olha">
    <meta name="description" content="lab 5 Trushchak">
</head>

<body>
    <div style="width:fit-content">
    <fieldset>
        <legend>Форма для заповнення</legend>
        <form action='action_page.php' method="get" target='action_page.php'>
            <input type="text" name="fnm" placeholder="ПІБ"><br><br>
            <input type="number" name="variant" placeholder="Варіант"><br><br>
            <input type="text" name="group" placeholder="Група"><br><br>
            <input type="text" name="faculty" placeholder="Факультет"><br><br>
            <input type="text" name="birthdate"placeholder="Дата народження"><br><br>
            <input type="submit" value="Підтвердити" name="Submit" onClick="return Formdata(this.form)">
        </form>
    </fieldset>
    </div>
</body>

<script type="text/javascript" src="data.js"></script>

</html>