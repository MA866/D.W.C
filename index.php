<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Distance Beetween Cites App</title>

    <!-- CSS only Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- google Fonts Arvo -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet">

    <!-- MapmyIndia Plugin Link -->
    <script src="https://apis.mapmyindia.com/advancedmaps/v1/e914d58f-73e7-4829-ad9d-7ac841799a3a/map_load?v=1.5"></script>
    <script src="https://apis.mapmyindia.com/advancedmaps/api/e914d58f-73e7-4829-ad9d-7ac841799a3a/map_sdk_plugins"></script>
    <!-- CSS Stylesheet -->
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    <div class="container">
        <div class="main">
            <h1>Distance between Cities App</h1>
            <p>Our app help you calculate travelling Distance</p>
            <form class="row">
                <div class="col">
                   <input type="text" id="from" class="form-control" placeholder="Origin" aria-label="Origin">
                </div>
                <div class="col">
                   <input type="text" id="to" class="form-control" placeholder="Destination" aria-label="Destination">
                </div>
            </form>
            <div class="block mt-3">
                <button class="btn btn-danger btn-lg" onclick="calcRoute();">Find Route</button>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div id="output"></div>
        <div id="map"></div>
    </div>

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- JavaScript File -->
    <script src="js/script.js"></script>
</body>
</html>