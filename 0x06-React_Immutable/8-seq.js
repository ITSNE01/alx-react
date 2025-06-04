import { Seq } from 'immutable';

/**
 * Filters and prints only students with a score ≥ 70,
 * capitalizing their firstName and lastName.
 *
 * @param {Object} grades - An object whose keys are IDs and values are student records.
 */
export default function printBestStudents(grades) {
  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const best = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }))
    .toObject();

  console.log(best);
}
