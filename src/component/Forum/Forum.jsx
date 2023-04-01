import React from 'react';

const Forum = () => {
    return (
        <div>

            <div className="card w-full bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">Difference between props and state</h2>
                    <p>Props are read-only data passed down from a parent component to a child component, while state is a mutable data object managed within a component. Props are used to customize and configure child components, while state is used to manage a component's own internal state and trigger re-rendering.</p>
                </div>

                <div className="card-body">
                    <h2 className="card-title">How does usestate work?</h2>
                    <p>useState is a hook in React that allows functional components to have state. It returns a stateful value and a function to update it, and re-renders the component when the state is updated.</p>
                </div>

                <div className="card-body">
                    <h2 className="card-title">Purpose of usestate except data load</h2>
                    <p>The useState hook in React is used to declare and manage mutable state variables within a functional component, allowing the component to dynamically update its own state and re-render based on user interactions or other events.</p>
                </div>

                <div className="card-body">
                    <h2 className="card-title">How does React work</h2>
                    <p>React works by using a virtual DOM to efficiently update the browser's actual DOM in response to changes in the component state, resulting in faster rendering and a more dynamic user interface.</p>
                </div>

            </div>

        </div>
    );
};

export default Forum;