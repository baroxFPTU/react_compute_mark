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

function informalSchoolCalc(
  mathScore,
  literatureScore,
  freeScore,
  encorScore,
  averageYear,
  priorScore
) {
  return (
    (((4 * (mathScore + literatureScore + freeScore) + 3 * encorScore) / 12) *
      7 +
      averageYear * 3) /
      10 +
    priorScore
  );
}

function GraduatedMark(target, marks) {
  if (!marks) return;
  let finalResult = 0;

  switch (target) {
    case "thpt":
      finalResult = formalSchoolCalc(marks);
      break;
    case "gdtx":
      break;
    default:
      return;
  }

  console.log(finalResult);
  return finalResult;
}

export default GraduatedMark;
