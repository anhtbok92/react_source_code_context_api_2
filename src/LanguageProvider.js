import React, { Component } from 'react';
import LanguageContext from "./LanguageContext";

class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'english'
        }
    }

    onChangeLanguage =  (language) => {
        console.log(language);
        this.setState({ language })
    }

    render() {
        return (
            <LanguageContext.Provider value={{ language: this.state.language, onChangeLanguage: this.onChangeLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export default LanguageProvider;