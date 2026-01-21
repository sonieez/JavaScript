📍Automated testing = using code to test code

✔️Situation = test case

✔️Types of test cases:
<ol>
  <li>Basic Test Cases</li>

  Only test if the code is working
  <li>Edge Cases</li>

  Test with values that are tricky
</ol>

✔️Group of related tests = test suite

<hr>

📍Testing Framework - external library that helps us write tests easier

✔️Jasmine framework:

*spec = test

⚪Creating group of specs(test suite):
```javascript
describe(/*description*/, /*function or code*/);
```

⚪Defining a single spec:
```javascript
it(/*description*/, /*function*/);
```

⚪Creating expectation(case) for a spec:
```javascript
expect(/*object*/);

//Methods:
expect(/*object1*/).toEqual(/*object2*/);  //checks if two objects are equal
expect(/*object*/).toHaveBeenCalledTimes(/*number*/);  //checks how many times the object was called in the code above. It works only if the object was mocked with spyOn()  
```

For example:
```javascript
describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  ...
})
```

✔️Flaky Test = test that sometimes passes and sometimes fails (even if we don't change the code)

⚪Mocks:

Lets us replace a method with a fake version:
```javascript
spyOn(/*object we want to mock*/, /*method we want to mock*/);

//Property and methods:
spyOn(/*object*/, *method*/).and.callFake(/*function*/);
```
