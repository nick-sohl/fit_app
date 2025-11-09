<?php

$height = $_POST["bodyHeight"];
$weight = $_POST["bodyWeight"];
$bmi = $weight / ($height / 100) ** 2;
echo "<section>";
echo "<p>Dein BMI beträgt: $bmi</p>";
echo "</section>";
