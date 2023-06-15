<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0" />
  <!-- Above is essential metadata, don't alter it -->



  <!-- ████████████████████ -->
  <!-- █ FAVICON METADATA █ -->
  <!-- ████████████████████ -->

  <link rel="icon" type="image/png" sizes="32x32"
    href="images/favicons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16"
    href="images/favicons/favicon-16x16.png" />
  <link rel="shortcut icon"
    href="images/favicons/favicon.ico" />



  <!-- ███████████████████████ -->
  <!-- █ STYLESHEET METADATA █ -->
  <!-- ███████████████████████ -->

  <link rel="stylesheet" href="styles/generic.css">
  <link rel="stylesheet" href="styles/index.css">



  <!-- ████████████████████████████████████ -->
  <!-- █ SEO (SEARCH ENGINE OPTIMIZATION) █ -->
  <!-- ████████████████████████████████████ -->

  <!-- Title length range is ~50-60 characters -->
  <title>Time to Explore - Shunji Railways</title>
  <!-- Description length is ~120 characters -->
  <meta name="description" content="
    Shunji brings you to every place imaginable and
    connects you to your loved ones,
    Book your next adventure today" />
</head>





<!-- ███████████████ -->
<!-- █ SERVER CODE █ -->
<!-- ███████████████ -->

<?php
$webdataFile = fopen("databases/webdata.json", "r") or die("Unable to open file!");
$webdataRawData = fread($webdataFile, filesize("databases/webdata.json"));
$webdata = json_decode($webdataRawData, true);
fclose($webdataFile);
?>





<body>

  <!-- ███████████████████████████ -->
  <!-- █ HEADER MODULE (MDL_HDR) █ -->
  <!-- ███████████████████████████ -->

  <header id="MDL_HDR">
    <!-- TITLEBAR -->
    <div id="MDL_HDR_titleBar">
      <a href="index.php" title="Go to homepage">
        <img src="images/logos/logo_small.png">
      </a>
      <button id="MDL_HDR_MMB"
        title="Open navigation menu">
      </button>
      <h1>Shunji Railways</h1>
    </div>

    <!-- TOP NAVIGATION BAR -->
    <nav id="MDL_HDR_topNavBar">

    </nav>

    <!-- MOBILE NAVIGATION MENU (MNVM) -->
    <nav id="MDL_HDR_MNVM">
      <ul>
        <?php
        // Creates links for each item in the webdata list of navigation categories
        foreach ($webdata["MDL_HDR_NVC"] as $key => $value): ?>
          <li>
            <img src=images/icons/<?= $value["iconFileName"] ?> />
            <button value=<?= $key ?>>
              <?= $value["displayName"] ?>
            </button>
          </li>
        <?php endforeach; ?>
      </ul>

    </nav>



  </header>



  <!-- ██████████████ -->
  <!-- █ JAVASCRIPT █ -->
  <!-- ██████████████ -->

  <script src="code/generic.js" type="text/javascript"
    charset="UTF-8"></script>
  <script src="code/index.js" type="text/javascript"
    charset="UTF-8"></script>
</body>

</html>