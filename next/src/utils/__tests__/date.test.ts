import { formatISO, getAge } from '../date';
import { Constants } from '../constants';

describe('Formats the ISO Date', () => {
  test('returns the correct date, given an ISO date', () => {
    const result = formatISO('2021-09-28');
    expect(result).toBe('September 28, 2021');
  });

  test('returns the correct date, modified', () => {
    const result = formatISO('2021-09-28T00:00:00');
    expect(result).toBe('September 28, 2021');
  });

  test('returns the correct date, given an ISO date time', () => {
    const result = formatISO('2021-09-28T07:36:05+0000');
    expect(result).toBe('September 28, 2021');
  });
});

describe("Figure out the Kids' Age", () => {
  const today = '2021-10-01';

  test("Isaac's age", () => {
    let Isaac = getAge(Constants.ISAACS_BDAY, today);
    expect(Isaac).toBe(7);

    // after Isaac's birthday
    Isaac = getAge(Constants.ISAACS_BDAY, '2022-06-28');
    expect(Isaac).toBe(8);
  });

  test("Adele's age", () => {
    let Adele = getAge(Constants.ADELES_BDAY, today);
    expect(Adele).toBe(5);

    // after Adele's birthday
    Adele = getAge(Constants.ADELES_BDAY, '2021-12-09');
    expect(Adele).toBe(6);
  });

  test("Emma's age", () => {
    let Emma = getAge(Constants.EMMAS_BDAY, today);
    expect(Emma).toBe(4);

    // after Emma's birthday
    Emma = getAge(Constants.EMMAS_BDAY, '2022-08-08');
    expect(Emma).toBe(5);
  });
});
