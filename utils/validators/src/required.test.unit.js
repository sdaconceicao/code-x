import required from './required';

describe('required validator', () => {
  it('properly detects empty strings', () => {
    expect(required({ required, value: '' }).passed).toEqual(false);
    expect(required({ required }).passed).toEqual(false);
    expect(required({ required, value: false }).passed).toEqual(false);
    expect(required({ required, value: 0 }).passed).toEqual(false);
  });
  it('properly detects valid strings', () => {
    expect(required({ required, value: 'test' }).passed).toEqual(true);
    expect(required({ required, value: 'false' }).passed).toEqual(true);
    expect(required({ required, value: '0' }).passed).toEqual(true);
  });
  it('mark as passed if not required', () => {
    expect(required({ value: '' }).passed).toEqual(true);
  });
});
