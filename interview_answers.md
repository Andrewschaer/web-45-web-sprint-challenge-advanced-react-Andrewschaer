# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A stateful component will keep track of data as it is changed or updated.  A functional state-less component will just render and utilize what it is provided via it's props and locally stored constants/data.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    The componentWillMount function is a deprecated function previously used in react that was replaced by the componentDidMount function.  The componentDidMount function gets called in the Mounting phase - when a component is being initially built out - of the React Component lifecycle.

    The componentWillUpdate function is a deprecated function previously used in react that was replaced by the componentDidUpdate function. The componentDidUpdate function gets called in the Updating phase - when a component that is already built out rerenders itself due to a change of state or another function causing the rerender - of the React Component lifecycle.

3. Define stateful logic.
    Stateful logic is code that defines, sets, updates, and utilizes state in your application.


4. What are the three step of creating a successful test? What is done in each phase?
    The three steps of creating a successful test are: Arrange, Act, & Assert.  In the Arrange step, the test is given a framework of where in the app it should test, and provided any other variables or test data that will be used later in the test.  In the Act step, the test is provided code that will simulate an user action or change in the application.  In the Assert step, the test checks whether the correct outcome occurs from the action performed in the Act step.
