### Example

##### NOTE: To use this component across any app, the app must be wrapped in the `wrapPickerUtilProvider` function imported from `@grail/components`;

```js
class ExampleAppComponents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({ value });
	}

	render() {
		return (
			<div>
				<DateTimeInput value={this.state.value} onChange={this.handleChange} label="Date & Time" />
			</div>
		);
	}
}

const ExampleApp = require("./picker-util-provider-hoc").wrapPickerUtilProvider(ExampleAppComponents);

<ExampleApp />;
```