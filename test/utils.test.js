import { renderTodo } from '../render-utils.js';
const test = QUnit.test;

test('should render a li with class of complete', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<ul><li class="complete">thing</li></ul>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderTodo({ todo: 'thing', complete: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('should render a li with no class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<ul><li>thing</li></ul>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderTodo({ todo: 'thing', complete: false });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

