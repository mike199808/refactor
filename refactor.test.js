const {renderPerson, photoDiv} = require('./refactor-after');

describe('代码换味道——重复代码', () => {
  test('代码坏味道——重复代码——提炼函数1', () => {
    const input = {
      name: 'mike',
      photo: {
        title: 'travel',
        location: 'tokyo',
        date: '2021-11-22'
      }
    };

    const result = renderPerson(input);

    expect(result).toBe(`<p>mike</p>\n<p>title: travel</p>\n<p>location: tokyo</p>\n<p>date: 2021-11-22</p>`);
  });

  test('代码坏味道——重复代码——提炼函数2', () => {
    const input = {
      title: 'adventure',
      location: 'india',
      date: '2021-11-22'
    };

    const result = photoDiv(input);

    expect(result).toBe(`<div>\n<p>title: adventure</p>\n<p>location: india</p>\n<p>date: 2021-11-22</p>\n</div>`);
  });
});

