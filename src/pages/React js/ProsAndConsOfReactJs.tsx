import ComparisonTable from "../../components/ComparisonTable";

const AdvantagesandDisadvantagesOfReactJs = () => {
    const advantages = ["Component-Based Architechture", "Virtual DOM", "Strong Community Support", "Flexibility", "SEO-Friendly"];
    const disadvantages = ["Learning Curve", "Boilerplate Code", "Frequent Updates", "JSX Syntax", "Performance Overhead"];
    return (
        <div className="main-card">
            <div>
                <h1 className="title">Advantages and Disadvantages of React Js</h1>
                <h2 className="subtitle">Advantages of React Js</h2>
                <ul>
                    <li><strong>Component-Based Architecture:</strong><br/> React allows developers to build reusable UI components, which promotes code reusability and maintainability.</li>
                    <li><strong>Virtual DOM:</strong><br/> React uses a virtual DOM to optimize rendering performance. It updates only the necessary parts of the actual DOM, resulting in faster updates and improved user experience.</li>
                    <li><strong>Strong Community Support:</strong><br/> React has a large and active community, which means there are plenty of resources, libraries, and tools available for developers.</li>
                    <li><strong>Flexibility:</strong><br/> React can be used for building both web and mobile applications (using React Native), making it a versatile choice for developers.</li>
                    <li><strong>SEO-Friendly:</strong><br/> React can be rendered on the server side, which helps improve SEO performance for web applications.</li>
                </ul>

                <h2 className="subtitle">Disadvantages of React Js</h2>
                <ul>
                    <li><strong>Learning Curve:</strong><br/> React has a steep learning curve, especially for developers who are new to JavaScript or front-end development.</li>
                    <li><strong>Boilerplate Code:</strong><br/> Setting up a React project can require a significant amount of boilerplate code, which can be overwhelming for beginners.</li>
                    <li><strong>Frequent Updates:</strong><br/> React is constantly evolving, and frequent updates can sometimes lead to compatibility issues with existing codebases.</li>
                    <li><strong>JSX Syntax:</strong><br/> Some developers may find JSX syntax (which allows HTML-like code in JavaScript) to be confusing or difficult to read at first.</li>
                    <li><strong>Performance Overhead:</strong><br/> While the virtual DOM improves performance, it can also introduce overhead in certain scenarios, such as when dealing with large lists or complex animations.</li>
                </ul>
            </div>
            <div className="note-card">
                <p><strong>Note:</strong> This is a simple comparison of React's advantages and disadvantages. The actual experience may vary based on project requirements and developer expertise.</p>
            </div>
            <ComparisonTable
                caption="React Advantages vs Disadvantages"
                columns={[
                    { title: 'Advantages', features: advantages.map((advantage) => ({ title: advantage })) },
                    { title: 'Disadvantages', features: disadvantages.map((disadvantage) => ({ title: disadvantage })) },
                ]}
            />
        </div>
    )
}

export default AdvantagesandDisadvantagesOfReactJs