var expect = chai.expect;

describe('concertFlyer', function () {
  it(`should return true if given the strings "hello world" and "hello"`, function () {
    var magazine = 'hello world';
    var flyer = 'hello';

    var result = concertFlyer(magazine, flyer);

    expect(result).to.eql(true);
  });

  it(`should return true if given the strings "Why are there so many songs about rainbows and whats on the other side" and "what about rainbows and songs"`, function () {
    var magazine =
      'Why are there so many songs about rainbows and whats on the other side';
    var flyer = 'on about rainbows and songs';

    var result = concertFlyer(magazine, flyer);

    expect(result).to.eql(true);
  });

  it(`should return true if given the strings "give me one grand today night" and "give one grand today"`, function () {
    var magazine = 'Give me one grand today night';
    var flyer = 'Give one grand today';

    var result = concertFlyer(magazine, flyer);

    expect(result).to.eql(true);
  });

  it(`should return false if given the strings "ive got a lovely bunch of coconuts" and "two times two is four"`, function () {
    var magazine = 'Ive got a lovely bunch of coconuts';
    var flyer = 'Ive got some coconuts';

    var result = concertFlyer(magazine, flyer);

    expect(result).to.eql(false);
  });

  it(`should return false if given the strings "Whats so amazing that keeps us stargazing" and "stargazing whats keeps us so amazing"`, function () {
    var magazine = 'Whats so amazing that keeps us stargazing';
    var flyer = 'stargazing whats keeps us so amazing';

    var result = concertFlyer(magazine, flyer);

    expect(result).to.eql(false);
  });
});
