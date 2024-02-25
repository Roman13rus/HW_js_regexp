import Validate from '../js/validate';

test('Valid username verification', () => {
  const user = new Validate();
  const received = user.validateUsername('qw123-we_12r');
  expect(received).toBeTruthy();
});

test('checking the name of a user with more than 3 consecutive digits in the name', () => {
  const user = new Validate();
  const received = user.validateUsername('qw123-w1234e_12r');
  expect(received).toBeFalsy();
});

test('checking the username starting with a digit', () => {
  const user = new Validate();
  const received = user.validateUsername('1qw123-w14e_12r');
  expect(received).toBeFalsy();
});

test('checking the username finishing with a digit', () => {
  const user = new Validate();
  const received = user.validateUsername('qw123-w14e_12r1');
  expect(received).toBeFalsy();
});

test('checking the username starting with a sign -', () => {
  const user = new Validate();
  const received = user.validateUsername('-qw123-w14e_12r');
  expect(received).toBeFalsy();
});

test('checking the username finishing with a sign _', () => {
  const user = new Validate();
  const received = user.validateUsername('qw123-w14e_12r_');
  expect(received).toBeFalsy();
});

test('checking the name of a user with Cyrillic alphabet', () => {
  const user = new Validate();
  const received = user.validateUsername('qw1Ю23-w14e_12r');
  expect(received).toBeFalsy();
});

test('checking the user name with different letter case', () => {
  const user = new Validate();
  const received = user.validateUsername('qER123-w14e_12r');
  expect(received).toBeTruthy();
});
