function formalSchoolCalc(marks) {
  const {
    math,
    literature,
    language,
    combination,
    encouraged,
    prior,
    average,
  } = marks;

  return (
    (((math + literature + language + combination + encouraged) / 4) * 7 +
      average * 3) /
      10 +
    prior
  );
}

function informalSchoolCalc(marks) {
  const { math, literature, combination, encouraged, average, prior } = marks;

  return (
    (((4 * (math + literature + combination) + 3 * encouraged) / 12) * 7 +
      average * 3) /
      10 +
    prior
  );
}

function GraduatedMark(target, marks) {
  if (!marks) return;
  let finalResult = 0;

  console.log("Tinh toan diem cua ", target);

  switch (target) {
    case "thpt":
      finalResult = formalSchoolCalc(marks);
      break;
    case "gdtx":
      finalResult = informalSchoolCalc(marks);
      break;
    default:
      return;
  }

  console.log(Math.round(finalResult * 100) / 100);
  return Math.round(finalResult * 100) / 100;
}

export default GraduatedMark;
