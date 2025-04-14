
# Prompt for React Code Generation

Please generate a complete React application that meets the following requirements:

## Folder Structure

1. **Pages Directory:**
    - The index.tsx must only have 1 tag
    - You are STRICTLY not allowed to use react-router.

2. **Class-Based Components:**
    - Every page must be built as a class-based component that extends React’s Component using the following pattern:
      ```jsx
      class PageName extends Component<{}, PageStateType> { ... }
      ```  
      Replace `PageStateType` with an appropriate type for the page’s state.

## Subcomponents with State Bubbling

- Within each page, include one or more subcomponents (which can reside in a separate folder like `src/components`).
- These subcomponents must be designed to **bubble their state back up** to the parent page.
- They should take a callback prop (for example, `onUpdate` or `handleChange`) and call this function when their internal state changes so that the parent page can update its own state accordingly.

## Example Structure & Functionality

For example, if you create a page (e.g., `HomePage.jsx` inside `src/pages`), it should use at least one subcomponent (e.g., `SomeSubComponent.jsx` in `src/components`). The `HomePage` should extend `Component<{}, { data: string }>` and include a handler (e.g., `handleSubComponentUpdate`) that updates its state based on changes reported from `SomeSubComponent`.

### Example Code Snippet

```jsx
// File: src/pages/HomePage.jsx
import React, { Component } from 'react';
import SomeSubComponent from '../components/SomeSubComponent';

interface HomePageState {
  data: string;
}

class HomePage extends Component<{}, HomePageState> {
  constructor(props: {}) {
    super(props);
    this.state = { data: '' };
  }

  // Callback to update state when subcomponent changes.
  handleSubComponentUpdate = (newData: string) => {
    this.setState({ data: newData });
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <SomeSubComponent onUpdate={this.handleSubComponentUpdate} />
        <p>Data from SubComponent: {this.state.data}</p>
      </div>
    );
  }
}

export default HomePage;
```

```jsx
// File: src/components/SomeSubComponent.jsx
import React, { Component } from 'react';

interface SomeSubComponentProps {
  onUpdate: (data: string) => void;
}

interface SomeSubComponentState {
  input: string;
}

class SomeSubComponent extends Component<SomeSubComponentProps, SomeSubComponentState> {
  constructor(props: SomeSubComponentProps) {
    super(props);
    this.state = { input: '' };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    this.setState({ input: newValue });
    // Bubble the updated value back to the parent component.
    this.props.onUpdate(newValue);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Type something..."
        />
      </div>
    );
  }
}

export default SomeSubComponent;
```

## Additional Notes

- Ensure that the application is fully functional.
- The directory structure should respect the separation between pages (in the `pages` subfolder) and subcomponents (which could be in a `components` folder).
- The example provided demonstrates a working model of state bubbling from subcomponents to the parent page.
