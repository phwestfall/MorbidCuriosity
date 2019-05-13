var g3

function buildEduGauge(NoHighSchoolDiploma) {

  var level = (NoHighSchoolDiploma) / 60 * 180;
  // console.log(level);

  if (!g3) {

    g3 = new JustGage({
      id: 'edu-gauge',
      value: NoHighSchoolDiploma,
      min: 0,
      max: 60,
      symbol: '%',
      pointer: false,
      decimals: 2,
      label: "No High School Diploma",
      gaugeWidthScale: 0.6,
      counter: true,
      relativeGaugeSize: true,
      levelColors: ["#48d1cc"]
    });
  }
  else g3.refresh(NoHighSchoolDiploma);

};
