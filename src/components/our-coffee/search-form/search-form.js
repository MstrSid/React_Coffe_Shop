import './search-form.scss';
import {Component} from "react";

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.settings = {
			label: 'Looking for',
			placeholder: 'start typing here...',
			filterLabel: 'Or filter',
			buttonsLabels: ['All', 'Brazil', 'Kenya', 'Columbia'],
		}
		this.state = {
			searchTermLocal: ''
		}
	}

	onUpdateSearchLocal = (e) => {
		const searchTermLocal = e.target.value;
		this.setState({searchTermLocal: searchTermLocal});
		this.props.onUpdateSearch(searchTermLocal);
	}

	render() {
		const {
			label,
			placeholder,
			filterLabel,
			buttonsLabels
		} = this.settings;
		const buttons = buttonsLabels.map((item, i) => {
			const active = this.props.filter === item;
			const btnClass = active ? 'search-form-filter-btn search-form-filter-btn-active' : 'search-form-filter-btn';
			return <div key={i}
						className={btnClass} onClick={() => this.props.onFilter(item)}>{item}</div>
		});

		return (
			<div className={'search-form'}>
				<span
					className={'search-form-label'}>{label}</span>
				<input type='text'
					   className={'search-form-input'}
					   placeholder={placeholder}
					   value={this.state.searchTermLocal}
					   onChange={this.onUpdateSearchLocal}/>
				<span
					className={'search-form-filter-label'}>{filterLabel}</span>
				{buttons}
			</div>

		)
	}
}

export default SearchForm;