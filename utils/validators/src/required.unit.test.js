import required from './required';

describe('required validator', () => {
  it('properly detects empty strings', () => {
    expect(required({ value: '' }).valid).toEqual(false);
    expect(required({}).valid).toEqual(false);
    expect(required({ value: false }).valid).toEqual(false);
    expect(required({ value: 0 }).valid).toEqual(false);
  });
  it('properly detects valid strings', () => {
    expect(required({ value: 'test' }).valid).toEqual(true);
    expect(required({ value: 'false' }).valid).toEqual(true);
    expect(required({ value: '0' }).valid).toEqual(true);
  });
});
