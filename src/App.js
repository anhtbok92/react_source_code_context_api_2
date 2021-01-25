import './App.css';
import LanguageContext from "./LanguageContext";
import LanguageProvider from "./LanguageProvider";

function App() {
  return (
      <LanguageProvider>
          <div className="App">
              <LanguageContext.Consumer>
                  {(context) => (
                      <div>
                          <h2>Select a language
                              <i className="flag us" onClick={() => context.onChangeLanguage('english')}/>
                              <i className="flag vn" onClick={() => context.onChangeLanguage('vietnam')}/>
                          </h2>
                          <div className="ui form">
                              <div className="ui field">
                                  <label>{context.language === 'english' ? 'Name' : 'Tên' }</label>
                                  <input />
                              </div>
                              <button className={`ui red button`}>
                                  {context.language === 'english' ? 'Submit' : 'Gửi lên' }
                              </button>
                          </div>
                      </div>
                  )}
              </LanguageContext.Consumer>
          </div>
      </LanguageProvider>
  );
}

export default App;
