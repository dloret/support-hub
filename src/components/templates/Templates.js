import React from 'react';

import dataSource from '../../assets/data-sources/links.json';
import {FormPart} from './FormPart';
import './Templates.css';

const templates = dataSource.filter((template) => template.context === 'templates');
const languages = [...new Set(templates.map((template) => template.language))];
const categories = [...new Set(templates.map((template) => template.category))];

export default class Templates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templates,
      languages,
      categories,
      selectedLanguage: 'FR',
      selectedCategory: 'category 1',
      login: 'Customer login',
      password: 'Customer password',
      displayed: false,
    }
  }

  updateLanguage = (event) => {
    this.setState({
      selectedLanguage: event.target.value,
    })
  }

  updateCategory = (event) => {
    this.setState({
      selectedCategory: event.target.value,
    })
  }

  updateLogin = (event) => {
    this.setState({
      login: event.target.value,
    })
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  onInputFocus = (event) => {
    switch(event.target.name) {
      case 'login': return this.setState({login: ''});
      case 'password': return this.setState({password: ''});
      default: return null;
    }
  }

  copyToClipboard = (id) => {
    document.querySelector(`#message${id}`).select();
    document.execCommand('copy');
  }

  render() {
    return (
      <div className='templates'>
        <form>
          <FormPart
            title='Language'
            dataList={this.state.languages}
            onUpdateLanguage={this.updateLanguage}
            value={this.state.selectedLanguage} />
          <FormPart
            title='Category'
            dataList={this.state.categories}
            onUpdateCategory={this.updateCategory}
            value={this.state.selectedCategory} />
        </form>

        <h2>Templates list</h2>
        {
          templates
            .filter((message) => (
              message.language === this.state.selectedLanguage
              && message.category === this.state.selectedCategory))
            .map((message) => {
              return (
                <div className='message' key={message.id}>
                  <button
                    onClick={this.copyToClipboard.bind(null, message.id)}>
                      Copy
                  </button>
                  <h1 onClick={() => this.setState({displayed: !this.state.displayed})}>
                    {message.title}<small>{message.id}</small>
                  </h1>
                  <textarea readOnly
                    id={`message${message.id}`}
                    style={this.state.displayed ? null : {display: 'none'}}
                    value={message.body} />
                </div>
              );
            })
        }
      </div>
    );

  }
}
