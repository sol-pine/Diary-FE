import useToday from "./useToday";

test('오늘 날짜를 구하는 custom hook',
    () => expect(useToday()).toStrictEqual({'year': 2022, 'month': 12, 'date': 11, 'day': 0}))
