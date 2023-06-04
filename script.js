function hitungLuasLingkaran() {
  let getRadius = document.getElementById("radiusOfCircle").value;

  if (getRadius === "") {
    alert("jari-jari harus di isi terlebih dahulu!");
    document.getElementById("radiusOfCircle").focus();
    return;
  }
  if (getRadius <= 0) {
    alert("jari-jari harus bernilai positif!");
    return;
  }
  let area = Math.PI * Math.pow(getRadius, 2);
  let totalFixed = area.toFixed(2);
  alert(
    `Luas lingkaran dengan jari-jari: ${getRadius}cm adalah ${totalFixed}cm^2`
  );
  document.getElementById("radiusOfCircle").value = "";
}

function hitungLuasSegitiga() {
  let getRadiusOfBase = document.getElementById("radiusOfBase").value;
  let getRadiusOfHeight = document.getElementById("radiusOfHeight").value;

  if (getRadiusOfBase == "" && getRadiusOfHeight == "") {
    alert("isi nilai yang dibutuhkan terlebih dahulu!");

    document.getElementById("radiusOfBase").focus();
    return;
  }
  let getRadiusOfTriangle = (1 / 2) * getRadiusOfBase * getRadiusOfHeight;
  alert(
    `Luas segitiga dengan alas: ${getRadiusOfBase}cm dan tinggi: ${getRadiusOfHeight}cm adalah ${getRadiusOfTriangle}cm`
  );

  document.getElementById("radiusOfBase").value = "";
  document.getElementById("radiusOfHeight").value = "";
  return;
}

function hitungLuasPersegiPanjang() {
  let getWidthValueInput = document.getElementById("widthOfRectangle");
  let getWidthValue = getWidthValueInput.value;
  let getWideValueInput = document.getElementById("wideOfRectangle");
  let getWideValue = getWideValueInput.value;

  if (getWidthValue == "" && getWideValue == "") {
    alert("isi nilai yang dibutuhkan terlebih dahulu!");
    getWidthValueInput.focus();
    return;
  }

  let getTotalRadiusOfRectangle = getWidthValue * getWideValue;
  alert(
    `Luas Persegi panjang dengan panjang: ${getWidthValue}cm dan lebar: ${getWideValue}cm adalah ${getTotalRadiusOfRectangle}cm`
  );

  getWidthValueInput.value = "";
  getWideValueInput.value = "";
  return;
}

function hitungLuasJajarGenjang() {
  let getBaseOfParallelogramInput = document.getElementById(
    "baseOfParallelogram"
  );
  let baseOfParallelogramValue = getBaseOfParallelogramInput.value;

  let getHeightOfParallelogram = document.getElementById(
    "heightOfParallelogram"
  );
  let heightOfParallelogramValue = getHeightOfParallelogram.value;

  if (baseOfParallelogramValue == "" && heightOfParallelogramValue == "") {
    alert("isi nilai yang diperlukan terlebih dahulu!");
    getBaseOfParallelogramInput.focus();
    return;
  }
  let getTotalRadiusOfParallelogram =
    baseOfParallelogramValue * heightOfParallelogramValue;

  alert(
    `Luas jajar genjang dengan alas:${baseOfParallelogramValue}cm dan tinggi:${heightOfParallelogramValue}cm adalah ${getTotalRadiusOfParallelogram}cm`
  );

  getBaseOfParallelogramInput.value = "";
  getHeightOfParallelogram.value = "";
}
