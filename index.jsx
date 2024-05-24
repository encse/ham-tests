import { render } from 'preact';
// Define your Preact component
const App = () => {
    return (<div>
            <h1>Hello from Preact!</h1>
            <p>This is a Preact component.</p>
        </div>);
};
// Mount your Preact component to a DOM element
render(<App />, document.body);
